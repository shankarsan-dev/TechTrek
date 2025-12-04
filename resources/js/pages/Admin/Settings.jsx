"use client"

import { AlertCircle, CheckCircle, Eye, EyeOff, Loader2, Lock } from "lucide-react"
import { useEffect, useState } from "react"
import { userService } from "../../services/userService"

const AdminSettings = () => {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  })
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // Prevent browser autofill
  useEffect(() => {
    // Force clear any autofilled values
    setTimeout(() => {
      setForm({
        current_password: "",
        new_password: "",
        confirm_password: ""
      })
    }, 100)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear messages when user starts typing
    if (error || success) {
      setError("")
      setSuccess("")
    }
  }

  const validateForm = () => {
    if (!form.current_password.trim()) {
      setError("Current password is required")
      return false
    }
    
    if (!form.new_password.trim()) {
      setError("New password is required")
      return false
    }
    
    if (form.new_password.length < 8) {
      setError("New password must be at least 8 characters")
      return false
    }
    
    if (form.new_password !== form.confirm_password) {
      setError("New passwords do not match")
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setError("")
    setSuccess("")
    
    try {
      const response = await userService.changePassword({
        current_password: form.current_password,
        new_password: form.new_password,
        new_password_confirmation: form.confirm_password
      })
      
      // FIX: Access response.data instead of response
      if (response.data?.success) {
        const successMessage = response.data.message || "Password changed successfully!"
        setSuccess(successMessage)
        
        // SHOW ALERT ON SUCCESS
        alert(successMessage)
        
        // Clear form
        setForm({
          current_password: "",
          new_password: "",
          confirm_password: ""
        })
        setShowCurrent(false)
        setShowNew(false)
        setShowConfirm(false)
      } else {
        setError(response.data?.message || "Failed to change password")
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
            <p className="text-gray-600">Verify your current password and set a new one</p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-emerald-700 text-sm font-medium">{success}</p>
                <p className="text-emerald-600 text-xs mt-1">
                  Your password has been updated successfully. Use your new password next time you log in.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password - DISABLE AUTOFILL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                name="current_password"
                value={form.current_password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
                placeholder="Enter your current password"
                autoComplete="new-password" // Disables autofill
                readOnly // Prevents autofill
                onFocus={(e) => e.target.removeAttribute('readonly')} // Allow typing when focused
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showCurrent ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* New Password - Also disable autofill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                name="new_password"
                value={form.new_password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
                placeholder="Enter new password (min. 8 characters)"
                minLength={8}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Must be at least 8 characters long
            </p>
          </div>

          {/* Confirm New Password - Also disable autofill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm_password"
                value={form.confirm_password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
                placeholder="Confirm new password"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-medium text-gray-900 mb-2">Password Requirements</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className={`flex items-center ${form.new_password.length >= 8 ? 'text-emerald-600' : ''}`}>
                {form.new_password.length >= 8 ? (
                  <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                ) : (
                  <div className="h-3 w-3 rounded-full border border-gray-400 mr-2 flex-shrink-0"></div>
                )}
                At least 8 characters long
              </li>
              <li className={`flex items-center ${/[A-Z]/.test(form.new_password) ? 'text-emerald-600' : ''}`}>
                {/[A-Z]/.test(form.new_password) ? (
                  <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                ) : (
                  <div className="h-3 w-3 rounded-full border border-gray-400 mr-2 flex-shrink-0"></div>
                )}
                Contains uppercase letter
              </li>
              <li className={`flex items-center ${/[a-z]/.test(form.new_password) ? 'text-emerald-600' : ''}`}>
                {/[a-z]/.test(form.new_password) ? (
                  <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                ) : (
                  <div className="h-3 w-3 rounded-full border border-gray-400 mr-2 flex-shrink-0"></div>
                )}
                Contains lowercase letter
              </li>
              <li className={`flex items-center ${/\d/.test(form.new_password) ? 'text-emerald-600' : ''}`}>
                {/\d/.test(form.new_password) ? (
                  <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                ) : (
                  <div className="h-3 w-3 rounded-full border border-gray-400 mr-2 flex-shrink-0"></div>
                )}
                Contains number
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Changing Password...
              </>
            ) : (
              "Change Password"
            )}
          </button>
        </form>

        {/* Security Tips */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-900 mb-2">Security Tips</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Use a unique password that you don't use elsewhere</li>
            <li>• Consider using a password manager</li>
            <li>• Update your password regularly</li>
            <li>• Never share your password with anyone</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings