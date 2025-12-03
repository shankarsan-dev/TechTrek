// "use client"

// import { Bell, Calendar, Heart, LayoutDashboard, LogOut, Settings, User } from "lucide-react"
// import { Link, Outlet, useLocation } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"

// const UserLayout = () => {
//   const { user, logout } = useAuth()
//   const location = useLocation()

//   const navigation = [
//     {
//       name: "Dashboard",
//       href: "/user",
//       icon: LayoutDashboard,
//       current: location.pathname === "/user",
//     },
//     {
//       name: "My Bookings",
//       href: "/user/bookings",
//       icon: Calendar,
//       current: location.pathname === "/user/bookings",
//     },
//     {
//       name: "Favorites",
//       href: "/user/favorites",
//       icon: Heart,
//       current: location.pathname === "/user/favorites",
//     },
//     {
//       name: "Profile",
//       href: "/user/profile",
//       icon: User,
//       current: location.pathname === "/user/profile",
//     },
//     {
//       name: "Settings",
//       href: "/user/settings",
//       icon: Settings,
//       current: location.pathname === "/user/settings",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="hidden md:flex md:w-64 md:flex-col">
//           <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
//             <div className="flex items-center flex-shrink-0 px-4">
//               <Link to="/" className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <LayoutDashboard className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">TechEvents</span>
//               </Link>
//             </div>

//             {/* User Info */}
//             <div className="mt-8 px-4">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <User className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
//                   <p className="text-xs text-gray-500">{user?.email || "user@example.com"}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <nav className="mt-8 flex-1 px-2 space-y-1">
//               {navigation.map((item) => {
//                 const Icon = item.icon
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
//                       item.current ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }`}
//                   >
//                     <Icon
//                       className={`mr-3 flex-shrink-0 h-5 w-5 ${
//                         item.current ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
//                       }`}
//                     />
//                     {item.name}
//                   </Link>
//                 )
//               })}
//             </nav>

//             {/* Bottom Actions */}
//             <div className="flex-shrink-0 p-4 border-t border-gray-200">
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-500">Learning Progress</span>
//                   <span className="text-blue-600 font-medium">75%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
//                 </div>
//               </div>

//               <button
//                 onClick={logout}
//                 className="mt-4 w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
//               >
//                 <LogOut className="mr-3 h-5 w-5 text-gray-400" />
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile sidebar */}
//         <div className="md:hidden">{/* Mobile navigation would go here */}</div>

//         {/* Main content */}
//         <div className="flex flex-col flex-1">
//           {/* Mobile header */}
//           <div className="md:hidden bg-white shadow-sm border-b px-4 py-3">
//             <div className="flex items-center justify-between">
//               <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
//               <div className="flex items-center space-x-2">
//                 <Bell className="h-5 w-5 text-gray-400" />
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <User className="h-4 w-4 text-blue-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Page content */}
//           <main className="flex-1">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserLayout
"use client"

import {
  Bell,
  Calendar,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react"
import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const UserLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const navigation = [
    {
      name: "My Bookings",
      href: "/user/bookings",
      icon: Calendar,
    },
    {
      name: "Profile",
      href: "/user/profile",
      icon: User,
    },
    {
      name: "Settings",
      href: "/user/settings",
      icon: Settings,
    },
  ]

  const isActive = (href) =>
    location.pathname === href ||
    location.pathname.startsWith(href + "/")

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">

      {/* === Desktop Sidebar === */}
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
        <div className="flex flex-col flex-grow">

          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                TechEvents
              </span>
            </Link>
          </div>

          {/* User Info */}
          <div className="mt-6 px-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email || "user@example.com"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex-1 px-3 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      active
                        ? "bg-blue-100 text-blue-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 ${
                      active
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2 text-gray-400" />
              Sign Out
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">v1.0.0</p>
          </div>
        </div>
      </aside>

      {/* === Mobile Sidebar Drawer === */}
      {mobileSidebarOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
            onClick={() => setMobileSidebarOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl transition-transform">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechEvents</span>
              </Link>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              {/* User Info */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
              </div>

              {/* Nav */}
              {navigation.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${
                        active
                          ? "bg-blue-100 text-blue-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        active
                          ? "text-blue-600"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}

              <div className="mt-6 border-t pt-4">
                <button
                  onClick={() => {
                    logout()
                    setMobileSidebarOpen(false)
                  }}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 mr-2 text-gray-400" />
                  Sign Out
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">v1.0.0</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* === Main Content Area === */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900">Account</h1>
          <div className="flex items-center space-x-3">
            <Bell className="h-5 w-5 text-gray-400" />
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-blue-600" />
            </div>
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default UserLayout
