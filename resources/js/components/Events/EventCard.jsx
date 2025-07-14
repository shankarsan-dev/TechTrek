import { Link } from "react-router-dom"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const availableSpots = event.capacity - event.booked_count
  const isAlmostFull = availableSpots <= event.capacity * 0.2

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={event.featured_image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {event.category.name}
          </span>
        </div>
        {event.price === 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Free</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(event.start_date)}</span>
          <Clock className="h-4 w-4 ml-4 mr-1" />
          <span>{formatTime(event.start_date)}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="truncate">
            {event.venue_name}, {event.location}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{event.booked_count} attending</span>
          </div>
          {isAlmostFull && (
            <span className="text-xs text-orange-600 font-medium">Only {availableSpots} spots left!</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            {event.price > 0 ? (
              <span className="text-lg font-bold text-gray-900">${event.price}</span>
            ) : (
              <span className="text-lg font-bold text-green-600">Free</span>
            )}
          </div>
          <Link
            to={`/events/${event.id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Organized by <span className="font-medium">{event.organizer.name}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
