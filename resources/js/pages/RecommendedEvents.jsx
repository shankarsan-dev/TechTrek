// // "use client"

// // import React from "react"

// // import { Award, Calendar, Filter, Heart, MapPin, Star, TrendingUp } from "lucide-react"
// // import { useState } from "react"
// // import { Link } from "react-router-dom"

// // // Simple UI Components
// // const Card = ({ className = "", children, ...props }) => (
// //   <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
// //     {children}
// //   </div>
// // )

// // const CardContent = ({ className = "", children, ...props }) => (
// //   <div className={`p-6 ${className}`} {...props}>
// //     {children}
// //   </div>
// // )

// // const Button = ({ className = "", variant = "default", size = "default", children, ...props }) => {
// //   const baseClasses =
// //     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"
// //   const variants = {
// //     default: "bg-blue-600 text-white hover:bg-blue-700",
// //     outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
// //     secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
// //   }
// //   const sizes = {
// //     default: "h-10 px-4 py-2",
// //     sm: "h-9 px-3",
// //     lg: "h-11 px-8",
// //   }

// //   return (
// //     <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
// //       {children}
// //     </button>
// //   )
// // }

// // const Badge = ({ className = "", variant = "default", children, ...props }) => {
// //   const variants = {
// //     default: "bg-blue-100 text-blue-800",
// //     success: "bg-green-100 text-green-800",
// //     warning: "bg-yellow-100 text-yellow-800",
// //     secondary: "bg-gray-100 text-gray-800",
// //   }

// //   return (
// //     <div
// //       className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
// //       {...props}
// //     >
// //       {children}
// //     </div>
// //   )
// // }

// // // Sample recommended events data
// // const recommendedEventsData = [
// //   {
// //     id: "1",
// //     title: "Advanced React Patterns & Performance",
// //     date: "Jan 15, 2025",
// //     location: "San Francisco, CA",
// //     category: "Web Development",
// //     attendees: 300,
// //     price: "$199",
// //     rating: 4.9,
// //     match: "98%",
// //     recommendationType: "Based on your interests",
// //     reason: "You've attended 3 React events and rated them highly",
// //     organizer: "React Masters",
// //     description: "Deep dive into advanced React patterns, performance optimization, and modern development practices.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["React", "JavaScript", "Performance", "Advanced"],
// //     difficulty: "Advanced",
// //   },
// //   {
// //     id: "2",
// //     title: "AI Ethics & Responsible Machine Learning",
// //     date: "Jan 22, 2025",
// //     location: "Stanford, CA",
// //     category: "Artificial Intelligence",
// //     attendees: 250,
// //     price: "$299",
// //     rating: 4.8,
// //     match: "95%",
// //     recommendationType: "Trending in your network",
// //     reason: "5 people in your network are attending",
// //     organizer: "AI Ethics Institute",
// //     description: "Explore the ethical implications of AI and learn to build responsible machine learning systems.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["AI", "Ethics", "Machine Learning", "Responsibility"],
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     id: "3",
// //     title: "Cloud-Native Architecture Masterclass",
// //     date: "Feb 5, 2025",
// //     location: "Seattle, WA",
// //     category: "Cloud Computing",
// //     attendees: 400,
// //     price: "$399",
// //     rating: 4.7,
// //     match: "92%",
// //     recommendationType: "Career growth",
// //     reason: "Aligns with your career goals in cloud architecture",
// //     organizer: "Cloud Native Foundation",
// //     description: "Master microservices, containers, and cloud-native patterns for scalable applications.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["Cloud", "Microservices", "Kubernetes", "Architecture"],
// //     difficulty: "Advanced",
// //   },
// //   {
// //     id: "4",
// //     title: "Cybersecurity for Developers",
// //     date: "Feb 12, 2025",
// //     location: "Austin, TX",
// //     category: "Cybersecurity",
// //     attendees: 180,
// //     price: "$249",
// //     rating: 4.6,
// //     match: "88%",
// //     recommendationType: "Skill gap analysis",
// //     reason: "Identified as a key skill for your role",
// //     organizer: "SecureDev Academy",
// //     description: "Learn essential cybersecurity practices every developer should know.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["Security", "Development", "Best Practices", "OWASP"],
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     id: "5",
// //     title: "Data Visualization with D3.js",
// //     date: "Feb 18, 2025",
// //     location: "New York, NY",
// //     category: "Data Science",
// //     attendees: 150,
// //     price: "$179",
// //     rating: 4.8,
// //     match: "85%",
// //     recommendationType: "Similar attendees",
// //     reason: "People with similar profiles loved this event",
// //     organizer: "DataViz Pro",
// //     description: "Create stunning, interactive data visualizations using D3.js and modern web technologies.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["D3.js", "Visualization", "JavaScript", "Data"],
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     id: "6",
// //     title: "Mobile-First Design Workshop",
// //     date: "Mar 1, 2025",
// //     location: "Los Angeles, CA",
// //     category: "Mobile Development",
// //     attendees: 120,
// //     price: "$149",
// //     rating: 4.5,
// //     match: "82%",
// //     recommendationType: "Complementary skills",
// //     reason: "Complements your web development background",
// //     organizer: "Mobile Design Guild",
// //     description: "Learn mobile-first design principles and create responsive, user-friendly mobile experiences.",
// //     image: "/placeholder.svg?height=200&width=300",
// //     tags: ["Mobile", "Design", "UX", "Responsive"],
// //     difficulty: "Beginner",
// //   },
// // ]

// // const recommendationTypes = [
// //   "All Recommendations",
// //   "Based on your interests",
// //   "Trending in your network",
// //   "Career growth",
// //   "Skill gap analysis",
// //   "Similar attendees",
// //   "Complementary skills",
// // ]

// // const categories = [
// //   "All Categories",
// //   "Web Development",
// //   "Artificial Intelligence",
// //   "Cloud Computing",
// //   "Cybersecurity",
// //   "Data Science",
// //   "Mobile Development",
// // ]

// // // User profile data (simulated)
// // const userProfile = {
// //   name: "John Doe",
// //   interests: ["React", "JavaScript", "Cloud Computing", "AI"],
// //   attendedEvents: 12,
// //   savedEvents: 8,
// //   skillLevel: "Intermediate to Advanced",
// //   careerGoals: ["Full Stack Development", "Cloud Architecture", "Team Leadership"],
// // }

// // export default function RecommendedEvents() {
// //   const [filteredEvents, setFilteredEvents] = useState(recommendedEventsData)
// //   const [selectedRecommendationType, setSelectedRecommendationType] = useState("All Recommendations")
// //   const [selectedCategory, setSelectedCategory] = useState("All Categories")
// //   const [showProfile, setShowProfile] = useState(false)

// //   // Filter events based on recommendation type and category
// //   const handleFilterChange = () => {
// //     let filtered = recommendedEventsData

// //     if (selectedRecommendationType !== "All Recommendations") {
// //       filtered = filtered.filter((event) => event.recommendationType === selectedRecommendationType)
// //     }

// //     if (selectedCategory !== "All Categories") {
// //       filtered = filtered.filter((event) => event.category === selectedCategory)
// //     }

// //     setFilteredEvents(filtered)
// //   }

// //   // Apply filters when selection changes
// //   React.useEffect(() => {
// //     handleFilterChange()
// //   }, [selectedRecommendationType, selectedCategory])

// //   const getDifficultyColor = (difficulty) => {
// //     switch (difficulty) {
// //       case "Beginner":
// //         return "bg-green-100 text-green-800"
// //       case "Intermediate":
// //         return "bg-yellow-100 text-yellow-800"
// //       case "Advanced":
// //         return "bg-red-100 text-red-800"
// //       default:
// //         return "bg-gray-100 text-gray-800"
// //     }
// //   }

// //   const getRecommendationIcon = (type) => {
// //     switch (type) {
// //       case "Based on your interests":
// //         return <Heart size={14} className="text-red-500" />
// //       case "Trending in your network":
// //         return <TrendingUp size={14} className="text-blue-500" />
// //       case "Career growth":
// //         return <Award size={14} className="text-purple-500" />
// //       default:
// //         return <Star size={14} className="text-yellow-500" />
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-4 py-8">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-2">Recommended for You</h1>
// //           <p className="text-gray-600">
// //             Personalized event suggestions based on your interests, network, and career goals
// //           </p>
// //         </div>

// //         {/* User Profile Summary */}
// //         <Card className="mb-8">
// //           <CardContent className="p-6">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-2">Your Personalization Profile</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
// //                   <div>
// //                     <span className="text-gray-600">Interests:</span>
// //                     <div className="flex flex-wrap gap-1 mt-1">
// //                       {userProfile.interests.map((interest) => (
// //                         <Badge key={interest} variant="secondary" className="text-xs">
// //                           {interest}
// //                         </Badge>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <span className="text-gray-600">Experience:</span>
// //                     <p className="font-medium">{userProfile.skillLevel}</p>
// //                   </div>
// //                   <div>
// //                     <span className="text-gray-600">Activity:</span>
// //                     <p className="font-medium">
// //                       {userProfile.attendedEvents} attended • {userProfile.savedEvents} saved
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //               <Button variant="outline" size="sm" onClick={() => setShowProfile(!showProfile)}>
// //                 {showProfile ? "Hide" : "View"} Details
// //               </Button>
// //             </div>

// //             {showProfile && (
// //               <div className="mt-4 pt-4 border-t">
// //                 <div>
// //                   <span className="text-gray-600 text-sm">Career Goals:</span>
// //                   <div className="flex flex-wrap gap-1 mt-1">
// //                     {userProfile.careerGoals.map((goal) => (
// //                       <Badge key={goal} variant="success" className="text-xs">
// //                         {goal}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </CardContent>
// //         </Card>

// //         {/* Filters */}
// //         <Card className="mb-8">
// //           <CardContent className="p-6">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Recommendation Type</label>
// //                 <select
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   value={selectedRecommendationType}
// //                   onChange={(e) => setSelectedRecommendationType(e.target.value)}
// //                 >
// //                   {recommendationTypes.map((type) => (
// //                     <option key={type} value={type}>
// //                       {type}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
// //                 <select
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   value={selectedCategory}
// //                   onChange={(e) => setSelectedCategory(e.target.value)}
// //                 >
// //                   {categories.map((category) => (
// //                     <option key={category} value={category}>
// //                       {category}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className="flex items-end">
// //                 <Button
// //                   variant="outline"
// //                   onClick={() => {
// //                     setSelectedRecommendationType("All Recommendations")
// //                     setSelectedCategory("All Categories")
// //                   }}
// //                   className="w-full flex items-center gap-2"
// //                 >
// //                   <Filter size={16} />
// //                   Clear Filters
// //                 </Button>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Results Summary */}
// //         <div className="mb-6">
// //           <p className="text-gray-600">Showing {filteredEvents.length} personalized recommendations</p>
// //         </div>

// //         {/* Events Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           {filteredEvents.map((event) => (
// //             <Card key={event.id} className="hover:shadow-lg transition-shadow">
// //               <div className="flex">
// //                 <img
// //                   src={event.image || "/placeholder.svg"}
// //                   alt={event.title}
// //                   className="w-40 h-40 object-cover rounded-l-lg"
// //                 />
// //                 <CardContent className="flex-1 p-4">
// //                   <div className="flex justify-between items-start mb-2">
// //                     <div className="flex items-center gap-2">
// //                       {getRecommendationIcon(event.recommendationType)}
// //                       <Badge variant="secondary">{event.category}</Badge>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="text-lg font-bold text-green-600">{event.price}</div>
// //                       <div className="text-sm font-medium text-blue-600">{event.match} match</div>
// //                     </div>
// //                   </div>

// //                   <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>

// //                   <div className="space-y-1 text-sm text-gray-600 mb-3">
// //                     <div className="flex items-center gap-2">
// //                       <Calendar size={14} />
// //                       {event.date}
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <MapPin size={14} />
// //                       {event.location}
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <Star size={14} className="text-yellow-500" />
// //                       {event.rating} • {event.attendees} attendees
// //                     </div>
// //                   </div>

// //                   <div className="mb-3">
// //                     <div className="flex items-center gap-2 mb-1">
// //                       <span className="text-xs font-medium text-gray-700">Why recommended:</span>
// //                       <Badge className={getDifficultyColor(event.difficulty)} variant="secondary">
// //                         {event.difficulty}
// //                       </Badge>
// //                     </div>
// //                     <p className="text-xs text-gray-600">{event.reason}</p>
// //                   </div>

// //                   <p className="text-sm text-gray-700 mb-3 line-clamp-2">{event.description}</p>

// //                   <div className="flex flex-wrap gap-1 mb-3">
// //                     {event.tags.slice(0, 3).map((tag) => (
// //                       <Badge key={tag} variant="secondary" className="text-xs">
// //                         {tag}
// //                       </Badge>
// //                     ))}
// //                     {event.tags.length > 3 && (
// //                       <Badge variant="secondary" className="text-xs">
// //                         +{event.tags.length - 3} more
// //                       </Badge>
// //                     )}
// //                   </div>

// //                   <div className="flex gap-2">
// //                     <Link to={`/events/${event.id}`} className="flex-1">
// //                       <Button className="w-full text-sm">View Details</Button>
// //                     </Link>
// //                     <Button variant="outline" className="text-sm bg-transparent">
// //                       Save
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* Load More */}
// //         {filteredEvents.length > 0 && (
// //           <div className="text-center mt-12">
// //             <Button variant="outline" size="lg">
// //               Load More Recommendations
// //             </Button>
// //           </div>
// //         )}

// //         {/* Empty State */}
// //         {filteredEvents.length === 0 && (
// //           <div className="text-center py-12">
// //             <Star size={48} className="mx-auto text-gray-400 mb-4" />
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">No recommendations found</h3>
// //             <p className="text-gray-600 mb-4">Try adjusting your filters or update your profile preferences.</p>
// //             <Button
// //               onClick={() => {
// //                 setSelectedRecommendationType("All Recommendations")
// //                 setSelectedCategory("All Categories")
// //               }}
// //             >
// //               Show All Recommendations
// //             </Button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }
//"use client";

// import { Calendar, MapPin, Search, Tag } from "lucide-react";
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
// export default function RecommendedEvents() {
//   const [events, setEvents] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [categoryFilter, setCategoryFilter] = useState("all");

//   // -------------------- Fetch Data --------------------
//   const loadRecommendations = async () => {
//     setLoading(true);
//     try {
//       const data = await eventService.getRecommendedEvents(categoryFilter);
//       setEvents(data);
//     } catch (err) {
//       console.error("Error fetching recommended events:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const loadUserTags = async () => {
//   //   try {
//   //     const data = await eventService.getTopTags();
//   //     setTags(data || []);
//   //   } catch (err) {
//   //     console.error("Error fetching user tags:", err);
//   //   }
//   // };

  
// const loadUserTags = async () => {
//   try {
//     const res = await eventService.getTopTags();
    
//     // Try to get data whether axios wrapped or not
//     const tagsData = res?.data || res?.data || [];
//     setTags(tagsData);

//     console.log("Parsed tags:", tagsData);
//   } catch (err) {
//     console.error("Error fetching user tags:", err);
//   }
// };

//   useEffect(() => {
//     loadRecommendations();
//     loadUserTags();
//   }, [categoryFilter]);

//   // -------------------- Search Filter --------------------
//   const filteredEvents = events.filter(
//     (event) =>
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (event.venue_name &&
//         event.venue_name.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const categories = [
//     { label: "All", value: "all" },
//     { label: "Web Dev", value: "web-dev" },
//     { label: "AI / ML", value: "ai-ml" },
//     { label: "Cloud", value: "cloud-computing" },
//     { label: "Security", value: "cyber-security" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Recommended Events
//           </h1>
//           <p className="text-gray-600">
//             Tailored just for you — based on your interests and activity.
//           </p>
//         </div>

//         {/* Your Interests */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
//             <Tag size={18} /> Your Interests
//           </h2>
//           {tags.length === 0 ? (
//             <p className="text-gray-500 text-sm">No interests found yet.</p>
//           ) : (
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, i) => (
//                 <Badge key={i}>{tag.id}</Badge>
//               ))}
//             </div>
//           )}
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

//             {/* Category Filter */}
//             <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
//               {categories.map((cat) => (
//                 <Button
//                   key={cat.value}
//                   variant={categoryFilter === cat.value ? "default" : "outline"}
//                   onClick={() => setCategoryFilter(cat.value)}
//                 >
//                   {cat.label}
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
//               No recommended events
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Try exploring new topics or update your interests.
//             </p>
//             <Button onClick={() => setCategoryFilter("all")}>Show All</Button>
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
//                         {event.category_id || "Uncategorized"}
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
// "use client"

// import { CalendarDays, Search, Tag } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Link, useSearchParams } from "react-router-dom"
// import { eventService } from "../services/eventService"

// const Events = () => {
  
//  const [tags, setTags] = useState([]);
//   const [events, setEvents] = useState([])
//   const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
//   const [userTags, setUserTags] = useState([]) // Your Interests
//   const [searchTerm, setSearchTerm] = useState("")
//   const [loading, setLoading] = useState(false)
// console.log("Tags state:", tags);
//   const [searchParams, setSearchParams] = useSearchParams()
//   const selectedCategory = searchParams.get("category_id") || "all"
//   const selectedFilter = searchParams.get("filter") || "all" // all, week, month, year

// const loadUserTags = async () => {
//   try {
//     const res = await eventService.getTopTags();
    
//     // Try to get data whether axios wrapped or not
//     const tagsData = res?.data || res?.data || [];
//     setTags(tagsData);

//     console.log("Parsed tags:", tagsData);
//   } catch (err) {
//     console.error("Error fetching user tags:", err);
//   }
// };

//   // Fetch categories
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

//   // Fetch user top tags (Your Interests)
//   useEffect(() => {
//     const fetchUserTags = async () => {
//       try {
//         const data = await eventService.getTopTags() // [{id, total_score}, ...]
//         setUserTags(data)
//       } catch (err) {
//         console.error("Failed to fetch user tags:", err)
//       }
//     }
//     fetchUserTags()
//   }, [])

//   // Fetch events
//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)
//       try {
//         const filters = {
//           category_id: selectedCategory,
//           search: searchTerm,
//           filter: selectedFilter,
//           limit: 20,
//         }
//         const data = await eventService.getEvents(filters)
//         setEvents(data)
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchEvents()
//   }, [selectedCategory, searchTerm, selectedFilter])

//   // Update URL params
//   const handleCategoryChange = (e) => {
//     const value = e.target.value
//     if (value === "all") searchParams.delete("category_id")
//     else searchParams.set("category_id", value)
//     setSearchParams(searchParams)
//   }

//   const handleFilterChange = (e) => {
//     const value = e.target.value
//     if (value === "all") searchParams.delete("filter")
//     else searchParams.set("filter", value)
//     setSearchParams(searchParams)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         {/* Your Interests
//         {userTags.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Interests</h2>
//             <div className="flex flex-wrap gap-2">
//               {userTags.map((tag) => (
//                 <span
//                   key={tag.id}
//                   className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200"
//                   onClick={() => setSearchTerm(tag.id)} // click to filter events by tag
//                 >
//                   {tag.id}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )} */}
//   {/* Your Interests */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
//             <Tag size={18} /> Your Interests
//           </h2>
//           {tags.length === 0 ? (
//             <p className="text-gray-500 text-sm">No interests found yet.</p>
//           ) : (
//             <div className="flex flex-wrap gap-2">
//               {console.log("Rendering tags:", tags)}
//               {tags.map((tag, i) => (
//                 <Badge key={i}>{tag.id}</Badge>
//               ))}
//             </div>
//           )}
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
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>

//           {/* Date Filter */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[150px]"
//             value={selectedFilter}
//             onChange={handleFilterChange}
//           >
//             <option value="all">All Time</option>
//             <option value="week">This Week</option>
//             <option value="month">This Month</option>
//             <option value="year">This Year</option>
//           </select>
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
//                 searchParams.delete("category_id")
//                 searchParams.delete("filter")
//                 setSearchParams(searchParams)
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
//                       {categories.find((c) => c.id === event.category_id)?.name || event.category_name}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">
//                       {event.price ? `Rs. ${event.price}` : "Free"}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} /> {event.start_date} | {event.location}
//                   </p>

//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>

//                   {/* Event Tags */}
//                   {event.tags && event.tags.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mb-2">
//                       {event.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200"
//                           onClick={() => setSearchTerm(tag)} // filter events by tag on click
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <p className="text-xs text-gray-500">{event.booked_count || 0} attendees registered</p>
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

// import { CalendarDays, Search, Tag } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Link, useSearchParams } from "react-router-dom"
// import { eventService } from "../services/eventService"

// // Simple Badge component
// const Badge = ({ children, onClick }) => (
//   <span
//     className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200"
//     onClick={onClick}
//   >
//     {children}
//   </span>
// )

// const Events = () => {
//   const [tags, setTags] = useState([])
//   const [events, setEvents] = useState([])
//   const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [loading, setLoading] = useState(false)

//   const [searchParams, setSearchParams] = useSearchParams()
//   const selectedCategory = searchParams.get("category_id") || "all"
//   const selectedFilter = searchParams.get("filter") || "all" // all, week, month, year

//   // Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await eventService.getCategories()
//         setCategories([{ id: "all", name: "All Categories" }, ...(data || [])])
//       } catch (err) {
//         console.error("Failed to fetch categories:", err)
//       }
//     }
//     fetchCategories()
//   }, [])

//   // Fetch user tags / interests
//   useEffect(() => {
//     const fetchTags = async () => {
//       try {
//         const res = await eventService.getTopTags()
//         const tagsData = Array.isArray(res?.data || res) ? res.data || res : []
//         setTags(tagsData)
//       } catch (err) {
//         console.error("Error fetching user tags:", err)
//         setTags([])
//       }
//     }
//     fetchTags()
//   }, [])

//   // Fetch events whenever filters or search term change
//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)
//       try {
//         const filters = {
//           category_id: selectedCategory,
//           search: searchTerm,
//           filter: selectedFilter,
//           limit: 20,
//         }
//         const data = await eventService.getRecommendedEvents(filters)
//         setEvents(Array.isArray(data) ? data : [])
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//         setEvents([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchEvents()
//   }, [selectedCategory, searchTerm, selectedFilter])
//   // Handlers to update URL params
//   const handleCategoryChange = (e) => {
//     const value = e.target.value
//     if (value === "all") searchParams.delete("category_id")
//     else searchParams.set("category_id", value)
//     setSearchParams(searchParams)
//   }

//   const handleFilterChange = (e) => {
//     const value = e.target.value
//     if (value === "all") searchParams.delete("filter")
//     else searchParams.set("filter", value)
//     setSearchParams(searchParams)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
//           <p className="text-gray-600">Discover the latest technology events and conferences</p>
//         </div>

//         {/* Your Interests */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
//             <Tag size={18} /> Your Interests
//           </h2>
//           {tags.length === 0 ? (
//             <p className="text-gray-500 text-sm">No interests found yet.</p>
//           ) : (
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, i) => (
//                 <Badge key={i} onClick={() => setSearchTerm(tag.id || tag)}>
//                   {tag.id || tag}
//                 </Badge>
//               ))}
//             </div>
//           )}
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
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>

//           {/* Date Filter */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[150px]"
//             value={selectedFilter}
//             onChange={handleFilterChange}
//           >
//             <option value="all">All Time</option>
//             <option value="week">This Week</option>
//             <option value="month">This Month</option>
//             <option value="year">This Year</option>
//           </select>
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
//                 searchParams.delete("category_id")
//                 searchParams.delete("filter")
//                 setSearchParams(searchParams)
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
//                       {categories.find((c) => c.id === event.category_id)?.name || event.category_name}
//                     </span>
//                     <span className="text-lg font-bold text-green-600">
//                       {event.price ? `Rs. ${event.price}` : "Free"}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

//                   <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
//                     <CalendarDays size={14} /> {event.start_date} | {event.location}
//                   </p>

//                   <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>

//                   {/* Event Tags */}
//                   {event.tags?.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mb-2">
//                       {event.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200"
//                           onClick={() => setSearchTerm(tag)}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <p className="text-xs text-gray-500">{event.booked_count || 0} attendees registered</p>
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
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Badge } from "../components/Layout/ui/badge";
import { Button } from "../components/Layout/ui/button";
import { Card, CardContent } from "../components/Layout/ui/card";

import { eventService } from "../services/eventService";

const gradients = [
  "from-blue-600 to-purple-600",
  "from-green-600 to-blue-600",
  "from-red-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-blue-600",
  "from-yellow-600 to-red-600",
  "from-cyan-600 to-blue-600",
  "from-pink-600 to-red-600",
];

// UI Components
const Skeleton = ({ className, ...props }) => (
  <div className={`animate-pulse rounded-md bg-muted ${className}`} {...props} />
)


const formatEventDate = (dateString) => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    // Format: "Dec 5, 2025"
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
};

const formatLocation = (location) => {
  if (!location) return "";
  const parts = location.split(',');
  return parts.slice(0, 3).join(',');
};

const Events = () => {
  const [tags, setTags] = useState([])
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get("category_id") || "all"
  const selectedFilter = searchParams.get("filter") || "all"

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await eventService.getCategories()
        setCategories([{ id: "all", name: "All Categories" }, ...(data || [])])
      } catch (err) {
        console.error("Failed to fetch categories:", err)
      }
    }
    fetchCategories()
  }, [])

  // Fetch user tags (interests)
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await eventService.getTopTags()
        const tagsData = Array.isArray(res?.data || res) ? res.data || res : []
        setTags(tagsData)
      } catch (err) {
        console.error("Error fetching user tags:", err)
        setTags([])
      }
    }
    fetchTags()
  }, [])

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const filters = {
          category_id: selectedCategory,
          search: searchTerm,
          filter: selectedFilter,
          limit: 10,
        }
        const data = await eventService.getRecommendedEvents(filters)
        if (!Array.isArray(data)) return setEvents([])

        // Compute match percentage based on user tags
        const userTagStrings = tags.map(t => t.id || t.tag || t.name || t)
        const eventsWithMatch = data.map(event => {
          const eventTags = Array.isArray(event.tags) ? event.tags : []
          const matchedCount = eventTags.filter(tag => userTagStrings.includes(tag)).length
          const matchPercentage =
            eventTags.length > 0 ? Math.round((matchedCount / eventTags.length) * 100) : 0
          return { ...event, match_percentage: matchPercentage }
        })

        setEvents(eventsWithMatch)
      } catch (err) {
        console.error("Failed to fetch events:", err)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [selectedCategory, searchTerm, selectedFilter, tags])

  // Handlers to update URL params
  const handleCategoryChange = e => {
    const value = e.target.value
    if (value === "all") searchParams.delete("category_id")
    else searchParams.set("category_id", value)
    setSearchParams(searchParams)
  }

  const handleFilterChange = e => {
    const value = e.target.value
    if (value === "all") searchParams.delete("filter")
    else searchParams.set("filter", value)
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

        {/* User Interests */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Tag size={18} /> Your Interests
          </h2>
          {tags.length === 0 ? (
            <p className="text-gray-500 text-sm">No interests found yet. Start exploring events!</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => {
                const tagName = tag.id || tag.tag || tag.name || tag
                return (
                  <Badge key={i} onClick={() => setSearchTerm(tagName)}>
                    {tagName}
                  </Badge>
                )
              })}
            </div>
          )}
        </div> */}

        {/* Filters */}
        {/* <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search tech events..."
              className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[150px]"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All Time</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div> */}

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="flex flex-col h-[400px]">
                <Skeleton className="w-full h-48 rounded-t-lg" />
                <CardContent className="flex flex-col justify-between flex-1 p-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <div className="space-y-1 mb-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-9 w-full mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                searchParams.delete("category_id")
                searchParams.delete("filter")
                setSearchParams(searchParams)
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={event.id || event._id}
                className="hover:shadow-lg transition-shadow flex flex-col h-[400px]"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  {event.featured_image ? (
                    <img
                      src={event.featured_image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-r ${gradients[index % gradients.length]} flex items-center justify-center`}>
                      <span className="text-white text-lg font-semibold">Event Image</span>
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-col justify-between flex-1 p-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{categories.find(c => c.id === event.category_id)?.name || event.category_name}</Badge>
                      <div className="text-right text-sm text-gray-500">
                        {event.match_percentage ?? 0}% Match
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>

                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={14} /> {formatEventDate(event.start_date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {formatLocation(event.location)}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">{event.description}</p>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link to={`/events/${event.id || event._id}`} className="flex-1">
                      <Button className="w-full text-sm">View Details & Register</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
