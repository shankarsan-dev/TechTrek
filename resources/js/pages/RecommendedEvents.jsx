"use client"

import React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Calendar, MapPin, TrendingUp, Award, Heart, Filter } from "lucide-react"

// Simple UI Components
const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const Button = ({ className = "", variant = "default", size = "default", children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
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
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    secondary: "bg-gray-100 text-gray-800",
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

// Sample recommended events data
const recommendedEventsData = [
  {
    id: "1",
    title: "Advanced React Patterns & Performance",
    date: "Jan 15, 2025",
    location: "San Francisco, CA",
    category: "Web Development",
    attendees: 300,
    price: "$199",
    rating: 4.9,
    match: "98%",
    recommendationType: "Based on your interests",
    reason: "You've attended 3 React events and rated them highly",
    organizer: "React Masters",
    description: "Deep dive into advanced React patterns, performance optimization, and modern development practices.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "JavaScript", "Performance", "Advanced"],
    difficulty: "Advanced",
  },
  {
    id: "2",
    title: "AI Ethics & Responsible Machine Learning",
    date: "Jan 22, 2025",
    location: "Stanford, CA",
    category: "Artificial Intelligence",
    attendees: 250,
    price: "$299",
    rating: 4.8,
    match: "95%",
    recommendationType: "Trending in your network",
    reason: "5 people in your network are attending",
    organizer: "AI Ethics Institute",
    description: "Explore the ethical implications of AI and learn to build responsible machine learning systems.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI", "Ethics", "Machine Learning", "Responsibility"],
    difficulty: "Intermediate",
  },
  {
    id: "3",
    title: "Cloud-Native Architecture Masterclass",
    date: "Feb 5, 2025",
    location: "Seattle, WA",
    category: "Cloud Computing",
    attendees: 400,
    price: "$399",
    rating: 4.7,
    match: "92%",
    recommendationType: "Career growth",
    reason: "Aligns with your career goals in cloud architecture",
    organizer: "Cloud Native Foundation",
    description: "Master microservices, containers, and cloud-native patterns for scalable applications.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Cloud", "Microservices", "Kubernetes", "Architecture"],
    difficulty: "Advanced",
  },
  {
    id: "4",
    title: "Cybersecurity for Developers",
    date: "Feb 12, 2025",
    location: "Austin, TX",
    category: "Cybersecurity",
    attendees: 180,
    price: "$249",
    rating: 4.6,
    match: "88%",
    recommendationType: "Skill gap analysis",
    reason: "Identified as a key skill for your role",
    organizer: "SecureDev Academy",
    description: "Learn essential cybersecurity practices every developer should know.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Security", "Development", "Best Practices", "OWASP"],
    difficulty: "Intermediate",
  },
  {
    id: "5",
    title: "Data Visualization with D3.js",
    date: "Feb 18, 2025",
    location: "New York, NY",
    category: "Data Science",
    attendees: 150,
    price: "$179",
    rating: 4.8,
    match: "85%",
    recommendationType: "Similar attendees",
    reason: "People with similar profiles loved this event",
    organizer: "DataViz Pro",
    description: "Create stunning, interactive data visualizations using D3.js and modern web technologies.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["D3.js", "Visualization", "JavaScript", "Data"],
    difficulty: "Intermediate",
  },
  {
    id: "6",
    title: "Mobile-First Design Workshop",
    date: "Mar 1, 2025",
    location: "Los Angeles, CA",
    category: "Mobile Development",
    attendees: 120,
    price: "$149",
    rating: 4.5,
    match: "82%",
    recommendationType: "Complementary skills",
    reason: "Complements your web development background",
    organizer: "Mobile Design Guild",
    description: "Learn mobile-first design principles and create responsive, user-friendly mobile experiences.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mobile", "Design", "UX", "Responsive"],
    difficulty: "Beginner",
  },
]

const recommendationTypes = [
  "All Recommendations",
  "Based on your interests",
  "Trending in your network",
  "Career growth",
  "Skill gap analysis",
  "Similar attendees",
  "Complementary skills",
]

const categories = [
  "All Categories",
  "Web Development",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Mobile Development",
]

// User profile data (simulated)
const userProfile = {
  name: "John Doe",
  interests: ["React", "JavaScript", "Cloud Computing", "AI"],
  attendedEvents: 12,
  savedEvents: 8,
  skillLevel: "Intermediate to Advanced",
  careerGoals: ["Full Stack Development", "Cloud Architecture", "Team Leadership"],
}

export default function RecommendedEvents() {
  const [filteredEvents, setFilteredEvents] = useState(recommendedEventsData)
  const [selectedRecommendationType, setSelectedRecommendationType] = useState("All Recommendations")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [showProfile, setShowProfile] = useState(false)

  // Filter events based on recommendation type and category
  const handleFilterChange = () => {
    let filtered = recommendedEventsData

    if (selectedRecommendationType !== "All Recommendations") {
      filtered = filtered.filter((event) => event.recommendationType === selectedRecommendationType)
    }

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    setFilteredEvents(filtered)
  }

  // Apply filters when selection changes
  React.useEffect(() => {
    handleFilterChange()
  }, [selectedRecommendationType, selectedCategory])

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRecommendationIcon = (type) => {
    switch (type) {
      case "Based on your interests":
        return <Heart size={14} className="text-red-500" />
      case "Trending in your network":
        return <TrendingUp size={14} className="text-blue-500" />
      case "Career growth":
        return <Award size={14} className="text-purple-500" />
      default:
        return <Star size={14} className="text-yellow-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Recommended for You</h1>
          <p className="text-gray-600">
            Personalized event suggestions based on your interests, network, and career goals
          </p>
        </div>

        {/* User Profile Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Personalization Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Interests:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {userProfile.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Experience:</span>
                    <p className="font-medium">{userProfile.skillLevel}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Activity:</span>
                    <p className="font-medium">
                      {userProfile.attendedEvents} attended • {userProfile.savedEvents} saved
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setShowProfile(!showProfile)}>
                {showProfile ? "Hide" : "View"} Details
              </Button>
            </div>

            {showProfile && (
              <div className="mt-4 pt-4 border-t">
                <div>
                  <span className="text-gray-600 text-sm">Career Goals:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {userProfile.careerGoals.map((goal) => (
                      <Badge key={goal} variant="success" className="text-xs">
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recommendation Type</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedRecommendationType}
                  onChange={(e) => setSelectedRecommendationType(e.target.value)}
                >
                  {recommendationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedRecommendationType("All Recommendations")
                    setSelectedCategory("All Categories")
                  }}
                  className="w-full flex items-center gap-2"
                >
                  <Filter size={16} />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">Showing {filteredEvents.length} personalized recommendations</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <div className="flex">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-40 h-40 object-cover rounded-l-lg"
                />
                <CardContent className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {getRecommendationIcon(event.recommendationType)}
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{event.price}</div>
                      <div className="text-sm font-medium text-blue-600">{event.match} match</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>

                  <div className="space-y-1 text-sm text-gray-600 mb-3">
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

                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-gray-700">Why recommended:</span>
                      <Badge className={getDifficultyColor(event.difficulty)} variant="secondary">
                        {event.difficulty}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{event.reason}</p>
                  </div>

                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">{event.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {event.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {event.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{event.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/events/${event.id}`} className="flex-1">
                      <Button className="w-full text-sm">View Details</Button>
                    </Link>
                    <Button variant="outline" className="text-sm bg-transparent">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Recommendations
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Star size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recommendations found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or update your profile preferences.</p>
            <Button
              onClick={() => {
                setSelectedRecommendationType("All Recommendations")
                setSelectedCategory("All Categories")
              }}
            >
              Show All Recommendations
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
