// // "use client"

// // import { useState, useEffect } from "react"
// // import { useParams, useNavigate } from "react-router-dom"
// // import { ArrowLeft, Upload, X, Plus, Calendar, MapPin, DollarSign, Users, Tag } from "lucide-react"

// // const EventEdit = () => {
// //   const { id } = useParams()
// //   const navigate = useNavigate()
// //   const [loading, setLoading] = useState(false)
// //   const [imagePreview, setImagePreview] = useState(null)
// //   const [tags, setTags] = useState([])
// //   const [newTag, setNewTag] = useState("")

// //   // Mock event data - in real app, fetch from API
// //   const [formData, setFormData] = useState({
// //     title: "React Advanced Workshop",
// //     description: "Deep dive into advanced React concepts including hooks, context, and performance optimization.",
// //     category_id: "1",
// //     start_date: "2024-01-15",
// //     start_time: "10:00",
// //     end_date: "2024-01-15",
// //     end_time: "16:00",
// //     location: "San Francisco, CA",
// //     address: "123 Tech Street, San Francisco, CA 94105",
// //     capacity: 50,
// //     price: 99,
// //     is_free: false,
// //     status: "published",
// //     featured_image: null,
// //   })

// //   const categories = [
// //     { id: "1", name: "Web Development" },
// //     { id: "2", name: "Mobile Development" },
// //     { id: "3", name: "Data Science" },
// //     { id: "4", name: "AI/ML" },
// //     { id: "5", name: "DevOps" },
// //   ]

// //   useEffect(() => {
// //     // Mock initial tags
// //     setTags(["React", "JavaScript", "Frontend", "Workshop"])
// //     setImagePreview("/placeholder.svg?height=200&width=400")
// //   }, [])

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }))
// //   }

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result)
// //         setFormData((prev) => ({ ...prev, featured_image: file }))
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   const removeImage = () => {
// //     setImagePreview(null)
// //     setFormData((prev) => ({ ...prev, featured_image: null }))
// //   }

// //   const addTag = () => {
// //     if (newTag.trim() && !tags.includes(newTag.trim())) {
// //       setTags((prev) => [...prev, newTag.trim()])
// //       setNewTag("")
// //     }
// //   }

// //   const removeTag = (tagToRemove) => {
// //     setTags((prev) => prev.filter((tag) => tag !== tagToRemove))
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setLoading(true)

// //     try {
// //       // Mock API call
// //       await new Promise((resolve) => setTimeout(resolve, 1000))

// //       console.log("Event updated:", { ...formData, tags })
// //       navigate("/organizer/events")
// //     } catch (error) {
// //       console.error("Error updating event:", error)
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const handleSaveDraft = async () => {
// //     setLoading(true)
// //     try {
// //       // Mock API call for saving draft
// //       await new Promise((resolve) => setTimeout(resolve, 500))

// //       setFormData((prev) => ({ ...prev, status: "draft" }))
// //       console.log("Event saved as draft")
// //     } catch (error) {
// //       console.error("Error saving draft:", error)
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <button
// //             onClick={() => navigate("/organizer/events")}
// //             className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
// //           >
// //             <ArrowLeft className="h-4 w-4 mr-2" />
// //             Back to Events
// //           </button>
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
// //               <p className="text-gray-600">Update your event details and settings</p>
// //             </div>
// //             <div className="flex space-x-3">
// //               <button
// //                 onClick={handleSaveDraft}
// //                 disabled={loading}
// //                 className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
// //               >
// //                 Save Draft
// //               </button>
// //               <button
// //                 onClick={handleSubmit}
// //                 disabled={loading}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
// //               >
// //                 {loading ? "Updating..." : "Update Event"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-8">
// //           {/* Basic Information */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
// //               <Tag className="h-5 w-5 mr-2" />
// //               Basic Information
// //             </h2>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Event Title *</label>
// //                 <input
// //                   type="text"
// //                   name="title"
// //                   value={formData.title}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
// //                 <textarea
// //                   name="description"
// //                   value={formData.description}
// //                   onChange={handleInputChange}
// //                   rows={4}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
// //                 <select
// //                   name="category_id"
// //                   value={formData.category_id}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 >
// //                   <option value="">Select a category</option>
// //                   {categories.map((category) => (
// //                     <option key={category.id} value={category.id}>
// //                       {category.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
// //                 <select
// //                   name="status"
// //                   value={formData.status}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 >
// //                   <option value="draft">Draft</option>
// //                   <option value="published">Published</option>
// //                   <option value="cancelled">Cancelled</option>
// //                 </select>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Date & Time */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
// //               <Calendar className="h-5 w-5 mr-2" />
// //               Date & Time
// //             </h2>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={formData.start_date}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Start Time *</label>
// //                 <input
// //                   type="time"
// //                   name="start_time"
// //                   value={formData.start_time}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={formData.end_date}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">End Time *</label>
// //                 <input
// //                   type="time"
// //                   name="end_time"
// //                   value={formData.end_time}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Location */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
// //               <MapPin className="h-5 w-5 mr-2" />
// //               Location
// //             </h2>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">City/Location *</label>
// //                 <input
// //                   type="text"
// //                   name="location"
// //                   value={formData.location}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
// //                 <input
// //                   type="text"
// //                   name="address"
// //                   value={formData.address}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Pricing & Capacity */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
// //               <DollarSign className="h-5 w-5 mr-2" />
// //               Pricing & Capacity
// //             </h2>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Capacity *</label>
// //                 <div className="relative">
// //                   <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
// //                   <input
// //                     type="number"
// //                     name="capacity"
// //                     value={formData.capacity}
// //                     onChange={handleInputChange}
// //                     className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                     min="1"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <div className="flex items-center mb-4">
// //                   <input
// //                     type="checkbox"
// //                     name="is_free"
// //                     checked={formData.is_free}
// //                     onChange={handleInputChange}
// //                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                   />
// //                   <label className="ml-2 text-sm font-medium text-gray-700">This is a free event</label>
// //                 </div>

// //                 {!formData.is_free && (
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
// //                     <input
// //                       type="number"
// //                       name="price"
// //                       value={formData.price}
// //                       onChange={handleInputChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                       min="0"
// //                       step="0.01"
// //                     />
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Featured Image */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6">Featured Image</h2>

// //             <div className="space-y-4">
// //               {imagePreview ? (
// //                 <div className="relative">
// //                   <img
// //                     src={imagePreview || "/placeholder.svg"}
// //                     alt="Event preview"
// //                     className="w-full h-48 object-cover rounded-lg"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={removeImage}
// //                     className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
// //                   >
// //                     <X className="h-4 w-4" />
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// //                   <Upload className="mx-auto h-12 w-12 text-gray-400" />
// //                   <div className="mt-4">
// //                     <label className="cursor-pointer">
// //                       <span className="mt-2 block text-sm font-medium text-gray-900">Upload an image</span>
// //                       <input type="file" className="sr-only" accept="image/*" onChange={handleImageUpload} />
// //                     </label>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Tags */}
// //           <div className="bg-white rounded-lg shadow-sm p-6">
// //             <h2 className="text-lg font-semibold text-gray-900 mb-6">Tags</h2>

// //             <div className="space-y-4">
// //               <div className="flex flex-wrap gap-2">
// //                 {tags.map((tag, index) => (
// //                   <span
// //                     key={index}
// //                     className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
// //                   >
// //                     {tag}
// //                     <button
// //                       type="button"
// //                       onClick={() => removeTag(tag)}
// //                       className="ml-2 text-blue-600 hover:text-blue-800"
// //                     >
// //                       <X className="h-3 w-3" />
// //                     </button>
// //                   </span>
// //                 ))}
// //               </div>

// //               <div className="flex space-x-2">
// //                 <input
// //                   type="text"
// //                   value={newTag}
// //                   onChange={(e) => setNewTag(e.target.value)}
// //                   onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
// //                   placeholder="Add a tag"
// //                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={addTag}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //                 >
// //                   <Plus className="h-4 w-4" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Form Actions */}
// //           <div className="flex justify-end space-x-4">
// //             <button
// //               type="button"
// //               onClick={() => navigate("/organizer/events")}
// //               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="button"
// //               onClick={handleSaveDraft}
// //               disabled={loading}
// //               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
// //             >
// //               Save Draft
// //             </button>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
// //             >
// //               {loading ? "Updating..." : "Update Event"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // export default EventEdit
// "use client"

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { ArrowLeft, Calendar, ImageIcon, MapPin, Upload, X } from "lucide-react"
// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import MapPicker from "../../components/Organizer/MapPicker"
// import OrganizerTicketForm from "../../components/Organizer/OrganizerTicketForm"
// import { useAuth } from "../../contexts/AuthContext"
// import { eventService } from "../../services/eventService"

// const EventEdit = () => {
//   const { id } = useParams()
//   const { user } = useAuth()
//   const navigate = useNavigate()
//   const queryClient = useQueryClient()
  
//   const [ticketData, setTicketData] = useState([])
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
//     latitude: "",
//     longitude: "",
//     is_free: false,
//     featured_image: null,
//     agenda: [],
//     status: "published",
//     tags: [],
//     organizer_id: user?.id || null,
//     is_offline: true,
//     event_type: "offline",
//   })
  
//   const [agenda, setAgenda] = useState([])
//   const [currentAgendaItem, setCurrentAgendaItem] = useState({ time: "", description: "" })
//   const [imagePreview, setImagePreview] = useState(null)
//   const [currentTag, setCurrentTag] = useState("")
//   const [errors, setErrors] = useState({})
//   const [loading, setLoading] = useState(false)
//   const [speakers, setSpeakers] = useState([{ name: "", profession: "" }])
//   const [payloadLog, setPayloadLog] = useState("")
//   const [existingImage, setExistingImage] = useState(null)

//   // Fetch categories
//   const { data: categories, isLoading: categoriesLoading } = useQuery({
//     queryKey: ["categories"],
//     queryFn: eventService.getCategories,
//   })

//   // Fetch event details
//   const { data: eventData, isLoading: eventLoading } = useQuery({
//     queryKey: ["event", id],
//     queryFn: () => eventService.getOrganizerEventDetails(id),
//     enabled: !!id,
//   })

//   // Auto-fill form when event data is loaded
//   useEffect(() => {
//     if (eventData?.data) {
//       const event = eventData.data
      
//       // Format dates
//       const formatDate = (dateString) => {
//         if (!dateString) return ""
//         const date = new Date(dateString)
//         return date.toISOString().split('T')[0]
//       }

//       // Format time
//       const formatTime = (dateString) => {
//         if (!dateString) return ""
//         const date = new Date(dateString)
//         return date.toTimeString().slice(0, 5)
//       }

//       setFormData({
//         title: event.title || "",
//         description: event.description || "",
//         category_id: event.category_id?._id || event.category_id || "",
//         start_date: formatDate(event.start_date) || "",
//         end_date: formatDate(event.end_date) || "",
//         start_time: formatTime(event.start_date) || "",
//         end_time: formatTime(event.end_date) || "",
//         venue_name: event.venue_name || "",
//         location: event.location || "",
//         address: event.address || "",
//         capacity: event.capacity?.toString() || "",
//         price: event.price?.toString() || "",
//         latitude: event.latitude?.toString() || "",
//         longitude: event.longitude?.toString() || "",
//         is_free: event.is_free || false,
//         featured_image: null, // Keep as null, we'll use existingImage for preview
//         agenda: event.agenda || [],
//         status: event.status || "published",
//         tags: event.tags || [],
//         organizer_id: event.organizer_id || user?.id || null,
//         is_offline: event.is_offline !== false,
//         event_type: event.event_type || "offline",
//       })

//       // Set agenda if exists
//       if (event.agenda && Array.isArray(event.agenda)) {
//         setAgenda(event.agenda)
//       }

//       // Set speakers if exists
//       if (event.speakers && Array.isArray(event.speakers)) {
//         setSpeakers(event.speakers)
//       }

//       // Set ticket data if exists
//       if (event.tickets && Array.isArray(event.tickets)) {
//         const formattedTickets = event.tickets.map(ticket => ({
//           name: ticket.name || "",
//           price: ticket.price?.toString() || "0",
//           capacity: ticket.capacity?.toString() || "",
//           description: ticket.description || "",
//           sale_start_date: formatDate(ticket.sale_start_date) || "",
//           sale_end_date: formatDate(ticket.sale_end_date) || "",
//           is_unlimited: ticket.is_unlimited || false,
//           min_per_order: ticket.min_per_order?.toString() || "",
//           max_per_order: ticket.max_per_order?.toString() || "",
//           is_free: ticket.price === 0,
//         }))
//         setTicketData(formattedTickets)
//       }

//       // Set existing image for preview
//       if (event.featured_image) {
//         setExistingImage(event.featured_image)
//         setImagePreview(event.featured_image)
//       }
//     }
//   }, [eventData, user, id])

//   // Add update function to eventService
//   const updateEventMutation = useMutation({
//     mutationFn: (data) => eventService.updateEvent(id, data),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries(["event", id])
//       queryClient.invalidateQueries(["organizer-events"])
//       navigate(`/organizer/events/${id}`)
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

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }))
//     }
//   }

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
//       const maxSize = 10 * 1024 * 1024 // 10MB
      
//       if (!validTypes.includes(file.type)) {
//         setErrors({ featured_image: ["Please select a valid image format (JPEG, PNG, GIF, WEBP)"] })
//         return
//       }
      
//       if (file.size > maxSize) {
//         setErrors({ featured_image: ["Image size must be less than 10MB"] })
//         return
//       }
      
//       setFormData((prev) => ({ ...prev, featured_image: file }))
//       setExistingImage(null) // Clear existing image when new one is selected
      
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const removeImage = () => {
//     setFormData((prev) => ({ ...prev, featured_image: null }))
//     setExistingImage(null)
//     setImagePreview(null)
//   }

//   const handleAgendaChange = (e) => {
//     const { name, value } = e.target
//     setCurrentAgendaItem((prev) => ({ ...prev, [name]: value }))
//   }

//   const addAgendaItem = () => {
//     if (currentAgendaItem.time.trim() && currentAgendaItem.description.trim()) {
//       setAgenda((prev) => [...prev, currentAgendaItem])
//       setCurrentAgendaItem({ time: "", description: "" })
//     }
//   }

//   const removeAgendaItem = (index) => {
//     setAgenda((prev) => prev.filter((_, i) => i !== index))
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

//   const validateForm = () => {
//     const newErrors = {}
    
//     if (!formData.title.trim()) newErrors.title = ["Title is required"]
//     if (!formData.description.trim()) newErrors.description = ["Description is required"]
//     if (!formData.category_id) newErrors.category_id = ["Category is required"]
//     if (!formData.start_date) newErrors.start_date = ["Start date is required"]
//     if (!formData.start_time) newErrors.start_time = ["Start time is required"]
//     if (!formData.end_date) newErrors.end_date = ["End date is required"]
//     if (!formData.end_time) newErrors.end_time = ["End time is required"]
    
//     if (formData.event_type === "offline") {
//       if (!formData.venue_name) {
//         newErrors.venue_name = ["Venue name is required"]
//       }
//       if (!formData.latitude || !formData.longitude) {
//         newErrors.location = ["Please select a location on the map"]
//       }
//     }
    
//     // Image is only required for new events, not for updates
//     // if (!formData.featured_image && !existingImage) newErrors.featured_image = ["Featured image is required"]
    
//     if (ticketData.length === 0 && !formData.is_free) {
//       newErrors.tickets = ["At least one ticket type is required for paid events"]
//     }
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);
//     setErrors({});

//     try {
//       const submitData = new FormData();

//       // Required strings
//       submitData.append("title", formData.title);
//       submitData.append("description", formData.description);
//       submitData.append("category_id", formData.category_id);
//       submitData.append("start_date", formData.start_date);
//       submitData.append("end_date", formData.end_date);
//       submitData.append("start_time", formData.start_time);
//       submitData.append("end_time", formData.end_time);
//       submitData.append("venue_name", formData.venue_name || "");
//       submitData.append("location", formData.location || "");
//       submitData.append("event_type", formData.event_type || "offline");
//       submitData.append("status", formData.status || "published");
//       submitData.append("latitude", formData.latitude || "");
//       submitData.append("longitude", formData.longitude || "");

//       // Numeric fields
//       submitData.append("organizer_id", formData.organizer_id || "");
//       submitData.append("capacity", formData.capacity || "");
//       submitData.append("price", formData.price || 0);

//       // Boolean for free events
//       submitData.append("is_free", formData.is_free ? 1 : 0);
//       submitData.append("is_offline", formData.event_type === "offline" ? 1 : 0);

//       // Featured image - only append if new image is selected
//       if (formData.featured_image) {
//         submitData.append("featured_image", formData.featured_image);
//       } else if (existingImage) {
//         // If keeping existing image, send the URL or indicator
//         submitData.append("existing_image", existingImage);
//       }

//       // Nested arrays as JSON strings
//       submitData.append("agenda", JSON.stringify(agenda || []));
//       submitData.append("speakers", JSON.stringify(speakers || []));
//       submitData.append("tags", JSON.stringify(formData.tags || []));
//       submitData.append("tickets", JSON.stringify(ticketData || []));

//       // Debug log
//       let logContent = "Update Event Payload:\n\n";
//       for (let pair of submitData.entries()) {
//         logContent += `${pair[0]}: ${typeof pair[1] === "object" ? JSON.stringify(pair[1]) : pair[1]}\n`;
//       }
//       setPayloadLog(logContent);
//       console.log(logContent);

//       // Call API to update event
//       await updateEventMutation.mutateAsync(submitData);

//     } catch (error) {
//       console.error("Error updating event:", error);
//       setErrors(error.response?.data?.errors || {});
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (eventLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading event details...</p>
//         </div>
//       </div>
//     )
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
//           <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
//           <p className="text-gray-600">Update your event details</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Event ID Info */}
//           <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//             <p className="text-blue-800">
//               <strong>Event ID:</strong> {id}
//               {eventData?.data?.status && (
//                 <span className={`ml-4 px-2 py-1 text-xs rounded-full ${
//                   eventData.data.status === 'published' 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   Status: {eventData.data.status}
//                 </span>
//               )}
//             </p>
//           </div>

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
//                   disabled={categoriesLoading}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                     errors.category_id ? "border-red-300" : "border-gray-300"
//                   } ${categoriesLoading ? 'bg-gray-100' : ''}`}
//                 >
//                   <option value="">Select a category</option>
//                   {categories?.map((category) => (
//                     <option key={category._id} value={category._id}>
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

//             {/* Online / Offline Selection */}
//             <div className="mb-6">
//               <h3 className="text-md font-medium text-gray-900 mb-4">Event Type</h3>
//               <div className="flex items-center gap-6">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="event_type"
//                     value="online"
//                     checked={formData.event_type === "online"}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         event_type: e.target.value,
//                         location: "",
//                         latitude: "",
//                         longitude: "",
//                         venue_name: "",
//                       }))
//                     }
//                     className="mr-2"
//                   />
//                   Online
//                 </label>

//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="event_type"
//                     value="offline"
//                     checked={formData.event_type === "offline"}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         event_type: e.target.value,
//                       }))
//                     }
//                     className="mr-2"
//                   />
//                   Offline
//                 </label>
//               </div>
//             </div>

//             {/* Location with Map — only show if offline */}
//             {formData.event_type === "offline" && (
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select Location on Map *
//                   </label>

//                   <MapPicker
//                     initialLocation={
//                       formData.latitude && formData.longitude
//                         ? { lat: parseFloat(formData.latitude), lng: parseFloat(formData.longitude) }
//                         : null
//                     }
//                     onSelect={({ lat, lng, address }) => {
//                       setFormData((prev) => ({
//                         ...prev,
//                         latitude: lat,
//                         longitude: lng,
//                         location: address,
//                       }))
//                     }}
//                   />

//                   {formData.location && (
//                     <p className="mt-2 text-sm text-gray-600">
//                       📍 Selected: <strong>{formData.location}</strong>
//                     </p>
//                   )}
//                   {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location[0]}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="venue_name" className="block text-md font-medium text-gray-700 mb-2">
//                     Venue Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="venue_name"
//                     name="venue_name"
//                     value={formData.venue_name}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
//                       errors.venue_name ? "border-red-300" : "border-gray-300"
//                     }`}
//                     placeholder="e.g., Tech Conference Center"
//                   />
//                   {errors.venue_name && <p className="mt-1 text-sm text-red-600">{errors.venue_name[0]}</p>}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Tickets */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Tickets</h2>
//             <OrganizerTicketForm
//               onChange={(updatedTickets) => {
//                 setTicketData(updatedTickets)
//               }}
//               initialTickets={ticketData}
//             />
//             {errors.tickets && <p className="mt-1 text-sm text-red-600">{errors.tickets[0]}</p>}
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
//                   <div className="mt-2 text-sm text-gray-500">
//                     {existingImage ? "Current image" : "New image selected"}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
//                   {existingImage ? (
//                     <>
//                       <img
//                         src={existingImage || "/placeholder.svg"}
//                         alt="Current"
//                         className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
//                       />
//                       <p className="text-gray-600 mb-2">Current event image</p>
//                       <div className="space-x-4">
//                         <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
//                           Change Image
//                           <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                         </label>
//                         <button
//                           type="button"
//                           onClick={removeImage}
//                           className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
//                         >
//                           Remove Image
//                         </button>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                       <p className="text-gray-600 mb-2">Upload event image</p>
//                       <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB</p>
//                       <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
//                         Choose File
//                         <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                       </label>
//                     </>
//                   )}
//                 </div>
//               )}
//               {errors.featured_image && <p className="mt-1 text-sm text-red-600">{errors.featured_image[0]}</p>}
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
//                   onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
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

//           {/* Event Agenda Section */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Event Agenda</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="time"
//                 name="time"
//                 value={currentAgendaItem.time}
//                 onChange={handleAgendaChange}
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={currentAgendaItem.description}
//                 onChange={handleAgendaChange}
//                 placeholder="Description (e.g., Registration & Welcome Coffee)"
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               />
//             </div>

//             <button
//               type="button"
//               onClick={addAgendaItem}
//               className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
//             >
//               Add Agenda Item
//             </button>

//             {/* List of Added Agenda Items */}
//             {agenda.length > 0 && (
//               <ul className="mt-4 space-y-2">
//                 {agenda.map((item, index) => (
//                   <li key={index} className="flex justify-between items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-lg">
//                     <span>
//                       <strong>{item.time}</strong>: {item.description}
//                     </span>
//                     <button
//                       type="button"
//                       onClick={() => removeAgendaItem(index)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Speakers Section */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">Speakers</h2>

//             <div className="space-y-4">
//               {speakers.map((speaker, index) => (
//                 <div key={index} className="flex flex-col md:flex-row gap-4 mb-4">
//                   <input
//                     type="text"
//                     value={speaker.name}
//                     onChange={(e) => {
//                       const newSpeakers = [...speakers]
//                       newSpeakers[index].name = e.target.value
//                       setSpeakers(newSpeakers)
//                     }}
//                     placeholder="Speaker Name"
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                   <input
//                     type="text"
//                     value={speaker.profession}
//                     onChange={(e) => {
//                       const newSpeakers = [...speakers]
//                       newSpeakers[index].profession = e.target.value
//                       setSpeakers(newSpeakers)
//                     }}
//                     placeholder="Profession / Title"
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const newSpeakers = speakers.filter((_, i) => i !== index)
//                       setSpeakers(newSpeakers)
//                     }}
//                     className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => setSpeakers([...speakers, { name: "", profession: "" }])}
//                 className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
//               >
//                 + Add Speaker
//               </button>
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
//               type="submit"
//               disabled={loading}
//               className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
//             >
//               {loading ? "Updating Event..." : "Update Event"}
//             </button>
//           </div>
//         </form>

//         {/* Payload Log Section */}
//         {payloadLog && (
//           <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Payload Log</h2>
//             <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
//               {payloadLog}
//             </pre>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default EventEdit
"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ArrowLeft, Calendar, ImageIcon, MapPin, Upload, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MapPicker from "../../components/Organizer/MapPicker"
import OrganizerTicketForm from "../../components/Organizer/OrganizerTicketForm"
import { useAuth } from "../../contexts/AuthContext"
import { eventService } from "../../services/eventService"

const EventEdit = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  
  const [ticketData, setTicketData] = useState([])
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
    latitude: "",
    longitude: "",
    is_free: false,
    featured_image: null,
    agenda: [],
    status: "published",
    tags: [],
    organizer_id: user?.id || null,
    is_offline: true,
    event_type: "offline",
  })
  
  const [agenda, setAgenda] = useState([])
  const [currentAgendaItem, setCurrentAgendaItem] = useState({ time: "", description: "" })
  const [imagePreview, setImagePreview] = useState(null)
  const [currentTag, setCurrentTag] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [speakers, setSpeakers] = useState([{ name: "", profession: "" }])
  const [payloadLog, setPayloadLog] = useState("")
  const [existingImage, setExistingImage] = useState(null)

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: eventService.getCategories,
  })

  // Fetch event details
  const { data: eventData, isLoading: eventLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: () => eventService.getOrganizerEventDetails(id),
    enabled: !!id,
  })

  // Auto-fill form when event data is loaded
  useEffect(() => {
    if (eventData?.data) {
      const event = eventData.data
      
      // Format dates
      const formatDate = (dateString) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toISOString().split('T')[0]
      }

      // Format time
      const formatTime = (dateString) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toTimeString().slice(0, 5)
      }

      setFormData({
        title: event.title || "",
        description: event.description || "",
        category_id: event.category_id?._id || event.category_id || "",
        start_date: formatDate(event.start_date) || "",
        end_date: formatDate(event.end_date) || "",
        start_time: formatTime(event.start_date) || "",
        end_time: formatTime(event.end_date) || "",
        venue_name: event.venue_name || "",
        location: event.location || "",
        address: event.address || "",
        capacity: event.capacity?.toString() || "",
        price: event.price?.toString() || "",
        latitude: event.latitude?.toString() || "",
        longitude: event.longitude?.toString() || "",
        is_free: event.is_free || false,
        featured_image: null, // Keep as null, we'll use existingImage for preview
        agenda: event.agenda || [],
        status: event.status || "published",
        tags: event.tags || [],
        organizer_id: event.organizer_id || user?.id || null,
        is_offline: event.is_offline !== false,
        event_type: event.event_type || "offline",
      })

      // Set agenda if exists
      if (event.agenda && Array.isArray(event.agenda)) {
        setAgenda(event.agenda)
      }

      // Set speakers if exists
      if (event.speakers && Array.isArray(event.speakers)) {
        setSpeakers(event.speakers)
      } else {
        setSpeakers([{ name: "", profession: "" }])
      }

      // Set existing image for preview
      if (event.featured_image) {
        setExistingImage(event.featured_image)
        setImagePreview(event.featured_image)
      }
    }
  }, [eventData, user, id])

  // Initialize ticket data when event data is loaded
  useEffect(() => {
    if (eventData?.data?.tickets) {
      const formatDate = (dateString) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toISOString().split('T')[0]
      }

      const formattedTickets = eventData.data.tickets.map(ticket => ({
        name: ticket.name || "",
        price: ticket.price?.toString() || "0",
        capacity: ticket.capacity?.toString() || "",
        description: ticket.description || "",
        sale_start_date: formatDate(ticket.sale_start_date) || "",
        sale_end_date: formatDate(ticket.sale_end_date) || "",
        is_unlimited: ticket.is_unlimited || false,
        min_per_order: ticket.min_per_order?.toString() || "",
        max_per_order: ticket.max_per_order?.toString() || "",
        is_free: ticket.price === 0,
      }))
      
      // Only set ticket data if we haven't already set it
      if (ticketData.length === 0) {
        setTicketData(formattedTickets)
      }
    }
  }, [eventData?.data?.tickets])

  // Add update function to eventService
  const updateEventMutation = useMutation({
    mutationFn: (data) => eventService.updateEvent(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["event", id])
      queryClient.invalidateQueries(["organizer-events"])
      navigate(`/organizer/events/${id}`)
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
      const maxSize = 10 * 1024 * 1024 // 10MB
      
      if (!validTypes.includes(file.type)) {
        setErrors({ featured_image: ["Please select a valid image format (JPEG, PNG, GIF, WEBP)"] })
        return
      }
      
      if (file.size > maxSize) {
        setErrors({ featured_image: ["Image size must be less than 10MB"] })
        return
      }
      
      setFormData((prev) => ({ ...prev, featured_image: file }))
      setExistingImage(null) // Clear existing image when new one is selected
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, featured_image: null }))
    setExistingImage(null)
    setImagePreview(null)
  }

  const handleAgendaChange = (e) => {
    const { name, value } = e.target
    setCurrentAgendaItem((prev) => ({ ...prev, [name]: value }))
  }

  const addAgendaItem = () => {
    if (currentAgendaItem.time.trim() && currentAgendaItem.description.trim()) {
      setAgenda((prev) => [...prev, currentAgendaItem])
      setCurrentAgendaItem({ time: "", description: "" })
    }
  }

  const removeAgendaItem = (index) => {
    setAgenda((prev) => prev.filter((_, i) => i !== index))
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

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) newErrors.title = ["Title is required"]
    if (!formData.description.trim()) newErrors.description = ["Description is required"]
    if (!formData.category_id) newErrors.category_id = ["Category is required"]
    if (!formData.start_date) newErrors.start_date = ["Start date is required"]
    if (!formData.start_time) newErrors.start_time = ["Start time is required"]
    if (!formData.end_date) newErrors.end_date = ["End date is required"]
    if (!formData.end_time) newErrors.end_time = ["End time is required"]
    
    if (formData.event_type === "offline") {
      if (!formData.venue_name) {
        newErrors.venue_name = ["Venue name is required"]
      }
      if (!formData.latitude || !formData.longitude) {
        newErrors.location = ["Please select a location on the map"]
      }
    }
    
    // Image is only required for new events, not for updates
    // if (!formData.featured_image && !existingImage) newErrors.featured_image = ["Featured image is required"]
    
    if (ticketData.length === 0 && !formData.is_free) {
      newErrors.tickets = ["At least one ticket type is required for paid events"]
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const submitData = new FormData();

      // Required strings
      submitData.append("title", formData.title);
      submitData.append("description", formData.description);
      submitData.append("category_id", formData.category_id);
      submitData.append("start_date", formData.start_date);
      submitData.append("end_date", formData.end_date);
      submitData.append("start_time", formData.start_time);
      submitData.append("end_time", formData.end_time);
      submitData.append("venue_name", formData.venue_name || "");
      submitData.append("location", formData.location || "");
      submitData.append("event_type", formData.event_type || "offline");
      submitData.append("status", formData.status || "published");
      submitData.append("latitude", formData.latitude || "");
      submitData.append("longitude", formData.longitude || "");

      // Numeric fields
      submitData.append("organizer_id", formData.organizer_id || "");
      submitData.append("capacity", formData.capacity || "");
      submitData.append("price", formData.price || 0);

      // Boolean for free events
      submitData.append("is_free", formData.is_free ? 1 : 0);
      submitData.append("is_offline", formData.event_type === "offline" ? 1 : 0);

      // Featured image - only append if new image is selected
      if (formData.featured_image) {
        submitData.append("featured_image", formData.featured_image);
      } else if (existingImage) {
        // If keeping existing image, send the URL or indicator
        submitData.append("existing_image", existingImage);
      }

      // Nested arrays as JSON strings
      submitData.append("agenda", JSON.stringify(agenda || []));
      submitData.append("speakers", JSON.stringify(speakers || []));
      submitData.append("tags", JSON.stringify(formData.tags || []));
      submitData.append("tickets", JSON.stringify(ticketData || []));

      // Debug log
      let logContent = "Update Event Payload:\n\n";
      for (let pair of submitData.entries()) {
        logContent += `${pair[0]}: ${typeof pair[1] === "object" ? JSON.stringify(pair[1]) : pair[1]}\n`;
      }
      setPayloadLog(logContent);
      console.log(logContent);

      // Call API to update event
      await updateEventMutation.mutateAsync(submitData);

    } catch (error) {
      console.error("Error updating event:", error);
      setErrors(error.response?.data?.errors || {});
    } finally {
      setLoading(false);
    }
  };

  if (eventLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    )
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
          <p className="text-gray-600">Update your event details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Event ID Info */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800">
              <strong>Event ID:</strong> {id}
              {eventData?.data?.status && (
                <span className={`ml-4 px-2 py-1 text-xs rounded-full ${
                  eventData.data.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  Status: {eventData.data.status}
                </span>
              )}
            </p>
          </div>

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
                  disabled={categoriesLoading}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.category_id ? "border-red-300" : "border-gray-300"
                  } ${categoriesLoading ? 'bg-gray-100' : ''}`}
                >
                  <option value="">Select a category</option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
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

            {/* Online / Offline Selection */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-900 mb-4">Event Type</h3>
              <div className="flex items-center gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="event_type"
                    value="online"
                    checked={formData.event_type === "online"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        event_type: e.target.value,
                        location: "",
                        latitude: "",
                        longitude: "",
                        venue_name: "",
                      }))
                    }
                    className="mr-2"
                  />
                  Online
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="event_type"
                    value="offline"
                    checked={formData.event_type === "offline"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        event_type: e.target.value,
                      }))
                    }
                    className="mr-2"
                  />
                  Offline
                </label>
              </div>
            </div>

            {/* Location with Map — only show if offline */}
            {formData.event_type === "offline" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Location on Map *
                  </label>

                  <MapPicker
                    initialLocation={
                      formData.latitude && formData.longitude
                        ? { lat: parseFloat(formData.latitude), lng: parseFloat(formData.longitude) }
                        : null
                    }
                    onSelect={({ lat, lng, address }) => {
                      setFormData((prev) => ({
                        ...prev,
                        latitude: lat,
                        longitude: lng,
                        location: address,
                      }))
                    }}
                  />

                  {formData.location && (
                    <p className="mt-2 text-sm text-gray-600">
                      📍 Selected: <strong>{formData.location}</strong>
                    </p>
                  )}
                  {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location[0]}</p>}
                </div>

                <div>
                  <label htmlFor="venue_name" className="block text-md font-medium text-gray-700 mb-2">
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
              </div>
            )}
          </div>

          {/* Tickets */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Tickets</h2>
            <OrganizerTicketForm
              onChange={(updatedTickets) => {
                setTicketData(updatedTickets)
              }}
              initialTickets={ticketData}
            />
            {errors.tickets && <p className="mt-1 text-sm text-red-600">{errors.tickets[0]}</p>}
          </div>

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
                  <div className="mt-2 text-sm text-gray-500">
                    {existingImage ? "Current image" : "New image selected"}
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {existingImage ? (
                    <>
                      <img
                        src={existingImage || "/placeholder.svg"}
                        alt="Current"
                        className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                      />
                      <p className="text-gray-600 mb-2">Current event image</p>
                      <div className="space-x-4">
                        <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
                          Change Image
                          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
                        >
                          Remove Image
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload event image</p>
                      <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB</p>
                      <label className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 cursor-pointer">
                        Choose File
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                      </label>
                    </>
                  )}
                </div>
              )}
              {errors.featured_image && <p className="mt-1 text-sm text-red-600">{errors.featured_image[0]}</p>}
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

          {/* Speakers Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Speakers</h2>

            <div className="space-y-4">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 mb-4">
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
                  <button
                    type="button"
                    onClick={() => {
                      const newSpeakers = speakers.filter((_, i) => i !== index)
                      setSpeakers(newSpeakers)
                    }}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
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
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              {loading ? "Updating Event..." : "Update Event"}
            </button>
          </div>
        </form>

        {/* Payload Log Section */}
        {payloadLog && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payload Log</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {payloadLog}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventEdit