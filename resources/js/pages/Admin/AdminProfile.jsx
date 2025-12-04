// // // // // src/pages/admin/Profile.jsx
// // // // import { User } from "lucide-react"
// // // // const AdminProfile = () => {
// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <div className="flex justify-between items-center">
// // // //         <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //         {/* Profile Info */}
// // // //         <div className="lg:col-span-2 space-y-6">
// // // //           <div className="bg-white shadow rounded-lg p-6">
// // // //             <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // // //                   defaultValue="Admin User"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Email</label>
// // // //                 <input
// // // //                   type="email"
// // // //                   className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // // //                   defaultValue="admin@example.com"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Phone</label>
// // // //                 <input
// // // //                   type="tel"
// // // //                   className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // // //                   defaultValue="+1 (555) 123-4567"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Role</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   disabled
// // // //                   className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
// // // //                   defaultValue="Administrator"
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //             <div className="mt-6 flex justify-end">
// // // //               <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
// // // //                 Update Profile
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Security Settings */}
// // // //           <div className="bg-white shadow rounded-lg p-6">
// // // //             <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
// // // //             <div className="space-y-4">
// // // //               <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div>
// // // //                     <p className="font-medium text-gray-900">Change Password</p>
// // // //                     <p className="text-sm text-gray-500">Update your password regularly</p>
// // // //                   </div>
// // // //                   <span className="text-blue-600">Change</span>
// // // //                 </div>
// // // //               </button>
// // // //               <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
// // // //                 <div className="flex justify-between items-center">
// // // //                   <div>
// // // //                     <p className="font-medium text-gray-900">Two-Factor Authentication</p>
// // // //                     <p className="text-sm text-gray-500">Add an extra layer of security</p>
// // // //                   </div>
// // // //                   <span className="text-blue-600">Enable</span>
// // // //                 </div>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Sidebar */}
// // // //         <div className="space-y-6">
// // // //           {/* Profile Card */}
// // // //           <div className="bg-white shadow rounded-lg p-6 text-center">
// // // //             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //               <User className="h-10 w-10 text-blue-600" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold text-gray-900">Admin User</h3>
// // // //             <p className="text-gray-500">Administrator</p>
// // // //             <p className="text-sm text-gray-400 mt-2">Last login: 2 hours ago</p>
// // // //           </div>

// // // //           {/* Quick Stats */}
// // // //           <div className="bg-white shadow rounded-lg p-6">
// // // //             <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
// // // //             <div className="space-y-3">
// // // //               <div className="flex justify-between">
// // // //                 <span className="text-gray-600">Admin Since</span>
// // // //                 <span className="font-medium">Jan 2024</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span className="text-gray-600">Actions Today</span>
// // // //                 <span className="font-medium">47</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span className="text-gray-600">Sessions</span>
// // // //                 <span className="font-medium">1.2K</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default AdminProfile
// // // "use client"

// // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // // import {
// // //   Activity,
// // //   Building2,
// // //   Calendar,
// // //   Camera,
// // //   CheckCircle,
// // //   ClipboardList,
// // //   Edit,
// // //   Eye,
// // //   EyeOff,
// // //   Globe,
// // //   Key,
// // //   Lock,
// // //   LogOut,
// // //   Mail,
// // //   MapPin,
// // //   Phone,
// // //   Save,
// // //   Shield,
// // //   ShieldCheck,
// // //   TrendingUp,
// // //   User,
// // //   Users,
// // //   X
// // // } from "lucide-react"
// // // import { useEffect, useState } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { userService } from "../../services/userService"

// // // const AdminProfile = () => {
// // //   const navigate = useNavigate()
// // //   const queryClient = useQueryClient()
  
// // //   // State
// // //   const [isEditing, setIsEditing] = useState(false)
// // //   const [editForm, setEditForm] = useState({})
// // //   const [passwordForm, setPasswordForm] = useState({
// // //     current_password: '',
// // //     new_password: '',
// // //     confirm_password: ''
// // //   })
// // //   const [showCurrentPassword, setShowCurrentPassword] = useState(false)
// // //   const [showNewPassword, setShowNewPassword] = useState(false)
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
// // //   const [imagePreview, setImagePreview] = useState(null)
// // //   const [activeSection, setActiveSection] = useState('profile')
  
// // //   // Fetch admin profile
// // //   const { data, isLoading, error } = useQuery({
// // //     queryKey: ["admin-profile"],
// // //     queryFn: () => userService.getMyProfile(),
// // //     retry: 1,
// // //   })

// // //   // Admin statistics (you'll need to fetch these from your API)
// // //   const adminStats = {
// // //     totalUsers: 1250,
// // //     totalEvents: 78,
// // //     totalOrganizers: 45,
// // //     pendingVerifications: 12,
// // //     totalRevenue: 12500,
// // //     activeSessions: 342
// // //   }

// // //   // Recent activities
// // //   const recentActivities = [
// // //     { id: 1, action: "Approved organizer verification", user: "John Smith", time: "2 hours ago" },
// // //     { id: 2, action: "Created new event category", user: "System", time: "5 hours ago" },
// // //     { id: 3, action: "Resolved user ticket", user: "Sarah Johnson", time: "1 day ago" },
// // //     { id: 4, action: "Updated system settings", user: "System", time: "2 days ago" },
// // //     { id: 5, action: "Suspended abusive user", user: "Mike Wilson", time: "3 days ago" },
// // //   ]

// // //   // Update profile mutation
// // //   const updateMutation = useMutation({
// // //     mutationFn: (data) => userService.updateProfile(data),
// // //     onSuccess: () => {
// // //       queryClient.invalidateQueries(["admin-profile"])
// // //       setIsEditing(false)
// // //       setEditForm({})
// // //       alert("Profile updated successfully!")
// // //     },
// // //     onError: (error) => {
// // //       alert(error.response?.data?.message || "Failed to update profile")
// // //     }
// // //   })

// // //   // Change password mutation
// // //   const passwordMutation = useMutation({
// // //     mutationFn: (data) => userService.changePassword({
// // //       current_password: data.current_password,
// // //       new_password: data.new_password,
// // //       new_password_confirmation: data.confirm_password
// // //     }),
// // //     onSuccess: () => {
// // //       setPasswordForm({
// // //         current_password: '',
// // //         new_password: '',
// // //         confirm_password: ''
// // //       })
// // //       alert("Password changed successfully!")
// // //     },
// // //     onError: (error) => {
// // //       alert(error.response?.data?.message || "Failed to change password")
// // //     }
// // //   })

// // //   // User data
// // //   const user = data?.data || {}

// // //   // Initialize edit form
// // //   useEffect(() => {
// // //     if (user && Object.keys(user).length > 0) {
// // //       setEditForm({
// // //         name: user.name || '',
// // //         phone: user.phone || '',
// // //         city: user.city || '',
// // //         country: user.country || '',
// // //         organization_name: user.organization_name || ''
// // //       })
// // //     }
// // //   }, [user])

// // //   // Handle image upload
// // //   const handleImageUpload = (e) => {
// // //     const file = e.target.files[0]
// // //     if (file) {
// // //       const reader = new FileReader()
// // //       reader.onloadend = () => {
// // //         setImagePreview(reader.result)
// // //       }
// // //       reader.readAsDataURL(file)
// // //     }
// // //   }

// // //   // Handle profile update
// // //   const handleUpdateProfile = () => {
// // //     if (!editForm.name?.trim()) {
// // //       alert("Name is required")
// // //       return
// // //     }
// // //     updateMutation.mutate(editForm)
// // //   }

// // //   // Handle password change
// // //   const handleChangePassword = () => {
// // //     if (!passwordForm.current_password) {
// // //       alert("Current password is required")
// // //       return
// // //     }
// // //     if (!passwordForm.new_password) {
// // //       alert("New password is required")
// // //       return
// // //     }
// // //     if (passwordForm.new_password !== passwordForm.confirm_password) {
// // //       alert("Passwords do not match")
// // //       return
// // //     }
// // //     if (passwordForm.new_password.length < 8) {
// // //       alert("Password must be at least 8 characters")
// // //       return
// // //     }
// // //     passwordMutation.mutate(passwordForm)
// // //   }

// // //   // Handle logout
// // //   const handleLogout = () => {
// // //     localStorage.removeItem('auth_token')
// // //     localStorage.removeItem('user')
// // //     navigate('/login')
// // //   }

// // //   // Format date
// // //   const formatDate = (dateString) => {
// // //     return new Date(dateString).toLocaleDateString('en-US', {
// // //       month: 'short',
// // //       day: 'numeric',
// // //       year: 'numeric',
// // //       hour: '2-digit',
// // //       minute: '2-digit'
// // //     })
// // //   }

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //           <div className="animate-pulse space-y-8">
// // //             <div className="h-10 bg-gray-200 rounded-lg w-1/4"></div>
// // //             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
// // //               <div className="lg:col-span-1 space-y-6">
// // //                 <div className="h-64 bg-gray-200 rounded-xl"></div>
// // //               </div>
// // //               <div className="lg:col-span-3 space-y-6">
// // //                 <div className="h-96 bg-gray-200 rounded-xl"></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
// // //         <div className="max-w-md w-full">
// // //           <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
// // //             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // //               <Shield className="h-8 w-8 text-red-600" />
// // //             </div>
// // //             <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Required</h2>
// // //             <p className="text-gray-600 mb-6">Admin privileges required to access this page.</p>
// // //             <button
// // //               onClick={() => navigate('/login')}
// // //               className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
// // //             >
// // //               Login as Admin
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //         {/* Header */}
// // //         <div className="mb-8">
// // //           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
// // //             <div>
// // //               <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
// // //               <p className="text-gray-600 mt-1">Manage TechTrek platform and monitor activities</p>
// // //             </div>
// // //             <div className="flex items-center gap-3">
// // //               <button
// // //                 onClick={() => navigate('/admin/dashboard')}
// // //                 className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
// // //               >
// // //                 <TrendingUp className="h-4 w-4" />
// // //                 Dashboard
// // //               </button>
// // //               <button
// // //                 onClick={handleLogout}
// // //                 className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 text-sm font-medium flex items-center gap-2 shadow-md"
// // //               >
// // //                 <LogOut className="h-4 w-4" />
// // //                 Sign Out
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
// // //           {/* Left Column - Admin Profile Card */}
// // //           <div className="lg:col-span-1 space-y-6">
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
// // //               {/* Profile Header */}
// // //               <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
// // //                 <div className="relative inline-block">
// // //                   <div className="h-32 w-32 rounded-full bg-gradient-to-br from-white/20 to-transparent border-4 border-white/30 mx-auto flex items-center justify-center">
// // //                     {imagePreview ? (
// // //                       <img
// // //                         src={imagePreview}
// // //                         alt="Admin"
// // //                         className="h-full w-full rounded-full object-cover"
// // //                       />
// // //                     ) : (
// // //                       <Shield className="h-16 w-16 text-white" />
// // //                     )}
// // //                   </div>
// // //                   <label className="absolute bottom-2 right-2 cursor-pointer">
// // //                     <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl">
// // //                       <Camera className="h-4 w-4 text-gray-600" />
// // //                     </div>
// // //                     <input
// // //                       type="file"
// // //                       className="hidden"
// // //                       accept="image/*"
// // //                       onChange={handleImageUpload}
// // //                     />
// // //                   </label>
// // //                 </div>
// // //                 <h2 className="text-xl font-bold text-white mt-4">{user.name}</h2>
// // //                 <div className="flex items-center justify-center text-white/90 mt-1">
// // //                   <Mail className="h-4 w-4 mr-2" />
// // //                   <span className="text-sm">{user.email}</span>
// // //                 </div>
// // //               </div>

// // //               {/* Admin Info */}
// // //               <div className="p-6">
// // //                 <div className="flex items-center justify-center mb-4">
// // //                   <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border border-purple-200">
// // //                     <ShieldCheck className="h-4 w-4" />
// // //                     Platform Administrator
// // //                   </span>
// // //                 </div>

// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center justify-between">
// // //                     <span className="text-sm text-gray-600">Admin ID</span>
// // //                     <span className="font-mono text-xs text-gray-900 truncate max-w-[100px]">
// // //                       ADMIN-{user._id?.substring(0, 8)}
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex items-center justify-between">
// // //                     <span className="text-sm text-gray-600">Member Since</span>
// // //                     <span className="text-sm font-medium text-gray-900">
// // //                       {new Date(user.created_at).toLocaleDateString('en-US', {
// // //                         year: 'numeric',
// // //                         month: 'short'
// // //                       })}
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex items-center justify-between">
// // //                     <span className="text-sm text-gray-600">Last Login</span>
// // //                     <span className="text-sm font-medium text-gray-900">
// // //                       {formatDate(user.updated_at)}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 {/* Admin Actions */}
// // //                 <div className="mt-6 space-y-3">
// // //                   <button
// // //                     onClick={() => setActiveSection(activeSection === 'profile' ? 'security' : 'profile')}
// // //                     className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 font-medium flex items-center justify-center gap-2 transition-colors border border-blue-200"
// // //                   >
// // //                     {activeSection === 'profile' ? (
// // //                       <>
// // //                         <Lock className="h-4 w-4" />
// // //                         Security Settings
// // //                       </>
// // //                     ) : (
// // //                       <>
// // //                         <User className="h-4 w-4" />
// // //                         Profile Settings
// // //                       </>
// // //                     )}
// // //                   </button>
// // //                   <button
// // //                     onClick={() => navigate('/admin/users')}
// // //                     className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-medium flex items-center justify-center gap-2 transition-colors border border-gray-200"
// // //                   >
// // //                     <Users className="h-4 w-4" />
// // //                     Manage Users
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Quick Stats */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
// // //               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
// // //                 <Activity className="h-5 w-5 text-blue-600" />
// // //                 Quick Stats
// // //               </h3>
// // //               <div className="space-y-4">
// // //                 <div className="flex items-center justify-between">
// // //                   <span className="text-sm text-gray-600">Active Sessions</span>
// // //                   <span className="font-bold text-green-600">{adminStats.activeSessions}</span>
// // //                 </div>
// // //                 <div className="flex items-center justify-between">
// // //                   <span className="text-sm text-gray-600">Pending Tasks</span>
// // //                   <span className="font-bold text-amber-600">{adminStats.pendingVerifications}</span>
// // //                 </div>
// // //                 <div className="flex items-center justify-between">
// // //                   <span className="text-sm text-gray-600">Today's Revenue</span>
// // //                   <span className="font-bold text-emerald-600">${adminStats.totalRevenue.toLocaleString()}</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Column - Content */}
// // //           <div className="lg:col-span-3">
// // //             {/* Admin Stats Cards */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// // //               <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
// // //                 <div className="flex items-center justify-between">
// // //                   <div>
// // //                     <p className="text-sm opacity-90">Total Users</p>
// // //                     <h3 className="text-3xl font-bold mt-2">{adminStats.totalUsers.toLocaleString()}</h3>
// // //                   </div>
// // //                   <Users className="h-12 w-12 opacity-80" />
// // //                 </div>
// // //                 <p className="text-sm opacity-90 mt-4">↗️ 12% increase this month</p>
// // //               </div>

// // //               <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
// // //                 <div className="flex items-center justify-between">
// // //                   <div>
// // //                     <p className="text-sm opacity-90">Total Events</p>
// // //                     <h3 className="text-3xl font-bold mt-2">{adminStats.totalEvents}</h3>
// // //                   </div>
// // //                   <Calendar className="h-12 w-12 opacity-80" />
// // //                 </div>
// // //                 <p className="text-sm opacity-90 mt-4">↗️ 8 new events this week</p>
// // //               </div>

// // //               <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
// // //                 <div className="flex items-center justify-between">
// // //                   <div>
// // //                     <p className="text-sm opacity-90">Organizers</p>
// // //                     <h3 className="text-3xl font-bold mt-2">{adminStats.totalOrganizers}</h3>
// // //                   </div>
// // //                   <Building2 className="h-12 w-12 opacity-80" />
// // //                 </div>
// // //                 <p className="text-sm opacity-90 mt-4">↗️ 3 new organizers today</p>
// // //               </div>
// // //             </div>

// // //             {/* Profile/Security Section */}
// // //             {activeSection === 'profile' ? (
// // //               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
// // //                 <div className="p-6 md:p-8">
// // //                   <div className="flex items-center justify-between mb-8">
// // //                     <div>
// // //                       <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
// // //                       <p className="text-gray-600 mt-1">Update your admin profile information</p>
// // //                     </div>
// // //                     <div className="flex items-center gap-3">
// // //                       {!isEditing ? (
// // //                         <button
// // //                           onClick={() => setIsEditing(true)}
// // //                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"
// // //                         >
// // //                           <Edit className="h-4 w-4" />
// // //                           Edit Profile
// // //                         </button>
// // //                       ) : (
// // //                         <div className="flex gap-2">
// // //                           <button
// // //                             onClick={() => {
// // //                               setIsEditing(false)
// // //                               setEditForm({
// // //                                 name: user.name || '',
// // //                                 phone: user.phone || '',
// // //                                 city: user.city || '',
// // //                                 country: user.country || '',
// // //                                 organization_name: user.organization_name || ''
// // //                               })
// // //                             }}
// // //                             className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2"
// // //                           >
// // //                             <X className="h-4 w-4" />
// // //                             Cancel
// // //                           </button>
// // //                           <button
// // //                             onClick={handleUpdateProfile}
// // //                             disabled={updateMutation.isLoading}
// // //                             className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium flex items-center gap-2 disabled:opacity-50"
// // //                           >
// // //                             {updateMutation.isLoading ? (
// // //                               <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
// // //                             ) : (
// // //                               <Save className="h-4 w-4" />
// // //                             )}
// // //                             Save Changes
// // //                           </button>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>

// // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                     <div className="space-y-6">
// // //                       <h3 className="text-lg font-semibold text-gray-900 border-b pb-3">
// // //                         Personal Information
// // //                       </h3>
                      
// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Full Name
// // //                         </label>
// // //                         {isEditing ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editForm.name || ''}
// // //                             onChange={(e) => setEditForm({...editForm, name: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                             placeholder="Enter your full name"
// // //                           />
// // //                         ) : (
// // //                           <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                             <User className="h-5 w-5 mr-3 text-gray-500" />
// // //                             <span className="font-medium">{user.name}</span>
// // //                           </div>
// // //                         )}
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Email Address
// // //                         </label>
// // //                         <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                           <Mail className="h-5 w-5 mr-3 text-gray-500" />
// // //                           <span className="font-medium">{user.email}</span>
// // //                           <span className="ml-3 text-xs text-gray-500">(Admin email)</span>
// // //                         </div>
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Phone Number
// // //                         </label>
// // //                         {isEditing ? (
// // //                           <input
// // //                             type="tel"
// // //                             value={editForm.phone || ''}
// // //                             onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                             placeholder="Enter phone number"
// // //                           />
// // //                         ) : (
// // //                           <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                             <Phone className="h-5 w-5 mr-3 text-gray-500" />
// // //                             <span className="font-medium">{user.phone || "Not provided"}</span>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     </div>

// // //                     <div className="space-y-6">
// // //                       <h3 className="text-lg font-semibold text-gray-900 border-b pb-3">
// // //                         Location & Organization
// // //                       </h3>
                      
// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           City
// // //                         </label>
// // //                         {isEditing ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editForm.city || ''}
// // //                             onChange={(e) => setEditForm({...editForm, city: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                             placeholder="Enter your city"
// // //                           />
// // //                         ) : (
// // //                           <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                             <MapPin className="h-5 w-5 mr-3 text-gray-500" />
// // //                             <span className="font-medium">{user.city || "Not specified"}</span>
// // //                           </div>
// // //                         )}
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Country
// // //                         </label>
// // //                         {isEditing ? (
// // //                           <select
// // //                             value={editForm.country || ''}
// // //                             onChange={(e) => setEditForm({...editForm, country: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                           >
// // //                             <option value="">Select Country</option>
// // //                             <option value="NP">Nepal</option>
// // //                             <option value="IN">India</option>
// // //                             <option value="US">United States</option>
// // //                             <option value="UK">United Kingdom</option>
// // //                             <option value="CA">Canada</option>
// // //                             <option value="AU">Australia</option>
// // //                           </select>
// // //                         ) : (
// // //                           <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                             <Globe className="h-5 w-5 mr-3 text-gray-500" />
// // //                             <span className="font-medium">
// // //                               {user.country || "Not specified"}
// // //                             </span>
// // //                           </div>
// // //                         )}
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Organization
// // //                         </label>
// // //                         {isEditing ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editForm.organization_name || ''}
// // //                             onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                             placeholder="Enter organization name"
// // //                           />
// // //                         ) : (
// // //                           <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                             <Building2 className="h-5 w-5 mr-3 text-gray-500" />
// // //                             <span className="font-medium">{user.organization_name || "TechTrek Admin"}</span>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Admin Permissions */}
// // //                   <div className="mt-8 pt-8 border-t border-gray-200">
// // //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Permissions</h3>
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                       <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
// // //                         <div className="flex items-center gap-3">
// // //                           <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
// // //                             <CheckCircle className="h-5 w-5 text-blue-600" />
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="font-medium text-blue-900">Full Access</h4>
// // //                             <p className="text-sm text-blue-700">All system permissions</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                       <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
// // //                         <div className="flex items-center gap-3">
// // //                           <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
// // //                             <Shield className="h-5 w-5 text-purple-600" />
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="font-medium text-purple-900">User Management</h4>
// // //                             <p className="text-sm text-purple-700">Manage all user accounts</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                       <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
// // //                         <div className="flex items-center gap-3">
// // //                           <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
// // //                             <ClipboardList className="h-5 w-5 text-emerald-600" />
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="font-medium text-emerald-900">Content Moderation</h4>
// // //                             <p className="text-sm text-emerald-700">Review & moderate content</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               /* Security Settings */
// // //               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
// // //                 <div className="p-6 md:p-8">
// // //                   <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Settings</h2>
// // //                   <p className="text-gray-600 mb-8">Manage your password and security preferences</p>

// // //                   <div className="max-w-2xl space-y-8">
// // //                     {/* Change Password */}
// // //                     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
// // //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
// // //                         <Key className="h-5 w-5 text-blue-600" />
// // //                         Change Password
// // //                       </h3>
// // //                       <div className="space-y-4">
// // //                         <div>
// // //                           <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                             Current Password
// // //                           </label>
// // //                           <div className="relative">
// // //                             <input
// // //                               type={showCurrentPassword ? "text" : "password"}
// // //                               value={passwordForm.current_password}
// // //                               onChange={(e) => setPasswordForm({...passwordForm, current_password: e.target.value})}
// // //                               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// // //                               placeholder="Enter current password"
// // //                             />
// // //                             <button
// // //                               type="button"
// // //                               onClick={() => setShowCurrentPassword(!showCurrentPassword)}
// // //                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// // //                             >
// // //                               {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                             </button>
// // //                           </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                           <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               New Password
// // //                             </label>
// // //                             <div className="relative">
// // //                               <input
// // //                                 type={showNewPassword ? "text" : "password"}
// // //                                 value={passwordForm.new_password}
// // //                                 onChange={(e) => setPasswordForm({...passwordForm, new_password: e.target.value})}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// // //                                 placeholder="New password"
// // //                               />
// // //                               <button
// // //                                 type="button"
// // //                                 onClick={() => setShowNewPassword(!showNewPassword)}
// // //                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// // //                               >
// // //                                 {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                               </button>
// // //                             </div>
// // //                           </div>

// // //                           <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               Confirm Password
// // //                             </label>
// // //                             <div className="relative">
// // //                               <input
// // //                                 type={showConfirmPassword ? "text" : "password"}
// // //                                 value={passwordForm.confirm_password}
// // //                                 onChange={(e) => setPasswordForm({...passwordForm, confirm_password: e.target.value})}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// // //                                 placeholder="Confirm password"
// // //                               />
// // //                               <button
// // //                                 type="button"
// // //                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// // //                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// // //                               >
// // //                                 {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                               </button>
// // //                             </div>
// // //                           </div>
// // //                         </div>

// // //                         <div className="pt-4">
// // //                           <button
// // //                             onClick={handleChangePassword}
// // //                             disabled={passwordMutation.isLoading}
// // //                             className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg disabled:opacity-50"
// // //                           >
// // //                             {passwordMutation.isLoading ? "Updating..." : "Update Password"}
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Admin Security Features */}
// // //                     <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
// // //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
// // //                         <Shield className="h-5 w-5 text-red-600" />
// // //                         Admin Security Features
// // //                       </h3>
// // //                       <div className="space-y-4">
// // //                         <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
// // //                           <div>
// // //                             <p className="font-medium text-gray-900">Two-Factor Authentication</p>
// // //                             <p className="text-sm text-gray-600">Add an extra layer of security</p>
// // //                           </div>
// // //                           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
// // //                             Enable
// // //                           </button>
// // //                         </div>
// // //                         <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
// // //                           <div>
// // //                             <p className="font-medium text-gray-900">Session Management</p>
// // //                             <p className="text-sm text-gray-600">View and manage active sessions</p>
// // //                           </div>
// // //                           <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// // //                             Manage
// // //                           </button>
// // //                         </div>
// // //                         <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
// // //                           <div>
// // //                             <p className="font-medium text-gray-900">Login History</p>
// // //                             <p className="text-sm text-gray-600">View recent login attempts</p>
// // //                           </div>
// // //                           <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// // //                             View Logs
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Recent Activities */}
// // //             <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
// // //               <div className="p-6 md:p-8">
// // //                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// // //                   <Activity className="h-5 w-5 text-blue-600" />
// // //                   Recent Activities
// // //                 </h3>
// // //                 <div className="space-y-4">
// // //                   {recentActivities.map((activity) => (
// // //                     <div
// // //                       key={activity.id}
// // //                       className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
// // //                     >
// // //                       <div className="flex items-center gap-4">
// // //                         <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
// // //                           <CheckCircle className="h-5 w-5 text-blue-600" />
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-medium text-gray-900">{activity.action}</p>
// // //                           <p className="text-sm text-gray-600">By {activity.user}</p>
// // //                         </div>
// // //                       </div>
// // //                       <span className="text-sm text-gray-500">{activity.time}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default AdminProfile
// // "use client"

// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // import { Camera, Edit, Globe, Mail, MapPin, Phone, Save, Shield, User, X } from "lucide-react"
// // import { useEffect, useState } from "react"
// // import { userService } from "../../services/userService"

// // const AdminProfile = () => {
// //   const queryClient = useQueryClient()
  
// //   // State
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [editForm, setEditForm] = useState({
// //     name: "",
// //     phone: "",
// //     city: "",
// //     country: "",
// //     organization_name: ""
// //   })
// //   const [imagePreview, setImagePreview] = useState(null)

// //   // Fetch admin profile
// //   const { data, isLoading, error } = useQuery({
// //     queryKey: ["admin-profile"],
// //     queryFn: () => userService.getMyProfile(),
// //     retry: 1,
// //   })

// //   // Update profile mutation
// //   const updateMutation = useMutation({
// //     mutationFn: (data) => userService.updateProfile(data),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["admin-profile"])
// //       setIsEditing(false)
// //       alert("Profile updated successfully!")
// //     },
// //     onError: (error) => {
// //       alert(error.response?.data?.message || "Failed to update profile")
// //     }
// //   })

// //   // User data
// //   const user = data?.data || {}

// //   // Initialize edit form
// //   useEffect(() => {
// //     if (user && user.name) {
// //       setEditForm({
// //         name: user.name || "",
// //         phone: user.phone || "",
// //         city: user.city || "",
// //         country: user.country || "",
// //         organization_name: user.organization_name || ""
// //       })
// //     }
// //   }, [user])

// //   // Handle image upload
// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result)
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   // Handle profile update
// //   const handleUpdateProfile = () => {
// //     if (!editForm.name?.trim()) {
// //       alert("Name is required")
// //       return
// //     }
    
// //     // Only send fields that have values
// //     const updateData = Object.keys(editForm).reduce((acc, key) => {
// //       if (editForm[key] !== undefined && editForm[key] !== null && editForm[key] !== "") {
// //         acc[key] = editForm[key]
// //       }
// //       return acc
// //     }, {})
    
// //     updateMutation.mutate(updateData)
// //   }

// //   // Format date
// //   const formatDate = (dateString) => {
// //     if (!dateString) return "N/A"
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'short',
// //       day: 'numeric'
// //     })
// //   }

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50">
// //         <div className="max-w-4xl mx-auto px-4 py-8">
// //           <div className="animate-pulse space-y-6">
// //             <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
// //             <div className="bg-white rounded-lg shadow-sm p-8">
// //               <div className="h-64 bg-gray-200 rounded-lg"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
// //         <div className="max-w-md w-full">
// //           <div className="bg-white rounded-lg shadow-lg p-8 text-center">
// //             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //               <Shield className="h-8 w-8 text-red-600" />
// //             </div>
// //             <h2 className="text-xl font-bold text-gray-900 mb-2">Profile Error</h2>
// //             <p className="text-gray-600 mb-6">Failed to load admin profile.</p>
// //             <button
// //               onClick={() => window.location.reload()}
// //               className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
// //             >
// //               Retry
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-4xl mx-auto px-4 py-8">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>
// //               <p className="text-gray-600 mt-1">Manage your admin account information</p>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
// //                 <Shield className="h-3.5 w-3.5" />
// //                 Administrator
// //               </span>
// //               {!isEditing ? (
// //                 <button
// //                   onClick={() => setIsEditing(true)}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2 text-sm"
// //                 >
// //                   <Edit className="h-4 w-4" />
// //                   Edit Profile
// //                 </button>
// //               ) : (
// //                 <div className="flex gap-2">
// //                   <button
// //                     onClick={() => {
// //                       setIsEditing(false)
// //                       setEditForm({
// //                         name: user.name || "",
// //                         phone: user.phone || "",
// //                         city: user.city || "",
// //                         country: user.country || "",
// //                         organization_name: user.organization_name || ""
// //                       })
// //                     }}
// //                     className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2 text-sm"
// //                   >
// //                     <X className="h-4 w-4" />
// //                     Cancel
// //                   </button>
// //                   <button
// //                     onClick={handleUpdateProfile}
// //                     disabled={updateMutation.isLoading}
// //                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center gap-2 text-sm disabled:opacity-50"
// //                   >
// //                     {updateMutation.isLoading ? (
// //                       <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
// //                     ) : (
// //                       <Save className="h-4 w-4" />
// //                     )}
// //                     Save
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Profile Card */}
// //           <div className="lg:col-span-1">
// //             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
// //               {/* Profile Picture */}
// //               <div className="relative mb-6">
// //                 <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-md flex items-center justify-center">
// //                   {imagePreview ? (
// //                     <img
// //                       src={imagePreview}
// //                       alt="Profile"
// //                       className="h-full w-full rounded-full object-cover"
// //                     />
// //                   ) : (
// //                     <User className="h-16 w-16 text-blue-600" />
// //                   )}
// //                 </div>
// //                 <label className="absolute bottom-2 right-2 cursor-pointer">
// //                   <div className="p-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200">
// //                     <Camera className="h-4 w-4 text-gray-600" />
// //                   </div>
// //                   <input
// //                     type="file"
// //                     className="hidden"
// //                     accept="image/*"
// //                     onChange={handleImageUpload}
// //                   />
// //                 </label>
// //               </div>

// //               {/* User Info */}
// //               <div className="text-center">
// //                 <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
// //                 <div className="flex items-center justify-center text-gray-600 mt-1 text-sm">
// //                   <Mail className="h-4 w-4 mr-2" />
// //                   <span className="truncate">{user.email}</span>
// //                 </div>
// //                 {user.phone && (
// //                   <div className="flex items-center justify-center text-gray-600 mt-2 text-sm">
// //                     <Phone className="h-4 w-4 mr-2" />
// //                     <span>{user.phone}</span>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Admin Info */}
// //               <div className="mt-6 space-y-3">
// //                 <div className="flex items-center justify-between text-sm">
// //                   <span className="text-gray-600">User ID</span>
// //                   <span className="font-mono text-gray-900 truncate max-w-[120px]">
// //                     {user._id?.substring(0, 8)}...
// //                   </span>
// //                 </div>
// //                 <div className="flex items-center justify-between text-sm">
// //                   <span className="text-gray-600">Role</span>
// //                   <span className="font-medium text-gray-900 capitalize">{user.role}</span>
// //                 </div>
// //                 <div className="flex items-center justify-between text-sm">
// //                   <span className="text-gray-600">Member Since</span>
// //                   <span className="font-medium text-gray-900">
// //                     {formatDate(user.created_at)}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Profile Details */}
// //           <div className="lg:col-span-2">
// //             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
// //               <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

// //               <div className="space-y-8">
// //                 {/* Personal Information */}
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div className="space-y-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Full Name
// //                         </label>
// //                         {isEditing ? (
// //                           <input
// //                             type="text"
// //                             value={editForm.name}
// //                             onChange={(e) => setEditForm({...editForm, name: e.target.value})}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                             placeholder="Enter your full name"
// //                           />
// //                         ) : (
// //                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                             <User className="h-5 w-5 mr-3 text-gray-400" />
// //                             <span className="font-medium">{user.name || "Not set"}</span>
// //                           </div>
// //                         )}
// //                       </div>

// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Email Address
// //                         </label>
// //                         <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                           <Mail className="h-5 w-5 mr-3 text-gray-400" />
// //                           <span className="font-medium">{user.email}</span>
// //                           <span className="ml-3 text-xs text-gray-500">(Cannot be changed)</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="space-y-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Phone Number
// //                         </label>
// //                         {isEditing ? (
// //                           <input
// //                             type="tel"
// //                             value={editForm.phone}
// //                             onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                             placeholder="Enter phone number"
// //                           />
// //                         ) : (
// //                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                             <Phone className="h-5 w-5 mr-3 text-gray-400" />
// //                             <span className="font-medium">{user.phone || "Not provided"}</span>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Location & Organization */}
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Organization</h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div className="space-y-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           City
// //                         </label>
// //                         {isEditing ? (
// //                           <input
// //                             type="text"
// //                             value={editForm.city}
// //                             onChange={(e) => setEditForm({...editForm, city: e.target.value})}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                             placeholder="Enter your city"
// //                           />
// //                         ) : (
// //                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                             <MapPin className="h-5 w-5 mr-3 text-gray-400" />
// //                             <span className="font-medium">{user.city || "Not specified"}</span>
// //                           </div>
// //                         )}
// //                       </div>

// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Country
// //                         </label>
// //                         {isEditing ? (
// //                           <input
// //                             type="text"
// //                             value={editForm.country}
// //                             onChange={(e) => setEditForm({...editForm, country: e.target.value})}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                             placeholder="Enter your country"
// //                           />
// //                         ) : (
// //                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                             <Globe className="h-5 w-5 mr-3 text-gray-400" />
// //                             <span className="font-medium">
// //                               {user.country || "Not specified"}
// //                             </span>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>

// //                     <div className="space-y-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Organization
// //                         </label>
// //                         {isEditing ? (
// //                           <input
// //                             type="text"
// //                             value={editForm.organization_name}
// //                             onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                             placeholder="Enter organization name"
// //                           />
// //                         ) : (
// //                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
// //                             <User className="h-5 w-5 mr-3 text-gray-400" />
// //                             <span className="font-medium">{user.organization_name || "Not specified"}</span>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Account Info */}
// //                 <div className="pt-6 border-t border-gray-200">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div className="bg-gray-50 rounded-lg p-4">
// //                       <p className="text-sm text-gray-600 mb-1">Account Created</p>
// //                       <p className="font-medium text-gray-900">
// //                         {formatDate(user.created_at)}
// //                       </p>
// //                     </div>
// //                     <div className="bg-gray-50 rounded-lg p-4">
// //                       <p className="text-sm text-gray-600 mb-1">Last Updated</p>
// //                       <p className="font-medium text-gray-900">
// //                         {formatDate(user.updated_at)}
// //                       </p>
// //                     </div>
// //                   </div>
                  
// //                   {/* KYC Status */}
// //                   {user.kyc_document_path && (
// //                     <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
// //                       <div className="flex items-center">
// //                         <Shield className="h-5 w-5 text-blue-600 mr-3" />
// //                         <div>
// //                           <p className="font-medium text-blue-900">KYC Document</p>
// //                           <a
// //                             href={user.kyc_document_path}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-sm text-blue-600 hover:text-blue-800"
// //                           >
// //                             View Document →
// //                           </a>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AdminProfile
// "use client"

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { Camera, Edit, Globe, Mail, MapPin, Phone, Save, Shield, User, X } from "lucide-react"
// import { useEffect, useState } from "react"
// import { userService } from "../../services/userService"

// const AdminProfile = () => {
//   const queryClient = useQueryClient()
  
//   // State
//   const [isEditing, setIsEditing] = useState(false)
//   const [editForm, setEditForm] = useState({
//     name: "",
//     phone: "",
//     city: "",
//     country: "",
//     organization_name: ""
//   })
//   const [imagePreview, setImagePreview] = useState(null)

//   // Fetch admin profile
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["admin-profile"],
//     queryFn: () => userService.getMyProfile(),
//     retry: 1,
//   })

//   // Update profile mutation - Using userService.updateProfile
//   const updateMutation = useMutation({
//     mutationFn: (data) => userService.updateProfile(data),
//     onSuccess: (response) => {
//       queryClient.invalidateQueries(["admin-profile"])
//       setIsEditing(false)
//       alert(response.message || "Profile updated successfully!")
//     },
//     onError: (error) => {
//       // Handle Laravel validation errors
//       if (error.response?.data?.errors) {
//         const errorMessages = Object.values(error.response.data.errors).flat().join('\n')
//         alert(`Validation errors:\n${errorMessages}`)
//       } else {
//         alert(error.response?.data?.message || "Failed to update profile")
//       }
//     }
//   })

//   // User data
//   const user = data?.data || {}

//   // Initialize edit form
//   useEffect(() => {
//     if (user && user.name) {
//       setEditForm({
//         name: user.name || "",
//         phone: user.phone || "",
//         city: user.city || "",
//         country: user.country || "",
//         organization_name: user.organization_name || ""
//       })
//     }
//   }, [user])

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   // Handle profile update
//   const handleUpdateProfile = () => {
//     if (!editForm.name?.trim()) {
//       alert("Name is required")
//       return
//     }
    
//     // Prepare data for Laravel backend
//     const updateData = {
//       name: editForm.name.trim(),
//       ...(editForm.phone && { phone: editForm.phone.trim() }),
//       ...(editForm.city && { city: editForm.city.trim() }),
//       ...(editForm.country && { country: editForm.country.trim() }),
//       ...(editForm.organization_name && { organization_name: editForm.organization_name.trim() })
//     }
    
//     updateMutation.mutate(updateData)
//   }

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A"
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     })
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 py-8">
//           <div className="animate-pulse space-y-6">
//             <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
//             <div className="bg-white rounded-lg shadow-sm p-8">
//               <div className="h-64 bg-gray-200 rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="max-w-md w-full">
//           <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Shield className="h-8 w-8 text-red-600" />
//             </div>
//             <h2 className="text-xl font-bold text-gray-900 mb-2">Profile Error</h2>
//             <p className="text-gray-600 mb-6">Failed to load admin profile.</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>
//               <p className="text-gray-600 mt-1">Manage your admin account information</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
//                 <Shield className="h-3.5 w-3.5" />
//                 Administrator
//               </span>
//               {!isEditing ? (
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2 text-sm"
//                 >
//                   <Edit className="h-4 w-4" />
//                   Edit Profile
//                 </button>
//               ) : (
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setIsEditing(false)
//                       setEditForm({
//                         name: user.name || "",
//                         phone: user.phone || "",
//                         city: user.city || "",
//                         country: user.country || "",
//                         organization_name: user.organization_name || ""
//                       })
//                     }}
//                     className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2 text-sm"
//                   >
//                     <X className="h-4 w-4" />
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleUpdateProfile}
//                     disabled={updateMutation.isLoading}
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center gap-2 text-sm disabled:opacity-50"
//                   >
//                     {updateMutation.isLoading ? (
//                       <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                     ) : (
//                       <Save className="h-4 w-4" />
//                     )}
//                     Save
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Profile Card */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               {/* Profile Picture */}
//               <div className="relative mb-6">
//                 <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-md flex items-center justify-center">
//                   {imagePreview ? (
//                     <img
//                       src={imagePreview}
//                       alt="Profile"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                   ) : (
//                     <User className="h-16 w-16 text-blue-600" />
//                   )}
//                 </div>
//                 <label className="absolute bottom-2 right-2 cursor-pointer">
//                   <div className="p-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200">
//                     <Camera className="h-4 w-4 text-gray-600" />
//                   </div>
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                   />
//                 </label>
//               </div>

//               {/* User Info */}
//               <div className="text-center">
//                 <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
//                 <div className="flex items-center justify-center text-gray-600 mt-1 text-sm">
//                   <Mail className="h-4 w-4 mr-2" />
//                   <span className="truncate">{user.email}</span>
//                 </div>
//                 {user.phone && (
//                   <div className="flex items-center justify-center text-gray-600 mt-2 text-sm">
//                     <Phone className="h-4 w-4 mr-2" />
//                     <span>{user.phone}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Admin Info */}
//               <div className="mt-6 space-y-3">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-600">User ID</span>
//                   <span className="font-mono text-gray-900 truncate max-w-[120px]">
//                     {user._id?.substring(0, 8)}...
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-600">Role</span>
//                   <span className="font-medium text-gray-900 capitalize">{user.role}</span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-600">Member Since</span>
//                   <span className="font-medium text-gray-900">
//                     {formatDate(user.created_at)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Profile Details */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

//               <div className="space-y-8">
//                 {/* Personal Information */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             value={editForm.name}
//                             onChange={(e) => setEditForm({...editForm, name: e.target.value})}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Enter your full name"
//                           />
//                         ) : (
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <User className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">{user.name || "Not set"}</span>
//                           </div>
//                         )}
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address
//                         </label>
//                         <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                           <Mail className="h-5 w-5 mr-3 text-gray-400" />
//                           <span className="font-medium">{user.email}</span>
//                           <span className="ml-3 text-xs text-gray-500">(Cannot be changed)</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Phone Number
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="tel"
//                             value={editForm.phone}
//                             onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Enter phone number"
//                           />
//                         ) : (
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <Phone className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">{user.phone || "Not provided"}</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Location & Organization */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Organization</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           City
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             value={editForm.city}
//                             onChange={(e) => setEditForm({...editForm, city: e.target.value})}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Enter your city"
//                           />
//                         ) : (
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <MapPin className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">{user.city || "Not specified"}</span>
//                           </div>
//                         )}
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Country
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             value={editForm.country}
//                             onChange={(e) => setEditForm({...editForm, country: e.target.value})}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Enter your country"
//                           />
//                         ) : (
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <Globe className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">
//                               {user.country || "Not specified"}
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Organization
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             value={editForm.organization_name}
//                             onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Enter organization name"
//                           />
//                         ) : (
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <User className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">{user.organization_name || "Not specified"}</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Account Info */}
//                 <div className="pt-6 border-t border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <p className="text-sm text-gray-600 mb-1">Account Created</p>
//                       <p className="font-medium text-gray-900">
//                         {formatDate(user.created_at)}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <p className="text-sm text-gray-600 mb-1">Last Updated</p>
//                       <p className="font-medium text-gray-900">
//                         {formatDate(user.updated_at)}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* KYC Status */}
//                   {user.kyc_document_path && (
//                     <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
//                       <div className="flex items-center">
//                         <Shield className="h-5 w-5 text-blue-600 mr-3" />
//                         <div>
//                           <p className="font-medium text-blue-900">KYC Document</p>
//                           <a
//                             href={user.kyc_document_path}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-sm text-blue-600 hover:text-blue-800"
//                           >
//                             View Document →
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminProfile
"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Camera, Edit, Globe, Mail, MapPin, Phone, Save, Shield, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { userService } from "../../services/userService"

const AdminProfile = () => {
  const queryClient = useQueryClient()
  
  // State
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    city: "",
    country: "",
    organization_name: ""
  })
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Fetch admin profile
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-profile"],
    queryFn: () => userService.getMyProfile(),
    retry: 1,
  })

  // User data
  const user = data?.data || {}

  // Profile picture URL - assuming your API returns avatar_url or profile_picture
  const profilePictureUrl = user.profile_picture || user.avatar_url || null

  // Update profile mutation
  const updateMutation = useMutation({
    mutationFn: (data) => userService.updateProfile(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries(["admin-profile"])
      setIsEditing(false)
      alert(response.message || "Profile updated successfully!")
    },
    onError: (error) => {
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat().join('\n')
        alert(`Validation errors:\n${errorMessages}`)
      } else {
        alert(error.response?.data?.message || "Failed to update profile")
      }
    }
  })

  // Upload profile picture mutation
  const uploadImageMutation = useMutation({
    mutationFn: (formData) => userService.uploadProfilePicture(formData),
    onSuccess: (response) => {
      queryClient.invalidateQueries(["admin-profile"])
      setSelectedImage(null)
      setImagePreview(null)
      setUploadProgress(0)
      alert(response.message || "Profile picture updated successfully!")
    },
    onError: (error) => {
      setUploadProgress(0)
      alert(error.response?.data?.message || "Failed to upload profile picture")
    }
  })

  // Initialize edit form
  useEffect(() => {
    if (user && user.name) {
      setEditForm({
        name: user.name || "",
        phone: user.phone || "",
        city: user.city || "",
        country: user.country || "",
        organization_name: user.organization_name || ""
      })
    }
  }, [user])

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, GIF, WebP)')
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      alert('Image size should be less than 5MB')
      return
    }

    setSelectedImage(file)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  // Handle image upload
  const handleImageUpload = () => {
    if (!selectedImage) {
      alert("Please select an image first")
      return
    }

    const formData = new FormData()
    formData.append('profile_picture', selectedImage)
    
    // Optional: Append additional data if needed
    formData.append('_method', 'Post') // For Laravel to handle PUT with file upload

    // Simulate upload progress (you can use axios onUploadProgress for real progress)
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 90) clearInterval(interval)
    }, 100)

    uploadImageMutation.mutate(formData, {
      onSettled: () => {
        clearInterval(interval)
        setUploadProgress(0)
      }
    })
  }

  // Remove selected image
  const handleRemoveImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
  }

  // Handle profile update
  const handleUpdateProfile = () => {
    if (!editForm.name?.trim()) {
      alert("Name is required")
      return
    }
    
    const updateData = {
      name: editForm.name.trim(),
      ...(editForm.phone && { phone: editForm.phone.trim() }),
      ...(editForm.city && { city: editForm.city.trim() }),
      ...(editForm.country && { country: editForm.country.trim() }),
      ...(editForm.organization_name && { organization_name: editForm.organization_name.trim() })
    }
    
    updateMutation.mutate(updateData)
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Profile Error</h2>
            <p className="text-gray-600 mb-6">Failed to load admin profile.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>
              <p className="text-gray-600 mt-1">Manage your admin account information</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                <Shield className="h-3.5 w-3.5" />
                Administrator
              </span>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2 text-sm"
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsEditing(false)
                      setEditForm({
                        name: user.name || "",
                        phone: user.phone || "",
                        city: user.city || "",
                        country: user.country || "",
                        organization_name: user.organization_name || ""
                      })
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2 text-sm"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateProfile}
                    disabled={updateMutation.isLoading}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {updateMutation.isLoading ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Profile Picture Section */}
              <div className="mb-6">
                <div className="relative mx-auto w-fit">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Profile Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : profilePictureUrl ? (
                      <img
                        src={profilePictureUrl}
                        alt="Profile"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentNode.querySelector('.fallback').style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className={`fallback h-full w-full flex items-center justify-center ${profilePictureUrl && !imagePreview ? 'hidden' : 'flex'}`}>
                      <User className="h-16 w-16 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Camera Button */}
                  <label className="absolute bottom-2 right-2 cursor-pointer">
                    <div className="p-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200">
                      <Camera className="h-4 w-4 text-gray-600" />
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageSelect}
                    />
                  </label>
                </div>

                {/* Upload Controls */}
                {selectedImage && (
                  <div className="mt-4 space-y-3">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">{selectedImage.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedImage.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    
                    {/* Progress Bar */}
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={handleImageUpload}
                        disabled={uploadImageMutation.isLoading}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium disabled:opacity-50"
                      >
                        {uploadImageMutation.isLoading ? "Uploading..." : "Upload"}
                      </button>
                      <button
                        onClick={handleRemoveImage}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <div className="flex items-center justify-center text-gray-600 mt-1 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="truncate">{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center justify-center text-gray-600 mt-2 text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{user.phone}</span>
                  </div>
                )}
              </div>

              {/* Admin Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">User ID</span>
                  <span className="font-mono text-gray-900 truncate max-w-[120px]">
                    {user._id?.substring(0, 8)}...
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Role</span>
                  <span className="font-medium text-gray-900 capitalize">{user.role}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-medium text-gray-900">
                    {formatDate(user.created_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details - Same as before */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

              <div className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        ) : (
                          <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                            <User className="h-5 w-5 mr-3 text-gray-400" />
                            <span className="font-medium">{user.name || "Not set"}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                          <Mail className="h-5 w-5 mr-3 text-gray-400" />
                          <span className="font-medium">{user.email}</span>
                          <span className="ml-3 text-xs text-gray-500">(Cannot be changed)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter phone number"
                          />
                        ) : (
                          <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                            <Phone className="h-5 w-5 mr-3 text-gray-400" />
                            <span className="font-medium">{user.phone || "Not provided"}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location & Organization */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Organization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.city}
                            onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your city"
                          />
                        ) : (
                          <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                            <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                            <span className="font-medium">{user.city || "Not specified"}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.country}
                            onChange={(e) => setEditForm({...editForm, country: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your country"
                          />
                        ) : (
                          <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                            <Globe className="h-5 w-5 mr-3 text-gray-400" />
                            <span className="font-medium">
                              {user.country || "Not specified"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.organization_name}
                            onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter organization name"
                          />
                        ) : (
                          <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                            <User className="h-5 w-5 mr-3 text-gray-400" />
                            <span className="font-medium">{user.organization_name || "Not specified"}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Info */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Account Created</p>
                      <p className="font-medium text-gray-900">
                        {formatDate(user.created_at)}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Last Updated</p>
                      <p className="font-medium text-gray-900">
                        {formatDate(user.updated_at)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile