// "use client"

// import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { eventService } from "../../services/eventService";

// const EventDetails = () => {
//   const { id } = useParams();
//   const [eventData, setEventData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await eventService.getOrganizerEventDetails(id);
//         setEventData(response.data);
//       } catch (error) {
//         console.error("Error fetching event details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   if (loading) {
//     return <div className="p-6 text-center">Loading event details...</div>;
//   }

//   if (!eventData) {
//     return <div className="p-6 text-center text-red-500">Event not found.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
//           <img
//             src={eventData.featured_image || "/placeholder.jpg"}
//             alt={eventData.title}
//             className="w-full h-64 md:h-80 object-cover"
//           />
//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                 {eventData.category?.name || "Uncategorized"}
//               </span>
//               {eventData.tags?.map((tag) => (
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

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
//                   <div className="font-medium">
//                     {eventData.booked_count} / {eventData.capacity} booked
//                   </div>
//                   <div className="text-sm">Capacity</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">About This Event</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 {eventData.description}
//               </p>
//             </div>

//             {/* Agenda */}
//             {eventData.agenda?.length > 0 && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
//                 <div className="space-y-4">
//                   {eventData.agenda.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
//                     >
//                       <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
//                         <Clock size={16} />
//                         {item.time}
//                       </div>
//                       <div className="font-medium text-gray-900">
//                         {item.description}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Speakers */}
//             {eventData.speakers?.length > 0 && (
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
//                         <div className="font-medium text-gray-900">
//                           {speaker.name}
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           {speaker.profession}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tickets */}
//          {eventData.tickets?.map((ticket) => (
//   <div key={ticket.id} className="p-4 border rounded-lg mb-4">
//     <div className="font-medium text-gray-900">
//       {ticket.type} {ticket.is_free ? "(Free)" : `$${ticket.price}`}
//     </div>
//     <div className="text-sm text-gray-600">
//       {ticket.sold || 0} / {ticket.quantity || 0} sold
//     </div>

//     <div className="mt-2 text-sm text-gray-700 space-y-1">
//       <p><strong>Description:</strong> {ticket.description || "N/A"}</p>
//       <p><strong>Sale Start:</strong> {ticket.sale_start_date || "N/A"}</p>
//       <p><strong>Sale End:</strong> {ticket.sale_end_date || "N/A"}</p>
//       <p><strong>Event ID:</strong> {ticket.event_id}</p>
//       <p><strong>Organizer ID:</strong> {ticket.organizer_id}</p>
//       <p><strong>Created At:</strong> {new Date(ticket.created_at).toLocaleString()}</p>
//       <p><strong>Updated At:</strong> {new Date(ticket.updated_at).toLocaleString()}</p>
//     </div>
//   </div>
// ))}


//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Meta */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h2 className="text-xl font-bold mb-4">Event Meta</h2>
//               <p className="text-sm text-gray-600">
//                 Created: {new Date(eventData.created_at).toLocaleString()}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Last updated: {new Date(eventData.updated_at).toLocaleString()}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;
"use client"

import { CalendarDays, Clock, MapPin, Ticket, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eventService } from "../../services/eventService";



const EventDetails = () => {
  const [expandedTicket, setExpandedTicket] = useState(null); // Track expanded ticket ID
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await eventService.getOrganizerEventDetails(id);
        setEventData(response.data);
        console.log(response.data.tickets); // Debug
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading event details...</div>;
  if (!eventData) return <div className="p-6 text-center text-red-500">Event not found.</div>;

  // Determine the highest ticket price
  const ticketPrices = eventData.tickets?.map(t => parseFloat(t.price)) || [];
  const maxPrice = Math.max(...ticketPrices);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {eventData.featured_image}
          <img
            src={eventData.featured_image || "/placeholder.jpg"}
            alt={eventData.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {eventData.category?.name || "Uncategorized"}
              </span>
              {eventData.tags?.map(tag => (
                <span
                  key={tag}
                  className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {eventData.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays size={20} />
                <div>
                  <div className="font-medium">
                    {new Date(eventData.start_date).toLocaleDateString()} -{" "}
                    {new Date(eventData.end_date).toLocaleDateString()}
                  </div>
                  <div className="text-sm">
                    {eventData.start_time} - {eventData.end_time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <div>
                  <div className="font-medium">{eventData.location}</div>
                  <div className="text-sm">{eventData.venue_name}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={20} />
                <div>
                  <div className="font-medium">
                    {eventData.booked_count} / {eventData.capacity} booked
                  </div>
                  <div className="text-sm">Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
            </div>

            {/* Agenda */}
            {eventData.agenda?.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
                <div className="space-y-4">
                  {eventData.agenda.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
                        <Clock size={16} />
                        {item.time}
                      </div>
                      <div className="font-medium text-gray-900">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers */}
            {eventData.speakers?.length > 0 && (
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

          
{/* Tickets */}
{eventData.tickets?.length > 0 && (
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Tickets</h2>
    <div className="space-y-4">
      {eventData.tickets.map(ticket => {
        const bgColor =
          parseFloat(ticket.price) === maxPrice
            ? "bg-yellow-100 border-yellow-400"
            : ticket.is_free
            ? "bg-green-50 border-green-200"
            : "bg-blue-50 border-blue-200";

        const isExpanded = expandedTicket === ticket.id;

        return (
          <div
            key={ticket.id}
            className={`border rounded-lg p-4 ${bgColor} transition-all duration-300 cursor-pointer`}
            onClick={() =>
              setExpandedTicket(isExpanded ? null : ticket.id)
            }
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Ticket size={20} className="text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">
                    {ticket.type} {ticket.is_free ? "(Free)" : `$${ticket.price}`}
                  </div>
                  <div className="text-sm text-gray-600 truncate">
                    {ticket.description}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {ticket.sold} / {ticket.quantity} sold
              </div>
            </div>

            {/* Expanded details on click */}
            {isExpanded && (
              <div className="mt-2 text-sm text-gray-700 space-y-1">
                <p><strong>Event ID:</strong> {ticket.event_id}</p>
                <p><strong>Organizer ID:</strong> {ticket.organizer_id}</p>
                <p><strong>Sale Start:</strong> {ticket.sale_start_date || "N/A"}</p>
                <p><strong>Sale End:</strong> {ticket.sale_end_date || "N/A"}</p>
                <p><strong>Created At:</strong> {new Date(ticket.created_at).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(ticket.updated_at).toLocaleString()}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
)}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Event Meta</h2>
              <p className="text-sm text-gray-600">
                Created: {new Date(eventData.created_at).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Last updated: {new Date(eventData.updated_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
