"use client"

import {
  Plus
} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import QrScanner from "./QrScanner"
// You can keep your dashboard content as-is, but remove any outer layout padding like min-h-screen or px-*
const OrganizerDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30")

  // Your mock data and StatCard/EventRow logic remain the same

  // Keep everything from your existing OrganizerDashboard code
  // But remove this:
  // <div className="min-h-screen bg-gray-50"> and its closing tag

  // Instead, just return your inner content like this:
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your events.</p>
          </div>
          <Link
            to="/organizer/events/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Link>
          <QrScanner />
        </div>
      </div>

      {/* ...rest of your dashboard remains unchanged */}
    </>
  )
}

export default OrganizerDashboard
