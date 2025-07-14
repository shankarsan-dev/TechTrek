"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { apiService } from "../../services/apiService"
import { Users, Calendar, Shield, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react"

// Dummy data for admin dashboard
const dummyAdminStats = {
  total_organizers: 156,
  pending_organizers: 23,
  verified_organizers: 133,
  total_events: 1247,
  pending_events: 45,
  total_users: 8934,
  organizers_change: 12,
  events_change: 8,
  users_change: 15,
}

const dummyRecentActivity = [
  {
    id: 1,
    type: "organizer_registered",
    message: "New organizer registration: TechCorp Events",
    timestamp: "2024-01-15T10:30:00Z",
    status: "pending",
  },
  {
    id: 2,
    type: "event_reported",
    message: "Event reported: React Conference 2024",
    timestamp: "2024-01-15T09:15:00Z",
    status: "review",
  },
  {
    id: 3,
    type: "organizer_verified",
    message: "Organizer verified: Innovation Hub",
    timestamp: "2024-01-15T08:45:00Z",
    status: "completed",
  },
]

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30")

  // Try API first, fallback to dummy data
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["admin-stats", selectedPeriod],
    queryFn: async () => {
      try {
        return await apiService.getAdminStats(selectedPeriod)
      } catch (error) {
        console.log("API not available, using dummy data")
        return dummyAdminStats
      }
    },
  })

  const { data: recentActivity } = useQuery({
    queryKey: ["admin-recent-activity"],
    queryFn: async () => {
      try {
        return await apiService.getAdminRecentActivity()
      } catch (error) {
        console.log("API not available, using dummy data")
        return { data: dummyRecentActivity }
      }
    },
  })

  const StatCard = ({ title, value, change, changeType, icon: Icon, color = "primary" }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p
              className={`text-sm flex items-center mt-1 ${
                changeType === "positive" ? "text-green-600" : "text-red-600"
              }`}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              {change}% from last period
            </p>
          )}
        </div>
        <div
          className={`p-3 rounded-full ${
            color === "primary"
              ? "bg-primary-100"
              : color === "warning"
                ? "bg-yellow-100"
                : color === "success"
                  ? "bg-green-100"
                  : color === "danger"
                    ? "bg-red-100"
                    : "bg-gray-100"
          }`}
        >
          <Icon
            className={`h-6 w-6 ${
              color === "primary"
                ? "text-primary-600"
                : color === "warning"
                  ? "text-yellow-600"
                  : color === "success"
                    ? "text-green-600"
                    : color === "danger"
                      ? "text-red-600"
                      : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  )

  const getActivityIcon = (type) => {
    switch (type) {
      case "organizer_registered":
        return <Users className="h-4 w-4 text-blue-600" />
      case "event_reported":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "organizer_verified":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getActivityColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "review":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Monitor platform activity and manage organizers</p>
            </div>
            <div className="flex space-x-4">
              {[
                { value: "7", label: "Last 7 days" },
                { value: "30", label: "Last 30 days" },
                { value: "90", label: "Last 3 months" },
              ].map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPeriod === period.value
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsLoading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))
          ) : (
            <>
              <StatCard
                title="Total Organizers"
                value={stats?.total_organizers || 0}
                change={stats?.organizers_change}
                changeType={stats?.organizers_change > 0 ? "positive" : "negative"}
                icon={Users}
                color="primary"
              />
              <StatCard
                title="Pending Verification"
                value={stats?.pending_organizers || 0}
                icon={Clock}
                color="warning"
              />
              <StatCard
                title="Total Events"
                value={stats?.total_events || 0}
                change={stats?.events_change}
                changeType={stats?.events_change > 0 ? "positive" : "negative"}
                icon={Calendar}
                color="success"
              />
              <StatCard
                title="Platform Users"
                value={stats?.total_users || 0}
                change={stats?.users_change}
                changeType={stats?.users_change > 0 ? "positive" : "negative"}
                icon={Shield}
                color="primary"
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-sm font-medium text-yellow-800">Pending Verifications</span>
                  </div>
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {stats?.pending_organizers || 0}
                  </span>
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-sm font-medium text-red-800">Reported Events</span>
                  </div>
                  <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    {stats?.pending_events || 0}
                  </span>
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium text-green-800">Verified Organizers</span>
                  </div>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {stats?.verified_organizers || 0}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                {recentActivity?.data?.length > 0 ? (
                  <div className="space-y-4">
                    {recentActivity.data.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                          <div className="flex items-center mt-1 space-x-2">
                            <p className="text-xs text-gray-500">
                              {new Date(activity.timestamp).toLocaleDateString()} at{" "}
                              {new Date(activity.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getActivityColor(activity.status)}`}
                            >
                              {activity.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No recent activity</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
