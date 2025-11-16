"use client"

import { CalendarDays, DollarSign, Edit, Eye, Search, Trash2, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { eventService } from "../../services/eventService"

const EventManagement = () => {
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([{ id: "all", name: "All Categories" }])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get("category_id") || "all"
  const selectedFilter = searchParams.get("filter") || "all"

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
          limit: 50, // Show more events in admin panel
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

  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      try {
        await eventService.deleteEvent(eventId)
        setEvents(events => events.filter(event => event.id !== eventId))
      } catch (err) {
        console.error('Failed to delete event:', err)
        alert('Failed to delete event. Please try again.')
      }
    }
  }

  const getStatusColor = (event) => {
    const now = new Date()
    const eventDate = new Date(event.start_date)
    
    if (eventDate < now) return 'bg-gray-100 text-gray-800'
    if (event.booked_count >= event.capacity) return 'bg-red-100 text-red-800'
    return 'bg-green-100 text-green-800'
  }

  const getStatusText = (event) => {
    const now = new Date()
    const eventDate = new Date(event.start_date)
    
    if (eventDate < now) return 'Completed'
    if (event.booked_count >= event.capacity) return 'Sold Out'
    return 'Active'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Event Management</h1>
          <p className="text-gray-600">Manage all platform events</p>
        </div>
        <div className="text-sm text-gray-500">
          {events.length} events found
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          {/* Category Filter */}
          <select
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[200px]"
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
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[150px]"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All Time</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-500 text-lg">Loading events...</div>
      ) : events.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg mb-4">No events found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm("")
              searchParams.delete("category_id")
              searchParams.delete("filter")
              setSearchParams(searchParams)
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id || event._id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.featured_image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event)}`}>
                    {getStatusText(event)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {categories.find((c) => c.id === event.category_id)?.name || event.category_name}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1 mr-2">
                    {event.title}
                  </h3>
                  <span className="text-lg font-bold text-green-600 whitespace-nowrap">
                    {event.price ? `Rs. ${event.price}` : "Free"}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarDays size={16} className="mr-2" />
                    {event.start_date} | {event.start_time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2" />
                    {event.booked_count || 0} / {event.capacity || 0} attendees
                  </div>
                  {event.price > 0 && (
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign size={16} className="mr-2" />
                      Revenue: Rs. {(event.price * (event.booked_count || 0)).toLocaleString()}
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {event.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Link to={`/events/${event.id || event._id}`}>
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </Link>
                    <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteEvent(event.id || event._id)}
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Organizer: {event.organizer_name || 'Unknown'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EventManagement