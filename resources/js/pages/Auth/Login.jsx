// // // // "use client"

// // // // import { AlertCircle, Building2, CalendarDays, Eye, EyeOff } from "lucide-react"
// // // // import { useState } from "react"
// // // // import { Link, useLocation, useNavigate } from "react-router-dom"
// // // // import { useAuth } from "../../contexts/AuthContext"

// // // // const Login = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     email: "",
// // // //     password: "",
// // // //     remember: false,
// // // //     role: "user", // Default role
// // // //     organizationName: "", // New field for organizers
// // // //   })
// // // //   const [showPassword, setShowPassword] = useState(false)
// // // //   const [errors, setErrors] = useState({})
// // // //   const [isSubmitting, setIsSubmitting] = useState(false)

// // // //   const { login, loading, error } = useAuth()
// // // //   const navigate = useNavigate()
// // // //   const location = useLocation()

// // // //   const from = location.state?.from?.pathname || "/"

// // // //   const validateForm = () => {
// // // //     const newErrors = {}

// // // //     if (!formData.email) {
// // // //       newErrors.email = "Email is required"
// // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // //       newErrors.email = "Email is invalid"
// // // //     }

// // // //     if (!formData.password) {
// // // //       newErrors.password = "Password is required"
// // // //     } else if (formData.password.length < 6) {
// // // //         newErrors.password = "Password must be at least 6 characters"
// // // //       }

// // // //     // Validate organization name if organizer is selected
// // // //     if (formData.role === "organizer" && !formData.organizationName.trim()) {
// // // //       newErrors.organizationName = "Organization name is required"
// // // //     }

// // // //     setErrors(newErrors)
// // // //     return Object.keys(newErrors).length === 0
// // // //   }

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === "checkbox" ? checked : value,
// // // //     }))

// // // //     // Clear error when user starts typing
// // // //     if (errors[name]) {
// // // //       setErrors((prev) => ({
// // // //         ...prev,
// // // //         [name]: "",
// // // //       }))
// // // //     }
// // // //   }

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault()

// // // //     if (!validateForm()) {
// // // //       return
// // // //     }

// // // //     setIsSubmitting(true)

// // // //     try {
// // // //       // Prepare login data based on role
// // // //       const loginData = {
// // // //         email: formData.email,
// // // //         password: formData.password,
// // // //         role: formData.role,
// // // //       }
      
// // // //       // Include organization name if organizer
// // // //       if (formData.role === "organizer") {
// // // //         loginData.organizationName = formData.organizationName;
// // // //       }

// // // //       const response = await login(loginData)

// // // //       // Redirect based on user role
// // // //       if (response.user.role === "admin") {
// // // //         navigate("/admin")
// // // //       } else if (response.user.role === "organizer") {
// // // //         navigate("/organizer")

// // // //       }
// // // //       else if (response.user.role === "user") {
// // // //         navigate("/") }
// // // //       else {
// // // //         navigate(from)
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Login error:", err)
// // // //     } finally {
// // // //       setIsSubmitting(false)
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// // // //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// // // //         <div className="flex justify-center">
// // // //           <div className="bg-blue-600 p-3 rounded-full">
// // // //             <CalendarDays className="h-8 w-8 text-white" />
// // // //           </div>
// // // //         </div>
// // // //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
// // // //         <p className="mt-2 text-center text-sm text-gray-600">
// // // //           Or{" "}
// // // //           <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
// // // //             create a new account
// // // //           </Link>
// // // //         </p>
// // // //       </div>

// // // //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// // // //         <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
// // // //           {error && (
// // // //             <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
// // // //               <AlertCircle className="h-5 w-5 mr-2" />
// // // //               {error}
// // // //             </div>
// // // //           )}

// // // //           <form className="space-y-6" onSubmit={handleSubmit}>
// // // //             {/* Role Selection */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 Login as
// // // //               </label>
// // // //               <div className="flex space-x-4">
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => setFormData({...formData, role: "user"})}
// // // //                   className={`flex-1 py-2 px-4 rounded-md border ${
// // // //                     formData.role === "user" 
// // // //                       ? "bg-blue-100 border-blue-500 text-blue-700" 
// // // //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// // // //                   } transition-colors`}
// // // //                 >
// // // //                   User
// // // //                 </button>
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => setFormData({...formData, role: "organizer"})}
// // // //                   className={`flex-1 py-2 px-4 rounded-md border ${
// // // //                     formData.role === "organizer" 
// // // //                       ? "bg-blue-100 border-blue-500 text-blue-700" 
// // // //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// // // //                   } transition-colors flex items-center justify-center`}
// // // //                 >
// // // //                   <Building2 className="h-4 w-4 mr-1" />
// // // //                   Organizer
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             <div>
// // // //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// // // //                 Email address
// // // //               </label>
// // // //               <div className="mt-1">
// // // //                 <input
// // // //                   id="email"
// // // //                   name="email"
// // // //                   type="email"
// // // //                   autoComplete="email"
// // // //                   value={formData.email}
// // // //                   onChange={handleChange}
// // // //                   className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // // //                     errors.email ? "border-red-300" : "border-gray-300"
// // // //                   }`}
// // // //                   placeholder="Enter your email"
// // // //                 />
// // // //                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // //               </div>
// // // //             </div>

// // // //             {/* Organization Name Field (Conditional) */}
// // // //             {formData.role === "organizer" && (
// // // //               <div>
// // // //                 <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
// // // //                   Organization Name
// // // //                 </label>
// // // //                 <div className="mt-1">
// // // //                   <input
// // // //                     id="organizationName"
// // // //                     name="organizationName"
// // // //                     type="text"
// // // //                     value={formData.organizationName}
// // // //                     onChange={handleChange}
// // // //                     className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // // //                       errors.organizationName ? "border-red-300" : "border-gray-300"
// // // //                     }`}
// // // //                     placeholder="Enter your organization name"
// // // //                   />
// // // //                   {errors.organizationName && <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>}
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <div>
// // // //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// // // //                 Password
// // // //               </label>
// // // //               <div className="mt-1 relative">
// // // //                 <input
// // // //                   id="password"
// // // //                   name="password"
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   autoComplete="current-password"
// // // //                   value={formData.password}
// // // //                   onChange={handleChange}
// // // //                   className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // // //                     errors.password ? "border-red-300" : "border-gray-300"
// // // //                   }`}
// // // //                   placeholder="Enter your password"
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// // // //                   onClick={() => setShowPassword(!showPassword)}
// // // //                 >
// // // //                   {showPassword ? (
// // // //                     <EyeOff className="h-5 w-5 text-gray-400" />
// // // //                   ) : (
// // // //                     <Eye className="h-5 w-5 text-gray-400" />
// // // //                   )}
// // // //                 </button>
// // // //                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex items-center justify-between">
// // // //               {/* <div className="flex items-center">
// // // //                 <input
// // // //                   id="remember"
// // // //                   name="remember"
// // // //                   type="checkbox"
// // // //                   checked={formData.remember}
// // // //                   onChange={handleChange}
// // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // //                 />
// // // //                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
// // // //                   Remember me
// // // //                 </label>
// // // //               </div> */}

// // // //               {/* <div className="text-sm">
// // // //                 <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
// // // //                   Forgot your password?
// // // //                 </Link>
// // // //               </div> */}
// // // //             </div>

// // // //             <div>
// // // //               <button
// // // //                 type="submit"
// // // //                 disabled={loading || isSubmitting}
// // // //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
// // // //               >
// // // //                 {loading || isSubmitting ? (
// // // //                   <div className="flex items-center">
// // // //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
// // // //                     Signing in...
// // // //                   </div>
// // // //                 ) : (
// // // //                   "Sign in"
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </form>

// // // //           <div className="mt-6">
// // // //             <div className="relative">
// // // //               <div className="absolute inset-0 flex items-center">
// // // //                 <div className="w-full border-t border-gray-300"></div>
// // // //               </div>
              
// // // //             </div>

// // // //             <div className="mt-6 grid grid-cols-2 gap-3">
             
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Login
// // // "use client"

// // // import { AlertCircle, Building2, CalendarDays, Eye, EyeOff } from "lucide-react"
// // // import { useState } from "react"
// // // import { Link } from "react-router-dom"
// // // import { useAuth } from "../../contexts/AuthContext"

// // // const Login = () => {
// // //   const [formData, setFormData] = useState({
// // //     email: "",
// // //     password: "",
// // //     remember: false,
// // //     role: "user",
// // //     organizationName: "",
// // //   })

// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [errors, setErrors] = useState({})
// // //   const [isSubmitting, setIsSubmitting] = useState(false)

// // //   const { login, loading } = useAuth()

// // //   const validateForm = () => {
// // //     const newErrors = {}

// // //     if (!formData.email) {
// // //       newErrors.email = "Email is required"
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = "Email is invalid"
// // //     }

// // //     if (!formData.password) {
// // //       newErrors.password = "Password is required"
// // //     } else if (formData.password.length < 6) {
// // //       newErrors.password = "Password must be at least 6 characters"
// // //     }

// // //     if (formData.role === "organizer" && !formData.organizationName.trim()) {
// // //       newErrors.organizationName = "Organization name is required"
// // //     }

// // //     setErrors(newErrors)
// // //     return Object.keys(newErrors).length === 0
// // //   }

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: type === "checkbox" ? checked : value,
// // //     }))

// // //     if (errors[name]) {
// // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // //     }
// // //   }

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()

// // //     if (!validateForm()) return

// // //     setIsSubmitting(true)
// // //     setErrors({})

// // //     try {
// // //       const loginData = {
// // //         email: formData.email,
// // //         password: formData.password,
// // //         role: formData.role,
// // //         ...(formData.role === "organizer" && { organizationName: formData.organizationName }),
// // //       }

// // //       const response = await login(loginData)

// // //       if (response.user) {
// // //         // Success: show message or handle as needed
// // //         setErrors({})
// // //         console.log("Logged in user:", response.user)
// // //       } else if (response.errors) {
// // //         // Field-specific server errors
// // //         setErrors(response.errors)
// // //       } else if (response.message) {
// // //         // General server error
// // //         setErrors({ general: response.message })
// // //       } else {
// // //         setErrors({ general: "Login failed. Please try again." })
// // //       }
// // //     } catch (err) {
// // //       console.error("Login error:", err)
// // //       setErrors({ general: "An unexpected error occurred. Please try again." })
// // //     } finally {
// // //       setIsSubmitting(false)
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// // //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// // //         <div className="flex justify-center">
// // //           <div className="bg-blue-600 p-3 rounded-full">
// // //             <CalendarDays className="h-8 w-8 text-white" />
// // //           </div>
// // //         </div>
// // //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// // //           Sign in to your account
// // //         </h2>
// // //         <p className="mt-2 text-center text-sm text-gray-600">
// // //           Or{" "}
// // //           <Link
// // //             to="/register"
// // //             className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
// // //           >
// // //             create a new account
// // //           </Link>
// // //         </p>
// // //       </div>

// // //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// // //         <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
// // //           {errors.general && (
// // //             <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
// // //               <AlertCircle className="h-5 w-5 mr-2" />
// // //               {errors.general}
// // //             </div>
// // //           )}

// // //           <form className="space-y-6" onSubmit={handleSubmit}>
// // //             {/* Role Selection */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
// // //               <div className="flex space-x-4">
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setFormData({ ...formData, role: "user" })}
// // //                   className={`flex-1 py-2 px-4 rounded-md border ${
// // //                     formData.role === "user"
// // //                       ? "bg-blue-100 border-blue-500 text-blue-700"
// // //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// // //                   } transition-colors`}
// // //                 >
// // //                   User
// // //                 </button>
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setFormData({ ...formData, role: "organizer" })}
// // //                   className={`flex-1 py-2 px-4 rounded-md border ${
// // //                     formData.role === "organizer"
// // //                       ? "bg-blue-100 border-blue-500 text-blue-700"
// // //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// // //                   } transition-colors flex items-center justify-center`}
// // //                 >
// // //                   <Building2 className="h-4 w-4 mr-1" />
// // //                   Organizer
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Email */}
// // //             <div>
// // //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// // //                 Email address
// // //               </label>
// // //               <div className="mt-1">
// // //                 <input
// // //                   id="email"
// // //                   name="email"
// // //                   type="email"
// // //                   autoComplete="email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                   className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // //                     errors.email ? "border-red-300" : "border-gray-300"
// // //                   }`}
// // //                   placeholder="Enter your email"
// // //                 />
// // //                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // //               </div>
// // //             </div>

// // //             {/* Organization Name */}
// // //             {formData.role === "organizer" && (
// // //               <div>
// // //                 <label
// // //                   htmlFor="organizationName"
// // //                   className="block text-sm font-medium text-gray-700"
// // //                 >
// // //                   Organization Name
// // //                 </label>
// // //                 <div className="mt-1">
// // //                   <input
// // //                     id="organizationName"
// // //                     name="organizationName"
// // //                     type="text"
// // //                     value={formData.organizationName}
// // //                     onChange={handleChange}
// // //                     className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // //                       errors.organizationName ? "border-red-300" : "border-gray-300"
// // //                     }`}
// // //                     placeholder="Enter your organization name"
// // //                   />
// // //                   {errors.organizationName && (
// // //                     <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Password */}
// // //             <div>
// // //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// // //                 Password
// // //               </label>
// // //               <div className="mt-1 relative">
// // //                 <input
// // //                   id="password"
// // //                   name="password"
// // //                   type={showPassword ? "text" : "password"}
// // //                   autoComplete="current-password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                   className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// // //                     errors.password ? "border-red-300" : "border-gray-300"
// // //                   }`}
// // //                   placeholder="Enter your password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                 >
// // //                   {showPassword ? (
// // //                     <EyeOff className="h-5 w-5 text-gray-400" />
// // //                   ) : (
// // //                     <Eye className="h-5 w-5 text-gray-400" />
// // //                   )}
// // //                 </button>
// // //                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
// // //               </div>
// // //             </div>

// // //             {/* Submit */}
// // //             <div>
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading || isSubmitting}
// // //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
// // //               >
// // //                 {loading || isSubmitting ? (
// // //                   <div className="flex items-center">
// // //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
// // //                     Signing in...
// // //                   </div>
// // //                 ) : (
// // //                   "Sign in"
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Login
// // "use client"

// // import { AlertCircle, Building2, CalendarDays, Eye, EyeOff } from "lucide-react"
// // import { useState } from "react"
// // import { Link, useLocation, useNavigate } from "react-router-dom"
// // import { useAuth } from "../../contexts/AuthContext"

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //     remember: false,
// //     role: "user",
// //     organizationName: "",
// //   })
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [errors, setErrors] = useState({})
// //   const [isSubmitting, setIsSubmitting] = useState(false)

// //   const { login, loading, error } = useAuth()
// //   const navigate = useNavigate()
// //   const location = useLocation()
// //   const from = location.state?.from?.pathname || "/"

// //   const validateForm = () => {
// //     const newErrors = {}

// //     if (!formData.email) newErrors.email = "Email is required"
// //     else if (!/\S+@\S+\.\S+/.test(formData.email))
// //       newErrors.email = "Email is invalid"

// //     if (!formData.password) newErrors.password = "Password is required"
// //     else if (formData.password.length < 6)
// //       newErrors.password = "Password must be at least 6 characters"

// //     if (formData.role === "organizer" && !formData.organizationName.trim())
// //       newErrors.organizationName = "Organization name is required"

// //     setErrors(newErrors)
// //     return Object.keys(newErrors).length === 0
// //   }

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }))

// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }))
// //     }
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (!validateForm()) return

// //     setIsSubmitting(true)

// //     try {
// //       const loginData = { email: formData.email, password: formData.password, role: formData.role }
// //       if (formData.role === "organizer") loginData.organizationName = formData.organizationName

// //       const response = await login(loginData) // throws error if login fails

// //       // Only navigate on success
// //       if (response.user.role === "admin") navigate("/admin")
// //       else if (response.user.role === "organizer") navigate("/organizer")
// //       else if (response.user.role === "user") navigate("/")
// //       else navigate(from)
// //     } catch (err) {
// //       console.error("Login failed:", err.message)
// //       // no navigation on failure, error is shown in alert
// //     } finally {
// //       setIsSubmitting(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="flex justify-center">
// //           <div className="bg-blue-600 p-3 rounded-full">
// //             <CalendarDays className="h-8 w-8 text-white" />
// //           </div>
// //         </div>
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Sign in to your account
// //         </h2>
// //         <p className="mt-2 text-center text-sm text-gray-600">
// //           Or{" "}
// //           <Link
// //             to="/register"
// //             className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
// //           >
// //             create a new account
// //           </Link>
// //         </p>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
// //           {error && (
// //             <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
// //               <AlertCircle className="h-5 w-5 mr-2" />
// //               {error}
// //             </div>
// //           )}

// //           <form className="space-y-6" onSubmit={handleSubmit}>
// //             {/* Role Selection */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
// //               <div className="flex space-x-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setFormData({ ...formData, role: "user" })}
// //                   className={`flex-1 py-2 px-4 rounded-md border ${
// //                     formData.role === "user"
// //                       ? "bg-blue-100 border-blue-500 text-blue-700"
// //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// //                   } transition-colors`}
// //                 >
// //                   User
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={() => setFormData({ ...formData, role: "organizer" })}
// //                   className={`flex-1 py-2 px-4 rounded-md border ${
// //                     formData.role === "organizer"
// //                       ? "bg-blue-100 border-blue-500 text-blue-700"
// //                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
// //                   } transition-colors flex items-center justify-center`}
// //                 >
// //                   <Building2 className="h-4 w-4 mr-1" />
// //                   Organizer
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email address
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// //                     errors.email ? "border-red-300" : "border-gray-300"
// //                   }`}
// //                   placeholder="Enter your email"
// //                 />
// //                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// //               </div>
// //             </div>

// //             {/* Organizer Name */}
// //             {formData.role === "organizer" && (
// //               <div>
// //                 <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
// //                   Organization Name
// //                 </label>
// //                 <div className="mt-1">
// //                   <input
// //                     id="organizationName"
// //                     name="organizationName"
// //                     type="text"
// //                     value={formData.organizationName}
// //                     onChange={handleChange}
// //                     className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// //                       errors.organizationName ? "border-red-300" : "border-gray-300"
// //                     }`}
// //                     placeholder="Enter your organization name"
// //                   />
// //                   {errors.organizationName && <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Password */}
// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1 relative">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type={showPassword ? "text" : "password"}
// //                   autoComplete="current-password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
// //                     errors.password ? "border-red-300" : "border-gray-300"
// //                   }`}
// //                   placeholder="Enter your password"
// //                 />
// //                 <button
// //                   type="button"
// //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? (
// //                     <EyeOff className="h-5 w-5 text-gray-400" />
// //                   ) : (
// //                     <Eye className="h-5 w-5 text-gray-400" />
// //                   )}
// //                 </button>
// //                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 disabled={loading || isSubmitting}
// //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
// //               >
// //                 {loading || isSubmitting ? (
// //                   <div className="flex items-center">
// //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
// //                     Signing in...
// //                   </div>
// //                 ) : (
// //                   "Sign in"
// //                 )}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login

// "use client"

// import { AlertCircle, Building2, CalendarDays, Eye, EyeOff } from "lucide-react"
// import { useState } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     remember: false,
//     role: "user",
//     organizationName: "",
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [apiError, setApiError] = useState("") // Separate state for API errors

//   const { login, loading } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const from = location.state?.from?.pathname || "/"

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.email) newErrors.email = "Email is required"
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Email is invalid"

//     if (!formData.password) newErrors.password = "Password is required"
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters"

//     if (formData.role === "organizer" && !formData.organizationName.trim())
//       newErrors.organizationName = "Organization name is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
    
//     // Clear API error when user starts typing
//     if (apiError) {
//       setApiError("")
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     // Clear previous errors
//     setApiError("")
//     setErrors({})
    
//     if (!validateForm()) return

//     setIsSubmitting(true)

//     try {
//       const loginData = { 
//         email: formData.email, 
//         password: formData.password, 
//         role: formData.role 
//       }
      
//       if (formData.role === "organizer") {
//         loginData.organizationName = formData.organizationName
//       }

//       const response = await login(loginData)
      
//       // Check if login was successful
//       if (!response.success) {
//         // Handle specific error cases
//         if (response.message) {
//           setApiError(response.message)
//         } else if (response.errors) {
//           // Set field-specific errors from server
//           setErrors(response.errors)
//         } else {
//           setApiError("Login failed. Please check your credentials.")
//         }
//         return // Don't navigate on failure
//       }

//       // Only navigate on success
//       const user = response.user || response.data?.user
      
//       if (user?.role === "admin") {
//         navigate("/admin")
//       } else if (user?.role === "organizer") {
//         navigate("/organizer")
//       } else if (user?.role === "user") {
//         navigate("/")
//       } else {
//         navigate(from)
//       }
      
//     } catch (err) {
//       console.error("Login error:", err)
//       // Handle different types of errors
//       if (err.response?.data) {
//         const { data } = err.response
//         if (data.errors) {
//           setErrors(data.errors)
//         } else if (data.message) {
//           setApiError(data.message)
//         } else {
//           setApiError("Login failed. Please try again.")
//         }
//       } else if (err.message) {
//         setApiError(err.message)
//       } else {
//         setApiError("An unexpected error occurred. Please try again.")
//       }
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <div className="bg-blue-600 p-3 rounded-full">
//             <CalendarDays className="h-8 w-8 text-white" />
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{" "}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
//           >
//             create a new account
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
//           {/* Show API errors at the top */}
//           {apiError && (
//             <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
//               <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
//               <span className="text-sm">{apiError}</span>
//             </div>
//           )}

//           {/* Show field errors from API */}
//           {errors.general && (
//             <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
//               <div className="flex items-center">
//                 <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
//                 <span className="text-sm">{errors.general}</span>
//               </div>
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Role Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFormData({ ...formData, role: "user", organizationName: "" })
//                     setApiError("")
//                   }}
//                   className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
//                     formData.role === "user"
//                       ? "bg-blue-100 border-blue-500 text-blue-700"
//                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   User
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFormData({ ...formData, role: "organizer" })
//                     setApiError("")
//                   }}
//                   className={`flex-1 py-2 px-4 rounded-md border transition-colors flex items-center justify-center ${
//                     formData.role === "organizer"
//                       ? "bg-blue-100 border-blue-500 text-blue-700"
//                       : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Building2 className="h-4 w-4 mr-1" />
//                   Organizer
//                 </button>
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                     errors.email ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//               </div>
//             </div>

//             {/* Organization Name - only for organizers */}
//             {formData.role === "organizer" && (
//               <div>
//                 <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
//                   Organization Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="organizationName"
//                     name="organizationName"
//                     type="text"
//                     value={formData.organizationName}
//                     onChange={handleChange}
//                     className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                       errors.organizationName ? "border-red-300" : "border-gray-300"
//                     }`}
//                     placeholder="Enter your organization name"
//                   />
//                   {errors.organizationName && (
//                     <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                     errors.password ? "border-red-300" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
//                   onClick={() => setShowPassword(!showPassword)}
//                   tabIndex={-1}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading || isSubmitting}
//                 className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
//               >
//                 {loading || isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Signing in...
//                   </>
//                 ) : (
//                   "Sign in"
//                 )}
//               </button>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="text-center">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
"use client"

import { AlertCircle, Building2, CalendarDays, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    role: "user",
    organizationName: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState("")

  const { login, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid"

    if (!formData.password) newErrors.password = "Password is required"
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters"

    if (formData.role === "organizer" && !formData.organizationName.trim())
      newErrors.organizationName = "Organization name is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
    
    if (apiError) {
      setApiError("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous errors
    setApiError("")
    setErrors({})
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const loginData = { 
        email: formData.email, 
        password: formData.password, 
        role: formData.role 
      }
      
      if (formData.role === "organizer") {
        loginData.organizationName = formData.organizationName
      }

      const response = await login(loginData)
      
      // IMPORTANT: Check what your login function actually returns
      // Common response patterns:
      
      // Pattern 1: Direct user object on success
      if (response?.user) {
        // Success - user object exists
        const user = response.user
        
        if (user?.role === "admin") {
          navigate("/admin")
        } else if (user?.role === "organizer") {
          navigate("/organizer")
        } else if (user?.role === "user") {
          navigate("/")
        } else {
          navigate(from)
        }
        return
      }
      
      // Pattern 2: Data property with user
      if (response?.data?.user) {
        // Success - user in data object
        const user = response.data.user
        
        if (user?.role === "admin") {
          navigate("/admin")
        } else if (user?.role === "organizer") {
          navigate("/organizer")
        } else if (user?.role === "user") {
          navigate("/")
        } else {
          navigate(from)
        }
        return
      }
      
      // Pattern 3: Token-based auth (JWT)
      if (response?.token || response?.accessToken) {
        // Success - got a token
        // Navigate based on role (might need to decode token or check local storage)
        // You might need to adjust this based on how you store user role
        
        // Try to get user from localStorage or context
        // Or you might need to make another request to get user info
        // For now, redirect to home
        navigate(from)
        return
      }
      
      // Pattern 4: Success flag
      if (response?.success === true) {
        // Success flag is true
        // Try to get user from response
        const user = response.user || response.data?.user
        
        if (user?.role === "admin") {
          navigate("/admin")
        } else if (user?.role === "organizer") {
          navigate("/organizer")
        } else if (user?.role === "user") {
          navigate("/")
        } else {
          navigate(from)
        }
        return
      }
      
      // Pattern 5: Error message in response
      if (response?.message && !response?.user && !response?.token) {
        // Has a message but no user/token - treat as error
        setApiError(response.message)
        return
      }
      
      // Pattern 6: Errors object in response
      if (response?.errors) {
        setErrors(response.errors)
        return
      }
      
      // If none of the above patterns match, show generic error
      console.error("Unexpected response structure:", response)
      setApiError("Login failed. Please check your credentials and try again.")
      
    } catch (err) {
      console.error("Login error:", err)
      
      // Handle different error types
      if (err.response?.data) {
        // Axios error with response data
        const { data } = err.response
        
        if (data.errors) {
          // Field-specific errors
          setErrors(data.errors)
        } else if (data.message) {
          // General error message
          setApiError(data.message)
        } else if (data.error) {
          // Error property
          setApiError(data.error)
        } else {
          setApiError("Login failed. Please try again.")
        }
      } else if (err.message) {
        // JavaScript/Network error
        if (err.message.includes("Network Error") || err.message.includes("Failed to fetch")) {
          setApiError("Network error. Please check your connection and try again.")
        } else {
          setApiError(err.message)
        }
      } else {
        setApiError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-blue-600 p-3 rounded-full">
            <CalendarDays className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
          {/* API Error Message */}
          {apiError && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{apiError}</span>
            </div>
          )}

          {/* General Error from server */}
          {errors.general && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{errors.general}</span>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, role: "user", organizationName: "" })
                    setApiError("")
                    setErrors({})
                  }}
                  className={`flex-1 py-2 px-4 rounded-md border transition-colors ${
                    formData.role === "user"
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, role: "organizer" })
                    setApiError("")
                    setErrors({})
                  }}
                  className={`flex-1 py-2 px-4 rounded-md border transition-colors flex items-center justify-center ${
                    formData.role === "organizer"
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Building2 className="h-4 w-4 mr-1" />
                  Organizer
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            {/* Organization Name */}
            {formData.role === "organizer" && (
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                  Organization Name
                </label>
                <div className="mt-1">
                  <input
                    id="organizationName"
                    name="organizationName"
                    type="text"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.organizationName ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your organization name"
                  />
                  {errors.organizationName && (
                    <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
                  )}
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading || isSubmitting}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {(loading || isSubmitting) ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>

            {/* Debug: Add this temporarily to see the actual response structure */}
            <div className="text-xs text-gray-500 text-center">
              {/* Uncomment for debugging: */}
              {/* <button
                type="button"
                onClick={() => {
                  console.log("Current auth context:", useAuth())
                }}
                className="underline"
              >
                Debug Auth Context
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login