"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { apiService } from "../../services/apiService"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  TrendingUp,
  Plus,
  Award,
  Target,
  ChevronRight,
  Heart,
} from "lucide-react"

// Enhanced dummy data for user dashboard
const dummyUserStats = {
  events_attended: 12,
  upcoming_bookings: 3,
  favorite_events: 8,
  points_earned: 150,
  certificates_earned: 4,
  networking_connections: 23,
  hours_learned: 48,
  skill_badges: 7,
}

const dummyUpcomingEvents = [
  {
    id: 1,
    title: "React Advanced Patterns Workshop",
    start_date: "2024-01-25T10:00:00Z",
    end_date: "2024-01-25T17:00:00Z",
    location: "San Francisco, CA",
    venue_name: "Tech Hub SF",
    price: 89,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Web Development", color: "blue" },
    organizer: { name: "React Masters", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 50,
    booked_count: 35,
    booking_status: "confirmed",
    booking_date: "2024-01-15T09:00:00Z",
    ticket_type: "Early Bird",
    skills: ["React", "JavaScript", "Hooks"],
  },
  {
    id: 2,
    title: "AI/ML Conference 2024",
    start_date: "2024-02-15T09:00:00Z",
    end_date: "2024-02-15T18:00:00Z",
    location: "New York, NY",
    venue_name: "Convention Center",
    price: 0,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Artificial Intelligence", color: "purple" },
    organizer: { name: "AI Society", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 200,
    booked_count: 180,
    booking_status: "confirmed",
    booking_date: "2024-01-20T14:30:00Z",
    ticket_type: "Free",
    skills: ["Machine Learning", "Python", "TensorFlow"],
  },
  {
    id: 3,
    title: "DevOps Masterclass",
    start_date: "2024-02-28T13:00:00Z",
    end_date: "2024-02-28T17:00:00Z",
    location: "Austin, TX",
    venue_name: "Innovation Center",
    price: 120,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "DevOps", color: "green" },
    organizer: { name: "DevOps Pro", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 30,
    booked_count: 28,
    booking_status: "waitlist",
    booking_date: "2024-02-01T11:15:00Z",
    ticket_type: "Standard",
    skills: ["Docker", "Kubernetes", "AWS"],
  },
]

const dummyRecommendations = [
  {
    id: 4,
    title: "Vue.js Masterclass",
    start_date: "2024-02-20T14:00:00Z",
    location: "Los Angeles, CA",
    venue_name: "Dev Center LA",
    price: 75,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Web Development", color: "green" },
    organizer: { name: "Vue Experts" },
    capacity: 40,
    booked_count: 25,
    match_percentage: 92,
    reason: "Based on your React experience",
  },
  {
    id: 5,
    title: "Blockchain Fundamentals",
    start_date: "2024-03-05T10:00:00Z",
    location: "Seattle, WA",
    venue_name: "Crypto Hub",
    price: 150,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Blockchain", color: "yellow" },
    organizer: { name: "Blockchain Academy" },
    capacity: 60,
    booked_count: 45,
    match_percentage: 87,
    reason: "Trending in your network",
  },
]

const dummyRecentActivity = [
  {
    id: 1,
    type: "booking",
    title: "Registered for React Advanced Patterns Workshop",
    date: "2024-01-15T09:00:00Z",
    icon: Calendar,
    color: "blue",
  },
  {
    id: 2,
    type: "certificate",
    title: "Earned JavaScript Fundamentals Certificate",
    date: "2024-01-10T16:30:00Z",
    icon: Award,
    color: "yellow",
  },
  {
    id: 3,
    type: "favorite",
    title: "Added AI/ML Conference 2024 to favorites",
    date: "2024-01-08T11:20:00Z",
    icon: Heart,
    color: "red",
  },
  {
    id: 4,
    type: "connection",
    title: "Connected with 3 new developers",
    date: "2024-01-05T14:45:00Z",
    icon: Users,
    color: "green",
  },
]

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  // Try API first, fallback to dummy data
  const { data: userStats } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      try {
        return await apiService.getUserStats()
      } catch (error) {
        console.log("API not available, using dummy data")
        return dummyUserStats
      }
    },
  })

  const { data: upcomingEvents } = useQuery({
    queryKey: ["user-upcoming-events"],
    queryFn: async () => {
      try {
        return await apiService.getUserUpcomingEvents()
      } catch (error) {
        console.log("API not available, using dummy data")
        return { data: dummyUpcomingEvents }
      }
    },
  })

  const { data: recommendations } = useQuery({
    queryKey: ["user-recommendations"],
    queryFn: async () => {
      try {
        return await apiService.getRecommendations()
      } catch (error) {
        console.log("API not available, using dummy data")
        return { data: dummyRecommendations }
      }
    },
  })

  const StatCard = ({ title, value, icon: Icon, color = "primary", subtitle, trend }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600 font-medium">{trend}</span>
            </div>
          )}
        </div>
        <div
          className={`p-3 rounded-full ${
            color === "primary"
              ? "bg-blue-100"
              : color === "green"
                ? "bg-green-100"
                : color === "purple"
                  ? "bg-purple-100"
                  : color === "yellow"
                    ? "bg-yellow-100"
                    : color === "red"
                      ? "bg-red-100"
                      : "bg-gray-100"
          }`}
        >
          <Icon
            className={`h-6 w-6 ${
              color === "primary"
                ? "text-blue-600"
                : color === "green"
                  ? "text-green-600"
                  : color === "purple"
                    ? "text-purple-600"
                    : color === "yellow"
                      ? "text-yellow-600"
                      : color === "red"
                        ? "text-red-600"
                        : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  )

  const UpcomingEventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={event.featured_image || "/placeholder.svg?height=80&width=80"}
          alt={event.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{event.title}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.booking_status === "confirmed"
                  ? "bg-green-100 text-green-800"
                  : event.booking_status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : event.booking_status === "waitlist"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-100 text-gray-800"
              }`}
            >
              {event.booking_status}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(event.start_date).toLocaleDateString()}</span>
            <Clock className="h-4 w-4 ml-4 mr-1" />
            <span>{new Date(event.start_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">
              {event.venue_name}, {event.location}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium bg-${event.category.color}-100 text-${event.category.color}-800`}
              >
                {event.category.name}
              </span>
              <span className="text-xs text-gray-500">{event.ticket_type}</span>
            </div>
            <Link
              to={`/events/${event.id}`}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
            >
              View Details <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {event.skills && (
            <div className="flex flex-wrap gap-1 mt-3">
              {event.skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const RecommendationCard = ({ event }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{event.title}</h3>
        <div className="flex items-center ml-2">
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">{event.match_percentage}%</div>
            <div className="text-xs text-gray-500">match</div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs text-gray-500 mb-2">
        <Calendar className="h-3 w-3 mr-1" />
        <span>{new Date(event.start_date).toLocaleDateString()}</span>
      </div>

      <div className="flex items-center text-xs text-gray-500 mb-3">
        <MapPin className="h-3 w-3 mr-1" />
        <span className="truncate">{event.location}</span>
      </div>

      <p className="text-xs text-blue-600 mb-3 italic">{event.reason}</p>

      <div className="flex items-center justify-between">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium bg-${event.category.color}-100 text-${event.category.color}-800`}
        >
          {event.category.name}
        </span>
        <Link to={`/events/${event.id}`} className="text-blue-600 hover:text-blue-700 text-xs font-medium">
          Learn More →
        </Link>
      </div>
    </div>
  )

  const ActivityItem = ({ activity }) => {
    const Icon = activity.icon
    return (
      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className={`p-2 rounded-full bg-${activity.color}-100`}>
          <Icon className={`h-4 w-4 text-${activity.color}-600`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          <p className="text-xs text-gray-500">
            {new Date(activity.date).toLocaleDateString()} at{" "}
            {new Date(activity.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your tech journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Events Attended"
            value={userStats?.events_attended || 0}
            icon={Calendar}
            color="primary"
            subtitle="This year"
            trend="+2 this month"
          />
          <StatCard
            title="Upcoming Events"
            value={userStats?.upcoming_bookings || 0}
            icon={Clock}
            color="green"
            subtitle="Next 30 days"
          />
          <StatCard
            title="Learning Hours"
            value={userStats?.hours_learned || 0}
            icon={Target}
            color="purple"
            subtitle="Total logged"
            trend="+8 this week"
          />
          <StatCard
            title="Skill Badges"
            value={userStats?.skill_badges || 0}
            icon={Award}
            color="yellow"
            subtitle="Earned"
            trend="+1 new"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
                  <Link to="/user/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              <div className="p-6">
                {upcomingEvents?.data?.length > 0 ? (
                  <div className="space-y-6">
                    {upcomingEvents.data.map((event) => (
                      <UpcomingEventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming events</h3>
                    <p className="text-gray-500 mb-6">Discover and book exciting tech events near you!</p>
                    <Link
                      to="/events"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Browse Events
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-1">
                  {dummyRecentActivity.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/events"
                  className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-blue-800">Browse Events</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/user/bookings"
                  className="w-full flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium text-green-800">My Bookings</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/user/favorites"
                  className="w-full flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-sm font-medium text-red-800">Favorites</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/user/profile"
                  className="w-full flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium text-purple-800">Update Profile</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recommended</h2>
                <Link to="/recommended-events" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              {recommendations?.data?.length > 0 ? (
                <div className="space-y-4">
                  {recommendations.data.slice(0, 3).map((event) => (
                    <RecommendationCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-3">No recommendations yet</p>
                  <p className="text-xs text-gray-400">Attend more events to get personalized suggestions</p>
                </div>
              )}
            </div>

            {/* Achievement Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievement Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Event Explorer</span>
                    <span className="text-sm text-gray-500">12/15</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Attend 15 events to unlock</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Skill Collector</span>
                    <span className="text-sm text-gray-500">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Earn 10 skill badges</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Community Builder</span>
                    <span className="text-sm text-gray-500">23/50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "46%" }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Connect with 50 people</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
