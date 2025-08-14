"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ArrowLeft, Calendar, ImageIcon, MapPin, Upload, X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import OrganizerTicketForm from "../../components/Organizer/OrganizerTicketForm"
import { useAuth } from "../../contexts/AuthContext"
import { apiService } from "../../services/apiService"

const CreateEvent = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [ticketData, setTicketData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    venue_name: "",
    location: "",
    address: "",
    capacity: "",
    price: "",
    is_free: false,
    featured_image: null,
    agenda: [],
    status: "draft",
    tags: [], 
    organizer_id: user?.id || null, // Automatically set organizer ID from context

  })
const [agenda, setAgenda] = useState([]);
const [currentAgendaItem, setCurrentAgendaItem] = useState({ time: "", description: "" });
const handleAgendaChange = (e) => {
  const { name, value } = e.target;
  setCurrentAgendaItem((prev) => ({ ...prev, [name]: value }));
};
const addAgendaItem = () => {
  if (currentAgendaItem.time.trim() && currentAgendaItem.description.trim()) {
    setAgenda((prev) => [...prev, currentAgendaItem]);
    setCurrentAgendaItem({ time: "", description: "" });
  }
};
const removeAgendaItem = (index) => {
  setAgenda((prev) => prev.filter((_, i) => i !== index));
};
  const [imagePreview, setImagePreview] = useState(null)
  const [currentTag, setCurrentTag] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: apiService.getCategories,
  })

const [speakers, setSpeakers] = useState([
  { name: "", profession: "" },
]);


  const createEventMutation = useMutation({
    mutationFn: apiService.createEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["organizer-events"])
      navigate(`/organizer/events/${data.id}`)
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors || {})
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, featured_image: file }))

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, featured_image: null }))
    setImagePreview(null)
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

const handleSubmit = async (e) => {
  if (e?.preventDefault) e.preventDefault()

  setLoading(true)
  setErrors({})

  try {
    const submitData = new FormData()
  console.log("📝 Form Data:", formData)
    console.log("🎟️ Ticket Data:", ticketData)
    Object.keys(formData).forEach((key) => {
      if (key === "tags") {
        submitData.append(key, JSON.stringify(formData[key]))
      } else if (key === "featured_image" && formData[key]) {
        submitData.append(key, formData[key])
      } else if (formData[key] !== null && formData[key] !== "") {
        submitData.append(key, formData[key])
      }
    })
    submitData.append("agenda", JSON.stringify(agenda));
    submitData.append("speakers", JSON.stringify(speakers));
    submitData.append("organizer_id", user?.id || null); // Ensure organizer ID is included



    // 🔍 LOG THE DATA IN A READABLE FORMAT
    for (let pair of submitData.entries()) {
      console.log(`${pair[0]}:`, pair[1])
    }

    // 💡 Comment out the actual API call while testing
     await createEventMutation.mutateAsync(submitData)
  } catch (error) {
    console.error("Error preparing event data:", error)
  } finally {
    setLoading(false)
  }
}

  const saveDraft = () => {
    setFormData((prev) => ({ ...prev, status: "draft" }))
    handleSubmit()
  }

  const publishEvent = () => {
    setFormData((prev) => ({ ...prev, status: "published" }))
    handleSubmit()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
          <p className="text-gray-600">Fill in the details to create your event</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <button
  type="button"
  onClick={() => {
    setFormData({
      title: "React Mastery",
      description: "Learn React quickly",
      category_id: 1,
      start_date: "2025-08-14",
      end_date: "2025-08-14",
      start_time: "09:00",
      end_time: "15:00",
      venue_name: "Kathmandu Center",
      location: "Kathmandu",
      address: "Kathmandu Center, Kathmandu",
      is_free: false,
      agenda: [
        { time: "09:00", description: "Opening session" },
        { time: "12:00", description: "Main session" }
      ],
      speakers: [
        { name: "Ramesh Gurung", profession: "CEO React Tech" }
      ],
      tags: ["react", "javascript", "webdev"],
      organizer_id: user?.id || null,
      status: "draft",
    });
  }}
>
  Fill Form Automatically
</button>

          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.title ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter event title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title[0]}</p>}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.description ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Describe your event..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description[0]}</p>}
              </div>

              <div>
                <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
      
                <select
      id="category_id"
      name="category_id"
      value={formData.category_id}
    onChange={handleChange}
      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
    errors.category_id ? "border-red-300" : "border-gray-300"
  }`}
>
  <option value="">Select a category</option>
  {categories?.map((category) => (
    <option key={category.id} value={category.id}>
      {category.description} {/* or use category.name */}
      
    </option>
  ))}
</select>

                {errors.category_id && <p className="mt-1 text-sm text-red-600">{errors.category_id[0]}</p>}
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Date & Time
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.start_date ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.start_date && <p className="mt-1 text-sm text-red-600">{errors.start_date[0]}</p>}
              </div>

              <div>
                <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time *
                </label>
                <input
                  type="time"
                  id="start_time"
                  name="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.start_time ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.start_time && <p className="mt-1 text-sm text-red-600">{errors.start_time[0]}</p>}
              </div>

              <div>
                <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.end_date ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.end_date && <p className="mt-1 text-sm text-red-600">{errors.end_date[0]}</p>}
              </div>

              <div>
                <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-2">
                  End Time *
                </label>
                <input
                  type="time"
                  id="end_time"
                  name="end_time"
                  value={formData.end_time}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.end_time ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.end_time && <p className="mt-1 text-sm text-red-600">{errors.end_time[0]}</p>}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Location
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="venue_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Name *
                </label>
                <input
                  type="text"
                  id="venue_name"
                  name="venue_name"
                  value={formData.venue_name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.venue_name ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="e.g., Tech Conference Center"
                />
                {errors.venue_name && <p className="mt-1 text-sm text-red-600">{errors.venue_name[0]}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.location ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="e.g., San Francisco, CA"
                  />
                  {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location[0]}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Full street address"
                  />
                </div>
              </div>
            </div>
          </div>
<OrganizerTicketForm
  onChange={(updatedTickets) => {
    setTicketData(updatedTickets);
    console.log("Updated Ticket Data:", updatedTickets); // ✅ This logs the data in real time
  }}
/>


          {/* Featured Image */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <ImageIcon className="h-5 w-5 mr-2" />
              Featured Image
            </h2>

            <div className="space-y-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload event image</p>
                  <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB</p>
                  <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
                    Choose File
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Tags</h2>

            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Add tags (e.g., JavaScript, React, AI)"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Add
                </button>
              </div>

              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
{/* Event Agenda Section */}
<div className="bg-white rounded-lg shadow-sm p-6">
  <h2 className="text-lg font-semibold text-gray-900 mb-6">Event Agenda</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
   <input
  type="time"
  name="time"
  value={currentAgendaItem.time}
  onChange={handleAgendaChange}
  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
/>

    <input
      type="text"
      name="description"
      value={currentAgendaItem.description}
      onChange={handleAgendaChange}
      placeholder="Description (e.g., Registration & Welcome Coffee)"
      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    />
  </div>

  <button
    type="button"
    onClick={addAgendaItem}
    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
  >
    Add Agenda Item
  </button>

  {/* List of Added Agenda Items */}
  {agenda.length > 0 && (
    <ul className="mt-4 space-y-2">
      {agenda.map((item, index) => (
        <li key={index} className="flex justify-between items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-lg">
          <span>
            <strong>{item.time}</strong>: {item.description}
          </span>
          <button
            type="button"
            onClick={() => removeAgendaItem(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )}
</div>
<div className="space-y-4">
  <h3 className="text-lg font-semibold">Speakers</h3>

  {speakers.map((speaker, index) => (
    <div key={index} className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        value={speaker.name}
        onChange={(e) => {
          const newSpeakers = [...speakers]
          newSpeakers[index].name = e.target.value
          setSpeakers(newSpeakers)
        }}
        placeholder="Speaker Name"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />

      <input
        type="text"
        value={speaker.profession}
        onChange={(e) => {
          const newSpeakers = [...speakers]
          newSpeakers[index].profession = e.target.value
          setSpeakers(newSpeakers)
        }}
        placeholder="Profession / Title"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
  ))}

  <button
    type="button"
    onClick={() => setSpeakers([...speakers, { name: "", profession: "" }])}
    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
  >
    + Add Speaker
  </button>
</div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveDraft}
              disabled={loading}
              className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={publishEvent}
              disabled={loading}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent
