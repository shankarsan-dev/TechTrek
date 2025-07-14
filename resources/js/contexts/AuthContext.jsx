"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { apiService } from "../services/apiService"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check if user is already logged in on app start
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("auth_token")
      const storedUser = localStorage.getItem("user")

      if (token && storedUser) {
        try {
          // Verify token is still valid by fetching current user
          const userData = await apiService.getCurrentUser()
          setUser(userData.user || JSON.parse(storedUser))
        } catch (error) {
          // Token is invalid, clear storage
          localStorage.removeItem("auth_token")
          localStorage.removeItem("user")
          setUser(null)
        }
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])

  // Login function
  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiService.login(email, password)
      setUser(response.user)
      return response
    } catch (err) {
      setError(err.message || "Failed to login")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Register function
  // const register = async (userData) => {
  //   setLoading(true)
  //   setError(null)
  //   try {
  //     const response = await apiService.register(userData)
  //     setUser(response.data.user)
  //     return response
  //   } catch (err) {
  //     setError(err.message || "Failed to register")
  //     throw err
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  
const register = async (userData) => {
  setLoading(true);
  setError(null);
  try {
    const response = await apiService.register(userData);
    setUser(response.user);  // access user directly here
    return response;
  } catch (err) {
    setError(err.message || "Failed to register");
    throw err;
  } finally {
    setLoading(false);
  }
};

  // Logout function
  const logout = async () => {
    setLoading(true)
    try {
      await apiService.logout()
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setUser(null)
      setLoading(false)
    }
  }

  // Forgot password
  const forgotPassword = async (email) => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiService.forgotPassword(email)
      return response
    } catch (err) {
      setError(err.message || "Failed to send reset email")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Reset password
  const resetPassword = async (token, email, password, password_confirmation) => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiService.resetPassword(token, email, password, password_confirmation)
      return response
    } catch (err) {
      setError(err.message || "Password reset failed")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role
  }

  // Check if user has any of the specified roles
  const hasAnyRole = (roles) => {
    return roles.includes(user?.role)
  }

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    hasRole,
    hasAnyRole,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isOrganizer: user?.role === "organizer",
    isUser: user?.role === "user",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
