"use client"

import { useQuery } from "@tanstack/react-query"
import {
    AlertCircle,
    ArrowLeft,
    Building2,
    Calendar,
    Home,
    Loader2,
    MapPin,
    User
} from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { userService } from "../services/userService"

const Profile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["public-profile", id],
    queryFn: () => userService.getPublicProfile(id),
    enabled: !!id,
    retry: 1,
  })

  const user = data?.data || {}

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
            <p className="text-gray-600 mb-6">
              The user profile you're looking for doesn't exist or has been removed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 inline mr-2" />
                Go Back
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Home className="h-4 w-4 inline mr-2" />
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back dfsfs
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Profile Header with Gradient */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="text-white flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
                
                {/* Organization */}
                {user.organization_name && (
                  <div className="flex items-center mt-2">
                    <Building2 className="h-4 w-4 mr-2 opacity-80" />
                    <span>{user.organization_name}</span>
                  </div>
                )}

                {/* Location */}
                {(user.city || user.country) && (
                  <div className="flex items-center mt-2">
                    <MapPin className="h-4 w-4 mr-2 opacity-80" />
                    <span>
                      {user.city && `${user.city}, `}
                      {user.country && getCountryName(user.country)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                  
                  {user.city && (
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="font-medium text-gray-900">
                          {user.city}
                          {user.country && `, ${getCountryName(user.country)}`}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Activity Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-900">
                        {new Date(user.created_at).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Member For</p>
                    <p className="font-medium text-gray-900">
                      {calculateMemberDuration(user.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User ID (for debugging) */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-mono text-sm text-gray-600 break-all">{user._id}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Events Attended</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Events Hosted</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Network</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper functions
const getCountryName = (countryCode) => {
  const countries = {
    NP: "Nepal",
    IN: "India",
    US: "United States",
    UK: "United Kingdom",
    CA: "Canada",
    AU: "Australia",
  }
  return countries[countryCode] || countryCode
}

const calculateMemberDuration = (createdAt) => {
  const createdDate = new Date(createdAt)
  const now = new Date()
  const diffTime = Math.abs(now - createdDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 30) return `${diffDays} days`
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} month${months !== 1 ? 's' : ''}`
  }
  const years = Math.floor(diffDays / 365)
  const remainingMonths = Math.floor((diffDays % 365) / 30)
  return `${years} year${years !== 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}`
}

export default Profile