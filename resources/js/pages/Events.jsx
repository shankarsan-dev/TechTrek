
"use client"

import { CalendarDays, MapPin, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Badge } from "../components/Layout/ui/badge"
import { Button } from "../components/Layout/ui/button"
import { Card, CardContent } from "../components/Layout/ui/card"
import { eventService } from "../services/eventService"

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

const Events = () => {
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get("category_id") || "all"
  const selectedFilter = searchParams.get("filter") || "all" // all, week, month, year

  // Fetch categories once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await eventService.getCategories()
        setCategories([{ id: "all", name: "All Categories" }, ...data])
      } catch (err) {
        console.error("Failed to fetch categories:", err)
      }
    }
    fetchCategories()
  }, [])

  // Fetch events whenever category, search term, or filter changes
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const filters = {
          category_id: selectedCategory,
          search: searchTerm,
          filter: selectedFilter,
          limit: 20,
        }
        const data = await eventService.getEvents(filters)
        setEvents(data)
      } catch (err) {
        console.error("Failed to fetch events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [selectedCategory, searchTerm, selectedFilter])

  // Update URL params
  const handleCategoryChange = (e) => {
    const value = e.target.value
    if (value === "all") searchParams.delete("category_id")
    else searchParams.set("category_id", value)
    setSearchParams(searchParams)
  }

  const handleFilterChange = (e) => {
    const value = e.target.value
    if (value === "all") searchParams.delete("filter")
    else searchParams.set("filter", value)
    setSearchParams(searchParams)
  }

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

const formatEventDateWithDay = (dateString) => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    // Format: "Fri, Dec 5, 2025"
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

const formatLocation = (location) => {
  if (!location) return "";
  const parts = location.split(',');
  return parts.slice(0, 3).join(',');
};
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Events</h1>
          <p className="text-gray-600">Discover the latest technology events and conferences</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search tech events..."
              className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Category Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Date Filter */}
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
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 text-lg">Loading events...</div>
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
                      <Badge>{categories.find((c) => c.id === event.category_id)?.name || event.category_name}</Badge>
                      <div className="text-right text-sm text-gray-500">
                        {event.price ? `Rs. ${event.price}` : "Free"}
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
