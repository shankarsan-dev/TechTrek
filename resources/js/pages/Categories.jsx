"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Code, Smartphone, Database, Shield, Cloud, Cpu, Blocks, Settings } from "lucide-react"

// Tech categories with icons and data
const techCategories = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    description: "Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks",
    icon: Cpu,
    eventCount: 24,
    color: "bg-purple-100 text-purple-800",
    upcomingEvents: [
      { name: "AI Summit 2024", date: "Dec 15" },
      { name: "ML Workshop", date: "Dec 22" },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    description: "React, Next.js, Vue, Angular, Full-stack Development",
    icon: Code,
    eventCount: 32,
    color: "bg-blue-100 text-blue-800",
    upcomingEvents: [
      { name: "React Conference", date: "Dec 20" },
      { name: "Next.js Meetup", date: "Jan 5" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Flutter, React Native, iOS, Android Development",
    icon: Smartphone,
    eventCount: 18,
    color: "bg-green-100 text-green-800",
    upcomingEvents: [
      { name: "Flutter Workshop", date: "Feb 18" },
      { name: "Mobile UX Design", date: "Feb 25" },
    ],
  },
  {
    id: "data",
    name: "Data Science & Analytics",
    description: "Python, R, Data Analysis, Visualization, Big Data",
    icon: Database,
    eventCount: 21,
    color: "bg-orange-100 text-orange-800",
    upcomingEvents: [
      { name: "Data Science Masterclass", date: "Mar 1" },
      { name: "Python Analytics", date: "Mar 8" },
    ],
  },
  {
    id: "security",
    name: "Cybersecurity",
    description: "Ethical Hacking, Penetration Testing, Security Protocols",
    icon: Shield,
    eventCount: 15,
    color: "bg-red-100 text-red-800",
    upcomingEvents: [
      { name: "Ethical Hacking Workshop", date: "Jan 10" },
      { name: "Security Bootcamp", date: "Jan 17" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    description: "AWS, Azure, Google Cloud, Docker, Kubernetes",
    icon: Cloud,
    eventCount: 27,
    color: "bg-cyan-100 text-cyan-800",
    upcomingEvents: [
      { name: "AWS Bootcamp", date: "Jan 25" },
      { name: "Kubernetes Workshop", date: "Feb 1" },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    description: "Smart Contracts, DeFi, NFTs, Cryptocurrency",
    icon: Blocks,
    eventCount: 12,
    color: "bg-yellow-100 text-yellow-800",
    upcomingEvents: [
      { name: "Web3 Developer Summit", date: "Feb 5" },
      { name: "Smart Contracts Workshop", date: "Feb 12" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    description: "CI/CD, Automation, Infrastructure as Code, Monitoring",
    icon: Settings,
    eventCount: 19,
    color: "bg-indigo-100 text-indigo-800",
    upcomingEvents: [
      { name: "DevOps Conference", date: "Mar 15" },
      { name: "CI/CD Workshop", date: "Mar 22" },
    ],
  },
]

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter categories based on search term
  const filteredCategories = techCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalEvents = techCategories.reduce((sum, category) => sum + category.eventCount, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Categories</h1>
          <p className="text-gray-600">Explore events by technology category</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">{totalEvents}</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">{techCategories.length}</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">25+</div>
            <div className="text-gray-600">Cities</div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search categories..."
            className="pl-10 pr-4 py-2 rounded-md w-full max-w-md border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories found matching your search.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{category.eventCount} events</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Upcoming Events:</h4>
                      <ul className="space-y-1">
                        {category.upcomingEvents.map((event, index) => (
                          <li key={index} className="text-sm text-gray-600 flex justify-between">
                            <span>{event.name}</span>
                            <span className="text-blue-600">{event.date}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/events?category=${category.id}`}>
                      <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                        View All Events
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Categories
