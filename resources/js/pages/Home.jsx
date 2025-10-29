"use client"

import { ArrowRight, Calendar, ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NearestEventsSection from "../components/Events/NearestEventsSection";
import UpcomingEventsSection from "../components/Events/UpcomingEventsSection";


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

// Banner data
const banners = [
  {
    id: 1,
    title: "AI & Machine Learning Summit 2024",
    subtitle: "Join 500+ developers and AI experts",
    description: "Discover the latest in artificial intelligence, machine learning, and neural networks",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Register Now",
    link: "/events/1",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "React & Next.js Conference",
    subtitle: "Master modern web development",
    description: "Deep dive into React 18, Next.js 14, and the future of web development",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Learn More",
    link: "/events/2",
    gradient: "from-green-600 to-blue-600",
  },
  {
    id: 3,
    title: "Cybersecurity Workshop",
    subtitle: "Protect the digital world",
    description: "Hands-on ethical hacking and cybersecurity training with industry experts",
    image: "/placeholder.svg?height=400&width=800",
    cta: "Join Workshop",
    link: "/events/3",
    gradient: "from-red-600 to-orange-600",
  },
]

const upcomingEvents = [
  {
    id: "7",
    title: "AI in Healthcare Conference",
    date: "Mar 12, 2025",
    location: "Boston, MA",
    rating: 4.6,
    attendees: 300,
    price: "$399",
    category: "AI/Healthcare",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "8",
    title: "Frontend Masters Workshop",
    date: "Mar 25, 2025",
    location: "New York, NY",
    rating: 4.8,
    attendees: 120,
    price: "$199",
    category: "Web Dev",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "9",
    title: "Global Tech Expo",
    date: "Apr 3, 2025",
    location: "Las Vegas, NV",
    rating: 4.9,
    attendees: 2000,
    price: "$799",
    category: "Expo",
    image: "/placeholder.svg?height=200&width=300",
  },
]


const recommendedEvents = [
  {
    id: "4",
    title: "Cloud Computing Bootcamp",
    date: "Jan 25, 2025",
    location: "Seattle, WA",
    rating: 4.8,
    attendees: 200,
    price: "$499",
    category: "Cloud",
    match: "95%",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "Blockchain Developer Summit",
    date: "Feb 5, 2025",
    location: "Miami, FL",
    rating: 4.9,
    attendees: 250,
    price: "$349",
    category: "Blockchain",
    match: "88%",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Mobile App Development",
    date: "Feb 18, 2025",
    location: "Los Angeles, CA",
    rating: 4.7,
    attendees: 180,
    price: "$249",
    category: "Mobile",
    match: "82%",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = [
  { name: "Artificial Intelligence", count: 45, icon: "🤖", color: "bg-blue-100 text-blue-800", id:"ai-ml"},
  { name: "Web Development", count: 67, icon: "💻", color: "bg-green-100 text-green-800", id:"web-dev" },
  { name: "Mobile Development", count: 32, icon: "📱", color: "bg-purple-100 text-purple-800", id:"mobile-dev" },
  { name: "Data Science", count: 28, icon: "📊", color: "bg-orange-100 text-orange-800", id:"data-science" },
  { name: "Cybersecurity", count: 19, icon: "🔒", color: "bg-red-100 text-red-800", id:"cyber-security" },
  { name: "Cloud Computing", count: 41, icon: "☁️", color: "bg-cyan-100 text-cyan-800", id:"cloud-computing" },
  { name: "Blockchain", count: 23, icon: "⛓️", color: "bg-yellow-100 text-yellow-800", id:"blockchain-web3" },
  { name: "Dev Ops", count: 15, icon: "🌐", color: "bg-indigo-100 text-indigo-800", id:"dev-ops" },
]

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)
 // const { location, loading, error } = useLocation();
   const [nearestEvents, setNearestEvents] = useState([]);
  console.log("User location:", location);
  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-90`} />
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
                <p className="text-xl md:text-2xl mb-2 opacity-90">{banner.subtitle}</p>
                <p className="text-lg mb-8 opacity-80">{banner.description}</p>
                <Link to={banner.link}>
                  <Button size="lg" className="bg-blue-900 text-gray-900 hover:bg-blue-200">
                    {banner.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

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
      <section className="py-12 bg-white">
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
      </section>
      {/*Upcoming Events */}
      <section className="py-16 bg-gray-50">
  <UpcomingEventsSection />
</section>
{/* Events Near You */}
<section className="py-16 bg-gray-50">
  <NearestEventsSection />
</section>

      {/* Recommended Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended for You</h2>
              <p className="text-gray-600">Personalized event suggestions based on your interests</p>
            </div>
            <Link to="/recommended-events">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{event.category}</Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{event.price}</div>
                      <div className="text-sm text-blue-600 font-medium">{event.match} match</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={14} className="text-yellow-500" />
                      {event.rating} • {event.attendees} attendees
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

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore events across different technology domains and find your perfect learning opportunity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/events?category_id=${encodeURIComponent(category.id)}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <Badge className={category.color}>{category.count} events</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
