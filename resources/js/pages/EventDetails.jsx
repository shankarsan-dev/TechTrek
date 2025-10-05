// "use client"

// import { CalendarDays, Clock, MapPin, Star, Users } from "lucide-react"
// import { useState } from "react"
// import { useParams } from "react-router-dom"

// // Dummy event data - in real app this would come from API based on params.id
// const eventData = {
//   id: "1",
//   title: "AI & Machine Learning Summit 2024",
//   date: "2024-12-15",
//   time: "9:00 AM - 6:00 PM",
//   location: "San Francisco, CA",
//   venue: "Moscone Convention Center",
//   category: "Artificial Intelligence",
//   description:
//     "Join industry leaders and AI experts for a comprehensive exploration of the latest breakthroughs in artificial intelligence, machine learning, and neural networks. This summit features keynote presentations, hands-on workshops, and networking opportunities with top professionals in the field.",
//   imageUrl: "/placeholder.jpg",
//   price: "$299",
//   originalPrice: "$399",
//   attendees: 500,
//   maxAttendees: 750,
//   rating: 4.8,
//   reviews: 124,
//   organizer: {
//     name: "TechEvents Inc.",
//     avatar: "/placeholder-user.jpg",
//     verified: true,
//   },
//   agenda: [
//     { time: "9:00 AM", title: "Registration & Welcome Coffee" },
//     { time: "10:00 AM", title: "Keynote: The Future of AI" },
//     { time: "11:30 AM", title: "Workshop: Building Neural Networks" },
//     { time: "1:00 PM", title: "Lunch & Networking" },
//     { time: "2:30 PM", title: "Panel: AI Ethics and Responsibility" },
//     { time: "4:00 PM", title: "Hands-on: Machine Learning with Python" },
//     { time: "5:30 PM", title: "Closing Remarks & Networking" },
//   ],
//   speakers: [
//     { name: "Dr. Sarah Chen", role: "AI Research Director at Google", avatar: "/placeholder-user.jpg" },
//     { name: "Michael Rodriguez", role: "ML Engineer at OpenAI", avatar: "/placeholder-user.jpg" },
//     { name: "Prof. Lisa Wang", role: "Stanford AI Lab", avatar: "/placeholder-user.jpg" },
//   ],
//   tags: ["AI", "Machine Learning", "Deep Learning", "Neural Networks", "Python"],
// }

// const EventDetails = () => {
//   const { id } = useParams()
//   const [isRegistered, setIsRegistered] = useState(false)

//   const handleRegister = () => {
//     setIsRegistered(true)
//     // In real app, this would make API call to register user
//   }

//   // In a real app, you would fetch event data based on the id
//   // const event = useEventData(id);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.imageUrl || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{eventData.category}</span>
//               {eventData.tags.map((tag) => (
//                 <span key={tag} className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{eventData.title}</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.date}</div>
//                   <div className="text-sm">{eventData.time}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.attendees} registered</div>
//                   <div className="text-sm">of {eventData.maxAttendees} spots</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <Star size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.rating} rating</div>
//                   <div className="text-sm">{eventData.reviews} reviews</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="text-3xl font-bold text-green-600">{eventData.price}</div>
//                 <div className="text-lg text-gray-500 line-through">{eventData.originalPrice}</div>
//                 <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">25% OFF</span>
//               </div>

//               <button
//                 className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
//                 onClick={handleRegister}
//                 disabled={isRegistered}
//               >
//                 {isRegistered ? "✓ Registered" : "Register Now"}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {eventData.agenda.map((item, index) => (
//                   <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0">
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.title}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Featured Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {eventData.speakers.map((speaker, index) => (
//                   <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
//                     <img
//                       src={speaker.avatar || "/placeholder-user.jpg"}
//                       alt={speaker.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-600">{speaker.role}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Organizer */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Organizer</h2>
//               <div className="flex items-center gap-3">
//                 <img
//                   src={eventData.organizer.avatar || "/placeholder-user.jpg"}
//                   alt={eventData.organizer.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <div className="font-medium text-gray-900 flex items-center gap-2">
//                     {eventData.organizer.name}
//                     {eventData.organizer.verified && (
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Verified</span>
//                     )}
//                   </div>
//                   <div className="text-sm text-gray-600">Event Organizer</div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
//               <div className="space-y-3">
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Add to Calendar
//                 </button>
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Share Event
//                 </button>
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Contact Organizer
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//export default EventDetails

// "use client"

// import { CalendarDays, Clock, MapPin, Users } from "lucide-react"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { Badge } from "../components/Layout/ui/badge"
// import { Button } from "../components/Layout/ui/button"
// import { eventService } from "../services/eventService"

// const EventDetails = () => {
//   const { id } = useParams()
//   const [eventData, setEventData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [isRegistering, setIsRegistering] = useState(false)
//   const [selectedTicket, setSelectedTicket] = useState(null)
//   const [isRegistered, setIsRegistered] = useState(false)

//   // Fetch event details
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await eventService.getEvent(id)
//         if (response.success) {
//           setEventData(response.data)
//         } else {
//           setError("Event not found")
//         }
//       } catch (err) {
//         setError("Failed to load event")
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchEvent()
//   }, [id])

//   // Register handler
//   const confirmRegistration = async () => {
//     if (!selectedTicket) return
//     try {
//       const { data } = await eventService.registerTicket({
//         event_id: eventData.id,   // ✅ Use "id" instead of "_id"
//         ticket_id: selectedTicket.id,
//       })

//       if (data.success) {
//         setIsRegistered(true)
//         setIsRegistering(false)
//       } else {
//         alert(data.message || "Registration failed")
//       }
//     } catch (err) {
//       alert("Something went wrong!")
//     }
//   }

//   if (loading) return <div className="p-8 text-center">Loading event...</div>
//   if (error) return <div className="p-8 text-center text-red-500">{error}</div>
//   if (!eventData) return null

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* === Header Section === */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col lg:flex-row gap-6">
//           <div className="lg:w-2/3">
//             <img
//               src={eventData.featured_image || "/placeholder.svg"}
//               alt={eventData.title}
//               className="rounded-xl w-full h-96 object-cover"
//             />
//           </div>
//           <div className="lg:w-1/3 flex flex-col justify-between">
//             <div>
//               <h1 className="text-3xl font-bold mb-3">{eventData.title}</h1>
//               <Badge variant="secondary" className="mb-3">
//                 {eventData.category?.name || "Uncategorized"}
//               </Badge>

//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <CalendarDays size={16} />
//                   <span>
//                     {eventData.start_date} - {eventData.end_date}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock size={16} />
//                   <span>
//                     {eventData.start_time} - {eventData.end_time}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin size={16} />
//                   <span>
//                     {eventData.venue_name}, {eventData.location}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={16} />
//                   <span>
//                     {eventData.booked_count} / {eventData.capacity} booked
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* === Register Button === */}
//             <div className="mt-6">
//               {isRegistered ? (
//                 <Button className="w-full bg-green-600 text-white" disabled>
//                   Registered Successfully ✅
//                 </Button>
//               ) : (
//                 <Button
//                   className="w-full"
//                   onClick={() => setIsRegistering(true)}
//                 >
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* === Event Description === */}
//         <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">
//           <h2 className="text-2xl font-semibold mb-4">About this Event</h2>
//           <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
//         </div>

//         {/* === Registration Modal === */}
//         {isRegistering && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
//               <h2 className="text-xl font-bold mb-4">Select Ticket</h2>
//               {eventData.tickets?.length > 0 ? (
//                 <ul className="space-y-3 mb-4">
//                   {eventData.tickets.map((ticket) => (
//                     <li
//                       key={ticket.id}
//                       className={`p-3 border rounded cursor-pointer ${
//                         selectedTicket?.id === ticket.id
//                           ? "border-blue-500 bg-blue-50"
//                           : "hover:bg-gray-50"
//                       }`}
//                       onClick={() => setSelectedTicket(ticket)}
//                     >
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium">{ticket.type.toUpperCase()}</span>
//                         <span className="text-green-600 font-semibold">
//                           {ticket.is_free ? "Free" : `$${ticket.price}`}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-500">
//                         {ticket.quantity || "Unlimited"} remaining
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No tickets available</p>
//               )}

//               <div className="flex justify-end gap-3">
//                 <Button variant="outline" onClick={() => setIsRegistering(false)}>
//                   Cancel
//                 </Button>
//                 <Button
//                   onClick={confirmRegistration}
//                   disabled={!selectedTicket}
//                 >
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default EventDetails
// import { CalendarDays, Clock, MapPin, Star, Users } from "lucide-react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// // Replace this with real API fetch
// const eventData = { /* your event object */ };

// export default function EventDetails() {
//   const { id } = useParams();
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleRegister = () => setIsRegistered(true);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                 {eventData.category?.name || eventData.category}
//               </span>
//               {eventData.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">{eventData.start_time} - {eventData.end_time}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count} registered</div>
//                   <div className="text-sm">of {eventData.capacity} spots</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <Star size={20} />
//                 <div>
//                   <div className="font-medium">⭐ Featured Event</div>
//                   <div className="text-sm">{eventData.tags.join(", ")}</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="text-3xl font-bold text-green-600">
//                   {eventData.tickets?.[0]?.is_free ? "Free" : `$${eventData.tickets?.[0]?.price}`}
//                 </div>
//               </div>
//               <button
//                 className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
//                 onClick={handleRegister}
//                 disabled={isRegistered}
//               >
//                 {isRegistered ? "✓ Registered" : "Register Now"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="lg:col-span-2 flex flex-col gap-6">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {eventData.agenda.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {eventData.speakers.map((speaker, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
//                   >
//                     <img
//                       src={speaker.avatar || "/placeholder-user.jpg"}
//                       alt={speaker.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-600">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column (Sidebar) */}
//           <div className="flex flex-col gap-6">
//             {/* Organizer */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Organizer</h2>
//               <div className="flex flex-col gap-3">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={eventData.organizer?.avatar || "/placeholder-user.jpg"}
//                     alt={eventData.organizer?.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="font-medium text-gray-900">{eventData.organizer?.name}</div>
//                     <div className="text-sm text-gray-600">{eventData.organizer?.email}</div>
//                     <div className="text-sm text-gray-600">{eventData.organizer?.organization}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-3">
//               <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
//               <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                 Add to Calendar
//               </button>
//               <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                 Share Event
//               </button>
//               <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                 Contact Organizer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { CalendarDays, Clock, MapPin, Star, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { eventService } from "../services/eventService";

// const EventDetails = () => {
//   const { id } = useParams();
//   const [eventData, setEventData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await eventService.getEvent(id);
//         if (res.success) setEventData(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   const handleRegister = () => {
//     setIsRegistered(true);
//     // call registration API here if needed
//   };

//   if (loading) return <div className="p-8 text-center">Loading event...</div>;
//   if (!eventData) return <div className="p-8 text-center">Event not found.</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                 {eventData.category?.name || "General"}
//               </span>
//               {(eventData.tags || []).map((tag) => (
//                 <span
//                   key={tag}
//                   className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">
//                     {eventData.start_time} - {eventData.end_time}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-600">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-600">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count || 0} registered</div>
//                   <div className="text-sm">of {eventData.capacity || "--"} spots</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-600">
//                 <Star size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {eventData.tickets?.[0]?.price
//                       ? `$${eventData.tickets[0].price}`
//                       : "Free"}
//                   </div>
//                   <div className="text-sm">{eventData.tickets?.length || 0} ticket types</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               <button
//                 className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
//                 onClick={handleRegister}
//                 disabled={isRegistered}
//               >
//                 {isRegistered ? "✓ Registered" : "Register Now"}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData.agenda || []).map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Featured Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {(eventData.speakers || []).map((speaker, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
//                   >
//                     <img
//                       src={speaker.avatar || "/placeholder-user.jpg"}
//                       alt={speaker.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-600">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Organizer */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Organizer</h2>
//               <div className="flex flex-col gap-2">
//                 <div className="font-medium text-gray-900">
//                   {eventData.organizer?.name || "Organizer Name"}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   Email: {eventData.organizer?.email || "info@example.com"}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   Organization: {eventData.organizer?.organization || "Organization Name"}
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
//               <div className="space-y-3">
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Add to Calendar
//                 </button>
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Share Event
//                 </button>
//                 <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
//                   Contact Organizer
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;
// "use client";

// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/UI/Button";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const [eventData, setEventData] = useState(null);
//   const [organizerData, setOrganizerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [showTicketModal, setShowTicketModal] = useState(false);

//   useEffect(() => {
//     async function fetchEvent() {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);

//         if (res.data.organizer_id) {
//           const orgRes = await eventService.getOrganizerById(res.data.organizer_id);
//           setOrganizerData(orgRes.data);
//         }
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchEvent();
//   }, [id]);

//   const handleRegisterClick = () => setShowTicketModal(true);

//   const handleTicketSelect = (ticket) => {
//     console.log("Selected ticket:", ticket);
//     setIsRegistered(true);
//     setShowTicketModal(false);
//   };

//   if (loading) return <div className="p-8 text-center text-gray-700">Loading event...</div>;
//   if (!eventData) return <div className="p-8 text-center text-gray-700">Event not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full">
//                 {eventData.category?.name || eventData.category}
//               </span>
//               {(eventData.tags || []).map((tag) => (
//                 <span
//                   key={tag}
//                   className="border border-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">{eventData.start_time} - {eventData.end_time}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count} registered</div>
//                   <div className="text-sm">of {eventData.capacity} spots</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               <Button
//                 className="w-full sm:w-auto"
//                 onClick={handleRegisterClick}
//                 disabled={isRegistered}
//               >
//                 {isRegistered ? "✓ Registered" : "Register Now"}
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8 text-gray-900">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData.agenda || []).map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Featured Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {(eventData.speakers || []).map((speaker, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
//                       {speaker.name[0]}
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-700">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Organizer */}
//             {organizerData && (
//               <div className="bg-white p-6 rounded-lg shadow text-gray-900">
//                 <h2 className="text-xl font-bold mb-4">Organizer Details</h2>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={organizerData.avatar || "/placeholder-user.jpg"}
//                       alt={organizerData.name}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col gap-1">
//                       <div className="font-medium text-gray-900 flex items-center gap-2">
//                         {organizerData.name}
//                         {organizerData.verified && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
//                             Verified
//                           </span>
//                         )}
//                       </div>
//                       <div className="text-sm text-gray-800">{organizerData.email}</div>
//                       {organizerData.organization && (
//                         <div className="text-sm text-gray-800">{organizerData.organization}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//            {/* Quick Actions */}
//   {/* <div className="bg-white p-6 rounded-lg shadow space-y-3">
//     <Button className="w-full bg-white text-black hover:bg-gray-100 border border-gray-300">
//       Add to Calendar
//     </Button>
//     <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-300">
//       Share Event
//     </Button>
//     <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-300">
//       Contact Organizer
//     </Button>
//   </div> */}
//           </div>
//         </div>
//       </div>

//       {/* Ticket Modal */}
//       {showTicketModal && (
//         <div className="fixed inset-0 backdrop-blur-md bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-xl w-11/12 max-w-md p-6 space-y-4 shadow-2xl">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Ticket</h2>
//             <div className="space-y-3">
//               {(eventData.tickets || []).map((ticket) => (
//                 <div
//                   key={ticket.id}
//                   className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:shadow-lg transition bg-gray-50"
//                   onClick={() => handleTicketSelect(ticket)}
//                 >
//                   <div>
//                     <div className="font-medium text-gray-900">{ticket.type}</div>
//                     <div className="text-sm text-gray-700">
//                       {ticket.quantity ? `${ticket.quantity} available` : "Unlimited"}
//                     </div>
//                   </div>
//                   <div className="font-bold text-green-700">
//                     {ticket.is_free ? "Free" : `$${ticket.price}`}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <Button
//               className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
//               onClick={() => setShowTicketModal(false)}
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { QRCodeCanvas } from 'qrcode.react';
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/UI/Button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";
// export default function EventDetails() {
//   const { id } = useParams();
//   const [eventData, setEventData] = useState(null);
//   const [organizerData, setOrganizerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [showTicketModal, setShowTicketModal] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);
// const [qrCode, setQrCode] = useState(null);
//  const handleRegisterClick = () => setShowTicketModal(true);
// const {user}=useAuth();
  
//   useEffect(() => {

//     async function fetchEvent() {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);

//         // if (res.data.organizer_id) {
//         //   const orgRes = await eventService.getOrganizer(res.data.organizer_id);
//         //   setOrganizerData(orgRes.data);
//         // }
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchEvent();
//   }, [id]);

//  useEffect(() => {
//     const checkBooking = async () => {
//       if (!user?._id) return;
//       try {
//         const bookings = await bookingService.getUserBookings();
//         const existing = bookings.find(
//           (b) => b.event_id === eventData.id && b.user_id === user._id
//         );
//         if (existing) {
//           setIsRegistered(true);
//           setBookingId(existing.id); // store booking ID for cancel
//           setSelectedTicket({ id: existing.ticket_id });
//         }
//       } catch (err) {
//         console.error("Failed to check bookings:", err);
//       }
//     };

//     checkBooking();
//   }, [user, eventData]);



  

// const handleTicketSelect = async (ticket) => {
//   try {
//     const payload = {
//       event_id: id,   // make sure to use _id from Mongo
//       ticket_id: ticket.id,     // same here
//       user_id: user.id, // confirm this exists
//     };

//     console.log("Booking payload being sent:", payload);

//     const result = await bookingService.createBooking(payload);

//     setSelectedTicket(ticket);
//     setIsRegistered(true);
//     setShowTicketModal(false);

//     console.log("Booking success:", result);
//   } catch (err) {
//     console.error("Booking failed:", err.response?.data || err.message);
//   }
// };
//   if (loading) return <div className="p-8 text-center text-gray-700">Loading event...</div>;
//   if (!eventData) return <div className="p-8 text-center text-gray-700">Event not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {isRegistered && qrCode && (
//   <div className="mt-6 text-center">
//     <h3 className="text-lg font-bold mb-2">Your Event QR Code</h3>
//     <QRCodeCanvas value={qrCode} size={200} />
//     <p className="mt-2 text-sm text-gray-600">
//       Show this QR at check-in.
//     </p>
//   </div>
// )}

//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full">
//                 {eventData.category?.name || eventData.category}
//               </span>
//               {(eventData.tags || []).map((tag) => (
//                 <span
//                   key={tag}
//                   className="border border-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">{eventData.start_time} - {eventData.end_time}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count} registered</div>
//                   <div className="text-sm">of {eventData.capacity} spots</div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               {isRegistered ? (
//                 <div className="text-center">
//                   <p className="mb-2 font-medium">Your Ticket QR Code</p>
//                   <img
//                     src={`https://api.qrserver.com/v1/create-qr-code/?data=${eventData.id}-${localStorage.getItem("id")}&size=150x150`}
//                     alt="QR Code"
//                     className="mx-auto"
//                   />
//                 </div>
//               ) : (
//                 <Button
//                   className="w-full sm:w-auto"
//                   onClick={handleRegisterClick}
//                 >
//                   Register Now
//                 </Button>
//               )}

//                 {!isRegistered ? (
//         <button onClick={() => handleTicketSelect({ id: "ticket1" })}>
//           Book Ticket
//         </button>
//       ) : (
//         <>
//           <p>Ticket booked ✅</p>
//           <Button onClick={handleCancelBooking}>Cancel Booking</Button>
//         </>
//       )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData.agenda || []).map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.title || item.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {(eventData.speakers || []).map((speaker, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
//                       {speaker.name[0]}
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-700">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Organizer */}
//             {organizerData && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Organizer</h2>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={organizerData.avatar || "/placeholder-user.jpg"}
//                       alt={organizerData.name}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col gap-1">
//                       <div className="font-medium text-gray-900 flex items-center gap-2">
//                         {organizerData.name}
//                         {organizerData.verified && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
//                             Verified
//                           </span>
//                         )}
//                       </div>
//                       <div className="text-sm text-gray-800">{organizerData.email}</div>
//                       {organizerData.organization && (
//                         <div className="text-sm text-gray-800">{organizerData.organization}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Ticket Modal */}
//       {showTicketModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowTicketModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
//             <div className="space-y-4">
//               {(eventData.tickets || []).map((ticket) => (
//                 <div
//                   key={ticket.id}
//                   className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
//                   onClick={() => handleTicketSelect(ticket)}
//                 >
//                   <div>
//                     <div className="font-medium">{ticket.name}</div>
//                     <div className="text-sm text-gray-700">{ticket.description}</div>
//                   </div>
//                   <div className="font-semibold">{ticket.price} NPR</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { QRCodeCanvas } from 'qrcode.react';
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/UI/Button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [eventData, setEventData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [bookingId, setBookingId] = useState(null);
//   const [showTicketModal, setShowTicketModal] = useState(false);

//   const handleRegisterClick = () => setShowTicketModal(true);

//   // Fetch event data
//   useEffect(() => {
//     async function fetchEvent() {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchEvent();
//   }, [id]);

//   // Check if user already booked ticket
//   useEffect(() => {
//     const checkBooking = async () => {
//       if (!user?.id || !eventData) return;

//       try {
//         const bookings = await bookingService.getUserBookings();
//         const existing = bookings.find(
//           (b) =>
//             b.event_id === eventData.id &&
//             b.user_id === user.id &&
//             b.status !== "cancelled"
//         );

//         if (existing) {
//           setIsRegistered(true);
//           setBookingId(existing.id);
//           setSelectedTicket({ id: existing.ticket_id });
//         }
//       } catch (err) {
//         console.error("Failed to check bookings:", err);
//       }
//     };

//     checkBooking();
//   }, [user, eventData]);

//   // Handle ticket booking
//   const handleTicketSelect = async (ticket) => {
//     try {
//       const payload = {
//         event_id: eventData.id,
//         ticket_id: ticket.id,
//         user_id: user.id,
//       };

//       const result = await bookingService.createBooking(payload);

//       setSelectedTicket(ticket);
//       setIsRegistered(true);
//       setBookingId(result.id);
//       setShowTicketModal(false);

//       console.log("Booking success:", result);
//     } catch (err) {
//       console.error("Booking failed:", err.response?.data || err.message);
//     }
//   };

//   // Handle cancel booking
//   const handleCancelBooking = async () => {
//     if (!bookingId) return;

//     try {
//       await bookingService.cancelBooking(bookingId);
//       setIsRegistered(false);
//       setBookingId(null);
//       setSelectedTicket(null);
//       alert("Booking cancelled successfully");
//     } catch (err) {
//       console.error("Cancel booking failed:", err.response?.data || err.message);
//     }
//   };

//   if (loading) return <div className="p-8 text-center text-gray-700">Loading event...</div>;
//   if (!eventData) return <div className="p-8 text-center text-gray-700">Event not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               {isRegistered ? (
//                 <>
//                   <p>Ticket booked ✅</p>
//                   <Button onClick={handleCancelBooking}>Cancel Booking</Button>
//                   <div className="mt-4 text-center">
//                     <QRCodeCanvas value={`${eventData._id}-${user._id}`} size={150} />
//                     <p className="text-sm text-gray-600 mt-2">Show this QR at check-in</p>
//                   </div>
//                 </>
//               ) : (
//                 <Button className="w-full sm:w-auto" onClick={handleRegisterClick}>
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Ticket Modal */}
//         {showTicketModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//                 onClick={() => setShowTicketModal(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
//               <div className="space-y-4">
//                 {(eventData.tickets || []).map((ticket) => (
//                   <div
//                     key={ticket.id}
//                     className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
//                     onClick={() => handleTicketSelect(ticket)}
//                   >
//                     <div>
//                       <div className="font-medium">{ticket.name}</div>
//                       <div className="text-sm text-gray-700">{ticket.description}</div>
//                     </div>
//                     <div className="font-semibold">{ticket.price} NPR</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { QRCodeCanvas } from "qrcode.react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/UI/Button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();

//   const [eventData, setEventData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [bookingId, setBookingId] = useState(null);
//   const [showTicketModal, setShowTicketModal] = useState(false);

//   const handleRegisterClick = () => setShowTicketModal(true);

//   // Fetch event data
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   // Fetch user booking status
//   const fetchBookingStatus = async () => {
//     if (!user?.id || !eventData) return;
//     try {
//       const bookings = await bookingService.getUserBookings();
//       const existing = bookings.find(
//         (b) =>
//           b.event_id === eventData.id &&
//           b.user_id === user.id &&
//           b.status !== "cancelled"
//       );
//       if (existing) {
//         setIsRegistered(true);
//         setBookingId(existing.id);
//         setSelectedTicket({ id: existing.ticket_id });
//       } else {
//         setIsRegistered(false);
//         setBookingId(null);
//         setSelectedTicket(null);
//       }
//     } catch (err) {
//       console.error("Failed to check bookings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBookingStatus();
//   }, [user, eventData]);

//   // Handle ticket booking
//   const handleTicketSelect = async (ticket) => {
//     if (!user) return alert("Please login to book tickets.");
//     try {
//       const payload = {
//         event_id: eventData.id,
//         ticket_id: ticket.id,
//         user_id: user.id,
//       };

//       const result = await bookingService.createBooking(payload);

//       // Update state immediately
//       setSelectedTicket(ticket);
//       setIsRegistered(true);
//       setBookingId(result.booking.id);
//       setShowTicketModal(false);

//       // Refresh booking state
//       await fetchBookingStatus();
//       console.log("Booking success:", result);
//     } catch (err) {
//       console.error("Booking failed:", err.response?.data || err.message);
//     }
//   };

//   // Handle cancel booking
//   const handleCancelBooking = async () => {
//     if (!bookingId) return;
//     try {
//       await bookingService.cancelBooking(bookingId);

//       // Update state immediately
//       setIsRegistered(false);
//       setBookingId(null);
//       setSelectedTicket(null);

//       alert("Booking cancelled successfully");
//     } catch (err) {
//       console.error("Cancel booking failed:", err.response?.data || err.message);
//     }
//   };

//   if (loading)
//     return <div className="p-8 text-center text-gray-700">Loading event...</div>;
//   if (!eventData)
//     return <div className="p-8 text-center text-gray-700">Event not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               {isRegistered ? (
//                 <>
//                   <p>Ticket booked ✅</p>
//                   <Button onClick={handleCancelBooking}>Cancel Booking</Button>
//                   <div className="mt-4 text-center">
//                     <QRCodeCanvas
//                       value={`${eventData.id}-${user.id}`}
//                       size={150}
//                     />
//                     <p className="text-sm text-gray-600 mt-2">
//                       Show this QR at check-in
//                     </p>
//                   </div>
//                 </>
//               ) : (
//                 <Button
//                   className="w-full sm:w-auto"
//                   onClick={handleRegisterClick}
//                 >
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Ticket Modal */}
//         {showTicketModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//                 onClick={() => setShowTicketModal(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
//               <div className="space-y-4">
//                 {(eventData.tickets || []).map((ticket) => (
//                   <div
//                     key={ticket.id}
//                     className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
//                     onClick={() => handleTicketSelect(ticket)}
//                   >
//                     <div>
//                       <div className="font-medium">{ticket.name}</div>
//                       <div className="text-sm text-gray-700">
//                         {ticket.description}
//                       </div>
//                     </div>
//                     <div className="font-semibold">{ticket.price} NPR</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { QRCodeCanvas } from "qrcode.react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/Layout/ui/button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();

//   const [eventData, setEventData] = useState(null);
//   const [organizerData, setOrganizerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [bookingId, setBookingId] = useState(null);
//   const [showTicketModal, setShowTicketModal] = useState(false);

//   const handleRegisterClick = () => setShowTicketModal(true);

//   // Fetch event and organizer data
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);

//         // if (res.data.organizer_id) {
//         //   const orgRes = await eventService.getOrganizer(res.data.organizer_id);
//         //   setOrganizerData(orgRes.data);
//         // }
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   // Fetch user booking status
//   const fetchBookingStatus = async () => {
//     if (!user?.id || !eventData) return;
//     try {
//       const bookings = await bookingService.getUserBookings();
//       const existing = bookings.find(
//         (b) =>
//           b.event_id === eventData.id &&
//           b.user_id === user.id &&
//           b.status !== "cancelled"
//       );
//       if (existing) {
//         setIsRegistered(true);
//         setBookingId(existing.id);
//         setSelectedTicket({ id: existing.ticket_id });
//       } else {
//         setIsRegistered(false);
//         setBookingId(null);
//         setSelectedTicket(null);
//       }
//     } catch (err) {
//       console.error("Failed to check bookings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBookingStatus();
//   }, [user, eventData]);

//   // Handle ticket booking
//   const handleTicketSelect = async (ticket) => {
//     if (!user) return alert("Please login to book tickets.");
//     try {
//       const payload = {
//         event_id: eventData.id,
//         ticket_id: ticket.id,
//         user_id: user.id,
//       };

//       const result = await bookingService.createBooking(payload);

//       // Update state immediately
//       setSelectedTicket(ticket);
//       setIsRegistered(true);
//       setBookingId(result.booking.id);
//       setShowTicketModal(false);

//       // Refresh booking state
//       await fetchBookingStatus();
//       console.log("Booking success:", result);
//     } catch (err) {
//       console.error("Booking failed:", err.response?.data || err.message);
//     }
//   };

//   // Handle cancel booking
//   const handleCancelBooking = async () => {
//     if (!bookingId) return;
//     try {
//       await bookingService.cancelBooking(bookingId);

//       // Update state immediately
//       setIsRegistered(false);
//       setBookingId(null);
//       setSelectedTicket(null);

//       alert("Booking cancelled successfully");
//     } catch (err) {
//       console.error("Cancel booking failed:", err.response?.data || err.message);
//     }
//   };

//   if (loading)
//     return <div className="p-8 text-center text-gray-700">Loading event...</div>;
//   if (!eventData)
//     return <div className="p-8 text-center text-gray-700">Event not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             {/* Event Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">
//                     {eventData.start_time} - {eventData.end_time}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count} registered</div>
//                   <div className="text-sm">of {eventData.capacity} spots</div>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Actions */}
//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               {isRegistered ? (
//                 <>
//                   <p>Ticket booked ✅</p>
//                   <Button onClick={handleCancelBooking}>Cancel Booking</Button>
//                   <div className="mt-4 text-center">
//                     <QRCodeCanvas
//                       value={`${eventData.id}-${user.id}`}
//                       size={150}
//                     />
//                     <p className="text-sm text-gray-600 mt-2">
//                       Show this QR at check-in
//                     </p>
//                   </div>
//                 </>
//               ) : (
//                 <Button
//                   className="w-full sm:w-auto"
//                   onClick={handleRegisterClick}
//                 >
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="leading-relaxed">{eventData.description}</p>
//             </div>

//             {/* Agenda */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData.agenda || []).map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">{item.title || item.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Speakers */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {(eventData.speakers || []).map((speaker, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
//                       {speaker.name[0]}
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-700">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Organizer */}
//             {organizerData && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Organizer</h2>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={organizerData.avatar || "/placeholder-user.jpg"}
//                       alt={organizerData.name}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col gap-1">
//                       <div className="font-medium text-gray-900 flex items-center gap-2">
//                         {organizerData.name}
//                         {organizerData.verified && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
//                             Verified
//                           </span>
//                         )}
//                       </div>
//                       <div className="text-sm text-gray-800">{organizerData.email}</div>
//                       {organizerData.organization && (
//                         <div className="text-sm text-gray-800">{organizerData.organization}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Ticket Modal */}
//       {showTicketModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowTicketModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
//             <div className="space-y-4">
//               {(eventData.tickets || []).map((ticket) => (
//                 <div
//                   key={ticket.id}
//                   className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
//                   onClick={() => handleTicketSelect(ticket)}
//                 >
//                   <div>
//                     <div className="font-medium">{ticket.name}</div>
//                     <div className="text-sm text-gray-700">{ticket.description}</div>
//                   </div>
//                   <div className="font-semibold">{ticket.price} NPR</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { QRCodeCanvas } from "qrcode.react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "../components/Layout/ui/button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const [eventData, setEventData] = useState(null);
//   const [organizerData, setOrganizerData] = useState(null);
//   const [showTicketModal, setShowTicketModal] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   // Fetch event
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await eventService.getEvent(id);
//         setEventData(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   // Fetch user bookings with React Query
//   const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: bookingService.getUserBookings,
//   });

//   // Cancel booking mutation
//   const cancelMutation = useMutation({
//     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
//     onSuccess: () => queryClient.invalidateQueries(["bookings"]),
//   });

//   // Determine if user is registered
//   const bookings = bookingsData?.bookings ?? bookingsData ?? [];
//   const existingBooking = bookings.find(
//     (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
//   );

//   const isRegistered = !!existingBooking;
//   const bookingId = existingBooking?.id;

//   // Handle booking selection
//   const handleTicketSelect = async (ticket) => {
//     if (!user) return alert("Please login to book tickets.");
//     try {
//       const payload = {
//         event_id: eventData.id,
//         ticket_id: ticket.id,
//         user_id: user.id,
//       };
//       const result = await bookingService.createBooking(payload);

//       setSelectedTicket(ticket);
//       setShowTicketModal(false);
//       queryClient.invalidateQueries(["bookings"]);
//       console.log("Booking success:", result);
//     } catch (err) {
//       console.error("Booking failed:", err.response?.data || err.message);
//     }
//   };

//   // Handle cancel booking
//   const handleCancelBooking = async () => {
//     if (!bookingId) return;
//     try {
//       await cancelMutation.mutateAsync(bookingId);
//       alert("Booking cancelled successfully");
//     } catch (err) {
//       console.error("Cancel booking failed:", err.response?.data || err.message);
//     }
//   };

//   if (!eventData) return <div className="p-8 text-center">Loading event...</div>;
//   if (bookingsLoading) return <div className="p-8 text-center">Loading bookings...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Event Hero */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.svg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">
//                     {eventData.start_time} - {eventData.end_time}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.location}</div>
//                   <div className="text-sm">{eventData.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{eventData.booked_count} registered</div>
//                   <div className="text-sm">of {eventData.capacity} spots</div>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Actions */}
//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               {isRegistered ? (
//                 <>
//                   <p>Ticket booked ✅</p>
//                   <Button onClick={handleCancelBooking} disabled={cancelMutation.isLoading}>
//                     {cancelMutation.isLoading ? "Cancelling..." : "Cancel Booking"}
//                   </Button>
//                   <div className="mt-4 text-center">
//                     <QRCodeCanvas value={`${eventData.id}-${user.id}`} size={150} />
//                     <p className="text-sm text-gray-600 mt-2">Show this QR at check-in</p>
//                   </div>
//                 </>
//               ) : (
//                 <Button className="w-full sm:w-auto" onClick={() => setShowTicketModal(true)}>
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Description, Agenda, Speakers */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="leading-relaxed">{eventData.description}</p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData.agenda || []).map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                       <Clock size={16} />
//                       {item.time}
//                     </div>
//                     <div className="font-medium text-gray-900">
//                       {item.title || item.description}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Speakers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {(eventData.speakers || []).map((speaker, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
//                       {speaker.name[0]}
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-900">{speaker.name}</div>
//                       <div className="text-sm text-gray-700">{speaker.profession}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             {organizerData && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Organizer</h2>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={organizerData.avatar || "/placeholder-user.jpg"}
//                       alt={organizerData.name}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col gap-1">
//                       <div className="font-medium text-gray-900 flex items-center gap-2">
//                         {organizerData.name}
//                         {organizerData.verified && (
//                           <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
//                             Verified
//                           </span>
//                         )}
//                       </div>
//                       <div className="text-sm text-gray-800">{organizerData.email}</div>
//                       {organizerData.organization && (
//                         <div className="text-sm text-gray-800">{organizerData.organization}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Ticket Modal */}
//       {showTicketModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowTicketModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
//             <div className="space-y-4">
//               {(eventData.tickets || []).map((ticket) => (
//                 <div
//                   key={ticket.id}
//                   className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
//                   onClick={() => handleTicketSelect(ticket)}
//                 >
//                   <div>
//                     <div className="font-medium">{ticket.name}</div>
//                     <div className="text-sm text-gray-700">{ticket.description}</div>
//                   </div>
//                   <div className="font-semibold">{ticket.price} NPR</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Layout/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { bookingService } from "../services/bookingService";
import { eventService } from "../services/eventService";

export default function EventDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [id]);

  // Fetch event data
  const { data: eventData, isLoading: eventLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: () => eventService.getEvent(id),
    enabled: !!id,
  });

  // Fetch user bookings
  const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingService.getUserBookings,
    enabled: !!user,
  });

  const cancelMutation = useMutation({
    mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
    onSuccess: () => queryClient.invalidateQueries(["bookings"]),
  });

  const isLoading = eventLoading || bookingsLoading;

  // Skeleton Loader JSX
  if (isLoading)
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8 container mx-auto">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-64 md:h-80 rounded-lg mb-6 w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
          <div className="h-12 bg-gray-300 rounded w-40 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-32 bg-gray-300 rounded mb-4"></div>
              <div className="h-32 bg-gray-300 rounded mb-4"></div>
              <div className="h-32 bg-gray-300 rounded mb-4"></div>
            </div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-300 rounded"></div>
              <div className="h-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  const bookings = bookingsData?.bookings ?? bookingsData ?? [];
  const existingBooking = bookings.find(
    (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
  );

  const isRegistered = !!existingBooking;
  const bookingId = existingBooking?.id;

  const handleTicketSelect = async (ticket) => {
    if (!user) return alert("Please login to book tickets.");
    try {
      const payload = {
        event_id: eventData.id,
        ticket_id: ticket.id,
        user_id: user.id,
      };
      await bookingService.createBooking(payload);
      setSelectedTicket(ticket);
      setShowTicketModal(false);
      queryClient.invalidateQueries(["bookings"]);
    } catch (err) {
      console.error("Booking failed:", err.response?.data || err.message);
    }
  };

  const handleCancelBooking = async () => {
    if (!bookingId) return;
    try {
      await cancelMutation.mutateAsync(bookingId);
      alert("Booking cancelled successfully");
    } catch (err) {
      console.error("Cancel booking failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Event Hero */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <img
            src={eventData?.featured_image || "/placeholder.svg"}
            alt={eventData?.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {eventData?.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
              <div className="flex items-center gap-2">
                <CalendarDays size={20} />
                <div>
                  <div className="font-medium">
                    {new Date(eventData?.start_date).toLocaleDateString()} -{" "}
                    {new Date(eventData?.end_date).toLocaleDateString()}
                  </div>
                  <div className="text-sm">
                    {eventData?.start_time} - {eventData?.end_time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <div>
                  <div className="font-medium">{eventData?.location}</div>
                  <div className="text-sm">{eventData?.venue_name}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <div>
                  <div className="font-medium">{eventData?.booked_count} registered</div>
                  <div className="text-sm">of {eventData?.capacity} spots</div>
                </div>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {isRegistered ? (
                <>
                  <p>Ticket booked ✅</p>
                  <Button onClick={handleCancelBooking} disabled={cancelMutation.isLoading}>
                    {cancelMutation.isLoading ? "Cancelling..." : "Cancel Booking"}
                  </Button>
                  <div className="mt-4 text-center">
                    <QRCodeCanvas value={`${eventData.id}-${user.id}`} size={150} />
                    <p className="text-sm text-gray-600 mt-2">Show this QR at check-in</p>
                  </div>
                </>
              ) : (
                <Button className="w-full sm:w-auto" onClick={() => setShowTicketModal(true)}>
                  Register Now
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Description, Agenda, Speakers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="leading-relaxed">{eventData?.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
              <div className="space-y-4">
                {(eventData?.agenda || []).map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
                      <Clock size={16} />
                      {item.time}
                    </div>
                    <div className="font-medium text-gray-900">{item.title || item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(eventData?.speakers || []).map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                      {speaker.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{speaker.name}</div>
                      <div className="text-sm text-gray-700">{speaker.profession}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar placeholder */}
          <div className="space-y-6"></div>
        </div>
      </div>

      {/* Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowTicketModal(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
            <div className="space-y-4">
              {eventData?.tickets?.length ? (
                eventData.tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleTicketSelect(ticket)}
                  >
                    <div>
                      <div className="font-medium">{ticket.name}</div>
                      <div className="text-sm text-gray-700">{ticket.description}</div>
                    </div>
                    <div className="font-semibold">{ticket.price} NPR</div>
                  </div>
                ))
              ) : (
                <div className="animate-pulse">
                  <div className="h-16 bg-gray-300 rounded mb-2"></div>
                  <div className="h-16 bg-gray-300 rounded mb-2"></div>
                  <div className="h-16 bg-gray-300 rounded mb-2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
