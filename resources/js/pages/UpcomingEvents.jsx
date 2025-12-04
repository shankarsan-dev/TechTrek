// "use client";

// import { Calendar, MapPin, Search } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { eventService } from "../services/eventService.js";

// // -------------------- UI Components --------------------
// const Card = ({ className = "", children, ...props }) => (
//   <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// );

// const CardContent = ({ className = "", children, ...props }) => (
//   <div className={`p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Button = ({ className = "", variant = "default", children, ...props }) => {
//   const base =
//     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-4 py-2";
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
//   };
//   return (
//     <button className={`${base} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// const Badge = ({ children }) => (
//   <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">
//     {children}
//   </span>
// );

// // -------------------- Main Component --------------------
// export default function UpcomingEvents() {
//   const [events, setEvents] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   const filters = [
//     { label: "This Week", value: "week" },
//     { label: "This Month", value: "month" },
//     { label: "This Year", value: "year" },
//     { label: "All Time", value: "all" },
//   ];

//   // -------------------- Fetch Events --------------------
//   const loadEvents = async (filterType = "all") => {
//     setLoading(true);
//     try {
//       const data = await eventService.getUpcomingEvents(filterType);
//       setEvents(data);
//     } catch (err) {
//       console.error("Error fetching upcoming events:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadEvents(filter);
//   }, [filter]);

//   // -------------------- Search --------------------
//   const filteredEvents = events.filter(
//     (event) =>
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (event.venue_name &&
//         event.venue_name.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Upcoming Events
//           </h1>
//           <p className="text-gray-600">
//             Discover exciting events happening soon — filter by week, month, or
//             year.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search events..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={16}
//               />
//             </div>

//             {/* Date Filters */}
//             <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
//               {filters.map((f) => (
//                 <Button
//                   key={f.value}
//                   variant={filter === f.value ? "default" : "outline"}
//                   onClick={() => setFilter(f.value)}
//                 >
//                   {f.label}
//                 </Button>
//               ))}
//             </div> 
//           </div>
//         </div>

//         {/* Results */}
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 className="animate-pulse rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
//               >
//                 <div className="w-full h-48 bg-gray-200" />
//                 <div className="p-4 space-y-3">
//                   <div className="h-4 bg-gray-200 w-24 rounded" />
//                   <div className="h-6 bg-gray-300 w-3/4 rounded" />
//                   <div className="h-4 bg-gray-200 w-1/2 rounded" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredEvents.length === 0 ? (
//           <div className="text-center py-12">
//             <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No upcoming events found
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Try changing your filters or check back later for more events.
//             </p>
//             <Button onClick={() => setFilter("all")}>Show All</Button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             {filteredEvents.map((event) => (
//               <Card
//                 key={event._id}
//                 className="hover:shadow-lg transition-shadow flex flex-col h-[400px]"
//               >
//                 <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
//                   <img
//                     src={event.featured_image || "/placeholder.svg"}
//                     alt={event.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <CardContent className="flex flex-col justify-between flex-1 p-4">
//                   <div>
//                     <div className="flex justify-between items-start mb-2">
//                       <Badge>
//                         {event.category?.name || "Uncategorized"}
//                       </Badge>
//                       <span className="text-xs text-gray-500">
//                         {new Date(event.start_date).toLocaleDateString()}
//                       </span>
//                     </div>

//                     <h3 className="text-lg font-semibold mb-2 line-clamp-2">
//                       {event.title}
//                     </h3>

//                     <div className="space-y-1 text-sm text-gray-600 mb-3">
//                       {event.venue_name && (
//                         <div className="flex items-center gap-2">
//                           <MapPin size={14} /> {event.venue_name}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex gap-2 mt-auto">
//                     <Link to={`/events/${event._id}`} className="flex-1">
//                       <Button className="w-full text-sm">View Details</Button>
//                     </Link>
//                     <Button variant="outline" className="text-sm bg-transparent">
//                       Save
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { Calendar, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventService } from "../services/eventService.js";

// -------------------- UI Components --------------------
const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ className = "", variant = "default", children, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-4 py-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">
    {children}
  </span>
);

// -------------------- Date Formatting Functions --------------------
const formatEventDate = (dateString) => {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    // Format: "Dec 25, 2023"
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
};

const formatEventDateWithDay = (dateString) => {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    // Format: "Tue, Dec 25, 2023"
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
};

const getUpcomingStatus = (dateString) => {
  if (!dateString) return "";
  
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
  if (diffDays < 0) return "Past Event";
  
  return "";
};

// -------------------- Main Component --------------------
export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const filters = [
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "This Year", value: "year" },
    { label: "All Time", value: "all" },
  ];

  // -------------------- Fetch Events --------------------
  const loadEvents = async (filterType = "all") => {
    setLoading(true);
    try {
      const data = await eventService.getUpcomingEvents(filterType);
      
      // Format dates in the events
      const formattedEvents = data.map(event => ({
        ...event,
        formatted_date: formatEventDate(event.start_date),
        formatted_date_with_day: formatEventDateWithDay(event.start_date),
        upcoming_status: getUpcomingStatus(event.start_date)
      }));
      
      setEvents(formattedEvents);
    } catch (err) {
      console.error("Error fetching upcoming events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents(filter);
  }, [filter]);

  // -------------------- Search --------------------
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.venue_name &&
        event.venue_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (event.category?.name &&
        event.category.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Upcoming Events
          </h1>
          <p className="text-gray-600">
            Discover exciting events happening soon — filter by week, month, or
            year.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            {/* Date Filters */}
            <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
              {filters.map((f) => (
                <Button
                  key={f.value}
                  variant={filter === f.value ? "default" : "outline"}
                  onClick={() => setFilter(f.value)}
                >
                  {f.label}
                </Button>
              ))}
            </div> 
          </div>
        </div>

        {/* Results */}
        {loading ? (
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
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No upcoming events found
            </h3>
            <p className="text-gray-600 mb-4">
              Try changing your filters or check back later for more events.
            </p>
            <Button onClick={() => setFilter("all")}>Show All</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card
                key={event._id}
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
                      <Badge>
                        {event.category?.name || "Uncategorized"}
                      </Badge>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          {event.formatted_date_with_day}
                        </div>
                        {event.upcoming_status && (
                          <div className="text-xs text-blue-600 font-medium mt-0.5">
                            {event.upcoming_status}
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {event.title}
                    </h3>

                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      {event.venue_name && (
                        <div className="flex items-center gap-2">
                          <MapPin size={14} /> {event.venue_name}
                        </div>
                      )}
                      
                      {/* Optionally show event date again in the content area */}
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-gray-700">
                          {event.formatted_date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link to={`/events/${event._id}`} className="flex-1">
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
      </div>
    </div>
  );
}