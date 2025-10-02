// import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { eventService } from "../../services/eventService";
// import { Badge } from "../UI/Badge";
// import { Button } from "../UI/Button";
// import { Card, CardContent } from "../UI/Card";

// export default function UpcomingEventsSection() {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUpcomingEvents = async () => {
//       try {
//         const events = await eventService.getUpcomingEvents(6);
//         setUpcomingEvents(events);
//       } catch (error) {
//         console.error("Error fetching upcoming events:", error);
//         setUpcomingEvents([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUpcomingEvents();
//   }, []);

//   if (loading) return <div>Loading upcoming events...</div>;

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
//             <p className="text-gray-600">
//               Stay ahead — here are the next big events you shouldn’t miss
//             </p>
//           </div>
//           <Link to="/upcoming-events">
//             <Button variant="outline" className="flex items-center gap-2 bg-transparent">
//               View All <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {upcomingEvents.map((event) => (
//             <Card key={event.id} className="hover:shadow-lg transition-shadow">
//               <img
//                 src={event.featured_image || "/placeholder.svg"}
//                 alt={event.title}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <CardContent className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <Badge variant="secondary">{event.category?.name || "General"}</Badge>
//                   <span className="text-lg font-bold text-green-600">
//                     {event.is_free ? "Free" : event.price}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//                 <div className="space-y-2 text-sm text-gray-600 mb-4">
//                   <div className="flex items-center gap-2">
//                     <Calendar size={14} />
//                     {event.start_date}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin size={14} />
//                     { event.location}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users size={14} />
//                     {event.booked_count}/{event.capacity} attendees
//                   </div>
//                 </div>

//                 <Link to={`/events/${event.id}`}>
//                   <Button className="w-full">View Details</Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventService } from "../../services/eventService";
import { Badge } from "../UI/Badge";
import { Button } from "../UI/Button";
import { Card, CardContent } from "../UI/Card";

export default function UpcomingEventsSection() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to parse full OSM address into street and city
const parseAddress = (fullAddress) => {
  if (!fullAddress) return { street: "Unknown", city: "Unknown" };

  const parts = fullAddress.split(",").map((s) => s.trim());

  // Street = first part
  const street = parts[0] || "Unknown";

  // Try to pick the part that matches a city (simplest: last occurrence before province)
  // In your example, the city is "Kathmandu"
  let city = "Unknown";

  // Loop parts from end to start to find something that is not postal code, province, or country
  for (let i = parts.length - 1; i >= 0; i--) {
    const part = parts[i];
    if (!part.match(/Province|Nepal|[0-9]{3,}/i)) {
      city = part;
      break;
    }
  }

  return { street, city };
};


  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const events = await eventService.getUpcomingEvents(3);
        setUpcomingEvents(events);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
        setUpcomingEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  if (loading) return <div>Loading upcoming events...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
            <p className="text-gray-600">
              Stay ahead — here are the next big events you shouldn’t miss
            </p>
          </div>
          <Link to="/upcoming-events">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              View All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
            const { street, city } = parseAddress(event.location);

            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <img
                  src={event.featured_image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{event.category?.name || "General"}</Badge>
                    <span className="text-lg font-bold text-green-600">
                      {event.is_free ? "Free" : event.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {event.start_date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {street}, {city}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      {event.booked_count}/{event.capacity} attendees
                    </div>
                  </div>

                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
