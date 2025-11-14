// src/pages/admin/EventManagement.jsx
import {
    Calendar,
    DollarSign,
    Edit,
    Eye,
    Filter,
    MapPin,
    Search,
    Tag,
    Trash2,
    User,
    Users
} from "lucide-react"
import { useState } from "react"

const EventManagement = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2024",
      organizer: "TechCorp Events",
      date: "2024-03-15",
      time: "09:00 - 18:00",
      location: "San Francisco Convention Center",
      city: "San Francisco, CA",
      attendees: 500,
      capacity: 600,
      status: "published",
      category: "Technology",
      price: 99.99,
      revenue: 24500,
      ticketsSold: 245
    },
    {
      id: 2,
      title: "Music Festival Weekend",
      organizer: "Music Festivals Inc",
      date: "2024-04-20",
      time: "12:00 - 23:00",
      location: "Zilker Park",
      city: "Austin, TX",
      attendees: 2000,
      capacity: 2500,
      status: "published",
      category: "Music",
      price: 149.99,
      revenue: 120000,
      ticketsSold: 800
    },
    {
      id: 3,
      title: "Startup Workshop Series",
      organizer: "TechCorp Events",
      date: "2024-02-10",
      time: "10:00 - 16:00",
      location: "WeWork Downtown",
      city: "New York, NY",
      attendees: 50,
      capacity: 60,
      status: "draft",
      category: "Business",
      price: 0,
      revenue: 0,
      ticketsSold: 12
    }
  ])

  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    search: ''
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      setEvents(events => events.filter(event => event.id !== eventId))
    }
  }

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(filters.search.toLowerCase())
    const matchesStatus = filters.status === 'all' || event.status === filters.status
    const matchesCategory = filters.category === 'all' || event.category === filters.category
    
    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = [...new Set(events.map(event => event.category))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Event Management</h1>
          <p className="text-gray-600">Manage all platform events</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredEvents.length} events found
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search events..."
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <select 
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select 
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
            className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metrics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <User className="h-4 w-4 mr-1" />
                          {event.organizer}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Tag className="h-4 w-4 mr-1" />
                          {event.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {event.city}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        {event.attendees}/{event.capacity}
                      </div>
                      <div className="flex items-center mt-1">
                        <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                        {formatCurrency(event.revenue)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteEvent(event.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventManagement