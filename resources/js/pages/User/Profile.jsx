// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // // // import { Button } from "@/components/ui/button"
// // // // import { Label } from "@/components/ui/label"

// // // // const dummyUserData = {
// // // //   name: "John Doe",
// // // //   email: "john.doe@example.com",
// // // //   bio: "Passionate event-goer and tech enthusiast. Always looking for the next big tech conference or workshop.",
// // // //   avatar: "/placeholder-user.jpg", // Using the placeholder image
// // // //   upcomingEvents: [
// // // //     { id: 1, name: "AI Summit 2024", date: "2024-07-15", location: "Virtual" },
// // // //     { id: 2, name: "Web Dev Conference", date: "2024-08-22", location: "New York" },
// // // //   ],
// // // //   pastEvents: [{ id: 3, name: "Cloud Expo 2023", date: "2023-10-01", location: "San Francisco" }],
// // // // }

// // // // export default function Profile() {
// // // //   return (
// // // //     <div className="container mx-auto p-4 md:p-6 lg:p-8">
// // // //       <h1 className="text-3xl font-bold mb-6">User Profile</h1>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         {/* Profile Information Card */}
// // // //         <Card className="md:col-span-2">
// // // //           <CardHeader>
// // // //             <CardTitle>Personal Information</CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent className="space-y-4">
// // // //             <div className="flex items-center space-x-4">
// // // //               <Avatar className="w-20 h-20">
// // // //                 <AvatarImage src={dummyUserData.avatar || "/placeholder.svg"} alt={dummyUserData.name} />
// // // //                 <AvatarFallback>
// // // //                   {dummyUserData.name
// // // //                     .split(" ")
// // // //                     .map((n) => n[0])
// // // //                     .join("")}
// // // //                 </AvatarFallback>
// // // //               </Avatar>
// // // //               <div>
// // // //                 <h2 className="text-2xl font-semibold">{dummyUserData.name}</h2>
// // // //                 <p className="text-gray-500">{dummyUserData.email}</p>
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <Label htmlFor="bio">Bio</Label>
// // // //               <textarea
// // // //                 id="bio"
// // // //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
// // // //                 rows="4"
// // // //                 value={dummyUserData.bio}
// // // //                 readOnly
// // // //               />
// // // //             </div>
// // // //             <div className="flex justify-end">
// // // //               <Button variant="outline">Edit Profile</Button>
// // // //             </div>
// // // //           </CardContent>
// // // //         </Card>

// // // //         {/* Upcoming Events Card */}
// // // //         <Card>
// // // //           <CardHeader>
// // // //             <CardTitle>Upcoming Events</CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent>
// // // //             {dummyUserData.upcomingEvents.length > 0 ? (
// // // //               <ul className="space-y-2">
// // // //                 {dummyUserData.upcomingEvents.map((event) => (
// // // //                   <li key={event.id} className="flex justify-between items-center">
// // // //                     <div>
// // // //                       <p className="font-medium">{event.name}</p>
// // // //                       <p className="text-sm text-gray-500">
// // // //                         {event.date} - {event.location}
// // // //                       </p>
// // // //                     </div>
// // // //                     <Button variant="ghost" size="sm">
// // // //                       View
// // // //                     </Button>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             ) : (
// // // //               <p className="text-gray-500">No upcoming events.</p>
// // // //             )}
// // // //           </CardContent>
// // // //         </Card>

// // // //         {/* Past Events Card */}
// // // //         <Card className="md:col-span-3">
// // // //           <CardHeader>
// // // //             <CardTitle>Past Events</CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent>
// // // //             {dummyUserData.pastEvents.length > 0 ? (
// // // //               <ul className="space-y-2">
// // // //                 {dummyUserData.pastEvents.map((event) => (
// // // //                   <li key={event.id} className="flex justify-between items-center">
// // // //                     <div>
// // // //                       <p className="font-medium">{event.name}</p>
// // // //                       <p className="text-sm text-gray-500">
// // // //                         {event.date} - {event.location}
// // // //                       </p>
// // // //                     </div>
// // // //                     <Button variant="ghost" size="sm">
// // // //                       View
// // // //                     </Button>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             ) : (
// // // //               <p className="text-gray-500">No past events.</p>
// // // //             )}
// // // //           </CardContent>
// // // //         </Card>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // "use client"

// // // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // // import {
// // //     AlertCircle,
// // //     Bell,
// // //     Building2,
// // //     Camera,
// // //     CheckCircle,
// // //     CreditCard,
// // //     Edit,
// // //     Eye, EyeOff,
// // //     Globe, Key,
// // //     Lock,
// // //     LogOut,
// // //     Mail,
// // //     MapPin,
// // //     Phone,
// // //     Save,
// // //     Settings,
// // //     Shield,
// // //     User,
// // //     UserX,
// // //     X
// // // } from "lucide-react"
// // // import { useEffect, useState } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { userService } from "../../services/userService"

// // // const UserProfile = () => {
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
// // //   const [activeTab, setActiveTab] = useState('profile')
// // //   const [profileImage, setProfileImage] = useState(null)
// // //   const [imagePreview, setImagePreview] = useState(null)

// // //   // Fetch user profile
// // //   const { data, isLoading, error, refetch } = useQuery({
// // //     queryKey: ["my-profile"],
// // //     queryFn: () => userService.getMyProfile(),
// // //     retry: 1,
// // //   })

// // //   // Update profile mutation
// // //   const updateMutation = useMutation({
// // //     mutationFn: (data) => userService.updateProfile(data),
// // //     onSuccess: () => {
// // //       queryClient.invalidateQueries(["my-profile"])
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
// // //       setProfileImage(file)
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

// // //   // Helper functions
// // //   const getStatusBadge = (status) => {
// // //     switch (status) {
// // //       case "verified":
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
// // //             <CheckCircle className="h-4 w-4" />
// // //             Verified
// // //           </span>
// // //         )
// // //       case "pending":
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
// // //             <AlertCircle className="h-4 w-4" />
// // //             Pending Verification
// // //           </span>
// // //         )
// // //       case "rejected":
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
// // //             <UserX className="h-4 w-4" />
// // //             Verification Rejected
// // //           </span>
// // //         )
// // //       default:
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
// // //             {status}
// // //           </span>
// // //         )
// // //     }
// // //   }

// // //   const getRoleBadge = (role) => {
// // //     switch (role) {
// // //       case "admin":
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
// // //             <Shield className="h-4 w-4" />
// // //             Administrator
// // //           </span>
// // //         )
// // //       case "organizer":
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
// // //             <Building2 className="h-4 w-4" />
// // //             Event Organizer
// // //           </span>
// // //         )
// // //       default:
// // //         return (
// // //           <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
// // //             <User className="h-4 w-4" />
// // //             User
// // //           </span>
// // //         )
// // //     }
// // //   }

// // //   const getCountryName = (countryCode) => {
// // //     const countries = {
// // //       NP: "Nepal",
// // //       IN: "India",
// // //       US: "United States",
// // //       UK: "United Kingdom",
// // //       CA: "Canada",
// // //       AU: "Australia",
// // //     }
// // //     return countries[countryCode] || countryCode
// // //   }

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 py-8">
// // //         <div className="max-w-7xl mx-auto px-4">
// // //           <div className="animate-pulse">
// // //             <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
// // //             <div className="flex gap-8">
// // //               <div className="w-1/4 space-y-4">
// // //                 <div className="h-48 bg-gray-300 rounded-lg"></div>
// // //                 <div className="h-10 bg-gray-300 rounded"></div>
// // //               </div>
// // //               <div className="w-3/4 space-y-4">
// // //                 <div className="h-64 bg-gray-300 rounded-lg"></div>
// // //                 <div className="h-32 bg-gray-300 rounded-lg"></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <div className="max-w-md mx-auto px-4">
// // //           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// // //             <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
// // //             <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h2>
// // //             <p className="text-gray-600 mb-6">Please log in again to access your profile.</p>
// // //             <button
// // //               onClick={() => navigate('/login')}
// // //               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
// // //             >
// // //               Go to Login
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //         {/* Header */}
// // //         <div className="mb-8">
// // //           <div className="flex justify-between items-center">
// // //             <div>
// // //               <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
// // //               <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
// // //             </div>
// // //             <div className="flex gap-3">
// // //               <button
// // //                 onClick={() => navigate(`/profile/${user._id}`)}
// // //                 className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
// // //               >
// // //                 <Eye className="h-4 w-4 mr-2" />
// // //                 View Public Profile
// // //               </button>
// // //               {!isEditing ? (
// // //                 <button
// // //                   onClick={() => setIsEditing(true)}
// // //                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // //                 >
// // //                   <Edit className="h-4 w-4 mr-2" />
// // //                   Edit Profile
// // //                 </button>
// // //               ) : (
// // //                 <div className="flex gap-2">
// // //                   <button
// // //                     onClick={() => {
// // //                       setIsEditing(false)
// // //                       setEditForm({
// // //                         name: user.name || '',
// // //                         phone: user.phone || '',
// // //                         city: user.city || '',
// // //                         country: user.country || '',
// // //                         organization_name: user.organization_name || ''
// // //                       })
// // //                     }}
// // //                     className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
// // //                   >
// // //                     <X className="h-4 w-4 mr-2" />
// // //                     Cancel
// // //                   </button>
// // //                   <button
// // //                     onClick={handleUpdateProfile}
// // //                     disabled={updateMutation.isLoading}
// // //                     className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
// // //                   >
// // //                     {updateMutation.isLoading ? (
// // //                       <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
// // //                     ) : (
// // //                       <Save className="h-4 w-4 mr-2" />
// // //                     )}
// // //                     Save Changes
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flex flex-col lg:flex-row gap-8">
// // //           {/* Left Sidebar */}
// // //           <div className="lg:w-1/4">
// // //             <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
// // //               {/* Profile Picture */}
// // //               <div className="relative mb-6">
// // //                 <div className="h-48 w-48 mx-auto rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
// // //                   {imagePreview ? (
// // //                     <img
// // //                       src={imagePreview}
// // //                       alt="Profile"
// // //                       className="h-full w-full rounded-xl object-cover"
// // //                     />
// // //                   ) : (
// // //                     <User className="h-24 w-24 text-blue-600" />
// // //                   )}
// // //                 </div>
// // //                 <label className="absolute bottom-2 right-2 cursor-pointer">
// // //                   <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl">
// // //                     <Camera className="h-5 w-5 text-gray-600" />
// // //                   </div>
// // //                   <input
// // //                     type="file"
// // //                     className="hidden"
// // //                     accept="image/*"
// // //                     onChange={handleImageUpload}
// // //                   />
// // //                 </label>
// // //               </div>

// // //               {/* User Summary */}
// // //               <div className="text-center">
// // //                 <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
// // //                 <div className="flex items-center justify-center text-gray-600 mt-1">
// // //                   <Mail className="h-4 w-4 mr-2" />
// // //                   <span>{user.email}</span>
// // //                 </div>
// // //                 <div className="mt-4 space-y-2">
// // //                   <div>{getStatusBadge(user.status)}</div>
// // //                   <div>{getRoleBadge(user.role)}</div>
// // //                 </div>
// // //               </div>

// // //               {/* Sidebar Menu */}
// // //               <div className="mt-8 space-y-2">
// // //                 <button
// // //                   onClick={() => setActiveTab('profile')}
// // //                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
// // //                     activeTab === 'profile'
// // //                       ? 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       : 'text-gray-700 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <User className="h-5 w-5" />
// // //                   <span className="font-medium">Profile Information</span>
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setActiveTab('security')}
// // //                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
// // //                     activeTab === 'security'
// // //                       ? 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       : 'text-gray-700 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <Lock className="h-5 w-5" />
// // //                   <span className="font-medium">Security & Password</span>
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setActiveTab('notifications')}
// // //                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
// // //                     activeTab === 'notifications'
// // //                       ? 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       : 'text-gray-700 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <Bell className="h-5 w-5" />
// // //                   <span className="font-medium">Notifications</span>
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setActiveTab('billing')}
// // //                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
// // //                     activeTab === 'billing'
// // //                       ? 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       : 'text-gray-700 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <CreditCard className="h-5 w-5" />
// // //                   <span className="font-medium">Billing & Payments</span>
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setActiveTab('settings')}
// // //                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
// // //                     activeTab === 'settings'
// // //                       ? 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       : 'text-gray-700 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <Settings className="h-5 w-5" />
// // //                   <span className="font-medium">Account Settings</span>
// // //                 </button>
// // //               </div>

// // //               {/* Logout Button */}
// // //               <button
// // //                 onClick={handleLogout}
// // //                 className="w-full mt-8 px-4 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 flex items-center justify-center gap-2 font-medium"
// // //               >
// // //                 <LogOut className="h-5 w-5" />
// // //                 Log Out
// // //               </button>
// // //             </div>

// // //             {/* Account Stats */}
// // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // //               <h3 className="font-bold text-gray-900 mb-4">Account Overview</h3>
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Member Since</p>
// // //                   <p className="font-medium text-gray-900">
// // //                     {new Date(user.created_at).toLocaleDateString('en-US', {
// // //                       month: 'long',
// // //                       year: 'numeric'
// // //                     })}
// // //                   </p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Last Updated</p>
// // //                   <p className="font-medium text-gray-900">
// // //                     {new Date(user.updated_at).toLocaleDateString('en-US', {
// // //                       month: 'short',
// // //                       day: 'numeric',
// // //                       year: 'numeric'
// // //                     })}
// // //                   </p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">User ID</p>
// // //                   <p className="font-mono text-xs text-gray-600 truncate" title={user._id}>
// // //                     {user._id}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Main Content */}
// // //           <div className="lg:w-3/4">
// // //             {/* Profile Information Tab */}
// // //             {activeTab === 'profile' && (
// // //               <div className="bg-white rounded-xl shadow-lg p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {/* Personal Information */}
// // //                   <div className="space-y-6">
// // //                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
// // //                       Personal Information
// // //                     </h3>
                    
// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Full Name *
// // //                       </label>
// // //                       {isEditing ? (
// // //                         <input
// // //                           type="text"
// // //                           value={editForm.name || ''}
// // //                           onChange={(e) => setEditForm({...editForm, name: e.target.value})}
// // //                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                           placeholder="Enter your full name"
// // //                         />
// // //                       ) : (
// // //                         <div className="flex items-center text-gray-900">
// // //                           <User className="h-5 w-5 mr-3 text-blue-500" />
// // //                           <span className="text-lg">{user.name}</span>
// // //                         </div>
// // //                       )}
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Email Address
// // //                       </label>
// // //                       <div className="flex items-center text-gray-900">
// // //                         <Mail className="h-5 w-5 mr-3 text-blue-500" />
// // //                         <span className="text-lg">{user.email}</span>
// // //                         <span className="ml-3 text-sm text-gray-500">(Primary email, cannot be changed)</span>
// // //                       </div>
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Phone Number
// // //                       </label>
// // //                       {isEditing ? (
// // //                         <input
// // //                           type="tel"
// // //                           value={editForm.phone || ''}
// // //                           onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
// // //                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                           placeholder="Enter phone number"
// // //                         />
// // //                       ) : (
// // //                         <div className="flex items-center text-gray-900">
// // //                           <Phone className="h-5 w-5 mr-3 text-blue-500" />
// // //                           <span className="text-lg">{user.phone || "Not provided"}</span>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>

// // //                   {/* Location & Organization */}
// // //                   <div className="space-y-6">
// // //                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
// // //                       Location & Organization
// // //                     </h3>
                    
// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         City
// // //                       </label>
// // //                       {isEditing ? (
// // //                         <input
// // //                           type="text"
// // //                           value={editForm.city || ''}
// // //                           onChange={(e) => setEditForm({...editForm, city: e.target.value})}
// // //                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                           placeholder="Enter your city"
// // //                         />
// // //                       ) : (
// // //                         <div className="flex items-center text-gray-900">
// // //                           <MapPin className="h-5 w-5 mr-3 text-blue-500" />
// // //                           <span className="text-lg">{user.city || "Not specified"}</span>
// // //                         </div>
// // //                       )}
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Country
// // //                       </label>
// // //                       {isEditing ? (
// // //                         <select
// // //                           value={editForm.country || ''}
// // //                           onChange={(e) => setEditForm({...editForm, country: e.target.value})}
// // //                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                         >
// // //                           <option value="">Select Country</option>
// // //                           <option value="NP">Nepal</option>
// // //                           <option value="IN">India</option>
// // //                           <option value="US">United States</option>
// // //                           <option value="UK">United Kingdom</option>
// // //                           <option value="CA">Canada</option>
// // //                           <option value="AU">Australia</option>
// // //                         </select>
// // //                       ) : (
// // //                         <div className="flex items-center text-gray-900">
// // //                           <Globe className="h-5 w-5 mr-3 text-blue-500" />
// // //                           <span className="text-lg">
// // //                             {user.country ? getCountryName(user.country) : "Not specified"}
// // //                           </span>
// // //                         </div>
// // //                       )}
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Organization
// // //                       </label>
// // //                       {isEditing ? (
// // //                         <input
// // //                           type="text"
// // //                           value={editForm.organization_name || ''}
// // //                           onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
// // //                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                           placeholder="Enter organization name"
// // //                         />
// // //                       ) : (
// // //                         <div className="flex items-center text-gray-900">
// // //                           <Building2 className="h-5 w-5 mr-3 text-blue-500" />
// // //                           <span className="text-lg">{user.organization_name || "Not specified"}</span>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* KYC Verification Section */}
// // //                 {user.kyc_document_path && (
// // //                   <div className="mt-8 pt-8 border-t border-gray-200">
// // //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">KYC Verification</h3>
// // //                     <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
// // //                       <div className="flex items-center justify-between">
// // //                         <div className="flex items-center">
// // //                           <Shield className="h-6 w-6 text-blue-600 mr-3" />
// // //                           <div>
// // //                             <h4 className="font-medium text-blue-900">Verification Document</h4>
// // //                             <p className="text-sm text-blue-700">Your document has been submitted for verification</p>
// // //                           </div>
// // //                         </div>
// // //                         <a
// // //                           href={user.kyc_document_path}
// // //                           target="_blank"
// // //                           rel="noopener noreferrer"
// // //                           className="text-blue-600 hover:text-blue-800 font-medium"
// // //                         >
// // //                           View Document
// // //                         </a>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             )}

// // //             {/* Security & Password Tab */}
// // //             {activeTab === 'security' && (
// // //               <div className="bg-white rounded-xl shadow-lg p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Security & Password</h2>
                
// // //                 <div className="max-w-lg space-y-8">
// // //                   {/* Change Password */}
// // //                   <div>
// // //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
// // //                     <div className="space-y-4">
// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Current Password
// // //                         </label>
// // //                         <div className="relative">
// // //                           <input
// // //                             type={showCurrentPassword ? "text" : "password"}
// // //                             value={passwordForm.current_password}
// // //                             onChange={(e) => setPasswordForm({...passwordForm, current_password: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
// // //                             placeholder="Enter current password"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() => setShowCurrentPassword(!showCurrentPassword)}
// // //                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
// // //                           >
// // //                             {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                           </button>
// // //                         </div>
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           New Password
// // //                         </label>
// // //                         <div className="relative">
// // //                           <input
// // //                             type={showNewPassword ? "text" : "password"}
// // //                             value={passwordForm.new_password}
// // //                             onChange={(e) => setPasswordForm({...passwordForm, new_password: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
// // //                             placeholder="Enter new password (min 8 characters)"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() => setShowNewPassword(!showNewPassword)}
// // //                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
// // //                           >
// // //                             {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                           </button>
// // //                         </div>
// // //                         <p className="text-xs text-gray-500 mt-1">
// // //                           Password must be at least 8 characters long
// // //                         </p>
// // //                       </div>

// // //                       <div>
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                           Confirm New Password
// // //                         </label>
// // //                         <div className="relative">
// // //                           <input
// // //                             type={showConfirmPassword ? "text" : "password"}
// // //                             value={passwordForm.confirm_password}
// // //                             onChange={(e) => setPasswordForm({...passwordForm, confirm_password: e.target.value})}
// // //                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
// // //                             placeholder="Confirm new password"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// // //                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
// // //                           >
// // //                             {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// // //                           </button>
// // //                         </div>
// // //                       </div>

// // //                       <button
// // //                         onClick={handleChangePassword}
// // //                         disabled={passwordMutation.isLoading}
// // //                         className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
// // //                       >
// // //                         {passwordMutation.isLoading ? "Changing Password..." : "Change Password"}
// // //                       </button>
// // //                     </div>
// // //                   </div>

// // //                   {/* Security Tips */}
// // //                   <div className="bg-gray-50 rounded-xl p-6">
// // //                     <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
// // //                       <Key className="h-5 w-5" />
// // //                       Security Tips
// // //                     </h4>
// // //                     <ul className="space-y-2 text-sm text-gray-600">
// // //                       <li className="flex items-start gap-2">
// // //                         <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
// // //                           <CheckCircle className="h-3 w-3 text-green-600" />
// // //                         </div>
// // //                         Use a strong, unique password
// // //                       </li>
// // //                       <li className="flex items-start gap-2">
// // //                         <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
// // //                           <CheckCircle className="h-3 w-3 text-green-600" />
// // //                         </div>
// // //                         Never share your password with anyone
// // //                       </li>
// // //                       <li className="flex items-start gap-2">
// // //                         <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
// // //                           <CheckCircle className="h-3 w-3 text-green-600" />
// // //                         </div>
// // //                         Update your password regularly
// // //                       </li>
// // //                       <li className="flex items-start gap-2">
// // //                         <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
// // //                           <CheckCircle className="h-3 w-3 text-green-600" />
// // //                         </div>
// // //                         Enable two-factor authentication if available
// // //                       </li>
// // //                     </ul>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Other Tabs (Placeholder) */}
// // //             {activeTab === 'notifications' && (
// // //               <div className="bg-white rounded-xl shadow-lg p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
// // //                 <p className="text-gray-600">Notification settings will be available soon.</p>
// // //               </div>
// // //             )}

// // //             {activeTab === 'billing' && (
// // //               <div className="bg-white rounded-xl shadow-lg p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing & Payments</h2>
// // //                 <p className="text-gray-600">Billing and payment settings will be available soon.</p>
// // //               </div>
// // //             )}

// // //             {activeTab === 'settings' && (
// // //               <div className="bg-white rounded-xl shadow-lg p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
// // //                 <p className="text-gray-600">Account settings will be available soon.</p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default UserProfile
// // "use client"

// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // import {
// //     Activity,
// //     AlertCircle,
// //     Bell,
// //     Building2, Calendar,
// //     Camera,
// //     CheckCircle,
// //     ChevronRight,
// //     Clock,
// //     Edit,
// //     Eye, EyeOff,
// //     Globe, Key,
// //     Lock,
// //     LogOut,
// //     Mail,
// //     MapPin,
// //     Phone,
// //     Save,
// //     Settings,
// //     Shield,
// //     ShieldCheck,
// //     User,
// //     UserX,
// //     X
// // } from "lucide-react"
// // import { useEffect, useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { userService } from "../../services/userService"

// // const UserProfile = () => {
// //   const navigate = useNavigate()
// //   const queryClient = useQueryClient()
  
// //   // State
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [editForm, setEditForm] = useState({})
// //   const [passwordForm, setPasswordForm] = useState({
// //     current_password: '',
// //     new_password: '',
// //     confirm_password: ''
// //   })
// //   const [showCurrentPassword, setShowCurrentPassword] = useState(false)
// //   const [showNewPassword, setShowNewPassword] = useState(false)
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
// //   const [activeTab, setActiveTab] = useState('profile')
// //   const [imagePreview, setImagePreview] = useState(null)
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// //   // Fetch user profile
// //   const { data, isLoading, error, refetch } = useQuery({
// //     queryKey: ["my-profile"],
// //     queryFn: () => userService.getMyProfile(),
// //     retry: 1,
// //   })

// //   // Update profile mutation
// //   const updateMutation = useMutation({
// //     mutationFn: (data) => userService.updateProfile(data),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["my-profile"])
// //       setIsEditing(false)
// //       setEditForm({})
// //       alert("Profile updated successfully!")
// //     },
// //     onError: (error) => {
// //       alert(error.response?.data?.message || "Failed to update profile")
// //     }
// //   })

// //   // Change password mutation
// //   const passwordMutation = useMutation({
// //     mutationFn: (data) => userService.changePassword({
// //       current_password: data.current_password,
// //       new_password: data.new_password,
// //       new_password_confirmation: data.confirm_password
// //     }),
// //     onSuccess: () => {
// //       setPasswordForm({
// //         current_password: '',
// //         new_password: '',
// //         confirm_password: ''
// //       })
// //       alert("Password changed successfully!")
// //     },
// //     onError: (error) => {
// //       alert(error.response?.data?.message || "Failed to change password")
// //     }
// //   })

// //   // User data
// //   const user = data?.data || {}

// //   // Initialize edit form
// //   useEffect(() => {
// //     if (user && Object.keys(user).length > 0) {
// //       setEditForm({
// //         name: user.name || '',
// //         phone: user.phone || '',
// //         city: user.city || '',
// //         country: user.country || '',
// //         organization_name: user.organization_name || ''
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
// //     updateMutation.mutate(editForm)
// //   }

// //   // Handle password change
// //   const handleChangePassword = () => {
// //     if (!passwordForm.current_password) {
// //       alert("Current password is required")
// //       return
// //     }
// //     if (!passwordForm.new_password) {
// //       alert("New password is required")
// //       return
// //     }
// //     if (passwordForm.new_password !== passwordForm.confirm_password) {
// //       alert("Passwords do not match")
// //       return
// //     }
// //     if (passwordForm.new_password.length < 8) {
// //       alert("Password must be at least 8 characters")
// //       return
// //     }
// //     passwordMutation.mutate(passwordForm)
// //   }

// //   // Handle logout
// //   const handleLogout = () => {
// //     localStorage.removeItem('auth_token')
// //     localStorage.removeItem('user')
// //     navigate('/login')
// //   }

// //   // Helper functions
// //   const getStatusBadge = (status) => {
// //     switch (status) {
// //       case "verified":
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
// //             <ShieldCheck className="h-3.5 w-3.5" />
// //             Verified
// //           </span>
// //         )
// //       case "pending":
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
// //             <Clock className="h-3.5 w-3.5" />
// //             Pending
// //           </span>
// //         )
// //       case "rejected":
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-rose-50 text-rose-700 border border-rose-200">
// //             <UserX className="h-3.5 w-3.5" />
// //             Rejected
// //           </span>
// //         )
// //       default:
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
// //             {status}
// //           </span>
// //         )
// //     }
// //   }

// //   const getRoleBadge = (role) => {
// //     switch (role) {
// //       case "admin":
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200">
// //             <Shield className="h-3.5 w-3.5" />
// //             Admin
// //           </span>
// //         )
// //       case "organizer":
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
// //             <Building2 className="h-3.5 w-3.5" />
// //             Organizer
// //           </span>
// //         )
// //       default:
// //         return (
// //           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
// //             <User className="h-3.5 w-3.5" />
// //             User
// //           </span>
// //         )
// //     }
// //   }

// //   const getCountryName = (countryCode) => {
// //     const countries = {
// //       NP: "Nepal",
// //       IN: "India",
// //       US: "United States",
// //       UK: "United Kingdom",
// //       CA: "Canada",
// //       AU: "Australia",
// //     }
// //     return countries[countryCode] || countryCode
// //   }

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       month: 'short',
// //       day: 'numeric',
// //       year: 'numeric'
// //     })
// //   }

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="animate-pulse space-y-8">
// //             {/* Header skeleton */}
// //             <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
            
// //             {/* Main content skeleton */}
// //             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
// //               {/* Sidebar skeleton */}
// //               <div className="lg:col-span-1 space-y-6">
// //                 <div className="bg-white rounded-2xl shadow-sm p-6">
// //                   <div className="h-48 bg-gray-200 rounded-xl mb-6"></div>
// //                   <div className="space-y-3">
// //                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
// //                     <div className="h-4 bg-gray-200 rounded w-1/2"></div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Main content skeleton */}
// //               <div className="lg:col-span-3">
// //                 <div className="bg-white rounded-2xl shadow-sm p-8">
// //                   <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
// //                   <div className="space-y-6">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                       <div className="h-32 bg-gray-200 rounded-xl"></div>
// //                       <div className="h-32 bg-gray-200 rounded-xl"></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
// //         <div className="max-w-md w-full">
// //           <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
// //             <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
// //               <AlertCircle className="h-10 w-10 text-rose-600" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h2>
// //             <p className="text-gray-600 mb-6">Your session has expired. Please log in again to continue.</p>
// //             <div className="space-y-3">
// //               <button
// //                 onClick={() => navigate('/login')}
// //                 className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
// //               >
// //                 Go to Login
// //               </button>
// //               <button
// //                 onClick={() => navigate('/')}
// //                 className="w-full px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium"
// //               >
// //                 Back to Home
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
// //         {/* Mobile Header */}
// //         <div className="lg:hidden mb-6">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
// //               <p className="text-sm text-gray-600 mt-1">Manage your account</p>
// //             </div>
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
// //             >
// //               <Settings className="h-5 w-5 text-gray-600" />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
// //           {/* Left Sidebar */}
// //           <div className="lg:col-span-1">
// //             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //               {/* Profile Card */}
// //               <div className="p-6 border-b border-gray-100">
// //                 <div className="relative">
// //                   <div className="h-32 w-32 mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-lg flex items-center justify-center">
// //                     {imagePreview ? (
// //                       <img
// //                         src={imagePreview}
// //                         alt="Profile"
// //                         className="h-full w-full rounded-xl object-cover"
// //                       />
// //                     ) : (
// //                       <User className="h-16 w-16 text-blue-600" />
// //                     )}
// //                   </div>
// //                   <label className="absolute bottom-2 right-2 cursor-pointer">
// //                     <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200">
// //                       <Camera className="h-4 w-4 text-gray-600" />
// //                     </div>
// //                     <input
// //                       type="file"
// //                       className="hidden"
// //                       accept="image/*"
// //                       onChange={handleImageUpload}
// //                     />
// //                   </label>
// //                 </div>

// //                 <div className="text-center mt-6">
// //                   <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
// //                   <div className="flex items-center justify-center text-gray-600 mt-1 text-sm">
// //                     <Mail className="h-3.5 w-3.5 mr-1.5" />
// //                     <span className="truncate">{user.email}</span>
// //                   </div>
// //                   <div className="flex flex-wrap gap-2 justify-center mt-4">
// //                     {getStatusBadge(user.status)}
// //                     {getRoleBadge(user.role)}
// //                   </div>
// //                 </div>

// //                 {/* Stats */}
// //                 <div className="grid grid-cols-2 gap-3 mt-6">
// //                   <div className="bg-gray-50 rounded-xl p-3 text-center">
// //                     <p className="text-xs text-gray-500">Member Since</p>
// //                     <p className="font-semibold text-gray-900 text-sm">
// //                       {new Date(user.created_at).getFullYear()}
// //                     </p>
// //                   </div>
// //                   <div className="bg-gray-50 rounded-xl p-3 text-center">
// //                     <p className="text-xs text-gray-500">Active</p>
// //                     <p className="font-semibold text-gray-900 text-sm">
// //                       {calculateMemberDuration(user.created_at)}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Navigation - Mobile */}
// //               {isMobileMenuOpen && (
// //                 <div className="lg:hidden border-t border-gray-100">
// //                   <div className="p-4 space-y-1">
// //                     {['profile', 'security', 'notifications'].map((tab) => (
// //                       <button
// //                         key={tab}
// //                         onClick={() => {
// //                           setActiveTab(tab)
// //                           setIsMobileMenuOpen(false)
// //                         }}
// //                         className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between ${
// //                           activeTab === tab
// //                             ? 'bg-blue-50 text-blue-700'
// //                             : 'text-gray-700 hover:bg-gray-50'
// //                         }`}
// //                       >
// //                         <div className="flex items-center gap-3">
// //                           {tab === 'profile' && <User className="h-5 w-5" />}
// //                           {tab === 'security' && <Lock className="h-5 w-5" />}
// //                           {tab === 'notifications' && <Bell className="h-5 w-5" />}
// //                           <span className="font-medium capitalize">{tab}</span>
// //                         </div>
// //                         <ChevronRight className="h-4 w-4" />
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Navigation - Desktop */}
// //               <div className="hidden lg:block p-4 space-y-1">
// //                 {['profile', 'security', 'notifications'].map((tab) => (
// //                   <button
// //                     key={tab}
// //                     onClick={() => setActiveTab(tab)}
// //                     className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
// //                       activeTab === tab
// //                         ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-100'
// //                         : 'text-gray-700 hover:bg-gray-50'
// //                     }`}
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       {tab === 'profile' && <User className="h-5 w-5" />}
// //                       {tab === 'security' && <Lock className="h-5 w-5" />}
// //                       {tab === 'notifications' && <Bell className="h-5 w-5" />}
// //                       <span className="font-medium capitalize">{tab}</span>
// //                     </div>
// //                     <ChevronRight className="h-4 w-4" />
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Logout Button */}
// //               <div className="p-4 border-t border-gray-100">
// //                 <button
// //                   onClick={handleLogout}
// //                   className="w-full px-4 py-3 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 rounded-xl hover:from-rose-100 hover:to-pink-100 transition-all duration-200 flex items-center justify-center gap-2 font-medium border border-rose-200"
// //                 >
// //                   <LogOut className="h-5 w-5" />
// //                   Sign Out
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Quick Actions - Desktop */}
// //             <div className="hidden lg:block mt-6">
// //               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
// //                 <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
// //                 <div className="space-y-3">
// //                   <button
// //                     onClick={() => navigate(`/profile/${user._id}`)}
// //                     className="w-full px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 flex items-center gap-3 text-sm font-medium"
// //                   >
// //                     <Activity className="h-4 w-4" />
// //                     View Public Profile
// //                   </button>
// //                   <button
// //                     onClick={() => setIsEditing(!isEditing)}
// //                     className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 flex items-center gap-3 text-sm font-medium"
// //                   >
// //                     <Edit className="h-4 w-4" />
// //                     {isEditing ? 'Cancel Edit' : 'Edit Profile'}
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="lg:col-span-3">
// //             {/* Header Actions - Desktop */}
// //             <div className="hidden lg:flex justify-between items-center mb-6">
// //               <div>
// //                 <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
// //                 <p className="text-gray-600 mt-1">Manage your profile and preferences</p>
// //               </div>
// //               <div className="flex gap-3">
// //                 <button
// //                   onClick={() => navigate(`/profile/${user._id}`)}
// //                   className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
// //                 >
// //                   <Activity className="h-4 w-4" />
// //                   Public View
// //                 </button>
// //                 {!isEditing ? (
// //                   <button
// //                     onClick={() => setIsEditing(true)}
// //                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 text-sm font-medium flex items-center gap-2 shadow-md"
// //                   >
// //                     <Edit className="h-4 w-4" />
// //                     Edit Profile
// //                   </button>
// //                 ) : (
// //                   <div className="flex gap-2">
// //                     <button
// //                       onClick={() => {
// //                         setIsEditing(false)
// //                         setEditForm({
// //                           name: user.name || '',
// //                           phone: user.phone || '',
// //                           city: user.city || '',
// //                           country: user.country || '',
// //                           organization_name: user.organization_name || ''
// //                         })
// //                       }}
// //                       className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
// //                     >
// //                       <X className="h-4 w-4" />
// //                       Cancel
// //                     </button>
// //                     <button
// //                       onClick={handleUpdateProfile}
// //                       disabled={updateMutation.isLoading}
// //                       className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 text-sm font-medium flex items-center gap-2 shadow-md disabled:opacity-50"
// //                     >
// //                       {updateMutation.isLoading ? (
// //                         <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
// //                       ) : (
// //                         <Save className="h-4 w-4" />
// //                       )}
// //                       Save Changes
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Profile Information Tab */}
// //             {activeTab === 'profile' && (
// //               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //                 <div className="p-6 md:p-8">
// //                   <div className="flex items-center justify-between mb-8">
// //                     <div>
// //                       <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
// //                       <p className="text-gray-600 mt-1">Update your personal details</p>
// //                     </div>
// //                     <div className="lg:hidden">
// //                       {isEditing ? (
// //                         <div className="flex gap-2">
// //                           <button
// //                             onClick={() => setIsEditing(false)}
// //                             className="p-2 border border-gray-300 rounded-lg text-gray-700"
// //                           >
// //                             <X className="h-4 w-4" />
// //                           </button>
// //                           <button
// //                             onClick={handleUpdateProfile}
// //                             className="p-2 bg-blue-600 text-white rounded-lg"
// //                           >
// //                             <Save className="h-4 w-4" />
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <button
// //                           onClick={() => setIsEditing(true)}
// //                           className="p-2 border border-gray-300 rounded-lg text-gray-700"
// //                         >
// //                           <Edit className="h-4 w-4" />
// //                         </button>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="space-y-8">
// //                     {/* Personal Information */}
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
// //                         Personal Information
// //                       </h3>
// //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                         <div className="space-y-4">
// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Full Name
// //                             </label>
// //                             {isEditing ? (
// //                               <input
// //                                 type="text"
// //                                 value={editForm.name || ''}
// //                                 onChange={(e) => setEditForm({...editForm, name: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                                 placeholder="Enter your full name"
// //                               />
// //                             ) : (
// //                               <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                                 <User className="h-5 w-5 mr-3 text-gray-400" />
// //                                 <span className="font-medium">{user.name}</span>
// //                               </div>
// //                             )}
// //                           </div>

// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Email Address
// //                             </label>
// //                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                               <Mail className="h-5 w-5 mr-3 text-gray-400" />
// //                               <span className="font-medium">{user.email}</span>
// //                               <span className="ml-3 text-xs text-gray-500">(Primary)</span>
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <div className="space-y-4">
// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Phone Number
// //                             </label>
// //                             {isEditing ? (
// //                               <input
// //                                 type="tel"
// //                                 value={editForm.phone || ''}
// //                                 onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                                 placeholder="Enter phone number"
// //                               />
// //                             ) : (
// //                               <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                                 <Phone className="h-5 w-5 mr-3 text-gray-400" />
// //                                 <span className="font-medium">{user.phone || "Not provided"}</span>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Location & Organization */}
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
// //                         Location & Organization
// //                       </h3>
// //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                         <div className="space-y-4">
// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               City
// //                             </label>
// //                             {isEditing ? (
// //                               <input
// //                                 type="text"
// //                                 value={editForm.city || ''}
// //                                 onChange={(e) => setEditForm({...editForm, city: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                                 placeholder="Enter your city"
// //                               />
// //                             ) : (
// //                               <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                                 <MapPin className="h-5 w-5 mr-3 text-gray-400" />
// //                                 <span className="font-medium">{user.city || "Not specified"}</span>
// //                               </div>
// //                             )}
// //                           </div>

// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Country
// //                             </label>
// //                             {isEditing ? (
// //                               <select
// //                                 value={editForm.country || ''}
// //                                 onChange={(e) => setEditForm({...editForm, country: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                               >
// //                                 <option value="">Select Country</option>
// //                                 <option value="NP">Nepal</option>
// //                                 <option value="IN">India</option>
// //                                 <option value="US">United States</option>
// //                                 <option value="UK">United Kingdom</option>
// //                                 <option value="CA">Canada</option>
// //                                 <option value="AU">Australia</option>
// //                               </select>
// //                             ) : (
// //                               <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                                 <Globe className="h-5 w-5 mr-3 text-gray-400" />
// //                                 <span className="font-medium">
// //                                   {user.country ? getCountryName(user.country) : "Not specified"}
// //                                 </span>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>

// //                         <div className="space-y-4">
// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Organization
// //                             </label>
// //                             {isEditing ? (
// //                               <input
// //                                 type="text"
// //                                 value={editForm.organization_name || ''}
// //                                 onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                                 placeholder="Enter organization name"
// //                               />
// //                             ) : (
// //                               <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-xl">
// //                                 <Building2 className="h-5 w-5 mr-3 text-gray-400" />
// //                                 <span className="font-medium">{user.organization_name || "Not specified"}</span>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Account Details */}
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
// //                         Account Details
// //                       </h3>
// //                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                         <div className="bg-gray-50 rounded-xl p-4">
// //                           <p className="text-sm text-gray-500 mb-1">Member Since</p>
// //                           <div className="flex items-center text-gray-900">
// //                             <Calendar className="h-4 w-4 mr-2 text-gray-400" />
// //                             <span className="font-medium">{formatDate(user.created_at)}</span>
// //                           </div>
// //                         </div>
// //                         <div className="bg-gray-50 rounded-xl p-4">
// //                           <p className="text-sm text-gray-500 mb-1">Last Updated</p>
// //                           <div className="flex items-center text-gray-900">
// //                             <Calendar className="h-4 w-4 mr-2 text-gray-400" />
// //                             <span className="font-medium">{formatDate(user.updated_at)}</span>
// //                           </div>
// //                         </div>
// //                         <div className="bg-gray-50 rounded-xl p-4">
// //                           <p className="text-sm text-gray-500 mb-1">User ID</p>
// //                           <p className="font-mono text-xs text-gray-600 truncate" title={user._id}>
// //                             {user._id}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Security & Password Tab */}
// //             {activeTab === 'security' && (
// //               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //                 <div className="p-6 md:p-8">
// //                   <h2 className="text-xl font-bold text-gray-900 mb-2">Security Settings</h2>
// //                   <p className="text-gray-600 mb-8">Manage your password and security preferences</p>

// //                   <div className="max-w-2xl space-y-8">
// //                     {/* Change Password */}
// //                     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
// //                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
// //                         <Lock className="h-5 w-5 text-blue-600" />
// //                         Change Password
// //                       </h3>
// //                       <div className="space-y-4">
// //                         <div>
// //                           <label className="block text-sm font-medium text-gray-700 mb-2">
// //                             Current Password
// //                           </label>
// //                           <div className="relative">
// //                             <input
// //                               type={showCurrentPassword ? "text" : "password"}
// //                               value={passwordForm.current_password}
// //                               onChange={(e) => setPasswordForm({...passwordForm, current_password: e.target.value})}
// //                               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// //                               placeholder="Enter current password"
// //                             />
// //                             <button
// //                               type="button"
// //                               onClick={() => setShowCurrentPassword(!showCurrentPassword)}
// //                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                             >
// //                               {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// //                             </button>
// //                           </div>
// //                         </div>

// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               New Password
// //                             </label>
// //                             <div className="relative">
// //                               <input
// //                                 type={showNewPassword ? "text" : "password"}
// //                                 value={passwordForm.new_password}
// //                                 onChange={(e) => setPasswordForm({...passwordForm, new_password: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// //                                 placeholder="New password"
// //                               />
// //                               <button
// //                                 type="button"
// //                                 onClick={() => setShowNewPassword(!showNewPassword)}
// //                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                               >
// //                                 {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// //                               </button>
// //                             </div>
// //                           </div>

// //                           <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                               Confirm Password
// //                             </label>
// //                             <div className="relative">
// //                               <input
// //                                 type={showConfirmPassword ? "text" : "password"}
// //                                 value={passwordForm.confirm_password}
// //                                 onChange={(e) => setPasswordForm({...passwordForm, confirm_password: e.target.value})}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
// //                                 placeholder="Confirm password"
// //                               />
// //                               <button
// //                                 type="button"
// //                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                               >
// //                                 {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <div className="pt-4">
// //                           <button
// //                             onClick={handleChangePassword}
// //                             disabled={passwordMutation.isLoading}
// //                             className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg disabled:opacity-50 w-full md:w-auto"
// //                           >
// //                             {passwordMutation.isLoading ? "Updating..." : "Update Password"}
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Security Tips */}
// //                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
// //                       <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
// //                         <Key className="h-5 w-5 text-gray-600" />
// //                         Security Recommendations
// //                       </h4>
// //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                         <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200">
// //                           <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
// //                             <CheckCircle className="h-4 w-4 text-emerald-600" />
// //                           </div>
// //                           <div>
// //                             <p className="font-medium text-gray-900 text-sm">Strong Password</p>
// //                             <p className="text-xs text-gray-600 mt-1">Use 8+ characters with mix</p>
// //                           </div>
// //                         </div>
// //                         <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200">
// //                           <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
// //                             <CheckCircle className="h-4 w-4 text-emerald-600" />
// //                           </div>
// //                           <div>
// //                             <p className="font-medium text-gray-900 text-sm">Regular Updates</p>
// //                             <p className="text-xs text-gray-600 mt-1">Change password quarterly</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Other Tabs (Placeholder) */}
// //             {activeTab === 'notifications' && (
// //               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
// //                 <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
// //                 <h3 className="text-xl font-bold text-gray-900 mb-2">Notification Settings</h3>
// //                 <p className="text-gray-600">Manage your notification preferences here.</p>
// //               </div>
// //             )}   
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // // Helper function to calculate member duration
// // const calculateMemberDuration = (createdAt) => {
// //   const createdDate = new Date(createdAt)
// //   const now = new Date()
// //   const diffTime = Math.abs(now - createdDate)
// //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
// //   if (diffDays < 30) return `${diffDays}d`
// //   if (diffDays < 365) {
// //     const months = Math.floor(diffDays / 30)
// //     return `${months}m`
// //   }
// //   const years = Math.floor(diffDays / 365)
// //   return `${years}y`
// // }

// // export default UserProfile
// "use client"

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import {
//     Activity,
//     Building2, Calendar,
//     Camera,
//     Clock,
//     Edit,
//     Globe,
//     LogOut,
//     Mail,
//     MapPin,
//     Phone,
//     Save,
//     Shield,
//     ShieldCheck,
//     User,
//     X
// } from "lucide-react"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { userService } from "../../services/userService"

// const UserProfile = () => {
//   const navigate = useNavigate()
//   const queryClient = useQueryClient()
  
//   // State
//   const [isEditing, setIsEditing] = useState(false)
//   const [editForm, setEditForm] = useState({})
//   const [imagePreview, setImagePreview] = useState(null)

//   // Fetch user profile
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["my-profile"],
//     queryFn: () => userService.getMyProfile(),
//     retry: 1,
//   })

//   // Update profile mutation
//   const updateMutation = useMutation({
//     mutationFn: (data) => userService.updateProfile(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["my-profile"])
//       setIsEditing(false)
//       setEditForm({})
//       alert("Profile updated successfully!")
//     },
//     onError: (error) => {
//       alert(error.response?.data?.message || "Failed to update profile")
//     }
//   })

//   // User data
//   const user = data?.data || {}

//   // Initialize edit form
//   useEffect(() => {
//     if (user && Object.keys(user).length > 0) {
//       setEditForm({
//         name: user.name || '',
//         phone: user.phone || '',
//         city: user.city || '',
//         country: user.country || '',
//         organization_name: user.organization_name || ''
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
//     updateMutation.mutate(editForm)
//   }

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('auth_token')
//     localStorage.removeItem('user')
//     navigate('/login')
//   }

//   // Helper functions
//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "verified":
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
//             <ShieldCheck className="h-3.5 w-3.5" />
//             Verified
//           </span>
//         )
//       case "pending":
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
//             <Clock className="h-3.5 w-3.5" />
//             Pending
//           </span>
//         )
//       default:
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
//             {status}
//           </span>
//         )
//     }
//   }

//   const getRoleBadge = (role) => {
//     switch (role) {
//       case "admin":
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200">
//             <Shield className="h-3.5 w-3.5" />
//             Admin
//           </span>
//         )
//       case "organizer":
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
//             <Building2 className="h-3.5 w-3.5" />
//             Organizer
//           </span>
//         )
//       default:
//         return (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
//             <User className="h-3.5 w-3.5" />
//             User
//           </span>
//         )
//     }
//   }

//   const getCountryName = (countryCode) => {
//     const countries = {
//       NP: "Nepal",
//       IN: "India",
//       US: "United States",
//       UK: "United Kingdom",
//       CA: "Canada",
//       AU: "Australia",
//     }
//     return countries[countryCode] || countryCode
//   }

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     })
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="animate-pulse space-y-6">
//             <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 space-y-4">
//                 <div className="h-64 bg-gray-200 rounded-xl"></div>
//               </div>
//               <div className="space-y-4">
//                 <div className="h-48 bg-gray-200 rounded-xl"></div>
//               </div>
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
//           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//             <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Shield className="h-8 w-8 text-rose-600" />
//             </div>
//             <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
//             <p className="text-gray-600 mb-6">Please log in to view your profile.</p>
//             <button
//               onClick={() => navigate('/login')}
//               className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
//             >
//               Go to Login
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Profile</h1>
//               <p className="text-gray-600 mt-1">Manage your personal information</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => navigate(`/profile/${user._id}`)}
//                 className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
//               >
//                 <Activity className="h-4 w-4" />
//                 View Public Profile
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 text-sm font-medium flex items-center gap-2"
//               >
//                 <LogOut className="h-4 w-4" />
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Profile Card */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               {/* Profile Picture */}
//               <div className="relative mb-6">
//                 <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-lg flex items-center justify-center">
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
//               <div className="text-center mb-6">
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

//               {/* Badges */}
//               <div className="flex flex-wrap gap-2 justify-center mb-6">
//                 {getStatusBadge(user.status)}
//                 {getRoleBadge(user.role)}
//               </div>

//               {/* Account Stats */}
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-2 text-gray-500" />
//                     <span className="text-sm text-gray-600">Member Since</span>
//                   </div>
//                   <span className="font-medium text-gray-900">
//                     {formatDate(user.created_at)}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <span className="text-sm text-gray-600">Account ID</span>
//                   <span className="font-mono text-xs text-gray-600 truncate max-w-[120px]">
//                     {user._id}
//                   </span>
//                 </div>
//               </div>

//               {/* Edit/Save Buttons */}
//               <div className="space-y-3">
//                 {!isEditing ? (
//                   <button
//                     onClick={() => setIsEditing(true)}
//                     className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2 transition-colors"
//                   >
//                     <Edit className="h-4 w-4" />
//                     Edit Profile
//                   </button>
//                 ) : (
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => {
//                         setIsEditing(false)
//                         setEditForm({
//                           name: user.name || '',
//                           phone: user.phone || '',
//                           city: user.city || '',
//                           country: user.country || '',
//                           organization_name: user.organization_name || ''
//                         })
//                       }}
//                       className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center gap-2 transition-colors"
//                     >
//                       <X className="h-4 w-4" />
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleUpdateProfile}
//                       disabled={updateMutation.isLoading}
//                       className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
//                     >
//                       {updateMutation.isLoading ? (
//                         <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                       ) : (
//                         <Save className="h-4 w-4" />
//                       )}
//                       Save
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Profile Details */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-6 md:p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

//                 <div className="space-y-8">
//                   {/* Personal Information */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
//                       Personal Information
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Full Name
//                           </label>
//                           {isEditing ? (
//                             <input
//                               type="text"
//                               value={editForm.name || ''}
//                               onChange={(e) => setEditForm({...editForm, name: e.target.value})}
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                               placeholder="Enter your full name"
//                             />
//                           ) : (
//                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                               <User className="h-5 w-5 mr-3 text-gray-400" />
//                               <span className="font-medium">{user.name}</span>
//                             </div>
//                           )}
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Email Address
//                           </label>
//                           <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                             <Mail className="h-5 w-5 mr-3 text-gray-400" />
//                             <span className="font-medium">{user.email}</span>
//                             <span className="ml-3 text-xs text-gray-500">(Primary)</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Phone Number
//                           </label>
//                           {isEditing ? (
//                             <input
//                               type="tel"
//                               value={editForm.phone || ''}
//                               onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                               placeholder="Enter phone number"
//                             />
//                           ) : (
//                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                               <Phone className="h-5 w-5 mr-3 text-gray-400" />
//                               <span className="font-medium">{user.phone || "Not provided"}</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Location & Organization */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
//                       Location & Organization
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             City
//                           </label>
//                           {isEditing ? (
//                             <input
//                               type="text"
//                               value={editForm.city || ''}
//                               onChange={(e) => setEditForm({...editForm, city: e.target.value})}
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                               placeholder="Enter your city"
//                             />
//                           ) : (
//                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                               <MapPin className="h-5 w-5 mr-3 text-gray-400" />
//                               <span className="font-medium">{user.city || "Not specified"}</span>
//                             </div>
//                           )}
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Country
//                           </label>
//                           {isEditing ? (
//                             <select
//                               value={editForm.country || ''}
//                               onChange={(e) => setEditForm({...editForm, country: e.target.value})}
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                             >
//                               <option value="">Select Country</option>
//                               <option value="NP">Nepal</option>
//                               <option value="IN">India</option>
//                               <option value="US">United States</option>
//                               <option value="UK">United Kingdom</option>
//                               <option value="CA">Canada</option>
//                               <option value="AU">Australia</option>
//                             </select>
//                           ) : (
//                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                               <Globe className="h-5 w-5 mr-3 text-gray-400" />
//                               <span className="font-medium">
//                                 {user.country ? getCountryName(user.country) : "Not specified"}
//                               </span>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Organization
//                           </label>
//                           {isEditing ? (
//                             <input
//                               type="text"
//                               value={editForm.organization_name || ''}
//                               onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                               placeholder="Enter organization name"
//                             />
//                           ) : (
//                             <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
//                               <Building2 className="h-5 w-5 mr-3 text-gray-400" />
//                               <span className="font-medium">{user.organization_name || "Not specified"}</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Account Information */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
//                       Account Information
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       <div className="bg-gray-50 rounded-lg p-4">
//                         <p className="text-sm text-gray-500 mb-1">Member Since</p>
//                         <div className="flex items-center text-gray-900">
//                           <Calendar className="h-4 w-4 mr-2 text-gray-400" />
//                           <span className="font-medium">{formatDate(user.created_at)}</span>
//                         </div>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-4">
//                         <p className="text-sm text-gray-500 mb-1">Last Updated</p>
//                         <div className="flex items-center text-gray-900">
//                           <Calendar className="h-4 w-4 mr-2 text-gray-400" />
//                           <span className="font-medium">{formatDate(user.updated_at)}</span>
//                         </div>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-4">
//                         <p className="text-sm text-gray-500 mb-1">Account Status</p>
//                         <div className="flex items-center">
//                           {getStatusBadge(user.status)}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* KYC Verification */}
//                   {user.kyc_document_path && (
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
//                         Verification Status
//                       </h3>
//                       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center">
//                             <Shield className="h-6 w-6 text-blue-600 mr-3" />
//                             <div>
//                               <h4 className="font-medium text-blue-900">KYC Document Submitted</h4>
//                               <p className="text-sm text-blue-700">Your verification document is under review</p>
//                             </div>
//                           </div>
//                           <a
//                             href={user.kyc_document_path}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-600 hover:text-blue-800 font-medium text-sm"
//                           >
//                             View Document
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

// export default UserProfile
"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  Activity,
  Calendar,
  Camera,
  Edit,
  Globe,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
  X
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userService } from "../../services/userService"

const UserProfile = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  
  // State
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({})
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  // Fetch user profile
  const { data, isLoading, error } = useQuery({
    queryKey: ["my-profile"],
    queryFn: () => userService.getMyProfile(),
    retry: 1,
  })

  // User data
  const user = data?.data || {}

  // Profile picture - handle base64 data from MongoDB
  const profilePicture = user.profile_picture

  // Update profile mutation
  const updateMutation = useMutation({
    mutationFn: (data) => userService.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-profile"])
      setIsEditing(false)
      setEditForm({})
      alert("Profile updated successfully!")
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Failed to update profile")
    }
  })

  // Upload profile picture mutation
  const uploadImageMutation = useMutation({
    mutationFn: (formData) => userService.uploadProfilePicture(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-profile"])
      setSelectedImage(null)
      setImagePreview(null)
      alert("Profile picture updated successfully!")
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Failed to upload profile picture")
    }
  })

  // Initialize edit form
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setEditForm({
        name: user.name || '',
        phone: user.phone || '',
        city: user.city || '',
        country: user.country || '',
        organization_name: user.organization_name || ''
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

    // Validate file size (max 2MB for base64)
    const maxSize = 2 * 1024 * 1024 // 2MB for base64
    if (file.size > maxSize) {
      alert('Image size should be less than 2MB')
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
    
    uploadImageMutation.mutate(formData)
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
    
    // Prepare data for Laravel backend
    const updateData = {
      name: editForm.name.trim(),
      ...(editForm.phone && { phone: editForm.phone.trim() }),
      ...(editForm.city && { city: editForm.city.trim() }),
      ...(editForm.country && { country: editForm.country.trim() }),
      ...(editForm.organization_name && { organization_name: editForm.organization_name.trim() })
    }
    
    updateMutation.mutate(updateData)
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-64 bg-gray-200 rounded-xl"></div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-xl"></div>
              </div>
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
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-rose-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-6">Please log in to view your profile.</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600 mt-1">Manage your personal information</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(`/profile/${user._id}`)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
              >
                <Activity className="h-4 w-4" />
                View Public Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 text-sm font-medium flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentNode.querySelector('.fallback').style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`fallback h-full w-full flex items-center justify-center ${profilePicture && !imagePreview ? 'hidden' : 'flex'}`}>
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
                    <p className="text-sm text-gray-600 mb-1 truncate">{selectedImage.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedImage.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  
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

              {/* User Info */}
              <div className="text-center mb-6">
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

              {/* Account Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Member Since</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {formatDate(user.created_at)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Account ID</span>
                  <span className="font-mono text-xs text-gray-600 truncate max-w-[120px]">
                    {user._id?.substring(0, 8)}...
                  </span>
                </div>
              </div>

              {/* Edit/Save Buttons */}
              <div className="space-y-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2 transition-colors"
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
                      className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      disabled={updateMutation.isLoading}
                      className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
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

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.name || ''}
                              onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                              placeholder="Enter your full name"
                            />
                          ) : (
                            <div className="flex items-center text-gray-900 p-3 bg-gray-50 rounded-lg">
                              <User className="h-5 w-5 mr-3 text-gray-400" />
                              <span className="font-medium">{user.name}</span>
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
                            <span className="ml-3 text-xs text-gray-500">(Primary)</span>
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
                              value={editForm.phone || ''}
                              onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                      Location & Organization
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.city || ''}
                              onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                              value={editForm.country || ''}
                              onChange={(e) => setEditForm({...editForm, country: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                              value={editForm.organization_name || ''}
                              onChange={(e) => setEditForm({...editForm, organization_name: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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

                  {/* Account Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                      Account Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Member Since</p>
                        <div className="flex items-center text-gray-900">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span className="font-medium">{formatDate(user.created_at)}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                        <div className="flex items-center text-gray-900">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span className="font-medium">{formatDate(user.updated_at)}</span>
                        </div>
                      </div>
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

export default UserProfile