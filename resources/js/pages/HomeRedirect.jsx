// components/Auth/HomeRedirect.jsx
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const HomeRedirect = () => {
  const { isAuthenticated, user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!isAuthenticated) return <Navigate to="/home" />
  switch (user?.role) {
    case "admin":
      return <Navigate to="/admin/dashboard" />
    case "organizer":
      return <Navigate to="/organizer/dashboard" />
    case "user":
    default:
      return <Navigate to="/home" />
  }
}

export default HomeRedirect
