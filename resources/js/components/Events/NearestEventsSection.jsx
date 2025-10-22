// // import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { eventService } from "../../services/eventService";
// // import { Badge } from "../UI/Badge";
// // import { Button } from "../UI/Button";
// // import { Card, CardContent } from "../UI/Card";
// // export default function NearestEventsSection() {
// //   const [nearestEvents, setNearestEvents] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         async (position) => {
// //           const { latitude, longitude } = position.coords;
// //           try {
// //             const events = await eventService.getNearestEvents(latitude, longitude, 3);

// //             setNearestEvents(events);
// //             console.log(position.coords.latitude, position.coords.longitude);
// //           } catch (error) {
// //             console.error("Error fetching nearest events:", error);
// //           } finally {
// //             setLoading(false);
// //           }
// //         },
// //         (error) => {
// //           console.warn("Geolocation error:", error);
// //           // fallback: load default events
// //           setNearestEvents([]); // or a static list
// //           setLoading(false);
// //         }
// //       );
// //     } else {
// //       console.warn("Geolocation not supported");
// //       setNearestEvents([]); // or a static list
// //       setLoading(false);
// //     }
// //   }, []);

// //   if (loading) return <div>Loading nearest events...</div>;

// //   return (


// //       <section className="py-16 bg-gray-50">
// //             <div className="container mx-auto px-4">
// //               <div className="flex justify-between items-center mb-8">
// //                 <div>
// //                   <h2 className="text-3xl font-bold text-gray-900 mb-2">Events Near You</h2>
// //                   <p className="text-gray-600">Discover tech events happening in your area</p>
// //                 </div>
// //                 <Link to="/events-near-you">
// //                   <Button variant="outline" className="flex items-center gap-2 bg-transparent">
// //                     View All <ArrowRight size={16} />
// //                   </Button>
// //                 </Link>
// //               </div>
    
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {nearestEvents.map((event) => (
// //                   <Card key={event.id} className="hover:shadow-lg transition-shadow">
// //                     <img
// //                       src={event.image || "/placeholder.svg"}
// //                       alt={event.title}
// //                       className="w-full h-48 object-cover rounded-t-lg"
// //                     />
// //                     <CardContent className="p-6">
// //                       <div className="flex justify-between items-start mb-3">
// //                         <Badge variant="secondary">{event.category}</Badge>
// //                         <span className="text-lg font-bold text-green-600">{event.price}</span>
// //                       </div>
// //                       <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
// //                       <div className="space-y-2 text-sm text-gray-600 mb-4">
// //                         <div className="flex items-center gap-2">
// //                           <Calendar size={14} />
// //                           {event.start_date}    
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <MapPin size={14} />
// //                           {event.location} • {event.distance}
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <Users size={14} />
// //                           {event.attendees} attendees
// //                         </div>
// //                       </div>
// //                       <Link to={`/events/${event.id}`}>
// //                         <Button className="w-full">View Details</Button>
// //                       </Link>
// //                     </CardContent>
// //                   </Card>
// //                 ))}
// //               </div>
// //             </div>
// //           </section> 
   

// //   );
// // }
// import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { eventService } from "../../services/eventService";
// import { Badge } from "../UI/Badge";
// import { Button } from "../UI/Button";
// import { Card, CardContent } from "../UI/Card";

// export default function NearestEventsSection() {
//   const [nearestEvents, setNearestEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async (lat, lng) => {
//       try {
//         const events = await eventService.getNearestEvents(lat, lng, 3);
//         setNearestEvents(events);
//       } catch (error) {
//         console.error("Error fetching nearest events:", error);
//         setNearestEvents([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const cached = localStorage.getItem("userLocation");
//     const now = new Date().getTime();

//     if (cached) {
//       const { latitude, longitude, timestamp } = JSON.parse(cached);

//       // Check if cached location is older than 1 hour
//       if (now - timestamp < 3600000) {
//         fetchEvents(latitude, longitude);
//         return;
//       }
//     }

//     // If no cache or expired, get fresh location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           // Store location with timestamp
//           localStorage.setItem(
//             "userLocation",
//             JSON.stringify({ latitude, longitude, timestamp: now })
//           );
//           fetchEvents(latitude, longitude);
//         },
//         (error) => {
//           console.warn("Geolocation error:", error);
//           setNearestEvents([]);
//           setLoading(false);
//         }
//       );
//     } else {
//       console.warn("Geolocation not supported");
//       setNearestEvents([]);
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return <div>Loading nearest events...</div>;

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Events Near You</h2>
//             <p className="text-gray-600">Discover tech events happening in your area</p>
//           </div>
//           <Link to="/events-near-you">
//             <Button variant="outline" className="flex items-center gap-2 bg-transparent">
//               View All <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {nearestEvents.map((event) => (
//             <Card key={event.id} className="hover:shadow-lg transition-shadow">
//               <img
//                 src={event.image || "/placeholder.svg"}
//                 alt={event.title}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <CardContent className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <Badge variant="secondary">{event.category}</Badge>
//                   <span className="text-lg font-bold text-green-600">{event.price}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//                 <div className="space-y-2 text-sm text-gray-600 mb-4">
//                   <div className="flex items-center gap-2">
//                     <Calendar size={14} />
//                     {event.start_date}    
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin size={14} />
//                     {event.location} • {event.distance}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users size={14} />
//                     {event.attendees} attendees
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

export default function NearestEventsSection() {
  const [nearestEvents, setNearestEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async (lat, lng) => {
      try {
        const events = await eventService.getNearestEvents(lat, lng, 3); // ✅ already returns array
        setNearestEvents(events || []);
      } catch (error) {
        console.error("Error fetching nearest events:", error);
        setNearestEvents([]);
      } finally {
        setLoading(false);
      }
    };

    const cached = localStorage.getItem("userLocation");
    const now = new Date().getTime();

    if (cached) {
      const { latitude, longitude, timestamp } = JSON.parse(cached);
      if (now - timestamp < 3600000) {
        fetchEvents(latitude, longitude);
        return;
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem(
            "userLocation",
            JSON.stringify({ latitude, longitude, timestamp: now })
          );
          fetchEvents(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation error:", error);
          setNearestEvents([]);
          setLoading(false);
        }
      );
    } else {
      console.warn("Geolocation not supported");
      setNearestEvents([]);
      setLoading(false);
    }
  }, []);

  // ✅ Skeleton loading cards
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Events Near You
              </h2>
              <p className="text-gray-600">
                Discover tech events happening in your area
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

  // ✅ Main content
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Events Near You</h2>
            <p className="text-gray-600">Discover tech events happening in your area</p>
          </div>
          <Link to="/events-near-you">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              View All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearestEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <img
                src={event.featured_image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="text-lg font-bold text-green-600">{event.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {event.start_date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {event.location} • {event.distance}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    {event.attendees} attendees
                  </div>
                </div>
                <Link to={`/events/${event.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

