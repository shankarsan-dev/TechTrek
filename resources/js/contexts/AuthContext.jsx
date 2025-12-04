"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { authService } from "../services/authService"

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
          const userData = await authService.getCurrentUser()
          setUser(userData.user || JSON.parse(storedUser))
        } catch (error) {
          // Token is invalid, clear storageS
          localStorage.removeItem("auth_token")
          localStorage.removeItem("user")
          setUser(null)
        }
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])
  
  const login = async ({ email, password, role, organizationName }) => {
    setLoading(true);
    setError(null);
    try {
      // Send only strings, not DOM elements
      const payload = { email, password };
      if (role === "organizer") {
        payload.organizationName = organizationName;
      }
      const response = await authService.login(payload);
      // Set user in context
      setUser(response.user);
      return response; // contains user + token
    } catch (err) {
      setError(err.message || "Failed to login");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
const register = async (userData) => {
  setLoading(true);
  setError(null);
  console.log(userData)
  try {
    const response = await authService.register(userData);
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
      await authService.logout()
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
      const response = await authService.forgotPassword(email)
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
      const response = await authService.resetPassword(token, email, password, password_confirmation)
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
    status: user?.status
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
