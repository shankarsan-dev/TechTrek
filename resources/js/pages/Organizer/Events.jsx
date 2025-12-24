
// // "use client"

// // import { useQuery } from "@tanstack/react-query"
// // import { Calendar, ChevronDown, Edit, Eye, MoreVertical, Plus, Search, Trash2, Users } from "lucide-react"
// // import { useState } from "react"
// // import { Link } from "react-router-dom"
// // import { eventService } from "../../services/eventService"

// // const OrganizerEvents = () => {
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [sortBy, setSortBy] = useState("created_at")
// //   const [sortOrder, setSortOrder] = useState("desc")

// //   const {
// //     data: events,
// //     isLoading,
// //   } = useQuery({
// //     queryKey: ["organizer-events", searchTerm, sortBy, sortOrder],
// //     queryFn: () =>
// //       eventService.getOrganizerEvents({
// //         search: searchTerm,
// //         sort_by: sortBy,
// //         sort_order: sortOrder,
// //       }),
// //   })

// //   const EventCard = ({ event }) => {
// //     const [showMenu, setShowMenu] = useState(false)

// //     const getStatusColor = (status) => {
// //       switch (status) {
// //         case "published":
// //           return "bg-green-100 text-green-800"
// //         case "draft":
// //           return "bg-yellow-100 text-yellow-800"
// //         case "cancelled":
// //           return "bg-red-100 text-red-800"
// //         default:
// //           return "bg-gray-100 text-gray-800"
// //       }
// //     }

// //     const attendanceRate = event.capacity > 0 ? (event.booked_count / event.capacity) * 100 : 0

// //     return (
// //       <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
// //         <div className="relative">
// //           <img
// //             src={event.featured_image || "/placeholder.svg?height=200&width=400"}
// //             alt={event.title}
// //             className="w-full h-48 object-cover rounded-t-lg"
// //           />
// //           <div className="absolute top-4 left-4">
// //             <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
// //               {event.status}
// //             </span>
// //           </div>
// //           <div className="absolute top-4 right-4">
// //             <div className="relative">
// //               <button
// //                 onClick={() => setShowMenu(!showMenu)}
// //                 className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100"
// //               >
// //                 <MoreVertical className="h-4 w-4" />
// //               </button>
// //               {showMenu && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
// //                   <Link
// //                     to={`/organizer/events/${event.id}`}
// //                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                   >
// //                     <Eye className="h-4 w-4 mr-2" />
// //                     View Details
// //                   </Link>
// //                   <Link
// //                     to={`/organizer/events/${event.id}/edit`}
// //                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                   >
// //                     <Edit className="h-4 w-4 mr-2" />
// //                     Edit Event
// //                   </Link>
// //                   <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
// //                     <Trash2 className="h-4 w-4 mr-2" />
// //                     Delete Event
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="p-6">
// //           <div className="flex items-center text-sm text-gray-500 mb-2">
// //             <Calendar className="h-4 w-4 mr-1" />
// //             <span>{new Date(event.start_date).toLocaleDateString()}</span>
// //             <span className="mx-2">•</span>
// //             <span>{event.category.name}</span>
// //           </div>

// //           <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

// //           <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

// //           <div className="flex items-center justify-between mb-4">
// //             <div className="flex items-center text-sm text-gray-500">
// //               <Users className="h-4 w-4 mr-1" />
// //               <span>
// //                 {event.booked_count}/{event.capacity} attendees
// //               </span>
// //             </div>
// //             <div className="text-sm font-medium text-gray-900">{event.price > 0 ? `$${event.price}` : "Free"}</div>
// //           </div>

// //           {/* Attendance Progress Bar */}
// //           <div className="mb-4">
// //             <div className="flex justify-between text-xs text-gray-500 mb-1">
// //               <span>Attendance</span>
// //               <span>{attendanceRate.toFixed(0)}%</span>
// //             </div>
// //             <div className="w-full bg-gray-200 rounded-full h-2">
// //               <div
// //                 className={`h-2 rounded-full ${
// //                   attendanceRate >= 80 ? "bg-green-500" : attendanceRate >= 50 ? "bg-yellow-500" : "bg-red-500"
// //                 }`}
// //                 style={{ width: `${Math.min(attendanceRate, 100)}%` }}
// //               ></div>
// //             </div>
// //           </div>

// //           <div className="flex justify-between items-center">
// //             <Link
// //               to={`/organizer/events/${event.id}`}
// //               className="text-primary-600 hover:text-primary-700 text-sm font-medium"
// //             >
// //               View Details →
// //             </Link>
// //             <Link
// //               to={`/organizer/events/${event.id}/edit`}
// //               className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700"
// //             >
// //               Edit
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">My Events</h1>
// //               <p className="text-gray-600">Manage your events and track their performance</p>
// //             </div>
// //             <Link
// //               to="/organizer/events/create"
// //               className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
// //             >
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Event
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Search and Sorting */}
// //         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// //           <div className="flex flex-col md:flex-row gap-4">
// //             {/* Search */}
// //             <div className="flex-1 relative">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //               <input
// //                 type="text"
// //                 placeholder="Search events..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //               />
// //             </div>

// //             {/* Sort */}
// //             <div className="relative">
// //               <select
// //                 value={`${sortBy}-${sortOrder}`}
// //                 onChange={(e) => {
// //                   const [field, order] = e.target.value.split("-")
// //                   setSortBy(field)
// //                   setSortOrder(order)
// //                 }}
// //                 className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //               >
// //                 <option value="created_at-desc">Newest First</option>
// //                 <option value="created_at-asc">Oldest First</option>
// //                 <option value="start_date-asc">Event Date (Earliest)</option>
// //                 <option value="start_date-desc">Event Date (Latest)</option>
// //                 <option value="title-asc">Title (A-Z)</option>
// //                 <option value="title-desc">Title (Z-A)</option>
// //               </select>
// //               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Events Grid */}
// //         {isLoading ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {[...Array(6)].map((_, i) => (
// //               <div key={i} className="bg-white rounded-lg shadow-sm animate-pulse">
// //                 <div className="h-48 bg-gray-200 rounded-t-lg"></div>
// //                 <div className="p-6">
// //                   <div className="h-4 bg-gray-200 rounded mb-2"></div>
// //                   <div className="h-6 bg-gray-200 rounded mb-2"></div>
// //                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
// //                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : events?.data?.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {events.data.map((event) => (
// //               <EventCard key={event.id} event={event} />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="text-center py-12">
// //             <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
// //             <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
// //             <p className="text-gray-500 mb-6">
// //               {searchTerm ? "Try adjusting your search" : "Create your first event to get started!"}
// //             </p>
// //             <Link
// //               to="/organizer/events/create"
// //               className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
// //             >
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Event
// //             </Link>
// //           </div>
// //         )}

// //         {/* Pagination */}
// //         {events?.meta?.last_page > 1 && (
// //           <div className="mt-8 flex justify-center">
// //             <nav className="flex items-center space-x-2">
// //               <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
// //                 Previous
// //               </button>
// //               {[...Array(events.meta.last_page)].map((_, i) => (
// //                 <button
// //                   key={i}
// //                   className={`px-3 py-2 border rounded-lg ${
// //                     i + 1 === events.meta.current_page
// //                       ? "bg-primary-600 text-white border-primary-600"
// //                       : "border-gray-300 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   {i + 1}
// //                 </button>
// //               ))}
// //               <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
// //                 Next
// //               </button>
// //             </nav>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default OrganizerEvents
// "use client"

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { Calendar, ChevronDown, Edit, Eye, MoreVertical, Plus, Search, Trash2, Users } from "lucide-react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { eventService } from "../../services/eventService"

// const OrganizerEvents = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [sortBy, setSortBy] = useState("created_at")
//   const [sortOrder, setSortOrder] = useState("desc")

//   const queryClient = useQueryClient()

//   const {
//     data: events,
//     isLoading,
//   } = useQuery({
//     queryKey: ["organizer-events", searchTerm, sortBy, sortOrder],
//     queryFn: () =>
//       eventService.getOrganizerEvents({
//         search: searchTerm,
//         sort_by: sortBy,
//         sort_order: sortOrder,
//       }),
//   })

//   const deleteEventMutation = useMutation({
//     mutationFn: (eventId) => eventService.deleteEvent(eventId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["organizer-events", searchTerm, sortBy, sortOrder] })
//     },
//   })

//   const EventCard = ({ event, onDelete }) => {
//     const [showMenu, setShowMenu] = useState(false)

//     const getStatusColor = (status) => {
//       switch (status) {
//         case "published":
//           return "bg-green-100 text-green-800"
//         case "draft":
//           return "bg-yellow-100 text-yellow-800"
//         case "cancelled":
//           return "bg-red-100 text-red-800"
//         default:
//           return "bg-gray-100 text-gray-800"
//       }
//     }

//     // Calculate total sold tickets and remaining capacity
//     const calculateTicketStats = (tickets) => {
//       let totalSold = 0
//       let totalQuantity = 0
//       let hasUnlimitedTickets = false

//       tickets?.forEach(ticket => {
//         // Add sold tickets (ensure it's a number)
//         const sold = Number(ticket.sold) || 0
//         totalSold += sold

//         // Handle quantity (might be null, empty string, or undefined for unlimited)
//         const quantity = ticket.quantity
//         if (quantity === null || quantity === "" || quantity === undefined) {
//           hasUnlimitedTickets = true
//         } else {
//           totalQuantity += Number(quantity) || 0
//         }
//       })

//       let remaining
//       let totalCapacity
      
//       if (hasUnlimitedTickets) {
//         // If any ticket has unlimited quantity, capacity is unlimited
//         remaining = "Unlimited"
//         totalCapacity = "Unlimited"
//       } else {
//         totalCapacity = totalQuantity
//         remaining = Math.max(0, totalQuantity - totalSold)
//       }

//       return {
//         totalSold,
//         totalCapacity,
//         remaining,
//         hasUnlimitedTickets
//       }
//     }

//     const ticketStats = calculateTicketStats(event.tickets)
//     const attendanceRate = ticketStats.hasUnlimitedTickets 
//       ? 0 // Don't calculate rate for unlimited tickets
//       : ticketStats.totalCapacity > 0 
//         ? (ticketStats.totalSold / ticketStats.totalCapacity) * 100 
//         : 0

//     return (
//       <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//         <div className="relative">
//           <img
//             src={event.featured_image || "/placeholder.svg?height=200&width=400"}
//             alt={event.title}
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           {/* <div className="absolute top-4 left-4">
//             <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
//               {event.status}
//             </span>
//           </div> */}
//           <div className="absolute top-4 right-4">
//             <div className="relative">
//               <button
//                 onClick={() => setShowMenu(!showMenu)}
//                 className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100"
//               >
//                 <MoreVertical className="h-4 w-4" />
//               </button>
//               {showMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                   <Link
//                     to={`/organizer/events/${event.id}`}
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <Eye className="h-4 w-4 mr-2" />
//                     View Details
//                   </Link>
//                   <Link
//                     to={`/organizer/events/${event.id}/edit`}
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <Edit className="h-4 w-4 mr-2" />
//                     Edit Event
//                   </Link>
//                   <AlertDialog>
//                     <AlertDialogTrigger asChild>
//                       <button
//                         disabled={ticketStats.totalSold > 0}
//                         className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         <Trash2 className="h-4 w-4 mr-2" />
//                         Delete Event
//                       </button>
//                     </AlertDialogTrigger>
//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <AlertDialogTitle>Delete Event</AlertDialogTitle>
//                         <AlertDialogDescription>
//                           Are you sure you want to delete "{event.title}"? This action cannot be undone.
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>
//                       <AlertDialogFooter>
//                         <AlertDialogCancel>Cancel</AlertDialogCancel>
//                         <AlertDialogAction
//                           onClick={() => onDelete(event.id)}
//                           className="bg-red-600 hover:bg-red-700"
//                         >
//                           Delete
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex items-center text-sm text-gray-500 mb-2">
//             <Calendar className="h-4 w-4 mr-1" />
//             <span>{new Date(event.start_date).toLocaleDateString()}</span>
//             <span className="mx-2">•</span>
//             <span>{event.category.name}</span>
//           </div>

//           <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

//           <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center text-sm text-gray-500">
//               <Users className="h-4 w-4 mr-1" />
//               <span>
//                 {ticketStats.totalSold} sold / {
//                   ticketStats.hasUnlimitedTickets 
//                     ? "Unlimited" 
//                     : `${ticketStats.totalCapacity} total`
//                 }
//               </span>
//             </div>
//             <div className="text-sm font-medium text-gray-900">
//               {event.tickets?.length > 0 && event.tickets[0].price && Number(event.tickets[0].price) > 0 ? 
//                 `Rs.${event.tickets[0].price}` : "Free"}
//             </div>
//           </div>

//           {/* Attendance Progress Bar - Only show if not unlimited */}
//           {!ticketStats.hasUnlimitedTickets && ticketStats.totalCapacity > 0 && (
//             <div className="mb-4">
//               <div className="flex justify-between text-xs text-gray-500 mb-1">
//                 <span>Attendance</span>
//                 <span>{attendanceRate.toFixed(0)}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className={`h-2 rounded-full ${
//                     attendanceRate >= 80 ? "bg-green-500" : 
//                     attendanceRate >= 50 ? "bg-yellow-500" : "bg-red-500"
//                   }`}
//                   style={{ width: `${Math.min(attendanceRate, 100)}%` }}
//                 ></div>
//               </div>
//             </div>
//           )}

//           {/* Ticket Info Summary */}
//           <div className="mb-4">
//             <div className="text-xs text-gray-500 mb-1">Ticket Status</div>
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-700">
//                 {ticketStats.hasUnlimitedTickets 
//                   ? "Unlimited tickets available" 
//                   : `${ticketStats.remaining} tickets remaining`
//                 }
//               </span>
//               <span className={`px-2 py-1 rounded-full text-xs ${
//                 ticketStats.hasUnlimitedTickets 
//                   ? "bg-blue-100 text-blue-800" 
//                   : ticketStats.remaining > 0 
//                     ? "bg-green-100 text-green-800" 
//                     : "bg-red-100 text-red-800"
//               }`}>
//                 {ticketStats.hasUnlimitedTickets 
//                   ? "Unlimited" 
//                   : ticketStats.remaining > 0 
//                     ? "Available" 
//                     : "Sold Out"
//                 }
//               </span>
//             </div>
//           </div>

//           <div className="flex justify-between items-center">
//             <Link
//               to={`/organizer/events/${event.id}`}
//               className="text-primary-600 hover:text-primary-700 text-sm font-medium"
//             >
//               View Details →
//             </Link>
//             <div className="flex gap-2">
//               {/* <Link
//                 to={`/organizer/events/${event.id}/edit`}
//                 className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700"
//               >
//                 Edit
//               </Link> */}
//               <button
//                 onClick={() => {
//                   if (window.confirm('Are you sure you want to delete this event?')) {
//                     onDelete(event.id)
//                   }
//                 }}
//                 className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">My Events</h1>
//               <p className="text-gray-600">Manage your events and track their performance</p>
//             </div>
//             <Link
//               to="/organizer/events/create"
//               className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Create Event
//             </Link>
//           </div>
//         </div>

//         {/* Search and Sorting */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search events..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               />
//             </div>

//             {/* Sort */}
//             <div className="relative">
//               <select
//                 value={`${sortBy}-${sortOrder}`}
//                 onChange={(e) => {
//                   const [field, order] = e.target.value.split("-")
//                   setSortBy(field)
//                   setSortOrder(order)
//                 }}
//                 className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//               >
//                 <option value="created_at-desc">Newest First</option>
//                 <option value="created_at-asc">Oldest First</option>
//                 <option value="start_date-asc">Event Date (Earliest)</option>
//                 <option value="start_date-desc">Event Date (Latest)</option>
//                 <option value="title-asc">Title (A-Z)</option>
//                 <option value="title-desc">Title (Z-A)</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>
//           </div>
//         </div>

//         {/* Events Grid */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="bg-white rounded-lg shadow-sm animate-pulse">
//                 <div className="h-48 bg-gray-200 rounded-t-lg"></div>
//                 <div className="p-6">
//                   <div className="h-4 bg-gray-200 rounded mb-2"></div>
//                   <div className="h-6 bg-gray-200 rounded mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : events?.data?.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {events.data.map((event) => (
//               <EventCard key={event.id} event={event} onDelete={deleteEventMutation.mutate} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
//             <p className="text-gray-500 mb-6">
//               {searchTerm ? "Try adjusting your search" : "Create your first event to get started!"}
//             </p>
//             <Link
//               to="/organizer/events/create"
//               className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Create Event
//             </Link>
//           </div>
//         )}

//         {/* Pagination */}
//         {events?.meta?.last_page > 1 && (
//           <div className="mt-8 flex justify-center">
//             <nav className="flex items-center space-x-2">
//               <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
//                 Previous
//               </button>
//               {[...Array(events.meta.last_page)].map((_, i) => (
//                 <button
//                   key={i}
//                   className={`px-3 py-2 border rounded-lg ${
//                     i + 1 === events.meta.current_page
//                       ? "bg-primary-600 text-white border-primary-600"
//                       : "border-gray-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
//                 Next
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default OrganizerEvents
"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AlertCircle, Calendar, ChevronDown, Edit, Eye, MoreVertical, Plus, Search, Trash2, Users } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"
import { eventService } from "../../services/eventService"

const OrganizerEvents = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("created_at")
  const [sortOrder, setSortOrder] = useState("desc")
  const [deletingEventId, setDeletingEventId] = useState(null)

  const queryClient = useQueryClient()

  const {
    data: events,
    isLoading,
  } = useQuery({
    queryKey: ["organizer-events", searchTerm, sortBy, sortOrder],
    queryFn: () =>
      eventService.getOrganizerEvents({
        search: searchTerm,
        sort_by: sortBy,
        sort_order: sortOrder,
      }),
  })

  const deleteEventMutation = useMutation({
    mutationFn: (eventId) => eventService.deleteEvent(eventId),
    onSuccess: () => {
      toast.success("Event deleted successfully!")
      queryClient.invalidateQueries({ queryKey: ["organizer-events", searchTerm, sortBy, sortOrder] })
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || error.message || "Failed to delete event"
      if (errorMessage.includes("existing bookings")) {
        toast.error("Cannot delete event with existing bookings. Please cancel all bookings first.")
      } else {
        toast.error(errorMessage)
      }
    },
    onSettled: () => {
      setDeletingEventId(null)
    }
  })

  const handleDeleteEvent = async (eventId, eventTitle, hasBookings) => {
    if (hasBookings) {
      toast.error(`Cannot delete "${eventTitle}" because it has existing bookings. Please cancel all bookings first.`)
      return
    }

    if (!window.confirm(`Are you sure you want to delete "${eventTitle}"? This action cannot be undone.`)) {
      return
    }

    setDeletingEventId(eventId)
    deleteEventMutation.mutate(eventId)
  }

  const EventCard = ({ event }) => {
    const [showMenu, setShowMenu] = useState(false)

    const getStatusColor = (status) => {
      switch (status) {
        case "published":
          return "bg-green-100 text-green-800"
        case "draft":
          return "bg-yellow-100 text-yellow-800"
        case "cancelled":
          return "bg-red-100 text-red-800"
        default:
          return "bg-gray-100 text-gray-800"
      }
    }

    // Calculate total sold tickets and remaining capacity
    const calculateTicketStats = (tickets) => {
      let totalSold = 0
      let totalQuantity = 0
      let hasUnlimitedTickets = false

      tickets?.forEach(ticket => {
        // Add sold tickets (ensure it's a number)
        const sold = Number(ticket.sold) || 0
        totalSold += sold

        // Handle quantity (might be null, empty string, or undefined for unlimited)
        const quantity = ticket.quantity
        if (quantity === null || quantity === "" || quantity === undefined) {
          hasUnlimitedTickets = true
        } else {
          totalQuantity += Number(quantity) || 0
        }
      })

      let remaining
      let totalCapacity
      
      if (hasUnlimitedTickets) {
        // If any ticket has unlimited quantity, capacity is unlimited
        remaining = "Unlimited"
        totalCapacity = "Unlimited"
      } else {
        totalCapacity = totalQuantity
        remaining = Math.max(0, totalQuantity - totalSold)
      }

      return {
        totalSold,
        totalCapacity,
        remaining,
        hasUnlimitedTickets
      }
    }

    const ticketStats = calculateTicketStats(event.tickets)
    const attendanceRate = ticketStats.hasUnlimitedTickets 
      ? 0 // Don't calculate rate for unlimited tickets
      : ticketStats.totalCapacity > 0 
        ? (ticketStats.totalSold / ticketStats.totalCapacity) * 100 
        : 0

    // Check if event has bookings (tickets sold)
    const hasBookings = ticketStats.totalSold > 0

    return (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <img
            src={event.featured_image || "/placeholder.svg?height=200&width=400"}
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
         
          
          {/* Bookings Warning Badge */}
          {hasBookings && (
            <div className="absolute top-4 left-20">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 flex items-left gap-1">
                <AlertCircle size={12} />
                {ticketStats.totalSold} {ticketStats.totalSold === 1 ? 'booking' : 'bookings'}
              </span>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to={`/organizer/events/${event.id}`}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                  <Link
                    to={`/organizer/events/${event.id}/edit`}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Event
                  </Link>
                  <button
                    onClick={() => {
                      handleDeleteEvent(event.id, event.title, hasBookings)
                      setShowMenu(false)
                    }}
                    disabled={deletingEventId === event.id || hasBookings}
                    className={`flex items-center w-full px-4 py-2 text-sm ${
                      hasBookings 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-red-600 hover:bg-gray-100'
                    }`}
                    title={hasBookings ? "Cannot delete event with bookings" : ""}
                  >
                    {deletingEventId === event.id ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Event
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(event.start_date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{event.category_id}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>
                {ticketStats.totalSold} sold / {
                  ticketStats.hasUnlimitedTickets 
                    ? "Unlimited" 
                    : `${ticketStats.totalCapacity} total`
                }
              </span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {event.tickets?.length > 0 && event.tickets[0].price && Number(event.tickets[0].price) > 0 ? 
                `Rs.${event.tickets[0].price}` : "Free"}
            </div>
          </div>

          {/* Attendance Progress Bar - Only show if not unlimited */}
          {!ticketStats.hasUnlimitedTickets && ticketStats.totalCapacity > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Attendance</span>
                <span>{attendanceRate.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    attendanceRate >= 80 ? "bg-green-500" : 
                    attendanceRate >= 50 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(attendanceRate, 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Ticket Info Summary */}
          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1">Ticket Status</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">
                {ticketStats.hasUnlimitedTickets 
                  ? "Unlimited tickets available" 
                  : `${ticketStats.remaining} tickets remaining`
                }
              </span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                ticketStats.hasUnlimitedTickets 
                  ? "bg-blue-100 text-blue-800" 
                  : ticketStats.remaining > 0 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
              }`}>
                {ticketStats.hasUnlimitedTickets 
                  ? "Unlimited" 
                  : ticketStats.remaining > 0 
                    ? "Available" 
                    : "Sold Out"
                }
              </span>
            </div>
          </div>

          {/* Bookings Warning Message */}
          {hasBookings && (
            <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-xs text-orange-700">
                  This event has {ticketStats.totalSold} {ticketStats.totalSold === 1 ? 'booking' : 'bookings'}. 
                 
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <Link
              to={`/organizer/events/${event.id}`}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              View Details →
            </Link>
            <div className="flex gap-2">
                <Link
                  to={`/organizer/events/${event.id}/edit`}
                  className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700"
                >
                  Edit
                </Link>
              <button
                onClick={() => handleDeleteEvent(event.id, event.title, hasBookings)}
                disabled={deletingEventId === event.id || hasBookings}
                className={`px-3 py-1 rounded text-sm ${
                  hasBookings 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
                title={hasBookings ? "Cannot delete event with bookings" : ""}
              >
                {deletingEventId === event.id ? (
                  <>
                    <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Events</h1>
              <p className="text-gray-600">Manage your events and track their performance</p>
            </div>
            <Link
              to="/organizer/events/create"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Link>
          </div>
          
         
        </div>

        {/* Search and Sorting */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split("-")
                  setSortBy(field)
                  setSortOrder(order)
                }}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="created_at-desc">Newest First</option>
                <option value="created_at-asc">Oldest First</option>
                <option value="start_date-asc">Event Date (Earliest)</option>
                <option value="start_date-desc">Event Date (Latest)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : events?.data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.data.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm ? "Try adjusting your search" : "Create your first event to get started!"}
            </p>
            <Link
              to="/organizer/events/create"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Link>
          </div>
        )}

        {/* Pagination */}
        {events?.meta?.last_page > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button 
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                disabled={events.meta.current_page === 1}
              >
                Previous
              </button>
              {[...Array(events.meta.last_page)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-2 border rounded-lg ${
                    i + 1 === events.meta.current_page
                      ? "bg-primary-600 text-white border-primary-600"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                disabled={events.meta.current_page === events.meta.last_page}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrganizerEvents