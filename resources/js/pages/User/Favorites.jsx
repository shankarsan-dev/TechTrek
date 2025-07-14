"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { apiService } from "../../services/apiService"
import { Heart, Search, Grid3X3, List, Calendar, MapPin, Users, Star, Trash2, Share2, ExternalLink } from "lucide-react"

// Dummy data for user favorites
const dummyFavorites = [
  {
    id: 1,
    title: "React Advanced Patterns Workshop",
    start_date: "2024-01-25T10:00:00Z",
    location: "San Francisco, CA",
    venue_name: "Tech Hub SF",
    price: 89,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Web Development", color: "blue" },
    organizer: { name: "React Masters", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 50,
    booked_count: 35,
    rating: 4.8,
    reviews_count: 124,
    added_to_favorites: "2024-01-15T09:00:00Z",
    description: "Master advanced React patterns including render props, higher-order components, and hooks patterns.",
    skills: ["React", "JavaScript", "Hooks", "Performance"],
  },
  {
    id: 2,
    title: "AI/ML Conference 2024",
    start_date: "2024-02-15T09:00:00Z",
    location: "New York, NY",
    venue_name: "Convention Center",
    price: 0,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Artificial Intelligence", color: "purple" },
    organizer: { name: "AI Society", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 200,
    booked_count: 180,
    rating: 4.9,
    reviews_count: 89,
    added_to_favorites: "2024-01-20T14:30:00Z",
    description: "Explore the latest trends in AI and machine learning with industry experts.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Deep Learning"],
  },
  {
    id: 3,
    title: "DevOps Masterclass",
    start_date: "2024-02-28T13:00:00Z",
    location: "Austin, TX",
    venue_name: "Innovation Center",
    price: 120,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "DevOps", color: "green" },
    organizer: { name: "DevOps Pro", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 30,
    booked_count: 28,
    rating: 4.7,
    reviews_count: 56,
    added_to_favorites: "2024-02-01T11:15:00Z",
    description: "Learn modern DevOps practices including containerization, orchestration, and CI/CD.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    id: 4,
    title: "Blockchain Development Bootcamp",
    start_date: "2024-03-10T10:00:00Z",
    location: "Seattle, WA",
    venue_name: "Crypto Hub",
    price: 200,
    featured_image: "/placeholder.svg?height=200&width=400",
    category: { name: "Blockchain", color: "yellow" },
    organizer: { name: "Blockchain Academy", avatar: "/placeholder.svg?height=40&width=40" },
    capacity: 40,
    booked_count: 32,
    rating: 4.6,
    reviews_count: 78,
    added_to_favorites: "2024-02-05T16:45:00Z",
    description: "Build decentralized applications and smart contracts from scratch.",
    skills: ["Solidity", "Web3", "Ethereum", "Smart Contracts"],
  },
]

const categories = [
  "All Categories",
  "Web Development",
  "Artificial Intelligence",
  "DevOps",
  "Blockchain",
  "Mobile Development",
  "Data Science",
]

const UserFavorites = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("recently_added")
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'

  // Try API first, fallback to dummy data
  const { data: favorites, refetch } = useQuery({
    queryKey: ["user-favorites"],
    queryFn: async () => {
      try {
        return await apiService.getUserFavorites()
      } catch (error) {
        console.log("API not available, using dummy data")
        return { data: dummyFavorites }
      }
    },
  })

  const handleRemoveFavorite = async (eventId) => {
    try {
      await apiService.removeFavorite(eventId)
      refetch()
    } catch (error) {
      console.log("API not available")
      // In real app, show error message
    }
  }

  const handleShare = (event) => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: `${window.location.origin}/events/${event.id}`,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/events/${event.id}`)
    }
  }

  // Filter and sort favorites
  const filteredFavorites = favorites?.data
    ?.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Categories" || event.category.name === selectedCategory
      return matchesSearch && matchesCategory
    })
    ?.sort((a, b) => {
      switch (sortBy) {
        case "recently_added":
          return new Date(b.added_to_favorites) - new Date(a.added_to_favorites)
        case "event_date":
          return new Date(a.start_date) - new Date(b.start_date)
        case "title":
          return a.title.localeCompare(b.title)
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const FavoriteCard = ({ event, isListView = false }) => (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${
        isListView ? "flex items-center space-x-4 p-4" : "overflow-hidden"
      }`}
    >
      <div className={isListView ? "flex-shrink-0" : ""}>
        <img
          src={event.featured_image || "/placeholder.svg"}
          alt={event.title}
          className={`object-cover ${isListView ? "w-24 h-24 rounded-lg" : "w-full h-48"}`}
        />
      </div>

      <div className={`${isListView ? "flex-1 min-w-0" : "p-4"}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-semibold text-gray-900 ${isListView ? "text-lg" : "text-base"} line-clamp-2`}>
            {event.title}
          </h3>
          <div className="flex items-center space-x-2 ml-2">
            <button
              onClick={() => handleShare(event)}
              className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              title="Share event"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleRemoveFavorite(event.id)}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              title="Remove from favorites"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(event.start_date).toLocaleDateString()}</span>
          <MapPin className="h-4 w-4 ml-4 mr-1" />
          <span className="truncate">{event.location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium bg-${event.category.color}-100 text-${event.category.color}-800`}
          >
            {event.category.name}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900 ml-1">{event.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({event.reviews_count})</span>
          </div>
        </div>

        {!isListView && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">
              {event.booked_count}/{event.capacity}
            </span>
            <span className="text-sm font-medium text-gray-900">{event.price === 0 ? "Free" : `$${event.price}`}</span>
          </div>
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View Details
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {isListView && event.skills && (
          <div className="flex flex-wrap gap-1 mt-3">
            {event.skills.slice(0, 4).map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-400 mt-2">
          Added {new Date(event.added_to_favorites).toLocaleDateString()}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                My Favorites
              </h1>
              <p className="text-gray-600 mt-1">{filteredFavorites?.length || 0} saved events</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="recently_added">Recently Added</option>
              <option value="event_date">Event Date</option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All Categories")
                setSortBy("recently_added")
              }}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Favorites Grid/List */}
        {filteredFavorites?.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredFavorites.map((event) => (
              <FavoriteCard key={event.id} event={event} isListView={viewMode === "list"} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || selectedCategory !== "All Categories"
                ? "Try adjusting your filters"
                : "Start adding events to your favorites to see them here"}
            </p>
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Events
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserFavorites
