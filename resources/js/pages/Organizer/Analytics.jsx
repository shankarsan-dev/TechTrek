"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { apiService } from "../../services/apiService"
import { TrendingUp, Users, Calendar, DollarSign, MapPin, Clock, Download } from "lucide-react"

const OrganizerAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30")
  const [selectedEvent, setSelectedEvent] = useState("all")

  const { data: analytics, isLoading } = useQuery({
    queryKey: ["organizer-analytics", selectedPeriod, selectedEvent],
    queryFn: () =>
      apiService.getOrganizerAnalytics({
        period: selectedPeriod,
        event_id: selectedEvent !== "all" ? selectedEvent : undefined,
      }),
  })

  const { data: events } = useQuery({
    queryKey: ["organizer-events-list"],
    queryFn: () => apiService.getOrganizerEvents({ limit: 100 }),
  })

  const MetricCard = ({ title, value, change, changeType, icon: Icon, subtitle }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          {change !== undefined && (
            <div
              className={`flex items-center mt-2 text-sm ${
                changeType === "positive"
                  ? "text-green-600"
                  : changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
              }`}
            >
              <TrendingUp className={`h-4 w-4 mr-1 ${changeType === "negative" ? "rotate-180" : ""}`} />
              <span>{Math.abs(change)}% from last period</span>
            </div>
          )}
        </div>
        <div className="bg-primary-100 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-gray-600">Track your event performance and audience insights</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 3 months</option>
                <option value="365">Last year</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event</label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Events</option>
                {events?.data?.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {isLoading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))
          ) : (
            <>
              <MetricCard
                title="Total Events"
                value={analytics?.total_events || 0}
                change={analytics?.events_change}
                changeType={analytics?.events_change > 0 ? "positive" : "negative"}
                icon={Calendar}
              />
              <MetricCard
                title="Total Attendees"
                value={analytics?.total_attendees || 0}
                change={analytics?.attendees_change}
                changeType={analytics?.attendees_change > 0 ? "positive" : "negative"}
                icon={Users}
                subtitle={`Avg: ${analytics?.avg_attendees_per_event || 0} per event`}
              />
              <MetricCard
                title="Revenue"
                value={`$${analytics?.total_revenue || 0}`}
                change={analytics?.revenue_change}
                changeType={analytics?.revenue_change > 0 ? "positive" : "negative"}
                icon={DollarSign}
                subtitle={`Avg: $${analytics?.avg_revenue_per_event || 0} per event`}
              />
              <MetricCard
                title="Attendance Rate"
                value={`${analytics?.attendance_rate || 0}%`}
                change={analytics?.attendance_rate_change}
                changeType={analytics?.attendance_rate_change > 0 ? "positive" : "negative"}
                icon={TrendingUp}
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Performing Events */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Performing Events</h2>
            </div>
            <div className="p-6">
              {analytics?.top_events?.length > 0 ? (
                <div className="space-y-4">
                  {analytics.top_events.map((event, index) => (
                    <div key={event.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-600">#{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.attendees} attendees</p>
                      </div>
                      <div className="text-sm text-gray-900 font-medium">{event.attendance_rate}%</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No event data available</p>
                </div>
              )}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Geographic Distribution</h2>
            </div>
            <div className="p-6">
              {analytics?.geographic_data?.length > 0 ? (
                <div className="space-y-4">
                  {analytics.geographic_data.map((location) => (
                    <div key={location.city} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{location.city}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full"
                            style={{ width: `${location.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">{location.attendees}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No location data available</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Event Activity</h2>
          </div>
          <div className="p-6">
            {analytics?.recent_activity?.length > 0 ? (
              <div className="space-y-6">
                {analytics.recent_activity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(activity.created_at).toLocaleDateString()} at{" "}
                        {new Date(activity.created_at).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
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
  )
}

export default OrganizerAnalytics
