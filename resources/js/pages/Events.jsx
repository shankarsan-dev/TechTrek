
"use client"

import { CalendarDays, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { eventService } from "../services/eventService"

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id || event._id}
                className="flex flex-col hover:shadow-lg transition-shadow bg-white rounded-lg shadow"
              >
                <img
                  src={event.featured_image || "/placeholder.svg"}
                  alt={event.title}
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {categories.find((c) => c.id === event.category_id)?.name || event.category_name}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {event.price ? `Rs. ${event.price}` : "Free"}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold line-clamp-2 mb-2">{event.title}</h3>

                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <CalendarDays size={14} /> {event.start_date} | {event.location}
                  </p>

                  <p className="text-gray-700 text-sm line-clamp-3 mb-3">{event.description}</p>
                  <p className="text-xs text-gray-500">{event.booked_count || 0} attendees registered</p>
                </div>

                <div className="p-4 pt-0 mt-auto">
                  <Link to={`/events/${event.id || event._id}`}>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      View Details & Register
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
