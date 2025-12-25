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
import RecommendedEvents from "./pages/RecommendedEvents"
// Organizer Pages
import OrganizerLayout from "./components/Layout/OrganizerLayout"
import OrganizerAnalytics from "./pages/Organizer/Analytics"
import OrganizerAttendees from "./pages/Organizer/Attendees"
import CreateEvent from "./pages/Organizer/CreateEvent"
import OrganizerDashboard from "./pages/Organizer/Dashboard"
import OrganizerEventDetails from "./pages/Organizer/EventDetails"
import EventEdit from "./pages/Organizer/EventEdit"
import OrganizerEvents from "./pages/Organizer/Events"
import OrganizerProfile from "./pages/Organizer/Profile"
import OrganizerSettings from "./pages/Organizer/Settings"
import ChangePassword from "./pages/User/Settings"


// Admin Pages
import AdminLayout from "./components/Layout/AdminLayout"
import AdminProfile from "./pages/Admin/AdminProfile"
import AdminDashboard from "./pages/Admin/Dashboard"
import EventManagement from "./pages/Admin/EventManagement"
import OrganizerManagement from "./pages/Admin/OrganizerManagement"
import OrganizerVerification from "./pages/Admin/OrganizerVerification"
import AdminSettings from "./pages/Admin/Settings"
import UserManagement from "./pages/Admin/UserManagement"

import Profile from "./pages/Profile"
// User Dashboard
import "../css/app.css"
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import HomeRedirect from "./pages/HomeRedirect"
import UpcomingEvents from "./pages/UpcomingEvents"
import UserDashboard from "./pages/User/Dashboard"
import UserFavorites from "./pages/User/Favorites"
import { default as UserProfile } from "./pages/User/Profile"

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
                <Route path="profile/:id" element={<Profile />}/>
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
                <Route path="profile" element={<UserProfile />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="favorites" element={<UserFavorites />} />
                <Route path="settings" element={<ChangePassword />} />
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
                <Route path="profile" element={<OrganizerProfile />} />
                
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
                <Route path="organizer-management" element={<OrganizerManagement />} />
                <Route path="organizer-verification" element={<OrganizerVerification />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="event-management" element={<EventManagement />} />
                <Route path="users" element={<div>User Management Page</div>} />
                <Route path="events" element={<div>Event Monitoring Page</div>} />
                <Route path="analytics" element={<div>Admin Analytics Page</div>} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
