// // // "use client"

// // // import {
// // //   BarChart3,
// // //   Bell,
// // //   Calendar,
// // //   LayoutDashboard,
// // //   LogOut,
// // //   Menu,
// // //   Settings,
// // //   Shield,
// // //   User,
// // //   Users,
// // //   X,
// // // } from "lucide-react"
// // // import { useState } from "react"
// // // import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
// // // import { useAuth } from "../../contexts/AuthContext"

// // // const AdminLayout = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false)
// // //   const [profileMenuOpen, setProfileMenuOpen] = useState(false)
// // //   const { user, logout } = useAuth()
// // //   const location = useLocation()
// // //   const navigate = useNavigate()

// // //   const navigation = [
// // //     { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
// // //     { name: "Organizer Verification", href: "/admin/organizers", icon: Shield },
// // //     { name: "User Management", href: "/admin/users", icon: Users },
// // //     { name: "Event Monitoring", href: "/admin/events", icon: Calendar },
// // //     { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
// // //     { name: "Settings", href: "/admin/settings", icon: Settings },
// // //   ]

// // //   const isActive = (href) => {
// // //     return location.pathname === href || location.pathname.startsWith(href + "/")
// // //   }

// // //   const handleLogout = () => {
// // //     logout()
// // //     navigate("/")
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Mobile sidebar overlay */}
// // //       {sidebarOpen && (
// // //         <div className="fixed inset-0 z-40 lg:hidden">
// // //           <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
// // //         </div>
// // //       )}

// // //       {/* Sidebar */}
// // //       <div
// // //         className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
// // //           sidebarOpen ? "translate-x-0" : "-translate-x-full"
// // //         }`}
// // //       >
// // //         <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
// // //           <Link to="/admin/dashboard" className="flex items-center space-x-2">
// // //             <Shield className="h-8 w-8 text-red-600" />
// // //             <span className="text-xl font-bold text-gray-900">Admin Panel</span>
// // //           </Link>
// // //           <button
// // //             onClick={() => setSidebarOpen(false)}
// // //             className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
// // //           >
// // //             <X className="h-5 w-5" />
// // //           </button>
// // //         </div>

// // //         <nav className="mt-6 px-3">
// // //           <div className="space-y-1">
// // //             {navigation.map((item) => {
// // //               const Icon = item.icon
// // //               return (
// // //                 <Link
// // //                   key={item.name}
// // //                   to={item.href}
// // //                   className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
// // //                     isActive(item.href) ? "bg-red-100 text-red-700" : "text-gray-700 hover:bg-gray-100"
// // //                   }`}
// // //                   onClick={() => setSidebarOpen(false)}
// // //                 >
// // //                   <Icon className="h-5 w-5 mr-3" />
// // //                   {item.name}
// // //                 </Link>
// // //               )
// // //             })}
// // //           </div>
// // //         </nav>

// // //         {/* User info at bottom */}
// // //         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
// // //           <div className="flex items-center space-x-3">
// // //             <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
// // //               <Shield className="h-4 w-4 text-red-600" />
// // //             </div>
// // //             <div className="flex-1 min-w-0">
// // //               <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
// // //               <p className="text-xs text-gray-500 truncate">Administrator</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main content */}
// // //       <div className="lg:pl-64">
// // //         {/* Top bar */}
// // //         <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
// // //           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
// // //             <button
// // //               onClick={() => setSidebarOpen(true)}
// // //               className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
// // //             >
// // //               <Menu className="h-5 w-5" />
// // //             </button>

// // //             <div className="flex items-center space-x-4 ml-auto">
// // //               {/* Notifications */}
// // //               <button className="p-2 text-gray-400 hover:text-gray-600 relative">
// // //                 <Bell className="h-5 w-5" />
// // //                 <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
// // //               </button>

// // //               {/* Profile dropdown */}
// // //               <div className="relative">
// // //                 <button
// // //                   onClick={() => setProfileMenuOpen(!profileMenuOpen)}
// // //                   className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
// // //                 >
// // //                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
// // //                     <User className="h-4 w-4 text-red-600" />
// // //                   </div>
// // //                   <span className="hidden md:block text-sm font-medium text-gray-700">{user?.name}</span>
// // //                 </button>

// // //                 {profileMenuOpen && (
// // //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
// // //                     <Link
// // //                       to="/admin/profile"
// // //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // //                       onClick={() => setProfileMenuOpen(false)}
// // //                     >
// // //                       <User className="inline h-4 w-4 mr-2" />
// // //                       Profile
// // //                     </Link>
// // //                     <Link
// // //                       to="/admin/settings"
// // //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // //                       onClick={() => setProfileMenuOpen(false)}
// // //                     >
// // //                       <Settings className="inline h-4 w-4 mr-2" />
// // //                       Settings
// // //                     </Link>
// // //                     <button
// // //                       onClick={() => {
// // //                         handleLogout()
// // //                         setProfileMenuOpen(false)
// // //                       }}
// // //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // //                     >
// // //                       <LogOut className="inline h-4 w-4 mr-2" />
// // //                       Logout
// // //                     </button>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Page content */}
// // //         <main>
// // //           <Outlet />
// // //         </main>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default AdminLayout
// // "use client"

// // import {
// //   BarChart3,
// //   Bell,
// //   Calendar,
// //   LayoutDashboard,
// //   LogOut,
// //   Settings,
// //   Shield,
// //   User,
// //   Users,
// // } from "lucide-react"
// // import { Link, Outlet, useLocation } from "react-router-dom"
// // import { useAuth } from "../../contexts/AuthContext"

// // const AdminLayout = () => {
// //   const { user, logout } = useAuth()
// //   const location = useLocation()

// //   const navigation = [
// //     {
// //       name: "Dashboard",
// //       href: "/admin/dashboard",
// //       icon: LayoutDashboard,
// //       current: location.pathname === "/admin/dashboard",
// //     },
// //     {
// //       name: "Organizer Verification",
// //       href: "/admin/organizers",
// //       icon: Shield,
// //       current: location.pathname.startsWith("/admin/organizers"),
// //     },
// //     {
// //       name: "User Management",
// //       href: "/admin/users",
// //       icon: Users,
// //       current: location.pathname.startsWith("/admin/users"),
// //     },
// //     {
// //       name: "Event Monitoring",
// //       href: "/admin/events",
// //       icon: Calendar,
// //       current: location.pathname.startsWith("/admin/events"),
// //     },
// //     {
// //       name: "Analytics",
// //       href: "/admin/analytics",
// //       icon: BarChart3,
// //       current: location.pathname === "/admin/analytics",
// //     },
// //     {
// //       name: "Settings",
// //       href: "/admin/settings",
// //       icon: Settings,
// //       current: location.pathname === "/admin/settings",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="flex">
// //         {/* Sidebar */}
// //         <div className="hidden md:flex md:w-64 md:flex-col">
// //           <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
// //             {/* Logo */}
// //             <div className="flex items-center flex-shrink-0 px-4">
// //               <Link to="/" className="flex items-center space-x-2">
// //                 <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
// //                   <Shield className="h-5 w-5 text-white" />
// //                 </div>
// //                 <span className="text-xl font-bold text-gray-900">Admin Panel</span>
// //               </Link>
// //             </div>

// //             {/* Admin Info */}
// //             <div className="mt-8 px-4">
// //               <div className="flex items-center">
// //                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
// //                   <User className="h-6 w-6 text-red-600" />
// //                 </div>
// //                 <div className="ml-3">
// //                   <p className="text-sm font-medium text-gray-900">{user?.name || "Admin"}</p>
// //                   <p className="text-xs text-gray-500">Administrator</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Navigation */}
// //             <nav className="mt-8 flex-1 px-2 space-y-1">
// //               {navigation.map((item) => {
// //                 const Icon = item.icon
// //                 return (
// //                   <Link
// //                     key={item.name}
// //                     to={item.href}
// //                     className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
// //                       item.current ? "bg-red-100 text-red-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
// //                     }`}
// //                   >
// //                     <Icon
// //                       className={`mr-3 flex-shrink-0 h-5 w-5 ${
// //                         item.current ? "text-red-500" : "text-gray-400 group-hover:text-gray-500"
// //                       }`}
// //                     />
// //                     {item.name}
// //                   </Link>
// //                 )
// //               })}
// //             </nav>

// //             {/* Bottom Actions */}
// //             <div className="flex-shrink-0 p-4 border-t border-gray-200">
// //               <button
// //                 onClick={logout}
// //                 className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
// //               >
// //                 <LogOut className="mr-3 h-5 w-5 text-gray-400" />
// //                 Sign Out
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile header */}
// //         <div className="md:hidden bg-white shadow-sm border-b px-4 py-3">
// //           <div className="flex items-center justify-between">
// //             <h1 className="text-lg font-semibold text-gray-900">Admin</h1>
// //             <div className="flex items-center space-x-2">
// //               <Bell className="h-5 w-5 text-gray-400" />
// //               <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
// //                 <User className="h-4 w-4 text-red-600" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main content */}
// //         <div className="flex flex-col flex-1">
// //           <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
// //             <Outlet />
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AdminLayout
// "use client"

// import {
//   BarChart3,
//   Bell,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   Settings,
//   User,
//   Users,
//   X,
// } from "lucide-react"
// import { useState } from "react"
// import { Link, Outlet, useLocation } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"

// const AdminLayout = () => {
//   const { user, logout } = useAuth()
//   const location = useLocation()
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

//   const navigation = [
//     { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
//     { name: "Users", href: "/admin/users", icon: Users },
//     { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
//     { name: "Settings", href: "/admin/settings", icon: Settings },
//   ]

//   const isActive = (href) =>
//     location.pathname === href || location.pathname.startsWith(href + "/")

//   const SidebarContent = () => (
//     <div className="flex flex-col flex-grow overflow-y-auto">
//       {/* Logo */}
//       <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
//         <Link to="/admin/dashboard" className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <LayoutDashboard className="h-5 w-5 text-white" />
//           </div>
//           <span className="text-xl font-bold text-gray-900">AdminPanel</span>
//         </Link>
//       </div>

//       {/* Admin Info */}
//       <div className="mt-6 px-4 flex-shrink-0">
//         <div className="flex items-center">
//           <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//             <User className="h-6 w-6 text-blue-600" />
//           </div>
//           <div className="ml-3">
//             <p className="text-sm font-medium text-gray-900">{user?.name || "Admin"}</p>
//             <p className="text-xs text-gray-500 truncate">{user?.email || "admin@example.com"}</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
//         {navigation.map((item) => {
//           const Icon = item.icon
//           const active = isActive(item.href)
//           return (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
//                 active
//                   ? "bg-blue-100 text-blue-900"
//                   : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//               }`}
//             >
//               <Icon
//                 className={`mr-3 h-5 w-5 ${
//                   active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
//                 }`}
//               />
//               {item.name}
//             </Link>
//           )
//         })}
//       </nav>

//       {/* Quick Action + Logout */}
//       <div className="p-4 border-t border-gray-200 flex-shrink-0">
//         <button
//           onClick={logout}
//           className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
//         >
//           <LogOut className="h-5 w-5 mr-2 text-gray-400" />
//           Sign Out
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <div className="h-screen flex overflow-hidden bg-gray-50">
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
//         <SidebarContent />
//       </aside>

//       {/* Mobile Sidebar Drawer */}
//       {mobileSidebarOpen && (
//         <>
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
//             onClick={() => setMobileSidebarOpen(false)}
//           ></div>

//           <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 translate-x-0">
//             <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
//               <Link
//                 to="/admin/dashboard"
//                 className="flex items-center space-x-2"
//                 onClick={() => setMobileSidebarOpen(false)}
//               >
//                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <LayoutDashboard className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">AdminPanel</span>
//               </Link>
//               <button
//                 onClick={() => setMobileSidebarOpen(false)}
//                 className="p-2 rounded-md hover:bg-gray-100"
//               >
//                 <X className="h-5 w-5 text-gray-500" />
//               </button>
//             </div>

//             <div className="p-4 overflow-y-auto">
//               <SidebarContent />
//             </div>
//           </div>
//         </>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Mobile Header */}
//         <header className="md:hidden bg-white shadow-sm border-b px-4 py-3 sticky top-0 z-10 flex justify-between items-center">
//           <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
//           <div className="flex items-center space-x-3">
//             <Bell className="h-5 w-5 text-gray-400" />
//             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//               <User className="h-4 w-4 text-blue-600" />
//             </div>
//             <button
//               onClick={() => setMobileSidebarOpen(true)}
//               className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             >
//               <Menu className="h-5 w-5" />
//             </button>
//           </div>
//         </header>

//         {/* Scrollable Content */}
//         <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout
"use client"

import {
  Bell,
  Calendar,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Shield,
  User,
  UserCheck,
  Users
} from "lucide-react"
import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const AdminLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "User Management", href: "/admin/users", icon: Users },
    { name: "Organizer Management", href: "/admin/organizer-management", icon: UserCheck },
    { name: "Event Management", href: "/admin/event-management", icon: Calendar },
    // { name: "Ticket Management", href: "/admin/tickets", icon: Ticket },
    // { name: "Announcements", href: "/admin/announcements", icon: Megaphone },
    // { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const isActive = (href) =>
    location.pathname === href || location.pathname.startsWith(href + "/")

  const SidebarContent = () => (
    <div className="flex flex-col flex-grow overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
        <Link to="/admin/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AdminPanel</span>
        </Link>
      </div>

      {/* Admin Info */}
      <div className="mt-6 px-4 flex-shrink-0">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user?.name || "Admin"}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email || "admin@example.com"}</p>
            <p className="text-xs text-blue-600 font-medium">Administrator</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active
                  ? "bg-blue-100 text-blue-900 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <Icon
                className={`mr-3 h-5 w-5 ${
                  active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                }`}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <button
          onClick={logout}
          className="flex items-center w-full mt-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2 text-gray-400" />
          Sign Out
        </button>
      </div>
    </div>
  )

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Drawer */}
      {mobileSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          ></div>

          {/* Mobile Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 md:hidden">
            <SidebarContent />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-4 sm:px-6 lg:px-8 py-3 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              {/* <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-gray-900">
                  {navigation.find(item => isActive(item.href))?.name || "Admin Dashboard"}
                </h1>
                <p className="text-sm text-gray-500">Manage your platform efficiently</p>
              </div> */}
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
</div>
</div>
              {/* Quick Actions Dropdown */}
              {/* <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{user?.name || "Admin"}</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </button>
              </div>
            </div> */}
          {/* </div></div> */}

          {/* Breadcrumb for larger screens */}
          {/* <div className="hidden md:flex items-center space-x-2 mt-2 text-sm text-gray-500">
            <Link to="/admin/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <span>/</span>
            <span className="text-gray-900">
              {navigation.find(item => isActive(item.href))?.name}
            </span>
          </div> */}
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout