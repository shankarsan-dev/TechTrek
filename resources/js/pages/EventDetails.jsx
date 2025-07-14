"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { CalendarDays, MapPin, Users, Clock, Star } from "lucide-react"

// Dummy event data - in real app this would come from API based on params.id
const eventData = {
  id: "1",
  title: "AI & Machine Learning Summit 2024",
  date: "2024-12-15",
  time: "9:00 AM - 6:00 PM",
  location: "San Francisco, CA",
  venue: "Moscone Convention Center",
  category: "Artificial Intelligence",
  description:
    "Join industry leaders and AI experts for a comprehensive exploration of the latest breakthroughs in artificial intelligence, machine learning, and neural networks. This summit features keynote presentations, hands-on workshops, and networking opportunities with top professionals in the field.",
  imageUrl: "/placeholder.jpg",
  price: "$299",
  originalPrice: "$399",
  attendees: 500,
  maxAttendees: 750,
  rating: 4.8,
  reviews: 124,
  organizer: {
    name: "TechEvents Inc.",
    avatar: "/placeholder-user.jpg",
    verified: true,
  },
  agenda: [
    { time: "9:00 AM", title: "Registration & Welcome Coffee" },
    { time: "10:00 AM", title: "Keynote: The Future of AI" },
    { time: "11:30 AM", title: "Workshop: Building Neural Networks" },
    { time: "1:00 PM", title: "Lunch & Networking" },
    { time: "2:30 PM", title: "Panel: AI Ethics and Responsibility" },
    { time: "4:00 PM", title: "Hands-on: Machine Learning with Python" },
    { time: "5:30 PM", title: "Closing Remarks & Networking" },
  ],
  speakers: [
    { name: "Dr. Sarah Chen", role: "AI Research Director at Google", avatar: "/placeholder-user.jpg" },
    { name: "Michael Rodriguez", role: "ML Engineer at OpenAI", avatar: "/placeholder-user.jpg" },
    { name: "Prof. Lisa Wang", role: "Stanford AI Lab", avatar: "/placeholder-user.jpg" },
  ],
  tags: ["AI", "Machine Learning", "Deep Learning", "Neural Networks", "Python"],
}

const EventDetails = () => {
  const { id } = useParams()
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegister = () => {
    setIsRegistered(true)
    // In real app, this would make API call to register user
  }

  // In a real app, you would fetch event data based on the id
  // const event = useEventData(id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <img
            src={eventData.imageUrl || "/placeholder.svg"}
            alt={eventData.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{eventData.category}</span>
              {eventData.tags.map((tag) => (
                <span key={tag} className="border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{eventData.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays size={20} />
                <div>
                  <div className="font-medium">{eventData.date}</div>
                  <div className="text-sm">{eventData.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <div>
                  <div className="font-medium">{eventData.location}</div>
                  <div className="text-sm">{eventData.venue}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={20} />
                <div>
                  <div className="font-medium">{eventData.attendees} registered</div>
                  <div className="text-sm">of {eventData.maxAttendees} spots</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Star size={20} />
                <div>
                  <div className="font-medium">{eventData.rating} rating</div>
                  <div className="text-sm">{eventData.reviews} reviews</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-green-600">{eventData.price}</div>
                <div className="text-lg text-gray-500 line-through">{eventData.originalPrice}</div>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">25% OFF</span>
              </div>

              <button
                className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
                onClick={handleRegister}
                disabled={isRegistered}
              >
                {isRegistered ? "✓ Registered" : "Register Now"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">{eventData.description}</p>
            </div>

            {/* Agenda */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
              <div className="space-y-4">
                {eventData.agenda.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[100px]">
                      <Clock size={16} />
                      {item.time}
                    </div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Featured Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventData.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={speaker.avatar || "/placeholder-user.jpg"}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{speaker.name}</div>
                      <div className="text-sm text-gray-600">{speaker.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Organizer</h2>
              <div className="flex items-center gap-3">
                <img
                  src={eventData.organizer.avatar || "/placeholder-user.jpg"}
                  alt={eventData.organizer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    {eventData.organizer.name}
                    {eventData.organizer.verified && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Verified</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">Event Organizer</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                  Add to Calendar
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                  Share Event
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                  Contact Organizer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
