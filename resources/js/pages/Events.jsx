// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Search, CalendarDays } from "lucide-react"

// // Tech-focused dummy data for events
// const dummyEvents = [
//   {
//     id: "1",
//     title: "AI & Machine Learning Summit 2024",
//     date: "2024-12-15",
//     location: "San Francisco, CA",
//     category: "Artificial Intelligence",
//     description: "Explore the latest breakthroughs in AI, deep learning, and neural networks with industry leaders.",
//     imageUrl: "/placeholder.jpg",
//     price: "$299",
//     attendees: 500,
//   },
//   {
//     id: "2",
//     title: "React & Next.js Conference",
//     date: "2024-12-20",
//     location: "New York, NY",
//     category: "Web Development",
//     description: "Deep dive into modern React patterns, Next.js 14 features, and full-stack development.",
//     imageUrl: "/placeholder.jpg",
//     price: "$199",
//     attendees: 300,
//   },
//   {
//     id: "3",
//     title: "Cybersecurity & Ethical Hacking Workshop",
//     date: "2025-01-10",
//     location: "Austin, TX",
//     category: "Cybersecurity",
//     description: "Hands-on workshop covering penetration testing, vulnerability assessment, and security protocols.",
//     imageUrl: "/placeholder.jpg",
//     price: "$399",
//     attendees: 150,
//   },
//   {
//     id: "4",
//     title: "Cloud Computing & DevOps Bootcamp",
//     date: "2025-01-25",
//     location: "Seattle, WA",
//     category: "Cloud Computing",
//     description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines in this intensive 3-day bootcamp.",
//     imageUrl: "/placeholder.jpg",
//     price: "$499",
//     attendees: 200,
//   },
//   {
//     id: "5",
//     title: "Blockchain & Web3 Developer Summit",
//     date: "2025-02-05",
//     location: "Miami, FL",
//     category: "Blockchain",
//     description: "Build decentralized applications, smart contracts, and explore the future of Web3 technology.",
//     imageUrl: "/placeholder.jpg",
//     price: "$349",
//     attendees: 250,
//   },
//   {
//     id: "6",
//     title: "Mobile App Development with Flutter",
//     date: "2025-02-18",
//     location: "Los Angeles, CA",
//     category: "Mobile Development",
//     description: "Create cross-platform mobile apps using Flutter and Dart with real-world projects.",
//     imageUrl: "/placeholder.jpg",
//     price: "$249",
//     attendees: 180,
//   },
//   {
//     id: "7",
//     title: "Data Science & Analytics Masterclass",
//     date: "2025-03-01",
//     location: "Chicago, IL",
//     category: "Data Science",
//     description: "Learn Python, R, machine learning algorithms, and data visualization techniques.",
//     imageUrl: "/placeholder.jpg",
//     price: "$279",
//     attendees: 320,
//   },
//   {
//     id: "8",
//     title: "IoT & Embedded Systems Workshop",
//     date: "2025-03-15",
//     location: "Boston, MA",
//     category: "IoT",
//     description: "Build IoT devices, work with sensors, and create connected systems using Arduino and Raspberry Pi.",
//     imageUrl: "/placeholder.jpg",
//     price: "$329",
//     attendees: 120,
//   },
// ]

// // Tech categories for filtering
// const techCategories = [
//   "All Categories",
//   "Artificial Intelligence",
//   "Web Development",
//   "Mobile Development",
//   "Data Science",
//   "Cybersecurity",
//   "Cloud Computing",
//   "Blockchain",
//   "IoT",
// ]

// const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All Categories")
//   const [searchTerm, setSearchTerm] = useState("")

//   // Filter events based on category and search term
//   const filteredEvents = dummyEvents.filter((event) => {
//     const matchesCategory = selectedCategory === "All Categories" || event.category === selectedCategory
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.description.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search tech events..."
//               className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//           </div>
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             {techCategories.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//             <CalendarDays size={18} /> Date Filter
//           </button>
//         </div>

//         {filteredEvents.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("All Categories")
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Clear Filters
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredEvents.map((event) => (
//               <div
//                 key={event.id}
//                 className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
//               >
//                 <img
//                   src={event.imageUrl || "/placeholder.svg"}
//                   alt={event.title}
//                   className="rounded-t-lg object-cover w-full h-48"
//                 />
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
//                       {event.category}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">{event.price}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} />
//                     {event.date} | {event.location}
//                   </p>
//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
//                   <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
//                 </div>
//                 <div className="p-4 pt-0 mt-auto">
//                   <Link to={`/events/${event.id}`}>
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                       View Details & Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Events
// "use client"

// import { CalendarDays, Search } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { eventService } from "../services/eventService"; // make sure your API service is set up

// const Events = () => {
//   const [events, setEvents] = useState([])
//   const [categories, setCategories] = useState([{ _id: "all", name: "All Categories" }])
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")

//   // Fetch categories from backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await eventService.getCategories()
//         setCategories([{ _id: "all", name: "All Categories" }, ...data])
//       } catch (err) {
//         console.error("Failed to fetch categories:", err)
//       }
//     }
//     fetchCategories()
//   }, [])

//   // Fetch events from backend
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await eventService.getEvents()
//         setEvents(data)
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//       }
//     }
//     fetchEvents()
//   }, [])

//   // Filter events based on selected category and search term
//   const filteredEvents = events.filter((event) => {
//     const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.description.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search tech events..."
//               className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//           </div>

//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             {categories.map((category) => (
//               <option key={category._id} value={category._id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>

//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//             <CalendarDays size={18} /> Date Filter
//           </button>
//         </div>

//         {filteredEvents.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("all")
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               Clear Filters 
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredEvents.map((event) => (
//               <div
//                 key={event._id} // <-- make sure to use MongoDB _id
//                 className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
//               >
//                 <img
//                   src={event.featured_image || "/placeholder.svg"}
//                   alt={event.title}
//                   className="rounded-t-lg object-cover w-full h-48"
//                 />
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
//                       {categories.find((c) => c._id === event.category)?.name || event.category}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">{event.price}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} />
//                     {event.date} | {event.location}
//                   </p>
//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
//                   <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
//                 </div>
//                 <div className="p-4 pt-0 mt-auto">
//                   <Link to={`/events/${event.id}`}>
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                       View Details & Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Events
// "use client"

// import { CalendarDays, Search } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { eventService } from "../services/eventService"

// const Events = () => {
//   const [events, setEvents] = useState([])
//   const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [loading, setLoading] = useState(false)
// // Fetch categories from backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await eventService.getCategories()
//         setCategories([{ id: "all", name: "All Categories" }, ...data])
//       } catch (err) {
//         console.error("Failed to fetch categories:", err)
//       }
//     }
//     fetchCategories()
//   }, [])

//   // Fetch events (refetch whenever filters change)
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true)
//         const data = await eventService.getEvents(selectedCategory, searchTerm)
//         setEvents(data)
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchEvents()
//   }, [selectedCategory, searchTerm])

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           {/* Search */}
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search tech events..."
//               className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//           </div>

//           {/* Category Filter */}
//           {/* <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             {categories.map((category) => (
//               <option key={category._id} value={category._id}>
//                 {category.name}
//               </option>
//             ))}
//           </select> */}
// <select
//   className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
//   value={selectedCategory}
//   onChange={(e) => setSelectedCategory(e.target.value)}
// >
//   {categories.map((category) => (
//     <option key={category.id} value={category.id}>
//       {category.name}
//     </option>
//   ))}
  
// </select>
//           {/* Date Filter Button (not yet functional) */}
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//             <CalendarDays size={18} /> Date Filter
//           </button>
//         </div>

//         {/* Events Grid */}
//         {loading ? (
//           <div className="text-center py-12 text-gray-500 text-lg">Loading events...</div>
//         ) : events.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("all")
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Clear Filters
//             </button>
//             <h1>{selectedCategory}</h1>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {events.map((event) => (
//               <div
//                 key={event.id || event._id}
//                 className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
//               >
//                 <img
//                   src={event.featured_image || "/placeholder.svg"}
//                   alt={event.title}
//                   className="rounded-t-lg object-cover w-full h-48"
//                 />
//                 <div className="p-4 flex-1 flex flex-col">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
//                       {categories.find((c) => c._id === event.category)?.name || event.category}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">
//                       {event.price ? `Rs. ${event.price}` : "Free"}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} /> {event.date} | {event.location}
//                   </p>

//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
//                   <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
//                 </div>

//                 <div className="p-4 pt-0 mt-auto">
//                   <Link to={`/events/${event.id || event._id}`}>
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                       View Details & Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Events
// "use client"

// import { CalendarDays, Search } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Link, useSearchParams } from "react-router-dom"
// import { eventService } from "../services/eventService"

// const Events = () => {
//   const [events, setEvents] = useState([])
//   const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [loading, setLoading] = useState(false)

//   // Get query param from URL
//   const [searchParams] = useSearchParams()
//   const selectedCategoryFromURL = searchParams.get("category") || "all"

//   // Fetch categories from backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await eventService.getCategories()
//         setCategories([{ id: "all", name: "All Categories" }, ...data])
//       } catch (err) {
//         console.error("Failed to fetch categories:", err)
//       }
//     }
//     fetchCategories()
//   }, [])

//   // Fetch events whenever filters change
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true)
//         const data = await eventService.getEvents(selectedCategoryFromURL, searchTerm)
//         setEvents(data)
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchEvents()
//   }, [selectedCategoryFromURL, searchTerm])

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           {/* Search */}
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search tech events..."
//               className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//           </div>

//           {/* Category Filter */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
//             value={selectedCategoryFromURL}
//             onChange={(e) => {
//               // Update the URL query param on category change
//               const newCategory = e.target.value
//               const url = new URL(window.location)
//               if (newCategory === "all") {
//                 url.searchParams.delete("category")
//               } else {
//                 url.searchParams.set("category", newCategory)
//               }
//               window.history.pushState({}, "", url)
//               window.location.reload() // reload page to pick new query param
//             }}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>

//           {/* Date Filter Button */}
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//             <CalendarDays size={18} /> Date Filter
//           </button>
//         </div>

//         {/* Events Grid */}
//         {loading ? (
//           <div className="text-center py-12 text-gray-500 text-lg">Loading events...</div>
//         ) : events.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm("")
//                 const url = new URL(window.location)
//                 url.searchParams.delete("category")
//                 window.history.pushState({}, "", url)
//                 window.location.reload()
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Clear Filters
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {events.map((event) => (
//               <div
//                 key={event.id || event._id}
//                 className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
//               >
//                 <img
//                   src={event.featured_image || "/placeholder.svg"}
//                   alt={event.title}
//                   className="rounded-t-lg object-cover w-full h-48"
//                 />
//                 <div className="p-4 flex-1 flex flex-col">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
//                       {categories.find((c) => c.id === event.category)?.name || event.category}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">
//                       {event.price ? `Rs. ${event.price}` : "Free"}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} /> {event.date} | {event.location}
//                   </p>

//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
//                   <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
//                 </div>

//                 <div className="p-4 pt-0 mt-auto">
//                   <Link to={`/events/${event.id || event._id}`}>
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                       View Details & Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Events
"use client"

import { CalendarDays, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { eventService } from "../services/eventService"

const Events = () => {
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get("category") || "all"

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await eventService.getCategories()
        setCategories([{ id: "all", name: "All Categories" }, ...data])
      } catch (err) {
        console.error("Failed to fetch categories:", err)
      }
    }
    fetchCategories()
  }, [])

  // Fetch events whenever category or search term changes
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const data = await eventService.getEvents(selectedCategory, searchTerm)
        setEvents(data)
      } catch (err) {
        console.error("Failed to fetch events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [selectedCategory, searchTerm])

  // Update category in URL without page reload
  const handleCategoryChange = (e) => {
    const value = e.target.value
    if (value === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", value)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
          <p className="text-gray-600">Discover the latest technology events and conferences</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search tech events..."
              className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Category Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Date Filter Button (future functionality) */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
            <CalendarDays size={18} /> Date Filter
          </button>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 text-lg">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                searchParams.delete("category")
                setSearchParams(searchParams)
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id || event._id}
                className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
              >
                <img
                  src={event.featured_image || "/placeholder.svg"}
                  alt={event.title}
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {categories.find((c) => c.id === event.category)?.name || event.category}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {event.price ? `Rs. ${event.price}` : "Free"}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <CalendarDays size={14} /> {event.date} | {event.location}
                  </p>

                  <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
                  <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
                </div>

                <div className="p-4 pt-0 mt-auto">
                  <Link to={`/events/${event.id || event._id}`}>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      View Details & Register
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
