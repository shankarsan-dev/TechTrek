// // "use client"

// // import { useState } from "react"
// // import { Outlet, Link, useLocation } from "react-router-dom"
// // import { LayoutDashboard, Calendar, Users, BarChart3, Settings, Menu, X, Bell, User, LogOut, Plus } from "lucide-react"

// // const OrganizerLayout = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false)
// //   const [profileMenuOpen, setProfileMenuOpen] = useState(false)
// //   const location = useLocation()

// //   // Mock user data for now
// //   const user = {
// //     name: "John Organizer",
// //     email: "john@techevents.com",
// //     role: "organizer",
// //   }

// //   const navigation = [
// //     { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
// //     { name: "Events", href: "/organizer/events", icon: Calendar },
// //     { name: "Attendees", href: "/organizer/attendees", icon: Users },
// //     { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
// //     { name: "Settings", href: "/organizer/settings", icon: Settings },
// //   ]

// //   const isActive = (href) => {
// //     return location.pathname === href || location.pathname.startsWith(href + "/")
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Mobile sidebar overlay */}
// //       {sidebarOpen && (
// //         <div className="fixed inset-0 z-40 lg:hidden">
// //           <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
// //         </div>
// //       )}

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
// //           sidebarOpen ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
// //           <Link to="/organizer/dashboard" className="flex items-center space-x-2">
// //             <Calendar className="h-8 w-8 text-blue-600" />
// //             <span className="text-xl font-bold text-gray-900">TechEvents</span>
// //           </Link>
// //           <button
// //             onClick={() => setSidebarOpen(false)}
// //             className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
// //           >
// //             <X className="h-5 w-5" />
// //           </button>
// //         </div>

// //         <nav className="mt-6 px-3">
// //           <div className="space-y-1">
// //             {navigation.map((item) => {
// //               const Icon = item.icon
// //               return (
// //                 <Link
// //                   key={item.name}
// //                   to={item.href}
// //                   className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
// //                     isActive(item.href) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
// //                   }`}
// //                   onClick={() => setSidebarOpen(false)}
// //                 >
// //                   <Icon className="h-5 w-5 mr-3" />
// //                   {item.name}
// //                 </Link>
// //               )
// //             })}
// //           </div>
// //         </nav>

// //         {/* Quick Actions */}
// //         <div className="mt-8 px-3">
// //           <div className="bg-blue-50 rounded-lg p-4">
// //             <h3 className="text-sm font-medium text-blue-900 mb-2">Quick Actions</h3>
// //             <Link
// //               to="/organizer/events/create"
// //               className="flex items-center w-full px-3 py-2 text-sm text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
// //             >
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Event
// //             </Link>
// //           </div>
// //         </div>

// //         {/* User info at bottom */}
// //         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
// //           <div className="flex items-center space-x-3">
// //             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //               <User className="h-4 w-4 text-blue-600" />
// //             </div>
// //             <div className="flex-1 min-w-0">
// //               <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
// //               <p className="text-xs text-gray-500 truncate">Organizer</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main content */}
// //       <div className="lg:pl-64">
// //         {/* Top bar */}
// //         <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
// //           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
// //             <button
// //               onClick={() => setSidebarOpen(true)}
// //               className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
// //             >
// //               <Menu className="h-5 w-5" />
// //             </button>

// //             <div className="flex items-center space-x-4 ml-auto">
// //               {/* Notifications */}
// //               <button className="p-2 text-gray-400 hover:text-gray-600 relative">
// //                 <Bell className="h-5 w-5" />
// //                 <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
// //               </button>

// //               {/* Profile dropdown */}
// //               <div className="relative">
// //                 <button
// //                   onClick={() => setProfileMenuOpen(!profileMenuOpen)}
// //                   className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
// //                 >
// //                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //                     <User className="h-4 w-4 text-blue-600" />
// //                   </div>
// //                   <span className="hidden md:block text-sm font-medium text-gray-700">{user?.name}</span>
// //                 </button>

// //                 {profileMenuOpen && (
// //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
// //                     <Link
// //                       to="/organizer/settings"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                       onClick={() => setProfileMenuOpen(false)}
// //                     >
// //                       <User className="inline h-4 w-4 mr-2" />
// //                       Profile
// //                     </Link>
// //                     <Link
// //                       to="/organizer/settings"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                       onClick={() => setProfileMenuOpen(false)}
// //                     >
// //                       <Settings className="inline h-4 w-4 mr-2" />
// //                       Settings
// //                     </Link>
// //                     <button
// //                       onClick={() => {
// //                         setProfileMenuOpen(false)
// //                         // Add logout logic here later
// //                       }}
// //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                     >
// //                       <LogOut className="inline h-4 w-4 mr-2" />
// //                       Logout
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Page content */}
// //         <main>
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

// // export default OrganizerLayout
// // "use client"

// // import {
// //   BarChart3,
// //   Bell,
// //   Calendar,
// //   LayoutDashboard,
// //   LogOut,
// //   Plus,
// //   Settings,
// //   User,
// //   Users,
// // } from "lucide-react"
// // import { Link, Outlet, useLocation } from "react-router-dom"
// // import { useAuth } from "../../contexts/AuthContext"

// // const OrganizerLayout = () => {
// //   const { user, logout } = useAuth()
// //   const location = useLocation()

// //   const navigation = [
// //     {
// //       name: "Dashboard",
// //       href: "/organizer/dashboard",
// //       icon: LayoutDashboard,
// //       current: location.pathname === "/organizer/dashboard",
// //     },
// //     {
// //       name: "Events",
// //       href: "/organizer/events",
// //       icon: Calendar,
// //       current: location.pathname.startsWith("/organizer/events"),
// //     },
// //     {
// //       name: "Attendees",
// //       href: "/organizer/attendees",
// //       icon: Users,
// //       current: location.pathname.startsWith("/organizer/attendees"),
// //     },
// //     {
// //       name: "Analytics",
// //       href: "/organizer/analytics",
// //       icon: BarChart3,
// //       current: location.pathname === "/organizer/analytics",
// //     },
// //     {
// //       name: "Settings",
// //       href: "/organizer/settings",
// //       icon: Settings,
// //       current: location.pathname === "/organizer/settings",
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
// //               <Link to="/organizer/dashboard" className="flex items-center space-x-2">
// //                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
// //                   <LayoutDashboard className="h-5 w-5 text-white" />
// //                 </div>
// //                 <span className="text-xl font-bold text-gray-900">TechTrek</span>
// //               </Link>
// //             </div>

// //             {/* Organizer Info */}
// //             <div className="mt-8 px-4">
// //               <div className="flex items-center">
// //                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                   <User className="h-6 w-6 text-blue-600" />
// //                 </div>
// //                 <div className="ml-3">
// //                   <p className="text-sm font-medium text-gray-900">{user?.name || "Organizer"}</p>
// //                   <p className="text-xs text-gray-500">{user?.email || "organizer@example.com"}</p>
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
// //                       item.current ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
// //                     }`}
// //                   >
// //                     <Icon
// //                       className={`mr-3 flex-shrink-0 h-5 w-5 ${
// //                         item.current ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
// //                       }`}
// //                     />
// //                     {item.name}
// //                   </Link>
// //                 )
// //               })}
// //             </nav>

// //             {/* Quick Action + Logout */}
// //             <div className="flex-shrink-0 p-4 border-t border-gray-200">
// //               <Link
// //                 to="/organizer/events/create"
// //                 className="w-full flex items-center px-2 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-4"
// //               >
// //                 <Plus className="mr-2 h-4 w-4" />
// //                 Create Event
// //               </Link>
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
// //             <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
// //             <div className="flex items-center space-x-2">
// //               <Bell className="h-5 w-5 text-gray-400" />
// //               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //                 <User className="h-4 w-4 text-blue-600" />
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

// // export default OrganizerLayout
// // "use client"

// // import {
// //   BarChart3,
// //   Bell,
// //   Calendar,
// //   LayoutDashboard,
// //   LogOut,
// //   Plus,
// //   Settings,
// //   User,
// //   Users,
// // } from "lucide-react"
// // import { Link, Outlet, useLocation } from "react-router-dom"
// // import { useAuth } from "../../contexts/AuthContext"

// // const OrganizerLayout = () => {
// //   const { user, logout } = useAuth()
// //   const location = useLocation()

// //   const navigation = [
// //     { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
// //     { name: "Events", href: "/organizer/events", icon: Calendar },
// //     { name: "Attendees", href: "/organizer/attendees", icon: Users },
// //     { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
// //     { name: "Settings", href: "/organizer/settings", icon: Settings },
// //   ]

// //   const isActive = (href) =>
// //     location.pathname === href || location.pathname.startsWith(href + "/")

// //   return (
// //     <div className="h-screen flex overflow-hidden bg-gray-50">
// //       {/* Sidebar */}
// //       <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
// //         <div className="flex flex-col flex-grow overflow-y-auto">
// //           {/* Logo */}
// //           <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
// //             <Link to="/organizer/dashboard" className="flex items-center space-x-2">
// //               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
// //                 <LayoutDashboard className="h-5 w-5 text-white" />
// //               </div>
// //               <span className="text-xl font-bold text-gray-900">TechTrek</span>
// //             </Link>
// //           </div>

// //           {/* Organizer Info */}
// //           <div className="mt-6 px-4 flex-shrink-0">
// //             <div className="flex items-center">
// //               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                 <User className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <div className="ml-3">
// //                 <p className="text-sm font-medium text-gray-900">
// //                   {user?.name || "Organizer"}
// //                 </p>
// //                 <p className="text-xs text-gray-500 truncate">
// //                   {user?.email || "organizer@example.com"}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Navigation */}
// //           <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
// //             {navigation.map((item) => {
// //               const Icon = item.icon
// //               const active = isActive(item.href)
// //               return (
// //                 <Link
// //                   key={item.name}
// //                   to={item.href}
// //                   className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
// //                     active
// //                       ? "bg-blue-100 text-blue-900"
// //                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
// //                   }`}
// //                 >
// //                   <Icon
// //                     className={`mr-3 h-5 w-5 ${
// //                       active
// //                         ? "text-blue-600"
// //                         : "text-gray-400 group-hover:text-gray-500"
// //                     }`}
// //                   />
// //                   {item.name}
// //                 </Link>
// //               )
// //             })}
// //           </nav>

// //           {/* Quick Action + Logout */}
// //           <div className="p-4 border-t border-gray-200 flex-shrink-0">
// //             <Link
// //               to="/organizer/events/create"
// //               className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-3"
// //             >
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Event
// //             </Link>
// //             <button
// //               onClick={logout}
// //               className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
// //             >
// //               <LogOut className="h-5 w-5 mr-2 text-gray-400" />
// //               Sign Out
// //             </button>
// //           </div>
// //         </div>
// //       </aside>

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         {/* Mobile Header */}
// //         <header className="md:hidden bg-white shadow-sm border-b px-4 py-3 sticky top-0 z-10">
// //           <div className="flex items-center justify-between">
// //             <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
// //             <div className="flex items-center space-x-2">
// //               <Bell className="h-5 w-5 text-gray-400" />
// //               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //                 <User className="h-4 w-4 text-blue-600" />
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Scrollable Content */}
// //         <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

// // export default OrganizerLayout
// // "use client"

// // import {
// //   BarChart3,
// //   Bell,
// //   Calendar,
// //   LayoutDashboard,
// //   LogOut,
// //   Plus,
// //   Settings,
// //   User,
// //   Users,
// //   Menu,
// //   X,
// // } from "lucide-react"
// // import { Link, Outlet, useLocation } from "react-router-dom"
// // import { useAuth } from "../../contexts/AuthContext"
// // import { useState } from "react"

// // const OrganizerLayout = () => {
// //   const { user, logout } = useAuth()
// //   const location = useLocation()
// //   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

// //   const navigation = [
// //     { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
// //     { name: "Events", href: "/organizer/events", icon: Calendar },
// //     { name: "Attendees", href: "/organizer/attendees", icon: Users },
// //     { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
// //     { name: "Settings", href: "/organizer/settings", icon: Settings },
// //   ]

// //   const isActive = (href) =>
// //     location.pathname === href || location.pathname.startsWith(href + "/")

// //   return (
// //     <div className="h-screen flex overflow-hidden bg-gray-50">
// //       {/* Desktop Sidebar */}
// //       <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
// //         <div className="flex flex-col flex-grow overflow-y-auto">
// //           {/* Logo */}
// //           <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
// //             <Link to="/organizer/dashboard" className="flex items-center space-x-2">
// //               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
// //                 <LayoutDashboard className="h-5 w-5 text-white" />
// //               </div>
// //               <span className="text-xl font-bold text-gray-900">TechTrek</span>
// //             </Link>
// //           </div>

// //           {/* Organizer Info */}
// //           <div className="mt-6 px-4 flex-shrink-0">
// //             <div className="flex items-center">
// //               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                 <User className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <div className="ml-3">
// //                 <p className="text-sm font-medium text-gray-900">
// //                   {user?.name || "Organizer"}
// //                 </p>
// //                 <p className="text-xs text-gray-500 truncate">
// //                   {user?.email || "organizer@example.com"}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Navigation */}
// //           <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
// //             {navigation.map((item) => {
// //               const Icon = item.icon
// //               const active = isActive(item.href)
// //               return (
// //                 <Link
// //                   key={item.name}
// //                   to={item.href}
// //                   className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
// //                     active
// //                       ? "bg-blue-100 text-blue-900"
// //                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
// //                   }`}
// //                 >
// //                   <Icon
// //                     className={`mr-3 h-5 w-5 ${
// //                       active
// //                         ? "text-blue-600"
// //                         : "text-gray-400 group-hover:text-gray-500"
// //                     }`}
// //                   />
// //                   {item.name}
// //                 </Link>
// //               )
// //             })}
// //           </nav>

// //           {/* Quick Action + Logout */}
// //           <div className="p-4 border-t border-gray-200 flex-shrink-0">
// //             <Link
// //               to="/organizer/events/create"
// //               className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-3"
// //             >
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Event
// //             </Link>
// //             <button
// //               onClick={logout}
// //               className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
// //             >
// //               <LogOut className="h-5 w-5 mr-2 text-gray-400" />
// //               Sign Out
// //             </button>
// //           </div>
// //         </div>
// //       </aside>

// //       {/* Mobile Sidebar Drawer */}
// //       {mobileSidebarOpen && (
// //         <>
// //           {/* Overlay */}
// //           <div
// //             className="fixed inset-0 bg-black bg-opacity-40 z-40"
// //             onClick={() => setMobileSidebarOpen(false)}
// //           ></div>

// //           {/* Drawer from Right */}
// //           <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 translate-x-0">
// //             <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
// //               <Link
// //                 to="/organizer/dashboard"
// //                 className="flex items-center space-x-2"
// //                 onClick={() => setMobileSidebarOpen(false)}
// //               >
// //                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
// //                   <LayoutDashboard className="h-5 w-5 text-white" />
// //                 </div>
// //                 <span className="text-xl font-bold text-gray-900">TechTrek</span>
// //               </Link>
// //               <button
// //                 onClick={() => setMobileSidebarOpen(false)}
// //                 className="p-2 rounded-md hover:bg-gray-100"
// //               >
// //                 <X className="h-5 w-5 text-gray-500" />
// //               </button>
// //             </div>

// //             {/* Drawer Navigation */}
// //             <div className="p-4 overflow-y-auto">
// //               <div className="flex items-center mb-6">
// //                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                   <User className="h-6 w-6 text-blue-600" />
// //                 </div>
// //                 <div className="ml-3">
// //                   <p className="text-sm font-medium text-gray-900">
// //                     {user?.name || "Organizer"}
// //                   </p>
// //                   <p className="text-xs text-gray-500 truncate">
// //                     {user?.email || "organizer@example.com"}
// //                   </p>
// //                 </div>
// //               </div>

// //               {navigation.map((item) => {
// //                 const Icon = item.icon
// //                 const active = isActive(item.href)
// //                 return (
// //                   <Link
// //                     key={item.name}
// //                     to={item.href}
// //                     onClick={() => setMobileSidebarOpen(false)}
// //                     className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
// //                       active
// //                         ? "bg-blue-100 text-blue-900"
// //                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
// //                     }`}
// //                   >
// //                     <Icon
// //                       className={`mr-3 h-5 w-5 ${
// //                         active
// //                           ? "text-blue-600"
// //                           : "text-gray-400 group-hover:text-gray-500"
// //                       }`}
// //                     />
// //                     {item.name}
// //                   </Link>
// //                 )
// //               })}

// //               <div className="mt-6 border-t border-gray-200 pt-4">
// //                 <Link
// //                   to="/organizer/events/create"
// //                   onClick={() => setMobileSidebarOpen(false)}
// //                   className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-3"
// //                 >
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Create Event
// //                 </Link>
// //                 <button
// //                   onClick={() => {
// //                     logout()
// //                     setMobileSidebarOpen(false)
// //                   }}
// //                   className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
// //                 >
// //                   <LogOut className="h-5 w-5 mr-2 text-gray-400" />
// //                   Sign Out
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         {/* Mobile Header */}
// //         <header className="md:hidden bg-white shadow-sm border-b px-4 py-3 sticky top-0 z-10 flex justify-between items-center">
// //           <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
// //           <div className="flex items-center space-x-3">
// //             <Bell className="h-5 w-5 text-gray-400" />
// //             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //               <User className="h-4 w-4 text-blue-600" />
// //             </div>
// //             <button
// //               onClick={() => setMobileSidebarOpen(true)}
// //               className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
// //             >
// //               <Menu className="h-5 w-5" />
// //             </button>
// //           </div>
// //         </header>

// //         {/* Scrollable Content */}
// //         <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

// // export default OrganizerLayout
// "use client"

// import {
//   BarChart3,
//   Bell,
//   Calendar,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   Plus,
//   Settings,
//   User,
//   Users,
//   X,
// } from "lucide-react"
// import { useState } from "react"
// import { Link, Outlet, useLocation } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"

// const OrganizerLayout = () => {
//   const { user, logout } = useAuth()
//   const location = useLocation()
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

//   const navigation = [
//     { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
//     { name: "Events", href: "/organizer/events", icon: Calendar },
//     { name: "Attendees", href: "/organizer/attendees", icon: Users },
//     { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
//     {name:"Profile",href:"/organizer/profile",icon:User},
//     { name: "Settings", href: "/organizer/settings", icon: Settings },
//   ]

//   const isActive = (href) =>
//     location.pathname === href || location.pathname.startsWith(href + "/")

//   return (
//     <div className="h-screen flex overflow-hidden bg-gray-50">
//       {/* === Desktop Sidebar === */}
//       <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
//         <div className="flex flex-col flex-grow overflow-y-auto">
//           {/* Logo */}
//           <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
//             <Link to="/organizer/dashboard" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <LayoutDashboard className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">TechTrek</span>
//             </Link>
//           </div>

//           {/* Organizer Info */}
//           <div className="mt-6 px-4 flex-shrink-0">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <User className="h-6 w-6 text-blue-600" />
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">
//                   {user?.name || "Organizer"}
//                 </p>
//                 <p className="text-xs text-gray-500 truncate">
//                   {user?.email || "organizer@example.com"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
//             {navigation.map((item) => {
//               const Icon = item.icon
//               const active = isActive(item.href)
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
//                     active
//                       ? "bg-blue-100 text-blue-900"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`}
//                 >
//                   <Icon
//                     className={`mr-3 h-5 w-5 ${
//                       active
//                         ? "text-blue-600"
//                         : "text-gray-400 group-hover:text-gray-500"
//                     }`}
//                   />
//                   {item.name}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Quick Action + Logout */}
//           <div className="p-4 border-t border-gray-200 flex-shrink-0">
//             <Link
//               to="/organizer/events/create"
//               className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-3"
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Create Event
//             </Link>
//             <button
//               onClick={logout}
//               className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
//             >
//               <LogOut className="h-5 w-5 mr-2 text-gray-400" />
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* === Mobile Sidebar Drawer (Left) === */}
//       {mobileSidebarOpen && (
//         <>
//           {/* Soft Blur Overlay */}
//           <div
//             className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
//             onClick={() => setMobileSidebarOpen(false)}
//           ></div>

//           {/* Drawer Panel */}
//           <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 translate-x-0">
//             <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
//               <Link
//                 to="/organizer/dashboard"
//                 className="flex items-center space-x-2"
//                 onClick={() => setMobileSidebarOpen(false)}
//               >
//                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <LayoutDashboard className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">TechTrek</span>
//               </Link>
//               <button
//                 onClick={() => setMobileSidebarOpen(false)}
//                 className="p-2 rounded-md hover:bg-gray-100"
//               >
//                 <X className="h-5 w-5 text-gray-500" />
//               </button>
//             </div>

//             {/* Drawer Content */}
//             <div className="p-4 overflow-y-auto">
//               <div className="flex items-center mb-6">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <User className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">
//                     {user?.name || "Organizer"}
//                   </p>
//                   <p className="text-xs text-gray-500 truncate">
//                     {user?.email || "organizer@example.com"}
//                   </p>
//                 </div>
//               </div>

//               {navigation.map((item) => {
//                 const Icon = item.icon
//                 const active = isActive(item.href)
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setMobileSidebarOpen(false)}
//                     className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
//                       active
//                         ? "bg-blue-100 text-blue-900"
//                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }`}
//                   >
//                     <Icon
//                       className={`mr-3 h-5 w-5 ${
//                         active
//                           ? "text-blue-600"
//                           : "text-gray-400 group-hover:text-gray-500"
//                       }`}
//                     />
//                     {item.name}
//                   </Link>
//                 )
//               })}

//               <div className="mt-6 border-t border-gray-200 pt-4">
//                 <Link
//                   to="/organizer/events/create"
//                   onClick={() => setMobileSidebarOpen(false)}
//                   className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors mb-3"
//                 >
//                   <Plus className="h-4 w-4 mr-2" />
//                   Create Event
//                 </Link>
//                 <button
//                   onClick={() => {
//                     logout()
//                     setMobileSidebarOpen(false)
//                   }}
//                   className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
//                 >
//                   <LogOut className="h-5 w-5 mr-2 text-gray-400" />
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* === Main Content === */}
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

// export default OrganizerLayout
"use client"

import {
  AlertCircle,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Settings,
  ShieldOff,
  User,
  Users,
  X,
  XCircle
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { userService } from "../../services/userService"

const OrganizerLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [profile, setProfile] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [showVerificationModal, setShowVerificationModal] = useState(false)

  // Fetch fresh profile data on mount
  useEffect(() => {
    fetchProfile()
    
    // Refresh profile every 2 minutes
    const interval = setInterval(fetchProfile, 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Check if trying to access restricted pages
  useEffect(() => {
    if (!profile || loadingProfile) return
    
    const restrictedPaths = ['/organizer/events/create', '/organizer/events']
    const currentPath = location.pathname
    
    // Check if current path requires verification
    if (restrictedPaths.some(path => currentPath.startsWith(path))) {
      if (!canAccessCreateEvents()) {
        setShowVerificationModal(true)
      }
    }
  }, [location.pathname, profile, loadingProfile])

  const fetchProfile = async () => {
    try {
      setLoadingProfile(true)
      const response = await userService.getMyProfile()
      if (response.success && response.data) {
        setProfile(response.data)
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error)
    } finally {
      setLoadingProfile(false)
    }
  }

  const canAccessCreateEvents = () => {
    if (!profile || !user) return false
    
    // Check if suspended
    if (profile.status === "suspended") return false
    
    // Check verification status
    if (profile.status !== "verified") return false
    
    return true
  }

  const getVerificationStatus = () => {
    if (!profile) return null
    
    if (profile.status === "suspended") {
      return {
        status: "suspended",
        message: "Account Suspended",
        color: "bg-red-100 text-red-800",
        icon: <ShieldOff className="h-4 w-4" />
      }
    }
    
    switch(profile.status) {
      case "verified":
        return {
          status: "verified",
          message: "Verified",
          color: "bg-emerald-100 text-emerald-800",
          icon: <CheckCircle className="h-4 w-4" />
        }
      case "pending":
        return {
          status: "pending",
          message: "Pending Verification",
          color: "bg-yellow-100 text-yellow-800",
          icon: <Clock className="h-4 w-4" />
        }
      case "rejected":
        return {
          status: "rejected",
          message: "Verification Rejected",
          color: "bg-red-100 text-red-800",
          icon: <XCircle className="h-4 w-4" />
        }
      default:
        return {
          status: "unverified",
          message: "Not Verified",
          color: "bg-gray-100 text-gray-800",
          icon: <AlertCircle className="h-4 w-4" />
        }
    }
  }

  const handleCreateEventClick = (e) => {
    if (!canAccessCreateEvents()) {
      e.preventDefault()
      setShowVerificationModal(true)
      return
    }
  }

  const navigation = [
    { name: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
    { 
      name: "Events", 
      href: "/organizer/events", 
      icon: Calendar,
      disabled: !canAccessCreateEvents(),
      disabledMessage: "Verification required to access events"
    },
    { name: "Attendees", href: "/organizer/attendees", icon: Users },
    { name: "Analytics", href: "/organizer/analytics", icon: BarChart3 },
    { name: "Profile", href: "/organizer/profile", icon: User },
    { name: "Settings", href: "/organizer/settings", icon: Settings },
  ]

  const isActive = (href) =>
    location.pathname === href || location.pathname.startsWith(href + "/")

  const verificationStatus = getVerificationStatus()

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              {verificationStatus?.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {verificationStatus?.status === 'suspended' ? 'Account Suspended' : 'Verification Required'}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              {verificationStatus?.status === 'suspended' 
                ? "Your account has been suspended. Please contact support for assistance."
                : verificationStatus?.status === 'pending'
                ? "Your verification is currently under review. We'll notify you once it's approved. This usually takes 24-48 hours."
                : verificationStatus?.status === 'rejected'
                ? "Your verification was rejected. Please check your submitted documents and resubmit."
                : "You need to verify your organizer account to access this feature. This helps ensure trust and security for all attendees."
              }
            </p>
            
            <div className="flex flex-col gap-3">
              {verificationStatus?.status === 'suspended' ? (
                <button
                  onClick={() => navigate('/support')}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                >
                  Contact Support
                </button>
              ) : verificationStatus?.status === 'rejected' ? (
                <button
                  onClick={() => {
                    setShowVerificationModal(false)
                    navigate('/organizer/verification')
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                >
                  Resubmit Verification
                </button>
              ) : verificationStatus?.status === 'pending' ? (
                <button
                  onClick={() => setShowVerificationModal(false)}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
                >
                  Close
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowVerificationModal(false)
                    navigate('/organizer/verification')
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Complete Verification
                </button>
              )}
              
              <button
                onClick={() => {
                  setShowVerificationModal(false)
                  navigate('/organizer/dashboard')
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Desktop Sidebar === */}
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 sticky top-0 h-screen">
        <div className="flex flex-col flex-grow overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
            <Link to="/organizer/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TechTrek</span>
            </Link>
          </div>

          {/* Organizer Info with Verification Badge */}
          <div className="mt-6 px-4 flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || "Organizer"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email || "organizer@example.com"}
                </p>
                {verificationStatus && (
                  <div className={`mt-1 inline-flex items-center px-2 py-0.5 rounded text-xs ${verificationStatus.color}`}>
                    {verificationStatus.icon}
                    <span className="ml-1">{verificationStatus.message}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex-1 px-3 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              const disabled = item.disabled
              
              return disabled ? (
                <div
                  key={item.name}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-400 cursor-not-allowed relative group"
                  title={item.disabledMessage}
                >
                  <Icon className="mr-3 h-5 w-5 text-gray-300" />
                  {item.name}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {item.disabledMessage}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? "bg-blue-100 text-blue-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
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

          {/* Quick Action + Logout */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <Link
              to="/organizer/events/create"
              onClick={handleCreateEventClick}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors mb-3 ${
                canAccessCreateEvents()
                  ? "text-blue-700 bg-blue-100 hover:bg-blue-200"
                  : "text-gray-400 bg-gray-100 cursor-not-allowed"
              }`}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Link>
            <button
              onClick={logout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2 text-gray-400" />
              Sign Out
            </button>
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

          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl">
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
              <Link
                to="/organizer/dashboard"
                className="flex items-center space-x-2"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechTrek</span>
              </Link>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              {/* Organizer Info with Verification Badge */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.name || "Organizer"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || "organizer@example.com"}
                  </p>
                  {verificationStatus && (
                    <div className={`mt-1 inline-flex items-center px-2 py-0.5 rounded text-xs ${verificationStatus.color}`}>
                      {verificationStatus.icon}
                      <span className="ml-1">{verificationStatus.message}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Navigation */}
              {navigation.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                const disabled = item.disabled
                
                return disabled ? (
                  <div
                    key={item.name}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-400 cursor-not-allowed mb-1"
                  >
                    <Icon className="mr-3 h-5 w-5 text-gray-300" />
                    {item.name}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors mb-1 ${
                      active
                        ? "bg-blue-100 text-blue-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
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

              <div className="mt-6 border-t border-gray-200 pt-4">
                <Link
                  to="/organizer/events/create"
                  onClick={(e) => {
                    handleCreateEventClick(e)
                    if (canAccessCreateEvents()) {
                      setMobileSidebarOpen(false)
                    }
                  }}
                  className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors mb-3 ${
                    canAccessCreateEvents()
                      ? "text-blue-700 bg-blue-100 hover:bg-blue-200"
                      : "text-gray-400 bg-gray-100 cursor-not-allowed"
                  }`}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setMobileSidebarOpen(false)
                  }}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-2 text-gray-400" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* === Main Content === */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow-sm border-b px-4 py-3 sticky top-0 z-10 flex justify-between items-center">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-500" />
          </button>
          
          <div className="flex items-center gap-3">
            {verificationStatus && (
              <div className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${verificationStatus.color}`}>
                {verificationStatus.icon}
                <span className="ml-1">{verificationStatus.message}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-400" />
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
          {loadingProfile ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  )
}

export default OrganizerLayout