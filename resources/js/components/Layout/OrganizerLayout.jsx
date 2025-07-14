// "use client"

// import { useState } from "react"
// import { Outlet, Link, useLocation } from "react-router-dom"
// import { LayoutDashboard, Calendar, Users, BarChart3, Settings, Menu, X, Bell, User, LogOut, Plus } from "lucide-react"

// const OrganizerLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false)
//   const location = useLocation()

//   // Mock user data for now
//   const user = {
//     name: "John Organizer",
//     email: "john@techevents.com",
//     role: "organizer",
//   }

//   const navigation = [
//     { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
//     { name: "Events", href: "/organizer/events", icon: Calendar },
//     { name: "Attendees", href: "/organizer/attendees", icon: Users },
//     { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
//     { name: "Settings", href: "/organizer/settings", icon: Settings },
//   ]

//   const isActive = (href) => {
//     return location.pathname === href || location.pathname.startsWith(href + "/")
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Mobile sidebar overlay */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
//         </div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
//           <Link to="/organizer/dashboard" className="flex items-center space-x-2">
//             <Calendar className="h-8 w-8 text-blue-600" />
//             <span className="text-xl font-bold text-gray-900">TechEvents</span>
//           </Link>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <nav className="mt-6 px-3">
//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const Icon = item.icon
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
//                     isActive(item.href) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                   onClick={() => setSidebarOpen(false)}
//                 >
//                   <Icon className="h-5 w-5 mr-3" />
//                   {item.name}
//                 </Link>
//               )
//             })}
//           </div>
//         </nav>

//         {/* Quick Actions */}
//         <div className="mt-8 px-3">
//           <div className="bg-blue-50 rounded-lg p-4">
//             <h3 className="text-sm font-medium text-blue-900 mb-2">Quick Actions</h3>
//             <Link
//               to="/organizer/events/create"
//               className="flex items-center w-full px-3 py-2 text-sm text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Create Event
//             </Link>
//           </div>
//         </div>

//         {/* User info at bottom */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//               <User className="h-4 w-4 text-blue-600" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
//               <p className="text-xs text-gray-500 truncate">Organizer</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="lg:pl-64">
//         {/* Top bar */}
//         <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
//           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
//             >
//               <Menu className="h-5 w-5" />
//             </button>

//             <div className="flex items-center space-x-4 ml-auto">
//               {/* Notifications */}
//               <button className="p-2 text-gray-400 hover:text-gray-600 relative">
//                 <Bell className="h-5 w-5" />
//                 <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
//               </button>

//               {/* Profile dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileMenuOpen(!profileMenuOpen)}
//                   className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
//                 >
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                     <User className="h-4 w-4 text-blue-600" />
//                   </div>
//                   <span className="hidden md:block text-sm font-medium text-gray-700">{user?.name}</span>
//                 </button>

//                 {profileMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                     <Link
//                       to="/organizer/settings"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setProfileMenuOpen(false)}
//                     >
//                       <User className="inline h-4 w-4 mr-2" />
//                       Profile
//                     </Link>
//                     <Link
//                       to="/organizer/settings"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setProfileMenuOpen(false)}
//                     >
//                       <Settings className="inline h-4 w-4 mr-2" />
//                       Settings
//                     </Link>
//                     <button
//                       onClick={() => {
//                         setProfileMenuOpen(false)
//                         // Add logout logic here later
//                       }}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <LogOut className="inline h-4 w-4 mr-2" />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page content */}
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default OrganizerLayout
"use client"

import {
  BarChart3,
  Bell,
  Calendar,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const OrganizerLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    {
      name: "Dashboard",
      href: "/organizer/dashboard",
      icon: LayoutDashboard,
      current: location.pathname === "/organizer/dashboard",
    },
    {
      name: "Events",
      href: "/organizer/events",
      icon: Calendar,
      current: location.pathname.startsWith("/organizer/events"),
    },
    {
      name: "Attendees",
      href: "/organizer/attendees",
      icon: Users,
      current: location.pathname.startsWith("/organizer/attendees"),
    },
    {
      name: "Analytics",
      href: "/organizer/analytics",
      icon: BarChart3,
      current: location.pathname === "/organizer/analytics",
    },
    {
      name: "Settings",
      href: "/organizer/settings",
      icon: Settings,
      current: location.pathname === "/organizer/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 px-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechEvents</span>
              </Link>
            </div>

            {/* Organizer Info */}
            <div className="mt-8 px-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{user?.name || "Organizer"}</p>
                  <p className="text-xs text-gray-500">{user?.email || "organizer@example.com"}</p>
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

            {/* Quick Action + Logout */}
            <div className="flex-shrink-0 p-4 border-t border-gray-200">
              <Link
                to="/organizer/events/create"
                className="w-full flex items-center px-2 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-4"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Link>
              <button
                onClick={logout}
                className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

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

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default OrganizerLayout
