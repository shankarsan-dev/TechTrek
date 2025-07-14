"use client"

import { Outlet, Link, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { LayoutDashboard, Calendar, Heart, User, Settings, Bell, LogOut } from "lucide-react"

const UserLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    {
      name: "Dashboard",
      href: "/user",
      icon: LayoutDashboard,
      current: location.pathname === "/user",
    },
    {
      name: "My Bookings",
      href: "/user/bookings",
      icon: Calendar,
      current: location.pathname === "/user/bookings",
    },
    {
      name: "Favorites",
      href: "/user/favorites",
      icon: Heart,
      current: location.pathname === "/user/favorites",
    },
    {
      name: "Profile",
      href: "/user/profile",
      icon: User,
      current: location.pathname === "/user/profile",
    },
    {
      name: "Settings",
      href: "/user/settings",
      icon: Settings,
      current: location.pathname === "/user/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechEvents</span>
              </Link>
            </div>

            {/* User Info */}
            <div className="mt-8 px-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
                  <p className="text-xs text-gray-500">{user?.email || "user@example.com"}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-8 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon
                      className={`mr-3 flex-shrink-0 h-5 w-5 ${
                        item.current ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="flex-shrink-0 p-4 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Learning Progress</span>
                  <span className="text-blue-600 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <button
                onClick={logout}
                className="mt-4 w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        <div className="md:hidden">{/* Mobile navigation would go here */}</div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Mobile header */}
          <div className="md:hidden bg-white shadow-sm border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-400" />
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
