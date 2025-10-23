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

//   // Function to parse full OSM address into street and city
// const parseAddress = (fullAddress) => {
//   if (!fullAddress) return { street: "Unknown", city: "Unknown" };

//   const parts = fullAddress.split(",").map((s) => s.trim());

//   // Street = first part
//   const street = parts[0] || "Unknown";

//   // Try to pick the part that matches a city (simplest: last occurrence before province)
//   // In your example, the city is "Kathmandu"
//   let city = "Unknown";

//   // Loop parts from end to start to find something that is not postal code, province, or country
//   for (let i = parts.length - 1; i >= 0; i--) {
//     const part = parts[i];
//     if (!part.match(/Province|Nepal|[0-9]{3,}/i)) {
//       city = part;
//       break;
//     }
//   }

//   return { street, city };
// };


//   useEffect(() => {
//     const fetchUpcomingEvents = async () => {
//       try {
//         const events = await eventService.getUpcomingEvents(3);
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
//           {upcomingEvents.map((event) => {
//             const { street, city } = parseAddress(event.location);

//             return (
//               <Card key={event.id} className="hover:shadow-lg transition-shadow">
//                 <img
//                   src={event.featured_image || "/placeholder.svg"}
//                   alt={event.title}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <CardContent className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <Badge variant="secondary">{event.category?.name || "General"}</Badge>
//                     <span className="text-lg font-bold text-green-600">
//                       {event.is_free ? "Free" : event.price}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//                   <div className="space-y-2 text-sm text-gray-600 mb-4">
//                     <div className="flex items-center gap-2">
//                       <Calendar size={14} />
//                       {event.start_date}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin size={14} />
//                       {street}, {city}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Users size={14} />
//                       {event.booked_count}/{event.capacity} attendees
//                     </div>
//                   </div>

//                   <Link to={`/events/${event.id}`}>
//                     <Button className="w-full">View Details</Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             );
//           })}
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

  // ✅ Parse full OSM address into street and city
  const parseAddress = (fullAddress) => {
    if (!fullAddress) return { street: "Unknown", city: "Unknown" };

    const parts = fullAddress.split(",").map((s) => s.trim());
    const street = parts[0] || "Unknown";

    let city = "Unknown";
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
        const filters = {
          category_id: "all",
          search:"",
          filter:"all",
          limit: 3,
        }
        const events = await eventService.getEvents(filters); // ✅ already returns event array
        setUpcomingEvents(events || []);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
        setUpcomingEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  // ✅ Skeleton Loading State
  if (loading) {
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="h-5 w-10 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ✅ No Events Fallback
  if (!loading && upcomingEvents.length === 0) {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Upcoming Events Found
          </h2>
          <p className="text-gray-600">
            Check back later for new events happening soon.
          </p>
        </div>
      </section>
    );
  }

  // ✅ Main Content
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
          <Link to="/events?filter=year">
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
                    {/* <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {event.start_date}
                    </div> */}
                   < div className="flex items-center gap-2">
  <Calendar size={14} />
  {new Date(event.start_date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
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
