// "use client"

// import { Blocks, ChevronLeft, ChevronRight, Cloud, Code, Cpu, Database, Settings, Shield, Smartphone } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import NearestEventsSection from "../components/Events/NearestEventsSection";
// import RecommendedEventsSection from "../components/Events/RecommendedEventsSection";
// import UpcomingEventsSection from "../components/Events/UpcomingEventsSection";
// import { eventService } from "../services/eventService";

// // Simple UI Components
// const Card = ({ className = "", children, ...props }) => (
//   <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// )

// const CardHeader = ({ className = "", children, ...props }) => (
//   <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
//     {children}
//   </div>
// )

// const CardTitle = ({ className = "", children, ...props }) => (
//   <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
//     {children}
//   </h3>
// )

// const CardContent = ({ className = "", children, ...props }) => (
//   <div className={`p-6 pt-0 ${className}`} {...props}>
//     {children}
//   </div>
// )

// const Button = ({ className = "", variant = "default", size = "default", children, ...props }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"

//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
//     ghost: "hover:bg-gray-100",
//     secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
//   }

//   const sizes = {
//     default: "h-10 px-4 py-2",
//     sm: "h-9 rounded-md px-3",
//     lg: "h-11 rounded-md px-8",
//     icon: "h-10 w-10",
//   }

//   return (
//     <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
//       {children}
//     </button>
//   )
// }

// const Badge = ({ className = "", variant = "default", children, ...props }) => {
//   const variants = {
//     default: "bg-blue-100 text-blue-800",
//     secondary: "bg-gray-100 text-gray-800",
//     success: "bg-green-100 text-green-800",
//     warning: "bg-yellow-100 text-yellow-800",
//   }

//   return (
//     <div
//       className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }

// // Banner data will be fetched from API

// const gradients = [
//   "from-blue-600 to-purple-600",
//   "from-green-600 to-blue-600",
//   "from-red-600 to-orange-600",
//   "from-purple-600 to-pink-600",
//   "from-indigo-600 to-blue-600",
//   "from-yellow-600 to-red-600",
//   "from-cyan-600 to-blue-600",
//   "from-pink-600 to-red-600",
// ];

// const categories = [
//   { name: "Artificial Intelligence", count: 45, icon: Cpu, color: "bg-blue-100 text-blue-800", id:"ai-ml"},
//   { name: "Web Development", count: 67, icon: Code, color: "bg-green-100 text-green-800", id:"web-dev" },
//   { name: "Mobile Development", count: 32, icon: Smartphone, color: "bg-purple-100 text-purple-800", id:"mobile-dev" },
//   { name: "Data Science", count: 28, icon: Database, color: "bg-orange-100 text-orange-800", id:"data-science" },
//   { name: "Cybersecurity", count: 19, icon: Shield, color: "bg-red-100 text-red-800", id:"cyber-security" },
//   { name: "Cloud Computing", count: 41, icon: Cloud, color: "bg-cyan-100 text-cyan-800", id:"cloud-computing" },
//   { name: "Blockchain", count: 23, icon: Blocks, color: "bg-yellow-100 text-yellow-800", id:"blockchain-web3" },
//   { name: "Dev Ops", count: 15, icon: Settings, color: "bg-indigo-100 text-indigo-800", id:"devops" },
// ]

// export default function Home() {
//   const [currentBanner, setCurrentBanner] = useState(0)
//   const [banners, setBanners] = useState([])
//   const [loading, setLoading] = useState(true)
//   // const { location, loading, error } = useLocation();
//    const [nearestEvents, setNearestEvents] = useState([]);
//   console.log("User location:", location);

//   // Fetch banner events
//   useEffect(() => {
//     const fetchBannerEvents = async () => {
//       setLoading(true)
//       try {
//         const filters = {
//           category_id: "all",
//           search: "",
//           filter: "all",
//           limit: 5,
//         }
//         const data = await eventService.getEvents(filters)
//         const formattedBanners = data.map((event, index) => ({
//           id: event.id || event._id,
//           title: event.title,
//           description: event.description?.substring(0, 100) + "..." || "Discover this amazing tech event",
//           image: event.featured_image || "/placeholder.svg?height=400&width=800",
//           cta: "Register Now",
//           link: `/events/${event.id || event._id}`,
//           gradient: index === 0 ? "from-blue-600 to-purple-600" :
//                    index === 1 ? "from-green-600 to-blue-600" :
//                    index === 2 ? "from-red-600 to-orange-600" :
//                    index === 3 ? "from-purple-600 to-pink-600" :
//                    "from-indigo-600 to-blue-600",
//         }))
//         setBanners(formattedBanners)
//       } catch (err) {
//         console.error("Failed to fetch banner events:", err)
//         // Fallback to static banners if fetch fails
//         setBanners([
//           {
//             id: 1,
//             title: "AI & Machine Learning Summit 2026",
//             description: "Discover the latest in artificial intelligence, machine learning, and neural networks",
//             image: "/placeholder.svg?height=400&width=800",
//             cta: "Register Now",
//             link: "/events/1",
//             gradient: "from-blue-600 to-purple-600",
//           },
//           {
//             id: 2,
//             title: "React & Next.js Conference",
//             description: "Deep dive into React 18, Next.js 14, and the future of web development",
//             image: "/placeholder.svg?height=400&width=800",
//             cta: "Learn More",
//             link: "/events/2",
//             gradient: "from-green-600 to-blue-600",
//           },
//           {
//             id: 3,
//             title: "Cybersecurity Workshop",
//             description: "Hands-on ethical hacking and cybersecurity training with industry experts",
//             image: "/placeholder.svg?height=400&width=800",
//             cta: "Join Workshop",
//             link: "/events/3",
//             gradient: "from-red-600 to-orange-600",
//           },
//         ])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchBannerEvents()
//   }, [])

//   // Auto-rotate banners
//   useEffect(() => {
//     if (banners.length > 0) {
//       const timer = setInterval(() => {
//         setCurrentBanner((prev) => (prev + 1) % banners.length)
//       }, 5000)
//       return () => clearInterval(timer)
//     }
//   }, [banners])

//   const nextBanner = () => {
//     setCurrentBanner((prev) => (prev + 1) % banners.length)
//   }

//   const prevBanner = () => {
//     setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner Carousel */}
//       <section className="relative h-96 md:h-[500px] overflow-hidden">
//         {loading ? (
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
//             <div className="text-center text-white px-4 max-w-4xl">
//               <div className="animate-pulse">
//                 <div className="h-12 bg-white/20 rounded mb-4"></div>
//                 <div className="h-8 bg-white/20 rounded mb-2"></div>
//                 <div className="h-6 bg-white/20 rounded mb-8"></div>
//                 <div className="h-12 bg-white/20 rounded w-48 mx-auto"></div>
//               </div>
//             </div>
//           </div>
//         ) : banners.length === 0 ? (
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
//             <div className="text-center text-white px-4 max-w-4xl">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechTrek</h1>
//               <p className="text-lg mb-8 opacity-80">Join thousands of developers and tech enthusiasts</p>
//               <Link to="/events">
//                 <Button size="lg" className="bg-blue-900 text-gray-900 hover:bg-blue-200">
//                   Browse Events
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           banners.map((banner, index) => (
//             <div
//               key={banner.id}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentBanner ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {banner.image ? (
//                 <>
//                   <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-90`} />
//                   <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
//                 </>
//               ) : (
//                 <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
//               )}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center text-white px-4 max-w-4xl">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
//                   <p className="text-lg mb-8 opacity-80">{banner.description}</p>
//                   <Link to={banner.link}>
//                     <Button size="lg" className="bg-blue-900 text-gray-900 hover:bg-blue-200">
//                       {banner.cta}
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevBanner}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextBanner}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//           {banners.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentBanner(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentBanner ? "bg-white" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//               <div className="text-gray-600">Tech Events</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
//               <div className="text-gray-600">Attendees</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
//               <div className="text-gray-600">Organizers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
//               <div className="text-gray-600">Cities</div>
//             </div>
//           </div>
//         </div>
//         </section>
//    {/* Upcoming Events */}
// <section className="py-16 bg-gray">
//   <UpcomingEventsSection />
// </section>

// {/* Events Near You */}
//   <NearestEventsSection />
// {/* Recommended Events */}
// <section className="py-16 bg-gray">
//   <RecommendedEventsSection />
// </section>
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Explore events across different technology domains and find your perfect learning opportunity
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {categories.map((category) => {
//               const IconComponent = category.icon
//               return (
//                 <Link key={category.id} to={`/events?category_id=${encodeURIComponent(category.id)}`}>
//                   <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
//                     <CardContent className="p-6 text-center">
//                       <IconComponent className="w-16 h-16 mb-4 mx-auto" />
//                       <h3 className="font-semibold mb-2">{category.name}</h3>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>
//       </section> 
//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto text-white">
//             <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Tech Skills?</h2>
//             <p className="text-xl mb-8 opacity-90">
//               Join thousands of developers, engineers, and tech enthusiasts at our upcoming events
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//            <Link to="/events">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
//                 >
//                   Browse All Events
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
//                 >
//                   Create Account
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client"

import { Blocks, ChevronLeft, ChevronRight, Cloud, Code, Cpu, Database, MapPin, Navigation, Settings, Shield, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NearestEventsSection from "../components/Events/NearestEventsSection";
import RecommendedEventsSection from "../components/Events/RecommendedEventsSection";
import UpcomingEventsSection from "../components/Events/UpcomingEventsSection";
import { eventService } from "../services/eventService";

// Simple UI Components
const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const Button = ({ className = "", variant = "default", size = "default", children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Badge = ({ className = "", variant = "default", children, ...props }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Banner data will be fetched from API

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

const categories = [
  { name: "Artificial Intelligence", count: 45, icon: Cpu, color: "bg-blue-100 text-blue-800", id:"ai-ml"},
  { name: "Web Development", count: 67, icon: Code, color: "bg-green-100 text-green-800", id:"web-dev" },
  { name: "Mobile Development", count: 32, icon: Smartphone, color: "bg-purple-100 text-purple-800", id:"mobile-dev" },
  { name: "Data Science", count: 28, icon: Database, color: "bg-orange-100 text-orange-800", id:"data-science" },
  { name: "Cybersecurity", count: 19, icon: Shield, color: "bg-red-100 text-red-800", id:"cyber-security" },
  { name: "Cloud Computing", count: 41, icon: Cloud, color: "bg-cyan-100 text-cyan-800", id:"cloud-computing" },
  { name: "Blockchain", count: 23, icon: Blocks, color: "bg-yellow-100 text-yellow-800", id:"blockchain-web3" },
  { name: "Dev Ops", count: 15, icon: Settings, color: "bg-indigo-100 text-indigo-800", id:"devops" },
]

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(true)
  const [showLocationPrompt, setShowLocationPrompt] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [gettingLocation, setGettingLocation] = useState(false)
  const [locationError, setLocationError] = useState("")
  const [permissionDenied, setPermissionDenied] = useState(false)

  // Fetch banner events
  useEffect(() => {
    const fetchBannerEvents = async () => {
      setLoading(true)
      try {
        const filters = {
          category_id: "all",
          search: "",
          filter: "all",
          limit: 5,
        }
        const data = await eventService.getEvents(filters)
        const formattedBanners = data.map((event, index) => ({
          id: event.id || event._id,
          title: event.title,
          description: event.description?.substring(0, 100) + "..." || "Discover this amazing tech event",
          image: event.featured_image || "/placeholder.svg?height=400&width=800",
          cta: "Register Now",
          link: `/events/${event.id || event._id}`,
          gradient: index === 0 ? "from-blue-600 to-purple-600" :
                   index === 1 ? "from-green-600 to-blue-600" :
                   index === 2 ? "from-red-600 to-orange-600" :
                   index === 3 ? "from-purple-600 to-pink-600" :
                   "from-indigo-600 to-blue-600",
        }))
        setBanners(formattedBanners)
      } catch (err) {
        console.error("Failed to fetch banner events:", err)
        // Fallback to static banners if fetch fails
        setBanners([
          {
            id: 1,
            title: "AI & Machine Learning Summit 2026",
            description: "Discover the latest in artificial intelligence, machine learning, and neural networks",
            image: "/placeholder.svg?height=400&width=800",
            cta: "Register Now",
            link: "/events/1",
            gradient: "from-blue-600 to-purple-600",
          },
          {
            id: 2,
            title: "React & Next.js Conference",
            description: "Deep dive into React 18, Next.js 14, and the future of web development",
            image: "/placeholder.svg?height=400&width=800",
            cta: "Learn More",
            link: "/events/2",
            gradient: "from-green-600 to-blue-600",
          },
          {
            id: 3,
            title: "Cybersecurity Workshop",
            description: "Hands-on ethical hacking and cybersecurity training with industry experts",
            image: "/placeholder.svg?height=400&width=800",
            cta: "Join Workshop",
            link: "/events/3",
            gradient: "from-red-600 to-orange-600",
          },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchBannerEvents()
  }, [])

  // Check for cached location on mount
  useEffect(() => {
    const cached = localStorage.getItem("userLocation")
    const now = new Date().getTime()

    if (cached) {
      try {
        const { latitude, longitude, timestamp } = JSON.parse(cached)
        // Use cache if less than 24 hours old
        if (now - timestamp < 86400000 && latitude && longitude) {
          console.log("Using cached location:", { latitude, longitude })
          setUserLocation({ latitude, longitude })
          return
        }
      } catch (e) {
        console.warn("Error parsing cached location:", e)
      }
    }

    // Show location prompt after a short delay
    const timer = setTimeout(() => {
      setShowLocationPrompt(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate banners
  useEffect(() => {
    if (banners.length > 0) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [banners])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  // Request location permission
  const requestLocationPermission = () => {
    setGettingLocation(true)
    setLocationError("")

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser")
      setGettingLocation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ latitude, longitude })
        setGettingLocation(false)
        setShowLocationPrompt(false)
        
        // Cache the location
        localStorage.setItem(
          "userLocation",
          JSON.stringify({ 
            latitude, 
            longitude, 
            timestamp: new Date().getTime()
          })
        )
      },
      (error) => {
        setGettingLocation(false)
        setPermissionDenied(true)
        
        let errorMsg = ""
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = "Location access was denied. You can enable it later in browser settings."
            break
          case error.POSITION_UNAVAILABLE:
            errorMsg = "Location information is unavailable. Please try again."
            break
          case error.TIMEOUT:
            errorMsg = "Location request timed out. Please try again."
            break
          default:
            errorMsg = "An unknown error occurred."
        }
        setLocationError(errorMsg)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  // Skip location for now
  const skipLocation = () => {
    setShowLocationPrompt(false)
    setPermissionDenied(false)
  }

  // Retry getting location
  const retryLocation = () => {
    setPermissionDenied(false)
    setLocationError("")
    requestLocationPermission()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Location Permission Prompt */}
      {showLocationPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to TechTrek!
              </h3>
              <p className="text-gray-600 mb-4">
                To show you events near you, we need your location permission.
                This helps us personalize your experience and find relevant tech events.
              </p>
            </div>
            
            {permissionDenied ? (
              <>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Navigation className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Location Access Denied
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>{locationError}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button 
                    onClick={retryLocation}
                    disabled={gettingLocation}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    {gettingLocation ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Requesting Location...
                      </>
                    ) : (
                      "Try Again"
                    )}
                  </Button>
                  <Button 
                    onClick={skipLocation}
                    variant="outline"
                    className="w-full py-3"
                  >
                    Continue Without Location
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <Button 
                  onClick={requestLocationPermission}
                  disabled={gettingLocation}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  {gettingLocation ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Getting Location...
                    </>
                  ) : (
                    <>
                      <Navigation size={18} className="mr-2" />
                      Allow Location Access
                    </>
                  )}
                </Button>
                <Button 
                  onClick={skipLocation}
                  variant="outline"
                  className="w-full py-3"
                >
                  Skip for Now
                </Button>
              </div>
            )}
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Your location is only used to find nearby events and is never shared with third parties.
            </p>
          </div>
        </div>
      )}

      {/* Hero Banner Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <div className="animate-pulse">
                <div className="h-12 bg-white/20 rounded mb-4"></div>
                <div className="h-8 bg-white/20 rounded mb-2"></div>
                <div className="h-6 bg-white/20 rounded mb-8"></div>
                <div className="h-12 bg-white/20 rounded w-48 mx-auto"></div>
              </div>
            </div>
          </div>
        ) : banners.length === 0 ? (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechTrek</h1>
              <p className="text-lg mb-8 opacity-80">Join thousands of developers and tech enthusiasts</p>
              <Link to="/events">
                <Button size="lg" className="bg-blue-900 text-gray-900 hover:bg-blue-200">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? "opacity-100" : "opacity-0"
              }`}
            >
              {banner.image ? (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-90`} />
                  <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                </>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-lg mb-8 opacity-80">{banner.description}</p>
                  <Link to={banner.link}>
                    <Button size="lg" className="bg-blue-900 text-gray-900 hover:bg-blue-200">
                      {banner.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Tech Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Organizers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Cities</div>
            </div>
          </div>
        </div>
        </section> */}

   {/* Upcoming Events */}
   <section className="py-16 bg-gray">
     <UpcomingEventsSection />
   </section>

   {/* Events Near You */}
   <section className="py-16 bg-white">
     {userLocation ? (
       <NearestEventsSection />
     ) : (
       <div className="container mx-auto px-4">
         <div className="flex justify-between items-center mb-8">
           <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-2">Events Near You</h2>
             <p className="text-gray-600">Allow location access to see events in your area</p>
           </div>
           <Button 
             onClick={() => setShowLocationPrompt(true)}
             variant="outline" 
             className="flex items-center gap-2"
           >
             <MapPin size={16} />
             Enable Location
           </Button>
         </div>
         <div className="text-center py-12 bg-gray-50 rounded-lg">
           <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
           <h3 className="text-xl font-semibold text-gray-700 mb-2">Location Required</h3>
           <p className="text-gray-500 mb-6 max-w-md mx-auto">
             Enable location access to discover tech events happening near you.
           </p>
           <Button 
             onClick={() => setShowLocationPrompt(true)}
             className="flex items-center gap-2 mx-auto"
           >
             <Navigation size={16} />
             Allow Location Access
           </Button>
         </div>
       </div>
     )}
   </section>

   {/* Recommended Events */}
   <section className="py-16 bg-gray">
     <RecommendedEventsSection />
   </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore events across different technology domains and find your perfect learning opportunity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} to={`/events?category_id=${encodeURIComponent(category.id)}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-16 h-16 mb-4 mx-auto" />
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section> 
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Tech Skills?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers, engineers, and tech enthusiasts at our upcoming events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Browse All Events
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}