"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { ShieldX, ArrowLeft, Home } from "lucide-react"

const Unauthorized = () => {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-red-600 p-3 rounded-full">
            <ShieldX className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Access Denied</h2>
        <p className="mt-2 text-center text-sm text-gray-600">You don't have permission to access this page.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Insufficient Permissions</h3>
            <p className="text-sm text-gray-500 mb-6">
              {user ? (
                <>
                  You are currently logged in as <strong>{user.name}</strong> with <strong>{user.role}</strong>{" "}
                  privileges. This page requires different permissions.
                </>
              ) : (
                "You need to be logged in with the appropriate permissions to access this page."
              )}
            </p>

            <div className="space-y-3">
              <Link
                to="/"
                className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go to Home
              </Link>

              {user ? (
                <div className="space-y-2">
                  <Link
                    to={user.role === "admin" ? "/admin" : user.role === "organizer" ? "/organizer" : "/user"}
                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Go to My Dashboard
                  </Link>

                  <button
                    onClick={logout}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
