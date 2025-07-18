// "use client"

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { ArrowLeft, Calendar, DollarSign, ImageIcon, MapPin, Upload, Users, X } from "lucide-react"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { apiService } from "../../services/apiService"

// const CreateEvent = () => {
//   const navigate = useNavigate()
//   const queryClient = useQueryClient()

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category_id: "",
//     start_date: "",
//     end_date: "",
//     start_time: "",
//     end_time: "",
//     venue_name: "",
//     location: "",
//     address: "",
//     capacity: "",
//     price: "",
//     is_free: false,
//     featured_image: null,
//     status: "draft",
//     tags: [],
//   })

//   const [imagePreview, setImagePreview] = useState(null)
//   const [currentTag, setCurrentTag] = useState("")
//   const [errors, setErrors] = useState({})
//   const [loading, setLoading] = useState(false)

//   const { data: categories } = useQuery({
//     queryKey: ["categories"],
//     queryFn: apiService.getCategories,
//   })

//   const createEventMutation = useMutation({
//     mutationFn: apiService.createEvent,
//     onSuccess: (data) => {
//       queryClient.invalidateQueries(["organizer-events"])
//       navigate(`/organizer/events/${data.id}`)
//     },
//     onError: (error) => {
//       setErrors(error.response?.data?.errors || {})
//     },
//   })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))

//     // Clear specific error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }))
//     }
//   }

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setFormData((prev) => ({ ...prev, featured_image: file }))

//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const removeImage = () => {
//     setFormData((prev) => ({ ...prev, featured_image: null }))
//     setImagePreview(null)
//   }

//   const addTag = () => {
//     if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         tags: [...prev.tags, currentTag.trim()],
//       }))
//       setCurrentTag("")
//     }
//   }

//   const removeTag = (tagToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setErrors({})

//     try {
//       const submitData = new FormData()

//       // Append all form data
//       Object.keys(formData).forEach((key) => {
//         if (key === "tags") {
//           submitData.append(key, JSON.stringify(formData[key]))
//         } else if (key === "featured_image" && formData[key]) {
//           submitData.append(key, formData[key])
//         } else if (formData[key] !== null && formData[key] !== "") {
//           submitData.append(key, formData[key])
//         }
//       })

//       await createEventMutation.mutateAsync(submitData)
//     } catch (error) {
//       console.error("Error creating event:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const saveDraft = () => {
//     setFormData((prev) => ({ ...prev, status: "draft" }))
//     handleSubmit()
//   }

//   const publishEvent = () => {
//     setFormData((prev) => ({ ...prev, status: "published" }))
//     handleSubmit()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back
//           </button>
//           <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
//           <p className="text-gray-600">Fill in the details to create your event</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Basic Information */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>

//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
//                   Event Title *
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.title ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="Enter event title"
//                 />
//                 {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title[0]}</p>}
//               </div>

//               <div>
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
//                   Description *
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   rows={4}
//                   value={formData.description}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.description ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="Describe your event..."
//                 />
//                 {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description[0]}</p>}
//               </div>

//               <div>
//                 <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-2">
//                   Category *
//                 </label>
//                 <select
//                   id="category_id"
//                   name="category_id"
//                   value={formData.category_id}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.category_id ? "border-red-300" : "border-gray-300"
//                   }`}
//                 >
//                   <option value="">Select a category</option>
//                   {categories?.data?.map((category) => (
//                     <option key={category.id} value={category.id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.category_id && <p className="mt-1 text-sm text-red-600">{errors.category_id[0]}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Date & Time */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <Calendar className="h-5 w-5 mr-2" />
//               Date & Time
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-2">
//                   Start Date *
//                 </label>
//                 <input
//                   type="date"
//                   id="start_date"
//                   name="start_date"
//                   value={formData.start_date}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.start_date ? "border-red-300" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.start_date && <p className="mt-1 text-sm text-red-600">{errors.start_date[0]}</p>}
//               </div>

//               <div>
//                 <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-2">
//                   Start Time *
//                 </label>
//                 <input
//                   type="time"
//                   id="start_time"
//                   name="start_time"
//                   value={formData.start_time}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.start_time ? "border-red-300" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.start_time && <p className="mt-1 text-sm text-red-600">{errors.start_time[0]}</p>}
//               </div>

//               <div>
//                 <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-2">
//                   End Date *
//                 </label>
//                 <input
//                   type="date"
//                   id="end_date"
//                   name="end_date"
//                   value={formData.end_date}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.end_date ? "border-red-300" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.end_date && <p className="mt-1 text-sm text-red-600">{errors.end_date[0]}</p>}
//               </div>

//               <div>
//                 <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-2">
//                   End Time *
//                 </label>
//                 <input
//                   type="time"
//                   id="end_time"
//                   name="end_time"
//                   value={formData.end_time}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.end_time ? "border-red-300" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.end_time && <p className="mt-1 text-sm text-red-600">{errors.end_time[0]}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <MapPin className="h-5 w-5 mr-2" />
//               Location
//             </h2>

//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label htmlFor="venue_name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Venue Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="venue_name"
//                   name="venue_name"
//                   value={formData.venue_name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.venue_name ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="e.g., Tech Conference Center"
//                 />
//                 {errors.venue_name && <p className="mt-1 text-sm text-red-600">{errors.venue_name[0]}</p>}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                       errors.location ? "border-red-300" : "border-gray-300"
//                     }`}
//                     placeholder="e.g., San Francisco, CA"
//                   />
//                   {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location[0]}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Address
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Full street address"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Capacity & Pricing */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Capacity & Pricing</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                   <Users className="h-4 w-4 mr-1" />
//                   Event Capacity *
//                 </label>
//                 <input
//                   type="number"
//                   id="capacity"
//                   name="capacity"
//                   value={formData.capacity}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.capacity ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="Maximum attendees"
//                   min="1"
//                 />
//                 {errors.capacity && <p className="mt-1 text-sm text-red-600">{errors.capacity[0]}</p>}
//               </div>

//               <div>
//                 <div className="flex items-center mb-2">
//                   <input
//                     type="checkbox"
//                     id="is_free"
//                     name="is_free"
//                     checked={formData.is_free}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                   />
//                   <label htmlFor="is_free" className="ml-2 text-sm font-medium text-gray-700">
//                     This is a free event
//                   </label>
//                 </div>

//                 {!formData.is_free && (
//                   <div>
//                     <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                       <DollarSign className="h-4 w-4 mr-1" />
//                       Ticket Price
//                     </label>
//                     <input
//                       type="number"
//                       id="price"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="0.00"
//                       min="0"
//                       step="0.01"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Featured Image */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <ImageIcon className="h-5 w-5 mr-2" />
//               Featured Image
//             </h2>

//             <div className="space-y-4">
//               {imagePreview ? (
//                 <div className="relative">
//                   <img
//                     src={imagePreview || "/placeholder.svg"}
//                     alt="Preview"
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={removeImage}
//                     className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               ) : (
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
//                   <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                   <p className="text-gray-600 mb-2">Upload event image</p>
//                   <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB</p>
//                   <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
//                     Choose File
//                     <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                   </label>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Tags</h2>

//             <div className="space-y-4">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={currentTag}
//                   onChange={(e) => setCurrentTag(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   placeholder="Add tags (e.g., JavaScript, React, AI)"
//                 />
//                 <button
//                   type="button"
//                   onClick={addTag}
//                   className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
//                 >
//                   Add
//                 </button>
//               </div>

//               {formData.tags.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {formData.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center"
//                     >
//                       {tag}
//                       <button
//                         type="button"
//                         onClick={() => removeTag(tag)}
//                         className="ml-2 text-primary-600 hover:text-primary-800"
//                       >
//                         <X className="h-3 w-3" />
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Submit Buttons */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={saveDraft}
//               disabled={loading}
//               className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 disabled:opacity-50"
//             >
//               Save Draft
//             </button>
//             <button
//               type="button"
//               onClick={publishEvent}
//               disabled={loading}
//               className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
//             >
//               {loading ? "Publishing..." : "Publish Event"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CreateEvent
"use client"

import { apiService } from "@/services/apiService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"

export default function CreateEvent() {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    tags: [],
    featured_image: null,
    status: "draft", // default status
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const createEventMutation = useMutation({
    mutationFn: async (formData) => {
      return await apiService.createEvent(formData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events"])
      toast.success("Event created successfully")
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create event")
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      const submitData = new FormData()

      Object.keys(formData).forEach((key) => {
        if (key === "tags") {
          submitData.append(key, JSON.stringify(formData[key]))
        } else if (key === "featured_image" && formData[key]) {
          submitData.append(key, formData[key])
        } else if (formData[key] !== null && formData[key] !== "") {
          submitData.append(key, formData[key])
        }
      })

      await createEventMutation.mutateAsync(submitData)
    } catch (error) {
      console.error("Error creating event:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData((prev) => ({ ...prev, featured_image: file }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Location"
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />

      <input
        type="file"
        name="featured_image"
        onChange={handleFileChange}
        className="w-full"
      />

      <div className="flex gap-4">
        <button
          type="submit"
          onClick={() => setFormData((prev) => ({ ...prev, status: "draft" }))}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          Save Draft
        </button>

        <button
          type="submit"
          onClick={() => setFormData((prev) => ({ ...prev, status: "published" }))}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Publishing..." : "Publish Event"}
        </button>
      </div>
    </form>
  )
}
