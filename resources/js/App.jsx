import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { AuthProvider } from "./contexts/AuthContext"
import AdminLogin from "./pages/Auth/AdminLogin"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Unauthorized from "./pages/Auth/Unauthorized"
import Bookings from "./pages/Bookings"
import Categories from "./pages/Categories"
import EventDetails from "./pages/EventDetails"
import Events from "./pages/Events"
import EventsNearYou from "./pages/EventsNearYou"
import Profile from "./pages/Profile"
import RecommendedEvents from "./pages/RecommendedEvents"
// Organizer Pages
import OrganizerLayout from "./components/Layout/OrganizerLayout"
import OrganizerAnalytics from "./pages/Organizer/Analytics"
import OrganizerAttendees from "./pages/Organizer/Attendees"
import CreateEvent from "./pages/Organizer/CreateEvent"
import { CreateEventWizard } from "./pages/Organizer/CreateEventWizard"
import OrganizerDashboard from "./pages/Organizer/Dashboard"
import OrganizerEventDetails from "./pages/Organizer/EventDetails"
import EventEdit from "./pages/Organizer/EventEdit"
import OrganizerEvents from "./pages/Organizer/Events"
import OrganizerSettings from "./pages/Organizer/Settings"

// Admin Pages
import AdminLayout from "./components/Layout/AdminLayout"
import AdminDashboard from "./pages/Admin/Dashboard"
import OrganizerVerification from "./pages/Admin/OrganizerVerification"

// User Dashboard
import UserLayout from "./components/Layout/UserLayout"
import UserDashboard from "./pages/User/Dashboard"
import UserFavorites from "./pages/User/Favorites"

import ProtectedRoute from "./components/Auth/ProtectedRoute"

import "../css/app.css"
import Home from "./pages/Home"
import HomeRedirect from "./pages/HomeRedirect"
import UpcomingEvents from "./pages/UpcomingEvents"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              {/* Public Routes */}
              < Route path="create-events"element={<CreateEventWizard></CreateEventWizard>}/>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomeRedirect />} />
                 <Route  path ="home" element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="events-near-you" element={<EventsNearYou />} />
                    <Route path="upcoming-events" element={<UpcomingEvents />} />
                <Route path="recommended-events" element={<RecommendedEvents />} />
                <Route path="events/:id" element={<EventDetails />} />
                <Route path="categories" element={<Categories />} />
              </Route>

              {/* User Routes - Protected */}
              <Route
                path="/user"
                element={
                  <ProtectedRoute requiredRole="user">
                    <UserLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<UserDashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="favorites" element={<UserFavorites />} />
                <Route path="settings" element={<div>User Settings Page</div>} />
              </Route>

              {/* Organizer Routes - Protected */}
              <Route
                path="/organizer"
                element={
                  <ProtectedRoute requiredRole="organizer">
                    <OrganizerLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/organizer/dashboard" replace />} />
                <Route path="dashboard" element={<OrganizerDashboard />} />
                <Route path="events" element={<OrganizerEvents />} />
                <Route path="events/create" element={<CreateEvent />} />
                <Route path="events/:id" element={<OrganizerEventDetails />} />
                <Route path="events/:id/edit" element={<EventEdit />} />
                <Route path="analytics" element={<OrganizerAnalytics />} />
                <Route path="attendees" element={<OrganizerAttendees />} />
                <Route path="settings" element={<OrganizerSettings />} />
              </Route>

              {/* Admin Routes - Protected */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="organizer-verification" element={<OrganizerVerification />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<div>User Management Page</div>} />
                <Route path="events" element={<div>Event Monitoring Page</div>} />
                <Route path="analytics" element={<div>Admin Analytics Page</div>} />
                <Route path="settings" element={<div>Admin Settings Page</div>} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
