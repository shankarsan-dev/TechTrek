// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { MapPin, Calendar, Users, Search, Filter, Navigation } from "lucide-react"

// // Simple UI Components
// const Card = ({ className = "", children, ...props }) => (
//   <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// )

// const CardContent = ({ className = "", children, ...props }) => (
//   <div className={`p-6 ${className}`} {...props}>
//     {children}
//   </div>
// )

// const Button = ({ className = "", variant = "default", children, ...props }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-4 py-2"
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
//     secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
//   }

//   return (
//     <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   )
// }

// const Badge = ({ className = "", children, ...props }) => (
//   <div
//     className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// )

// // Sample events data with location information
// const nearbyEventsData = [
//   {
//     id: "1",
//     title: "AI & Machine Learning Summit 2024",
//     date: "Dec 15, 2024",
//     time: "9:00 AM - 6:00 PM",
//     location: "Moscone Center, San Francisco, CA",
//     distance: "2.5 miles",
//     category: "Artificial Intelligence",
//     attendees: 500,
//     price: "$299",
//     organizer: "AI Tech Conference",
//     description: "Explore the latest breakthroughs in AI, deep learning, and neural networks with industry leaders.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.7749, lng: -122.4194 },
//   },
//   {
//     id: "2",
//     title: "React Developer Meetup",
//     date: "Dec 18, 2024",
//     time: "6:00 PM - 9:00 PM",
//     location: "Google Campus, Palo Alto, CA",
//     distance: "5.2 miles",
//     category: "Web Development",
//     attendees: 150,
//     price: "Free",
//     organizer: "React Bay Area",
//     description: "Monthly meetup for React developers to share knowledge and network.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.4419, lng: -122.143 },
//   },
//   {
//     id: "3",
//     title: "Startup Pitch Night",
//     date: "Dec 20, 2024",
//     time: "7:00 PM - 10:00 PM",
//     location: "WeWork, Mountain View, CA",
//     distance: "8.1 miles",
//     category: "Startup",
//     attendees: 200,
//     price: "$25",
//     organizer: "Silicon Valley Entrepreneurs",
//     description: "Watch innovative startups pitch their ideas to investors and industry experts.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.3861, lng: -122.0839 },
//   },
//   {
//     id: "4",
//     title: "Cybersecurity Workshop",
//     date: "Dec 22, 2024",
//     time: "10:00 AM - 4:00 PM",
//     location: "Stanford University, Stanford, CA",
//     distance: "12.3 miles",
//     category: "Cybersecurity",
//     attendees: 80,
//     price: "$150",
//     organizer: "CyberSec Academy",
//     description: "Hands-on workshop covering ethical hacking and cybersecurity fundamentals.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.4275, lng: -122.1697 },
//   },
//   {
//     id: "5",
//     title: "Data Science Bootcamp",
//     date: "Jan 5, 2025",
//     time: "9:00 AM - 5:00 PM",
//     location: "UC Berkeley, Berkeley, CA",
//     distance: "15.7 miles",
//     category: "Data Science",
//     attendees: 120,
//     price: "$399",
//     organizer: "Data Science Institute",
//     description: "Intensive bootcamp covering Python, machine learning, and data visualization.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.8719, lng: -122.2585 },
//   },
//   {
//     id: "6",
//     title: "Mobile App Development Workshop",
//     date: "Jan 8, 2025",
//     time: "1:00 PM - 6:00 PM",
//     location: "Apple Park, Cupertino, CA",
//     distance: "18.2 miles",
//     category: "Mobile Development",
//     attendees: 100,
//     price: "$199",
//     organizer: "iOS Developers Guild",
//     description: "Learn iOS development with Swift and build your first mobile app.",
//     image: "/placeholder.svg?height=200&width=300",
//     coordinates: { lat: 37.3349, lng: -122.009 },
//   },
// ]

// const categories = [
//   "All Categories",
//   "Artificial Intelligence",
//   "Web Development",
//   "Mobile Development",
//   "Data Science",
//   "Cybersecurity",
//   "Startup",
//   "Blockchain",
//   "Cloud Computing",
// ]

// const distanceFilters = [
//   { label: "Within 5 miles", value: 5 },
//   { label: "Within 10 miles", value: 10 },
//   { label: "Within 25 miles", value: 25 },
//   { label: "Within 50 miles", value: 50 },
//   { label: "Any distance", value: 999 },
// ]

// export default function EventsNearYou() {
//   const [events, setEvents] = useState(nearbyEventsData)
//   const [filteredEvents, setFilteredEvents] = useState(nearbyEventsData)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("All Categories")
//   const [selectedDistance, setSelectedDistance] = useState(25)
//   const [userLocation, setUserLocation] = useState("San Francisco, CA")
//   const [isLocationDetected, setIsLocationDetected] = useState(false)

//   // Simulate location detection
//   useEffect(() => {
//     const detectLocation = () => {
//       setTimeout(() => {
//         setUserLocation("San Francisco, CA")
//         setIsLocationDetected(true)
//       }, 1000)
//     }
//     detectLocation()
//   }, [])

//   // Filter events based on search, category, and distance
//   useEffect(() => {
//     let filtered = events

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (event) =>
//           event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           event.organizer.toLowerCase().includes(searchTerm.toLowerCase()),
//       )
//     }

//     // Filter by category
//     if (selectedCategory !== "All Categories") {
//       filtered = filtered.filter((event) => event.category === selectedCategory)
//     }

//     // Filter by distance
//     if (selectedDistance < 999) {
//       filtered = filtered.filter((event) => {
//         const distance = Number.parseFloat(event.distance.split(" ")[0])
//         return distance <= selectedDistance
//       })
//     }

//     setFilteredEvents(filtered)
//   }, [events, searchTerm, selectedCategory, selectedDistance])

//   const handleLocationDetection = () => {
//     setIsLocationDetected(false)
//     // Simulate location detection
//     setTimeout(() => {
//       setUserLocation("San Francisco, CA")
//       setIsLocationDetected(true)
//     }, 1000)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Events Near You</h1>
//           <div className="flex items-center gap-2 text-gray-600">
//             <MapPin size={16} />
//             <span>
//               {isLocationDetected ? <>Showing events near {userLocation}</> : <>Detecting your location...</>}
//             </span>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleLocationDetection}
//               className="ml-2 text-xs bg-transparent"
//             >
//               <Navigation size={12} className="mr-1" />
//               Update Location
//             </Button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search events, organizers..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//             </div>

//             {/* Category Filter */}
//             <select
//               className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>

//             {/* Distance Filter */}
//             <select
//               className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedDistance}
//               onChange={(e) => setSelectedDistance(Number(e.target.value))}
//             >
//               {distanceFilters.map((filter) => (
//                 <option key={filter.value} value={filter.value}>
//                   {filter.label}
//                 </option>
//               ))}
//             </select>

//             {/* Clear Filters */}
//             <Button
//               variant="outline"
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("All Categories")
//                 setSelectedDistance(25)
//               }}
//               className="flex items-center gap-2"
//             >
//               <Filter size={16} />
//               Clear Filters
//             </Button>
//           </div>
//         </div>

//         {/* Results Summary */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             Found {filteredEvents.length} events near you
//             {selectedDistance < 999 && ` within ${selectedDistance} miles`}
//           </p>
//         </div>

//         {/* Events Grid */}
//         {filteredEvents.length === 0 ? (
//           <div className="text-center py-12">
//             <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
//             <p className="text-gray-600 mb-4">Try adjusting your filters or expanding your search distance.</p>
//             <Button
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("All Categories")
//                 setSelectedDistance(50)
//               }}
//             >
//               Expand Search
//             </Button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredEvents.map((event) => (
//               <Card key={event.id} className="hover:shadow-lg transition-shadow">
//                 <div className="flex">
//                   <img
//                     src={event.image || "/placeholder.svg"}
//                     alt={event.title}
//                     className="w-32 h-32 object-cover rounded-l-lg"
//                   />
//                   <CardContent className="flex-1 p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <Badge>{event.category}</Badge>
//                       <div className="text-right">
//                         <div className="text-lg font-bold text-green-600">{event.price}</div>
//                         <div className="text-sm text-gray-500">{event.distance}</div>
//                       </div>
//                     </div>

//                     <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>

//                     <div className="space-y-1 text-sm text-gray-600 mb-3">
//                       <div className="flex items-center gap-2">
//                         <Calendar size={14} />
//                         {event.date} • {event.time}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MapPin size={14} />
//                         {event.location}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Users size={14} />
//                         {event.attendees} attendees • by {event.organizer}
//                       </div>
//                     </div>

//                     <p className="text-sm text-gray-700 mb-3 line-clamp-2">{event.description}</p>

//                     <div className="flex gap-2">
//                       <Link to={`/events/${event.id}`} className="flex-1">
//                         <Button className="w-full text-sm">View Details</Button>
//                       </Link>
//                       <Button variant="outline" className="text-sm bg-transparent">
//                         Save
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}

//         {/* Load More */}
//         {filteredEvents.length > 0 && (
//           <div className="text-center mt-12">
//             <Button variant="outline" size="lg">
//               Load More Events
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
"use client"

import { Calendar, Filter, MapPin, Navigation, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { eventService } from "../services/eventService.js"

// -------------------- UI Components --------------------
const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const Button = ({ className = "", variant = "default", children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-4 py-2"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Badge = ({ className = "", children, ...props }) => (
  <div
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 ${className}`}
    {...props}
  >
    {children}
  </div>
)

// -------------------- Filters --------------------
const categories = [
  // "All Categories",
  // "Artificial Intelligence",
  // "Web Development",
  // "Mobile Development",
  // "Data Science",
  // "Cybersecurity",
  // "Startup",
  // "Blockchain",
  // "Cloud Computing",
]

const distanceFilters = [
  { label: "Within 5 km", value: 5 },
  { label: "Within 10 km", value: 10 },
  { label: "Within 25 km", value: 25 },
  { label: "Within 50 km", value: 50 },
  { label: "Any distance", value: 999 },
]

// -------------------- Main Component --------------------
export default function EventsNearYou() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedDistance, setSelectedDistance] = useState(25)
  const [userLocation, setUserLocation] = useState(null)
  const [isLocationDetected, setIsLocationDetected] = useState(false)

  // -------------------- Detect user location --------------------
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ latitude, longitude })
        setIsLocationDetected(true)

        // Fetch nearest events
        const nearestEvents = await eventService.getNearestEvents(latitude, longitude, 50)
        setEvents(nearestEvents)
        setFilteredEvents(nearestEvents)
      })
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }

  useEffect(() => {
    detectLocation()
  }, [])

  // -------------------- Filter events --------------------
  useEffect(() => {
    let filtered = [...events]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    // Distance filter
    if (selectedDistance < 999) {
      filtered = filtered.filter((event) => {
        const distanceKm = parseFloat(event.distance.split(" ")[0])
        return distanceKm <= selectedDistance
      })
    }

    setFilteredEvents(filtered)
  }, [events, searchTerm, selectedCategory, selectedDistance])

  return (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Events Near You</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} />
          <span>
            {isLocationDetected
              ? `Showing events near ${userLocation?.latitude.toFixed(4)}, ${userLocation?.longitude.toFixed(4)}`
              : "Detecting your location..."}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={detectLocation}
            className="ml-2 text-xs bg-transparent"
          >
            <Navigation size={12} className="mr-1" />
            Update Location
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events, organizers..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          <select
            className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDistance}
            onChange={(e) => setSelectedDistance(Number(e.target.value))}
          >
            {distanceFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>

          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("All Categories")
              setSelectedDistance(25)
            }}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          {isLocationDetected
            ? `Found ${filteredEvents.length} events${
                selectedDistance < 999 ? ` within ${selectedDistance} km` : ""
              }`
            : "Fetching nearby events..."}
        </p>
      </div>

      {/* 🔄 Loading Skeleton */}
      {!isLocationDetected || (filteredEvents.length === 0 && events.length === 0) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 w-24 rounded" />
                <div className="h-6 bg-gray-300 w-3/4 rounded" />
                <div className="h-4 bg-gray-200 w-1/2 rounded" />
                <div className="h-4 bg-gray-200 w-2/3 rounded" />
                <div className="flex gap-2 mt-4">
                  <div className="h-8 w-full bg-gray-200 rounded-md" />
                  <div className="h-8 w-16 bg-gray-200 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or expanding your search distance.
          </p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("All Categories")
              setSelectedDistance(50)
            }}
          >
            Expand Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-lg transition-shadow flex flex-col h-[400px]"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={event.featured_image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge>{event.category || "General"}</Badge>
                    <div className="text-right text-sm text-gray-500">
                      {event.distance || "—"}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    {event.start_date && (
                      <div className="flex items-center gap-2">
                        <Calendar size={14} /> {event.start_date}
                      </div>
                    )}
                    {/* {event.location && (
                      <div className="flex items-center gap-2">
                            <MapPin size={14} /> {event.location.split(",")[0.3]}
                      </div>
                    )} */}
                    
                  </div>

                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {event.description || "No description available."}
                  </p>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link to={`/events/${event.id}`} className="flex-1">
                    <Button className="w-full text-sm">View Details</Button>
                  </Link>
                  <Button variant="outline" className="text-sm bg-transparent">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Load More */}
      {filteredEvents.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      )}
    </div>
  </div>
)
}
