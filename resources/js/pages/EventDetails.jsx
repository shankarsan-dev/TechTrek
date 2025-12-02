// // // "use client";
// // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // // import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// // // import { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { Button } from "../components/Layout/ui/button";
// // // import { useAuth } from "../contexts/AuthContext";
// // // import { bookingService } from "../services/bookingService";
// // // import { eventService } from "../services/eventService";

// // // export default function EventDetails() {
// // //   const { id } = useParams();
// // //   const { user } = useAuth();
// // //   const navigate = useNavigate();
// // //   const queryClient = useQueryClient();

// // //   const [showTicketModal, setShowTicketModal] = useState(false);
// // //   const [selectedTicket, setSelectedTicket] = useState(null);

// // //   useEffect(() => {
// // //     const timeout = setTimeout(() => {
// // //       window.scrollTo({ top: 0, behavior: "smooth" });
// // //     }, 100);
// // //     return () => clearTimeout(timeout);
// // //   }, [id]);

// // //   // Fetch event data
// // //   const { data: eventData, isLoading: eventLoading } = useQuery({
// // //     queryKey: ["event", id],
// // //     queryFn: () => eventService.getEvent(id),
// // //     enabled: !!id,
// // //   });

// // //   // Fetch user bookings
// // //   const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
// // //     queryKey: ["bookings"],
// // //     queryFn: bookingService.getUserBookings,
// // //     enabled: !!user,
// // //   });

// // //   const cancelMutation = useMutation({
// // //     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
// // //     onSuccess: () => queryClient.invalidateQueries(["bookings"]),
// // //   });

// // //   const isLoading = eventLoading || bookingsLoading;

// // //   if (isLoading)
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 px-4 py-8 container mx-auto">
// // //         <div className="animate-pulse">
// // //           <div className="bg-gray-300 h-64 md:h-80 rounded-lg mb-6 w-full"></div>
// // //           <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //             <div className="h-16 bg-gray-300 rounded"></div>
// // //             <div className="h-16 bg-gray-300 rounded"></div>
// // //             <div className="h-16 bg-gray-300 rounded"></div>
// // //             <div className="h-16 bg-gray-300 rounded"></div>
// // //           </div>
// // //           <div className="h-12 bg-gray-300 rounded w-40 mb-4"></div>
// // //           <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// // //           <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// // //           <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
// // //             <div className="lg:col-span-2 space-y-4">
// // //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// // //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// // //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// // //             </div>
// // //             <div className="space-y-4">
// // //               <div className="h-24 bg-gray-300 rounded"></div>
// // //               <div className="h-24 bg-gray-300 rounded"></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );

// // //   const bookings = bookingsData?.bookings ?? bookingsData ?? [];
// // //   const existingBooking = bookings.find(
// // //     (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
// // //   );

// // //   const isRegistered = !!existingBooking;
// // //   const bookingId = existingBooking?.id;

// // //   const totalCapacity =
// // //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.quantity) || 0), 0) || 0;
// // //   const totalBooked =
// // //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.sold) || 0), 0) || 0;

// // //   const handleTicketSelect = async (ticket) => {
// // //     if (!user) return alert("Please login to book tickets.");
// // //     try {
// // //       const payload = {
// // //         event_id: eventData.id,
// // //         ticket_id: ticket.id,
// // //         user_id: user.id,
// // //       };
// // //       await bookingService.createBooking(payload);
// // //       setSelectedTicket(ticket);
// // //       setShowTicketModal(false);
// // //       queryClient.invalidateQueries(["bookings"]);
// // //       navigate("/user/bookings");
// // //     } catch (err) {
// // //       const msg = err.response?.data?.message || err.message;
// // //       alert(msg); // Show error alert in frontend
// // //       console.error("Booking failed:", msg);
// // //     }
// // //   };

// // //   const handleCancelBooking = async () => {
// // //     if (!bookingId) return;
// // //     try {
// // //       await cancelMutation.mutateAsync(bookingId);
// // //       alert("Booking cancelled successfully");
// // //     } catch (err) {
// // //       const msg = err.response?.data?.message || err.message;
// // //       alert(msg);
// // //       console.error("Cancel booking failed:", msg);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 text-gray-900">
// // //       <div className="container mx-auto px-4 py-8">
// // //         {/* Event Hero */}
// // //         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
// // //           <img
// // //             src={eventData?.featured_image || "/placeholder.svg"}
// // //             alt={eventData?.title}
// // //             className="w-full h-64 md:h-80 object-cover"
// // //           />
// // //           <div className="flex flex-wrap gap-2 mb-4 px-6 pt-4">
// // //             <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// // //               {eventData.category?.name || "Uncategorized"}
// // //             </span>
// // //             {eventData.tags?.map((tag) => (
// // //               <span
// // //                 key={tag}
// // //                 className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full"
// // //               >
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>
// // //           <div className="p-6 md:p-8">
// // //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // //               {eventData?.title}
// // //             </h1>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
// // //               <div className="flex items-center gap-2">
// // //                 <CalendarDays size={20} />
// // //                 <div>
// // //                   <div className="font-medium">
// // //                     {new Date(eventData?.start_date).toLocaleDateString()} -{" "}
// // //                     {new Date(eventData?.end_date).toLocaleDateString()}
// // //                   </div>
// // //                   <div className="text-sm">
// // //                     {eventData?.start_time} - {eventData?.end_time}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <MapPin size={20} />
// // //                 <div>
// // //                   <div className="font-medium">{eventData?.location}</div>
// // //                   <div className="text-sm">{eventData?.venue_name}</div>
// // //                 </div>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <Users size={20} />
// // //                 <div>
// // //                   <div className="font-medium">{totalBooked} registered</div>
// // //                   <div className="text-sm">of {totalCapacity} spots</div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Booking Actions */}
// // //             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
// // //               {isRegistered ? (
// // //                 <>
// // //                   {existingBooking.checked_in ? (
// // //                     <p className="text-green-600 font-medium">Checked In ✅</p>
// // //                   ) : (
// // //                     <>
// // //                       <p>Ticket booked ✅</p>
// // //                       <Button
// // //                         onClick={handleCancelBooking}
// // //                         disabled={cancelMutation.isLoading}
// // //                       >
// // //                         {cancelMutation.isLoading
// // //                           ? "Cancelling..."
// // //                           : "Cancel Booking"}
// // //                       </Button>
// // //                     </>
// // //                   )}
// // //                 </>
// // //               ) : (
// // //                 <Button
// // //                   className="w-full sm:w-auto"
// // //                   onClick={() => setShowTicketModal(true)}
// // //                 >
// // //                   Register Now
// // //                 </Button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Description, Agenda, Speakers */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //           <div className="lg:col-span-2 space-y-8">
// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h2 className="text-xl font-bold mb-4">About This Event</h2>
// // //               <p className="leading-relaxed">{eventData?.description}</p>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
// // //               <div className="space-y-4">
// // //                 {(eventData?.agenda || []).map((item, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
// // //                   >
// // //                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
// // //                       <Clock size={16} />
// // //                       {item.time}
// // //                     </div>
// // //                     <div className="font-medium text-gray-900">
// // //                       {item.title || item.description}
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h2 className="text-xl font-bold mb-4">Speakers</h2>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                 {(eventData?.speakers || []).map((speaker, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
// // //                   >
// // //                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
// // //                       {speaker.name[0]}
// // //                     </div>
// // //                     <div>
// // //                       <div className="font-medium text-gray-900">{speaker.name}</div>
// // //                       <div className="text-sm text-gray-700">{speaker.profession}</div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="space-y-6"></div>
// // //         </div>
// // //       </div>

// // //       {/* Ticket Modal */}
// // //       {showTicketModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // //           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
// // //             <button
// // //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
// // //               onClick={() => setShowTicketModal(false)}
// // //             >
// // //               ✕
// // //             </button>
// // //             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
// // //             <div className="space-y-4">
// // //               {eventData?.tickets?.length ? (
// // //                 eventData.tickets.map((ticket) => {
// // //                   const today = new Date();
// // //                   const startDate = ticket.sale_start_date
// // //                     ? new Date(ticket.sale_start_date)
// // //                     : new Date(); // starts today if null
// // //                   const endDate = ticket.sale_end_date
// // //                     ? new Date(ticket.sale_end_date)
// // //                     : new Date(eventData.start_date); // ends on event start if null

// // //                   const availableSeats =
// // //                     (parseInt(ticket.quantity) || 0) -
// // //                     (parseInt(ticket.sold) || 0);

// // //                   let statusText = "";
// // //                   let isBookable = true;

// // //                   if (availableSeats <= 0) {
// // //                     statusText = "Sold Out";
// // //                     isBookable = false;
// // //                   } else if (today < startDate) {
// // //                     const diff = Math.ceil(
// // //                       (startDate - today) / (1000 * 60 * 60 * 24)
// // //                     );
// // //                     statusText = `Sale starts in ${diff} day${diff > 1 ? "s" : ""}`;
// // //                     isBookable = false;
// // //                   } else if (today > endDate) {
// // //                     statusText = "Sale ended";
// // //                     isBookable = false;
// // //                   } else {
// // //                     statusText = `Available (${availableSeats} left)`;
// // //                   }

// // //                   return (
// // //                     <div
// // //                       key={ticket.id}
// // //                       className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50"
// // //                     >
// // //                       <div>
// // //                         <div className="font-medium">{ticket.type}</div>
// // //                         <div className="text-sm text-gray-700">{ticket.description}</div>
// // //                         <div className="text-sm font-semibold">
// // //                           {ticket.is_free ? "Free" : `${ticket.price} NPR`}
// // //                         </div>
// // //                         <div
// // //                           className={`text-sm mt-1 ${
// // //                             isBookable ? "text-green-600" : "text-red-600"
// // //                           }`}
// // //                         >
// // //                           {statusText}
// // //                         </div>
// // //                       </div>
// // //                       <Button
// // //                         className={`${
// // //                           isBookable
// // //                             ? "bg-blue-600 hover:bg-blue-700 text-white"
// // //                             : "bg-gray-300 text-gray-600 cursor-not-allowed"
// // //                         }`}
// // //                         disabled={!isBookable}
// // //                         onClick={() => handleTicketSelect(ticket)}
// // //                       >
// // //                         {isBookable ? "Book Now" : "Unavailable"}
// // //                       </Button>
// // //                     </div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <div className="animate-pulse">
// // //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// // //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// // //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { Button } from "../components/Layout/ui/button";
// // import { useAuth } from "../contexts/AuthContext";
// // import { bookingService } from "../services/bookingService";
// // import { eventService } from "../services/eventService";

// // export default function EventDetails() {
// //   const { id } = useParams();
// //   const { user } = useAuth();
// //   const navigate = useNavigate();
// //   const queryClient = useQueryClient();

// //   const [showTicketModal, setShowTicketModal] = useState(false);
// //   const [selectedTicket, setSelectedTicket] = useState(null);

// //   useEffect(() => {
// //     const timeout = setTimeout(() => {
// //       window.scrollTo({ top: 0, behavior: "smooth" });
// //     }, 100);
// //     return () => clearTimeout(timeout);
// //   }, [id]);

// //   // Fetch event data
// //   const { data: eventData, isLoading: eventLoading } = useQuery({
// //     queryKey: ["event", id],
// //     queryFn: () => eventService.getEvent(id),
// //     enabled: !!id,
// //   });

// //   // Fetch user bookings
// //   const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
// //     queryKey: ["bookings"],
// //     queryFn: bookingService.getUserBookings,
// //     enabled: !!user,
// //   });

// //   const cancelMutation = useMutation({
// //     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
// //     onSuccess: () => queryClient.invalidateQueries(["bookings"]),
// //   });

// //   const isLoading = eventLoading || bookingsLoading;

// //   if (isLoading)
// //     return (
// //       <div className="min-h-screen bg-gray-50 px-4 py-8 container mx-auto">
// //         <div className="animate-pulse">
// //           <div className="bg-gray-300 h-64 md:h-80 rounded-lg mb-6 w-full"></div>
// //           <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //           </div>
// //           <div className="h-12 bg-gray-300 rounded w-40 mb-4"></div>
// //           <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// //           <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
// //           <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
// //             <div className="lg:col-span-2 space-y-4">
// //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// //               <div className="h-32 bg-gray-300 rounded mb-4"></div>
// //             </div>
// //             <div className="space-y-4">
// //               <div className="h-24 bg-gray-300 rounded"></div>
// //               <div className="h-24 bg-gray-300 rounded"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );

// //   const bookings = bookingsData?.bookings ?? bookingsData ?? [];
// //   const existingBooking = bookings.find(
// //     (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
// //   );

// //   const isRegistered = !!existingBooking;
// //   const bookingId = existingBooking?.id;

// //   const totalCapacity =
// //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.quantity) || 0), 0) || 0;
// //   const totalBooked =
// //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.sold) || 0), 0) || 0;

// //   const handleTicketSelect = async (ticket) => {
// //     if (!user) return alert("Please login to book tickets.");
// //     try {
// //       const payload = {
// //         event_id: eventData.id,
// //         ticket_id: ticket.id,
// //         user_id: user.id,
// //       };
// //       await bookingService.createBooking(payload);
// //       setSelectedTicket(ticket);
// //       setShowTicketModal(false);
// //       queryClient.invalidateQueries(["bookings"]);
// //       navigate("/user/bookings");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || err.message;
// //       alert(msg); // Show error alert in frontend
// //       console.error("Booking failed:", msg);
// //     }
// //   };

// //   const handleCancelBooking = async () => {
// //     if (!bookingId) return;
// //     try {
// //       await cancelMutation.mutateAsync(bookingId);
// //       alert("Booking cancelled successfully");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || err.message;
// //       alert(msg);
// //       console.error("Cancel booking failed:", msg);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-900">
// //       <div className="container mx-auto px-4 py-8">
// //         {/* Event Hero */}
// //         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
// //           <img
// //             src={eventData?.featured_image || "/placeholder.svg"}
// //             alt={eventData?.title}
// //             className="w-full h-64 md:h-80 object-cover"
// //           />
// //           <div className="flex flex-wrap gap-2 mb-4 px-6 pt-4">
// //             <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// //               {eventData.category?.name || "Uncategorized"}
// //             </span>
// //             {eventData.tags?.map((tag) => (
// //               <span
// //                 key={tag}
// //                 className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full"
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //           <div className="p-6 md:p-8">
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               {eventData?.title}
// //             </h1>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
// //               <div className="flex items-center gap-2">
// //                 <CalendarDays size={20} />
// //                 <div>
// //                   <div className="font-medium">
// //                     {new Date(eventData?.start_date).toLocaleDateString()} -{" "}
// //                     {new Date(eventData?.end_date).toLocaleDateString()}
// //                   </div>
// //                   <div className="text-sm">
// //                     {eventData?.start_time} - {eventData?.end_time}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <MapPin size={20} />
// //                 <div>
// //                   <div className="font-medium">{eventData?.location}</div>
// //                   <div className="text-sm">{eventData?.venue_name}</div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Users size={20} />
// //                 <div>
// //                   <div className="font-medium">{totalBooked} registered</div>
// //                   <div className="text-sm">of {totalCapacity} spots</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
// //               {isRegistered ? (
// //                 <>
// //                   {existingBooking.checked_in ? (
// //                     <p className="text-green-600 font-medium">Checked In ✅</p>
// //                   ) : (
// //                     <>
// //                       <p>Ticket booked ✅</p>
// //                       <Button
// //                         onClick={handleCancelBooking}
// //                         disabled={cancelMutation.isLoading}
// //                       >
// //                         {cancelMutation.isLoading
// //                           ? "Cancelling..."
// //                           : "Cancel Booking"}
// //                       </Button>
// //                     </>
// //                   )}
// //                 </>
// //               ) : (
// //                 <Button
// //                   className="w-full sm:w-auto"
// //                   onClick={() => setShowTicketModal(true)}
// //                 >
// //                   Register Now
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Description, Agenda, Speakers */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           <div className="lg:col-span-2 space-y-8">
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h2 className="text-xl font-bold mb-4">About This Event</h2>
// //               <p className="leading-relaxed">{eventData?.description}</p>
// //             </div>

// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
// //               <div className="space-y-4">
// //                 {(eventData?.agenda || []).map((item, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
// //                   >
// //                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
// //                       <Clock size={16} />
// //                       {item.time}
// //                     </div>
// //                     <div className="font-medium text-gray-900">
// //                       {item.title || item.description}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h2 className="text-xl font-bold mb-4">Speakers</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {(eventData?.speakers || []).map((speaker, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
// //                   >
// //                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
// //                       {speaker.name[0]}
// //                     </div>
// //                     <div>
// //                       <div className="font-medium text-gray-900">{speaker.name}</div>
// //                       <div className="text-sm text-gray-700">{speaker.profession}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="space-y-6"></div>
// //         </div>
// //       </div>

// //       {/* Ticket Modal */}
// //       {showTicketModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
// //               onClick={() => setShowTicketModal(false)}
// //             >
// //               ✕
// //             </button>
// //             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>
// //             <div className="space-y-4">
// //               {eventData?.tickets?.length ? (
// //                 eventData.tickets.map((ticket) => {
// //                   const today = new Date();
// //                   const startDate = ticket.sale_start_date
// //                     ? new Date(ticket.sale_start_date)
// //                     : new Date();
// //                   const endDate = ticket.sale_end_date
// //                     ? new Date(ticket.sale_end_date)
// //                     : new Date(eventData.start_date);

// //                   // Treat null, empty, or "" quantity as unlimited
// //                   const ticketQuantity =
// //                     ticket.quantity && parseInt(ticket.quantity) > 0
// //                       ? parseInt(ticket.quantity)
// //                       : Infinity;

// //                   const sold = parseInt(ticket.sold) || 0;
// //                   const availableSeats = ticketQuantity - sold;

// //                   let statusText = "";
// //                   let isBookable = true;

// //                   if (availableSeats <= 0) {
// //                     statusText = "Sold Out";
// //                     isBookable = false;
// //                   } else if (today < startDate) {
// //                     const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
// //                     statusText = `Sale starts in ${diff} day${diff > 1 ? "s" : ""}`;
// //                     isBookable = false;
// //                   } else if (today > endDate) {
// //                     statusText = "Sale ended";
// //                     isBookable = false;
// //                   } else {
// //                     statusText =
// //                       ticketQuantity === Infinity
// //                         ? "Available"
// //                         : `Available (${availableSeats} left)`;
// //                   }

// //                   return (
// //                     <div
// //                       key={ticket.id}
// //                       className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50"
// //                     >
// //                       <div>
// //                         <div className="font-medium">{ticket.type}</div>
// //                         <div className="text-sm text-gray-700">{ticket.description}</div>
// //                         <div className="text-sm font-semibold">
// //                           {ticket.is_free ? "Free" : `${ticket.price} NPR`}
// //                         </div>
// //                         <div
// //                           className={`text-sm mt-1 ${
// //                             isBookable ? "text-green-600" : "text-red-600"
// //                           }`}
// //                         >
// //                           {statusText}
// //                         </div>
// //                       </div>
// //                       <Button
// //                         className={`${
// //                           isBookable
// //                             ? "bg-blue-600 hover:bg-blue-700 text-white"
// //                             : "bg-gray-300 text-gray-600 cursor-not-allowed"
// //                         }`}
// //                         disabled={!isBookable}
// //                         onClick={() => handleTicketSelect(ticket)}
// //                       >
// //                         {isBookable ? "Book Now" : "Unavailable"}
// //                       </Button>
// //                     </div>
// //                   );
// //                 })
// //               ) : (
// //                 <div className="animate-pulse">
// //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// //                   <div className="h-16 bg-gray-300 rounded mb-2"></div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// // "use client";
// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { Button } from "../components/Layout/ui/button";
// // import { useAuth } from "../contexts/AuthContext";
// // import { bookingService } from "../services/bookingService";
// // import { eventService } from "../services/eventService";

// // export default function EventDetails() {
// //   const { id } = useParams();
// //   const { user } = useAuth();
// //   const navigate = useNavigate();
// //   const queryClient = useQueryClient();

// //   const [showTicketModal, setShowTicketModal] = useState(false);
// //   const [selectedTicket, setSelectedTicket] = useState(null);

// //   useEffect(() => {
// //     const timeout = setTimeout(() => {
// //       window.scrollTo({ top: 0, behavior: "smooth" });
// //     }, 100);
// //     return () => clearTimeout(timeout);
// //   }, [id]);

// //   // Fetch event data
// //   const { data: eventData, isLoading: eventLoading } = useQuery({
// //     queryKey: ["event", id],
// //     queryFn: () => eventService.getEvent(id),
// //     enabled: !!id,
// //   });

// //   // Fetch user bookings
// //   const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
// //     queryKey: ["bookings"],
// //     queryFn: bookingService.getUserBookings,
// //     enabled: !!user,
// //   });

// //   const cancelMutation = useMutation({
// //     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
// //     onSuccess: () => queryClient.invalidateQueries(["bookings"]),
// //   });

// //   const isLoading = eventLoading || bookingsLoading;

// //   if (isLoading)
// //     return (
// //       <div className="min-h-screen bg-gray-50 px-4 py-8 container mx-auto">
// //         <div className="animate-pulse">
// //           <div className="bg-gray-300 h-64 md:h-80 rounded-lg mb-6 w-full"></div>
// //           <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //             <div className="h-16 bg-gray-300 rounded"></div>
// //           </div>
// //         </div>
// //       </div>
// //     );

// //   const bookings = bookingsData?.bookings ?? bookingsData ?? [];
// //   const existingBooking = bookings.find(
// //     (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
// //   );

// //   const isRegistered = !!existingBooking;
// //   const bookingId = existingBooking?.id;

// //   const totalCapacity =
// //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.quantity) || 0), 0) || 0;
// //   const totalBooked =
// //     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.sold) || 0), 0) || 0;

// //   const handleTicketSelect = async (ticket) => {
// //     if (!user) return alert("Please login to book tickets.");
// //     try {
// //       const payload = {
// //         event_id: eventData.id,
// //         ticket_id: ticket.id,
// //         user_id: user.id,
// //       };
// //       await bookingService.createBooking(payload);
// //       setSelectedTicket(ticket);
// //       setShowTicketModal(false);
// //       queryClient.invalidateQueries(["bookings"]);
// //       navigate("/user/bookings");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || err.message;
// //       alert(msg);
// //       console.error("Booking failed:", msg);
// //     }
// //   };

// //   const handleCancelBooking = async () => {
// //     if (!bookingId) return;
// //     try {
// //       await cancelMutation.mutateAsync(bookingId);
// //       alert("Booking cancelled successfully");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || err.message;
// //       alert(msg);
// //       console.error("Cancel booking failed:", msg);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-900">
// //       <div className="container mx-auto px-4 py-8">

// //         {/* Event Hero */}
// //         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
// //           <img
// //             src={eventData?.featured_image || "/placeholder.svg"}
// //             alt={eventData?.title}
// //             className="w-full h-64 md:h-80 object-cover"
// //           />

// //           <div className="p-6 md:p-8">
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               {eventData?.title}
// //             </h1>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
// //               <div className="flex items-center gap-2">
// //                 <CalendarDays size={20} />
// //                 <div>
// //                   <div className="font-medium">
// //                     {new Date(eventData?.start_date).toLocaleDateString()} -{" "}
// //                     {new Date(eventData?.end_date).toLocaleDateString()}
// //                   </div>
// //                   <div className="text-sm">
// //                     {eventData?.start_time} - {eventData?.end_time}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <MapPin size={20} />
// //                 <div>
// //                   <div className="font-medium">{eventData?.location}</div>
// //                   <div className="text-sm">{eventData?.venue_name}</div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Users size={20} />
// //                 <div>
// //                   <div className="font-medium">{totalBooked} registered</div>
// //                   <div className="text-sm">of {totalCapacity} spots</div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* -------------------------------------------------- */}
// //             {/*     ✔ Booking Actions with checked_in logic        */}
// //             {/* -------------------------------------------------- */}
// //             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-between mt-4">
// //               {isRegistered ? (
// //                 existingBooking.checked_in ? (
// //                   // If checked in → remove cancel button, show View Bookings
// //                   <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
// //                     <p className="text-green-600 font-medium">Checked In ✅</p>
// //                     <Button
// //                       className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
// //                       onClick={() => navigate("/user/bookings")}
// //                     >
// //                       View My Bookings
// //                     </Button>
// //                   </div>
// //                 ) : (
// //                   // If not checked in → show cancel button
// //                   <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
// //                     <p className="font-medium">Ticket booked ✅</p>
// //                     <Button
// //                       onClick={handleCancelBooking}
// //                       disabled={cancelMutation.isLoading}
// //                       className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
// //                     >
// //                       {cancelMutation.isLoading ? "Cancelling..." : "Cancel Booking"}
// //                     </Button>
// //                   </div>
// //                 )
// //               ) : (
// //                 // If not registered → show Register button
// //                 <Button
// //                   className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
// //                   onClick={() => setShowTicketModal(true)}
// //                 >
// //                   Register Now
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* -------------------------------------------------- */}
// //         {/*                  Description / Agenda              */}
// //         {/* -------------------------------------------------- */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           <div className="lg:col-span-2 space-y-8">
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h2 className="text-xl font-bold mb-4">About This Event</h2>
// //               <p className="leading-relaxed">{eventData?.description}</p>
// //             </div>

// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
// //               <div className="space-y-4">
// //                 {(eventData?.agenda || []).map((item, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
// //                   >
// //                     <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
// //                       <Clock size={16} />
// //                       {item.time}
// //                     </div>
// //                     <div className="font-medium text-gray-900">
// //                       {item.title || item.description}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="space-y-6"></div>
// //         </div>
// //       </div>

// //       {/* -------------------------------------------------- */}
// //       {/*                   Ticket Modal                     */}
// //       {/* -------------------------------------------------- */}
// //       {showTicketModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
// //               onClick={() => setShowTicketModal(false)}
// //             >
// //               ✕
// //             </button>
// //             <h3 className="text-xl font-bold mb-4">Select a Ticket</h3>

// //             <div className="space-y-4">
// //               {eventData?.tickets?.map((ticket) => {
// //                 const today = new Date();
// //                 const startDate = ticket.sale_start_date
// //                   ? new Date(ticket.sale_start_date)
// //                   : new Date();
// //                 const endDate = ticket.sale_end_date
// //                   ? new Date(ticket.sale_end_date)
// //                   : new Date(eventData.start_date);

// //                 const ticketQuantity =
// //                   ticket.quantity && parseInt(ticket.quantity) > 0
// //                     ? parseInt(ticket.quantity)
// //                     : Infinity;

// //                 const sold = parseInt(ticket.sold) || 0;
// //                 const availableSeats = ticketQuantity - sold;

// //                 let statusText = "";
// //                 let isBookable = true;

// //                 if (availableSeats <= 0) {
// //                   statusText = "Sold Out";
// //                   isBookable = false;
// //                 } else if (today < startDate) {
// //                   const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
// //                   statusText = `Sale starts in ${diff} day${diff > 1 ? "s" : ""}`;
// //                   isBookable = false;
// //                 } else if (today > endDate) {
// //                   statusText = "Sale ended";
// //                   isBookable = false;
// //                 } else {
// //                   statusText =
// //                     ticketQuantity === Infinity
// //                       ? "Available"
// //                       : `Available (${availableSeats} left)`;
// //                 }

// //                 return (
// //                   <div
// //                     key={ticket.id}
// //                     className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50"
// //                   >
// //                     <div>
// //                       <div className="font-medium">{ticket.type}</div>
// //                       <div className="text-sm text-gray-700">{ticket.description}</div>
// //                       <div className="text-sm font-semibold">
// //                         {ticket.is_free ? "Free" : `${ticket.price} NPR`}
// //                       </div>
// //                       <div className={`text-sm mt-1 ${isBookable ? "text-green-600" : "text-red-600"}`}>
// //                         {statusText}
// //                       </div>
// //                     </div>
// //                     <Button
// //                       className={`${
// //                         isBookable
// //                           ? "bg-blue-600 hover:bg-blue-700 text-white"
// //                           : "bg-gray-300 text-gray-600 cursor-not-allowed"
// //                       }`}
// //                       disabled={!isBookable}
// //                       onClick={() => handleTicketSelect(ticket)}
// //                     >
// //                       {isBookable ? "Book Now" : "Unavailable"}
// //                     </Button>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button } from "../components/Layout/ui/button";
// import { useAuth } from "../contexts/AuthContext";
// import { bookingService } from "../services/bookingService";
// import { eventService } from "../services/eventService";

// export default function EventDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   const [showTicketModal, setShowTicketModal] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 100);
//     return () => clearTimeout(timeout);
//   }, [id]);

//   // Fetch event data
//   const { data: eventData, isLoading: eventLoading } = useQuery({
//     queryKey: ["event", id],
//     queryFn: () => eventService.getEvent(id),
//     enabled: !!id,
//   });

//   // Fetch user bookings
//   const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: bookingService.getUserBookings,
//     enabled: !!user,
//   });

//   const isLoading = eventLoading || bookingsLoading;

//   if (isLoading)
//     return (
//       <div className="min-h-screen bg-gray-50 px-4 py-8 container mx-auto">
//         <div className="animate-pulse">
//           <div className="bg-gray-300 h-64 md:h-80 rounded-lg mb-6 w-full"></div>
//           <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="h-16 bg-gray-300 rounded"></div>
//             <div className="h-16 bg-gray-300 rounded"></div>
//             <div className="h-16 bg-gray-300 rounded"></div>
//             <div className="h-16 bg-gray-300 rounded"></div>
//           </div>
//         </div>
//       </div>
//     );

//   const bookings = bookingsData?.bookings ?? bookingsData ?? [];
//   const existingBooking = bookings.find(
//     (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
//   );

//   const isRegistered = !!existingBooking;

//   const totalCapacity =
//     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.quantity) || 0), 0) || 0;
//   const totalBooked =
//     eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.sold) || 0), 0) || 0;

//   const handleTicketSelect = async (ticket) => {
//     if (!user) return alert("Please login to book tickets.");
//     try {
//       const payload = {
//         event_id: eventData.id,
//         ticket_id: ticket.id,
//         user_id: user.id,
//       };
//       await bookingService.createBooking(payload);
//       setSelectedTicket(ticket);
//       setShowTicketModal(false);
//       queryClient.invalidateQueries(["bookings"]);
//       navigate("/user/bookings");
//     } catch (err) {
//       const msg = err.response?.data?.message || err.message;
//       alert(msg);
//       console.error("Booking failed:", msg);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">

//         {/* Event Hero */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData?.featured_image || "/placeholder.svg"}
//             alt={eventData?.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />

//           <div className="p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {eventData?.title}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 <div>
//                   <div className="font-medium">
//                     {new Date(eventData?.start_date).toLocaleDateString()} -{" "}
//                     {new Date(eventData?.end_date).toLocaleDateString()}
//                   </div>
//                   <div className="text-sm">
//                     {eventData?.start_time} - {eventData?.end_time}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin size={20} />
//                 <div>
//                   <div className="font-medium">{eventData?.location}</div>
//                   <div className="text-sm">{eventData?.venue_name}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Users size={20} />
//                 <div>
//                   <div className="font-medium">{totalBooked} registered</div>
//                   <div className="text-sm">of {totalCapacity} spots</div>
//                 </div>
//               </div>
//             </div>

//             {/* -------------------------------------------------- */}
//             {/*     Booking Actions with checked_in logic          */}
//             {/* -------------------------------------------------- */}
//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-between mt-4">
//               {isRegistered ? (
//                 // User is registered - always show View Bookings button
//                 <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//                   {existingBooking.checked_in ? (
//                     <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
//                       <span className="font-medium">Checked In</span>
//                       <span>✓</span>
//                     </div>
//                   ) : (
//                     <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
//                       <span className="font-medium">Registered</span>
//                       <span>✓</span>
//                     </div>
//                   )}
//                   <Button
//                     className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
//                     onClick={() => navigate("/user/bookings")}
//                   >
//                     View My Bookings
//                   </Button>
//                 </div>
//               ) : (
//                 // If not registered → show Register button
//                 <Button
//                   className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
//                   onClick={() => setShowTicketModal(true)}
//                 >
//                   Register Now
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* -------------------------------------------------- */}
//         {/*                  Description / Agenda              */}
//         {/* -------------------------------------------------- */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="leading-relaxed">{eventData?.description}</p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//               <div className="space-y-4">
//                 {(eventData?.agenda || []).map((item, index) => (
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
//           </div>

//           <div className="space-y-6"></div>
//         </div>
// {eventData.speakers?.length > 0 && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Speakers</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {eventData.speakers.map((speaker, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
//                     >
//                       <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
//                         🎤
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-900">{speaker.name}</div>
//                         <div className="text-sm text-gray-600">{speaker.profession}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//       </div>

//       {/* -------------------------------------------------- */}
//       {/*                   Ticket Modal                     */}
//       {/* -------------------------------------------------- */}
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
//               {eventData?.tickets?.map((ticket) => {
//                 const today = new Date();
//                 const startDate = ticket.sale_start_date
//                   ? new Date(ticket.sale_start_date)
//                   : new Date();
//                 const endDate = ticket.sale_end_date
//                   ? new Date(ticket.sale_end_date)
//                   : new Date(eventData.start_date);

//                 const ticketQuantity =
//                   ticket.quantity && parseInt(ticket.quantity) > 0
//                     ? parseInt(ticket.quantity)
//                     : Infinity;

//                 const sold = parseInt(ticket.sold) || 0;
//                 const availableSeats = ticketQuantity - sold;

//                 let statusText = "";
//                 let isBookable = true;

//                 if (availableSeats <= 0) {
//                   statusText = "Sold Out";
//                   isBookable = false;
//                 } else if (today < startDate) {
//                   const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
//                   statusText = `Sale starts in ${diff} day${diff > 1 ? "s" : ""}`;
//                   isBookable = false;
//                 } else if (today > endDate) {
//                   statusText = "Sale ended";
//                   isBookable = false;
//                 } else {
//                   statusText =
//                     ticketQuantity === Infinity
//                       ? "Available"
//                       : `Available (${availableSeats} left)`;
//                 }

//                 return (
//                   <div
//                     key={ticket.id}
//                     className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50"
//                   >
//                     <div>
//                       <div className="font-medium">{ticket.type}</div>
//                       <div className="text-sm text-gray-700">{ticket.description}</div>
//                       <div className="text-sm font-semibold">
//                         {ticket.is_free ? "Free" : `${ticket.price} NPR`}
//                       </div>
//                       <div className={`text-sm mt-1 ${isBookable ? "text-green-600" : "text-red-600"}`}>
//                         {statusText}
//                       </div>
//                     </div>
//                     <Button
//                       className={`${
//                         isBookable
//                           ? "bg-blue-600 hover:bg-blue-700 text-white"
//                           : "bg-gray-300 text-gray-600 cursor-not-allowed"
//                       }`}
//                       disabled={!isBookable}
//                       onClick={() => handleTicketSelect(ticket)}
//                     >
//                       {isBookable ? "Book Now" : "Unavailable"}
//                     </Button>
//                   </div>
//                 );
//               })}
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import L from "leaflet";
import { Building, CalendarDays, CheckCircle, Clock, Mail, MapPin, MapPin as MapPinIcon, Phone, Users, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Layout/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { bookingService } from "../services/bookingService";
import { eventService } from "../services/eventService";

const eventIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function EventDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
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

  const isLoading = eventLoading || bookingsLoading;

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
        </div>
      </div>
    );

  const bookings = bookingsData?.bookings ?? bookingsData ?? [];
  const existingBooking = bookings.find(
    (b) => b.event_id === eventData?.id && b.status?.toLowerCase() !== "cancelled"
  );

  const isRegistered = !!existingBooking;

  const totalCapacity =
    eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.quantity) || 0), 0) || 0;
  const totalBooked =
    eventData?.tickets?.reduce((acc, t) => acc + (parseInt(t.sold) || 0), 0) || 0;

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
      navigate("/user/bookings");
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      alert(msg);
      console.error("Booking failed:", msg);
    }
  };

  // Organizer status badge
  const getOrganizerStatusBadge = (status) => {
    switch(status?.toLowerCase()) {
      case 'active':
        return (
          <span className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
            <CheckCircle size={12} />
            Active
          </span>
        );
      case 'inactive':
        return (
          <span className="flex items-center gap-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
            <XCircle size={12} />
            Inactive
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            Pending
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {status || 'Unknown'}
          </span>
        );
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
                  <div className="font-medium">{totalBooked} registered</div>
                  <div className="text-sm">of {totalCapacity} spots</div>
                </div>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-between mt-4">
              {isRegistered ? (
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  {existingBooking.checked_in ? (
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                      <span className="font-medium">Checked In</span>
                      <span>✓</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                      <span className="font-medium">Registered</span>
                      <span>✓</span>
                    </div>
                  )}
                  <Button
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => navigate("/user/bookings")}
                  >
                    View My Bookings
                  </Button>
                </div>
              ) : (
                <Button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setShowTicketModal(true)}
                >
                  Register Now
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description, Agenda, and Speakers */}
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
                    <div className="font-medium text-gray-900">
                      {item.title || item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers Section */}
            {eventData?.speakers?.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventData.speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                        🎤
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{speaker.name}</div>
                        <div className="text-sm text-gray-600">{speaker.profession}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Organizer Details and Other Info */}
          <div className="space-y-6">
            {/* Organizer Details Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building className="text-blue-500" size={24} />
                <h2 className="text-xl font-bold">Event Organizer</h2>
              </div>
              
              <div className="space-y-4">
                {/* Organizer Name and Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {eventData?.organizer_name || "Organizer"}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPinIcon size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {eventData?.organizer_city || "City not specified"}
                      </span>
                    </div>
                  </div>
                  {getOrganizerStatusBadge(eventData?.organizer_status)}
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-700">Contact Information</h4>
                  
                  {eventData?.organizer_email && (
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-gray-500" />
                      <a 
                        href={`mailto:${eventData.organizer_email}`}
                        className="text-blue-600 hover:text-blue-800 text-sm truncate"
                      >
                        {eventData.organizer_email}
                      </a>
                    </div>
                  )}

                  {eventData?.organizier_phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-gray-500" />
                      <a 
                        href={`tel:${eventData.organizier_phone}`}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        {eventData.organizier_phone}
                      </a>
                    </div>
                  )}

                  {(!eventData?.organizer_email && !eventData?.organizier_phone) && (
                    <p className="text-gray-500 text-sm">No contact information available</p>
                  )}
                </div>

                {/* Organizer ID */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Organizer ID</p>
                  <p className="text-sm font-mono text-gray-700 bg-gray-50 p-2 rounded mt-1">
                    {eventData?.organizer_id || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Event Information Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Event Information</h3>
              <div className="space-y-3">
                {eventData?.category && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">
                      {typeof eventData.category === 'object' 
                        ? eventData.category.name 
                        : eventData.category}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Event Type:</span>
                  <span className="font-medium">{eventData?.event_type || "Public"}</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-medium">
                    {eventData?.created_at 
                      ? new Date(eventData.created_at).toLocaleDateString() 
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            {eventData?.tags?.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {eventData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {typeof tag === 'object' ? tag.name : tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Event Location Map */}
{/* Event Location Map */}
{eventData?.location?.toLowerCase() !== "online" &&
 eventData?.latitude &&
 eventData?.longitude && (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-bold mb-4">Event Location Map</h3>

    <MapContainer
      center={[eventData.latitude, eventData.longitude]}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-64 rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[eventData.latitude, eventData.longitude]}
        icon={eventIcon}
      >
        <Popup>
          <strong>{eventData?.title}</strong> <br />
          {eventData?.location}
        </Popup>
      </Marker>
    </MapContainer>
  </div>
)}

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
              {eventData?.tickets?.map((ticket) => {
                const today = new Date();
                const startDate = ticket.sale_start_date
                  ? new Date(ticket.sale_start_date)
                  : new Date();
                const endDate = ticket.sale_end_date
                  ? new Date(ticket.sale_end_date)
                  : new Date(eventData.start_date);

                const ticketQuantity =
                  ticket.quantity && parseInt(ticket.quantity) > 0
                    ? parseInt(ticket.quantity)
                    : Infinity;

                const sold = parseInt(ticket.sold) || 0;
                const availableSeats = ticketQuantity - sold;

                let statusText = "";
                let isBookable = true;

                if (availableSeats <= 0) {
                  statusText = "Sold Out";
                  isBookable = false;
                } else if (today < startDate) {
                  const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
                  statusText = `Sale starts in ${diff} day${diff > 1 ? "s" : ""}`;
                  isBookable = false;
                } else if (today > endDate) {
                  statusText = "Sale ended";
                  isBookable = false;
                } else {
                  statusText =
                    ticketQuantity === Infinity
                      ? "Available"
                      : `Available (${availableSeats} left)`;
                }

                return (
                  <div
                    key={ticket.id}
                    className="flex justify-between items-center p-4 border border-gray-200 rounded hover:bg-gray-50"
                  >
                    <div>
                      <div className="font-medium">{ticket.type}</div>
                      <div className="text-sm text-gray-700">{ticket.description}</div>
                      <div className="text-sm font-semibold">
                        {ticket.is_free ? "Free" : `${ticket.price} NPR`}
                      </div>
                      <div className={`text-sm mt-1 ${isBookable ? "text-green-600" : "text-red-600"}`}>
                        {statusText}
                      </div>
                    </div>
                    <Button
                      className={`${
                        isBookable
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                      disabled={!isBookable}
                      onClick={() => handleTicketSelect(ticket)}
                    >
                      {isBookable ? "Book Now" : "Unavailable"}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}