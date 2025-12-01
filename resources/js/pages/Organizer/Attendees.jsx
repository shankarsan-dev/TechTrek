// "use client"
// import { Calendar, CheckCircle, Clock, Download, Mail, MoreVertical, Search, Users, XCircle } from "lucide-react";
// import { useState } from "react";
// const OrganizerAttendees = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [statusFilter, setStatusFilter] = useState("all")
//   const [eventFilter, setEventFilter] = useState("all")
//   const [selectedAttendees, setSelectedAttendees] = useState([])

//   // Mock data
//   const events = [
//     { id: 1, title: "React Advanced Workshop" },
//     { id: 2, title: "AI/ML Fundamentals" },
//     { id: 3, title: "Mobile App Development" },
//   ]

//   const attendees = [
//     {
//       id: 1,
//       name: "Alice Johnson",
//       email: "alice@example.com",
//       phone: "+1 (555) 123-4567",
//       event: { id: 1, title: "React Advanced Workshop" },
//       registration_date: "2024-01-10T10:30:00Z",
//       status: "confirmed",
//       checked_in: true,
//       check_in_time: "2024-01-15T09:45:00Z",
//       ticket_type: "Regular",
//       amount_paid: 99,
//     },
//     {
//       id: 2,
//       name: "Bob Smith",
//       email: "bob@example.com",
//       phone: "+1 (555) 234-5678",
//       event: { id: 2, title: "AI/ML Fundamentals" },
//       registration_date: "2024-01-09T15:45:00Z",
//       status: "confirmed",
//       checked_in: false,
//       check_in_time: null,
//       ticket_type: "Early Bird",
//       amount_paid: 129,
//     },
//     {
//       id: 3,
//       name: "Carol Davis",
//       email: "carol@example.com",
//       phone: "+1 (555) 345-6789",
//       event: { id: 1, title: "React Advanced Workshop" },
//       registration_date: "2024-01-08T09:20:00Z",
//       status: "pending",
//       checked_in: false,
//       check_in_time: null,
//       ticket_type: "Regular",
//       amount_paid: 99,
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       email: "david@example.com",
//       phone: "+1 (555) 456-7890",
//       event: { id: 3, title: "Mobile App Development" },
//       registration_date: "2024-01-07T14:15:00Z",
//       status: "cancelled",
//       checked_in: false,
//       check_in_time: null,
//       ticket_type: "Regular",
//       amount_paid: 79,
//     },
//     {
//       id: 5,
//       name: "Eva Brown",
//       email: "eva@example.com",
//       phone: "+1 (555) 567-8901",
//       event: { id: 2, title: "AI/ML Fundamentals" },
//       registration_date: "2024-01-06T11:30:00Z",
//       status: "confirmed",
//       checked_in: true,
//       check_in_time: "2024-01-20T13:30:00Z",
//       ticket_type: "VIP",
//       amount_paid: 199,
//     },
//   ]

//   const filteredAttendees = attendees.filter((attendee) => {
//     const matchesSearch =
//       attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesStatus = statusFilter === "all" || attendee.status === statusFilter
//     const matchesEvent = eventFilter === "all" || attendee.event.id.toString() === eventFilter

//     return matchesSearch && matchesStatus && matchesEvent
//   })

//   const handleSelectAttendee = (attendeeId) => {
//     setSelectedAttendees((prev) =>
//       prev.includes(attendeeId) ? prev.filter((id) => id !== attendeeId) : [...prev, attendeeId],
//     )
//   }

//   const handleSelectAll = () => {
//     if (selectedAttendees.length === filteredAttendees.length) {
//       setSelectedAttendees([])
//     } else {
//       setSelectedAttendees(filteredAttendees.map((a) => a.id))
//     }
//   }

//   const handleCheckIn = (attendeeId) => {
//     console.log("Check in attendee:", attendeeId)
//     // In real app, make API call to check in attendee
//   }

//   const handleSendEmail = (attendeeId) => {
//     console.log("Send email to attendee:", attendeeId)
//     // In real app, open email composer or send email
//   }

//   const handleExport = () => {
//     console.log("Export attendees:", selectedAttendees.length > 0 ? selectedAttendees : "all")
//     // In real app, generate and download CSV/Excel file
//   }

//   const getStatusBadge = (status) => {
//     const styles = {
//       confirmed: "bg-green-100 text-green-800",
//       pending: "bg-yellow-100 text-yellow-800",
//       cancelled: "bg-red-100 text-red-800",
//     }

//     const icons = {
//       confirmed: CheckCircle,
//       pending: Clock,
//       cancelled: XCircle,
//     }

//     const Icon = icons[status]

//     return (
//       <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
//         <Icon className="h-3 w-3 mr-1" />
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     )
//   }

//   const AttendeeRow = ({ attendee }) => {
//     const [showMenu, setShowMenu] = useState(false)

//     return (
//       <tr className="hover:bg-gray-50">
//         <td className="px-6 py-4 whitespace-nowrap">
//           <input
//             type="checkbox"
//             checked={selectedAttendees.includes(attendee.id)}
//             onChange={() => handleSelectAttendee(attendee.id)}
//             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//           />
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 h-10 w-10">
//               <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                 <span className="text-sm font-medium text-blue-600">
//                   {attendee.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")}
//                 </span>
//               </div>
//             </div>
//             <div className="ml-4">
//               <div className="text-sm font-medium text-gray-900">{attendee.name}</div>
//               <div className="text-sm text-gray-500">{attendee.email}</div>
//             </div>
//           </div>
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap">
//           <div className="text-sm text-gray-900">{attendee.event.title}</div>
//           <div className="text-sm text-gray-500">{attendee.ticket_type}</div>
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(attendee.status)}</td>
//         <td className="px-6 py-4 whitespace-nowrap">
//           <div className="text-sm text-gray-900">{new Date(attendee.registration_date).toLocaleDateString()}</div>
//           <div className="text-sm text-gray-500">{new Date(attendee.registration_date).toLocaleTimeString()}</div>
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap">
//           {attendee.checked_in ? (
//             <div className="text-sm text-green-600">
//               <CheckCircle className="h-4 w-4 inline mr-1" />
//               {new Date(attendee.check_in_time).toLocaleTimeString()}
//             </div>
//           ) : (
//             <button
//               onClick={() => handleCheckIn(attendee.id)}
//               className="text-sm text-blue-600 hover:text-blue-800"
//               disabled={attendee.status !== "confirmed"}
//             >
//               Check In
//             </button>
//           )}
//         </td>
//         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${attendee.amount_paid}</td>
//         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//           <div className="relative">
//             <button onClick={() => setShowMenu(!showMenu)} className="text-gray-400 hover:text-gray-600">
//               <MoreVertical className="h-4 w-4" />
//             </button>
//             {showMenu && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                 <button
//                   onClick={() => handleSendEmail(attendee.id)}
//                   className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   <Mail className="h-4 w-4 mr-2" />
//                   Send Email
//                 </button>
//                 {!attendee.checked_in && attendee.status === "confirmed" && (
//                   <button
//                     onClick={() => handleCheckIn(attendee.id)}
//                     className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <CheckCircle className="h-4 w-4 mr-2" />
//                     Check In
//                   </button>
//                 )}
//                 <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   View Details
//                 </button>
//               </div>
//             )}
//           </div>
//         </td>
//       </tr>
//     )
//   }

//   const stats = {
//     total: attendees.length,
//     confirmed: attendees.filter((a) => a.status === "confirmed").length,
//     pending: attendees.filter((a) => a.status === "pending").length,
//     checked_in: attendees.filter((a) => a.checked_in).length,
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-gray-900">Attendees</h1>
//           <p className="text-gray-600">Manage your event attendees and check-ins</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <Users className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Total Attendees</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <CheckCircle className="h-8 w-8 text-green-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Confirmed</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats.confirmed}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <Clock className="h-8 w-8 text-yellow-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Pending</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <Calendar className="h-8 w-8 text-purple-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Checked In</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats.checked_in}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters and Actions */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               {/* Search */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search attendees..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* Status Filter */}
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Status</option>
//                 <option value="confirmed">Confirmed</option>
//                 <option value="pending">Pending</option>
//                 <option value="cancelled">Cancelled</option>
//               </select>

//               {/* Event Filter */}
//               <select
//                 value={eventFilter}
//                 onChange={(e) => setEventFilter(e.target.value)}
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Events</option>
//                 {events.map((event) => (
//                   <option key={event.id} value={event.id.toString()}>
//                     {event.title}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Actions */}
//             <div className="flex space-x-3">
//               <button
//                 onClick={handleExport}
//                 className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//               >
//                 <Download className="h-4 w-4 mr-2" />
//                 Export
//               </button>
//               {selectedAttendees.length > 0 && (
//                 <button
//                   onClick={() => console.log("Send bulk email")}
//                   className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   <Mail className="h-4 w-4 mr-2" />
//                   Email Selected ({selectedAttendees.length})
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Attendees Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left">
//                     <input
//                       type="checkbox"
//                       checked={selectedAttendees.length === filteredAttendees.length && filteredAttendees.length > 0}
//                       onChange={handleSelectAll}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                     />
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Attendee
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Event
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Registration
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Check-in
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Amount
//                   </th>
//                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredAttendees.map((attendee) => (
//                   <AttendeeRow key={attendee.id} attendee={attendee} />
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {filteredAttendees.length === 0 && (
//             <div className="text-center py-12">
//               <Users className="mx-auto h-12 w-12 text-gray-400" />
//               <h3 className="mt-2 text-sm font-medium text-gray-900">No attendees found</h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 {searchTerm || statusFilter !== "all" || eventFilter !== "all"
//                   ? "Try adjusting your search or filters."
//                   : "Your events don't have any attendees yet."}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OrganizerAttendees
"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  CheckCircle,
  Clock,
  Download,
  Mail,
  MoreVertical,
  XCircle
} from "lucide-react"
import { QRCodeCanvas } from "qrcode.react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Layout/ui/button"
import { bookingService } from "../../services/bookingService"

const Bookings = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [selectedBookings, setSelectedBookings] = useState([])
  const [selectedQR, setSelectedQR] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Fetch bookings
  const { data: bookings = [], isLoading, isError } = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingService.getUserBookings,
  })

  // Cancel booking mutation
  const cancelMutation = useMutation({
    mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookings"] }),
  })

  // Status badge
  const getStatusBadge = (status) => {
    const styles = {
      Active: "bg-yellow-100 text-yellow-800",
      Cancelled: "bg-red-100 text-red-800",
      Checked_in: "bg-green-100 text-green-800",
    }
    const icons = {
      Active: Clock,
      Cancelled: XCircle,
      Checked_in: CheckCircle,
    }
    const Icon = icons[status]
    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}
      >
        <Icon className="h-3 w-3 mr-1" />
        {status}
      </span>
    )
  }

  // Handle selection
  const handleSelectBooking = (id) => {
    setSelectedBookings((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    )
  }
  const handleSelectAll = () => {
    if (selectedBookings.length === filteredBookings.length) {
      setSelectedBookings([])
    } else {
      setSelectedBookings(filteredBookings.map((b) => b.id))
    }
  }

  // Filter bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.ticketType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || b.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // QR download
  const handleDownloadQR = (bookingId) => {
    const canvas = document.getElementById(`qr-${bookingId}`)
    const pngUrl = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = pngUrl
    link.download = `booking_${bookingId}_qr.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Actions menu per row
  const BookingRow = ({ booking }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">
          <input
            type="checkbox"
            checked={selectedBookings.includes(booking.id)}
            onChange={() => handleSelectBooking(booking.id)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </td>
        <td className="px-6 py-4">
          <div className="text-sm font-medium text-gray-900">{booking.eventName}</div>
          <div className="text-sm text-gray-500">{booking.ticketType}</div>
        </td>
        <td className="px-6 py-4">{new Date(booking.date).toLocaleDateString()}</td>
        <td className="px-6 py-4">{booking.time}</td>
        <td className="px-6 py-4">{booking.location}</td>
        <td className="px-6 py-4">${booking.totalPrice}</td>
        <td className="px-6 py-4">{getStatusBadge(booking.status)}</td>
        <td className="px-6 py-4 text-right relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={() => navigate(`/events/${booking.event_id}`)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View Event
              </button>
              <button
                onClick={() => setSelectedQR(booking)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Show QR
              </button>
              {booking.status === "Active" && (
                <button
                  onClick={() => cancelMutation.mutate(booking.id)}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          )}
        </td>
      </tr>
    )
  }

  if (isLoading) return <p>Loading bookings...</p>
  if (isError) return <p className="text-red-500">Failed to load bookings.</p>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Filters and actions */}
        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Checked_in">Checked In</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <div className="flex gap-3">
            <Button onClick={() => console.log("Export selected")}>
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
            {selectedBookings.length > 0 && (
              <Button onClick={() => console.log("Email selected")}>
                <Mail className="h-4 w-4 mr-1" />
                Email Selected ({selectedBookings.length})
              </Button>
            )}
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3">
                    <input
                      type="checkbox"
                      checked={
                        selectedBookings.length === filteredBookings.length &&
                        filteredBookings.length > 0
                      }
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Total Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <BookingRow key={booking.id} booking={booking} />
                ))}
              </tbody>
            </table>
          </div>
          {filteredBookings.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No bookings found.
            </div>
          )}
        </div>
      </div>

      {/* QR Modal */}
      {selectedQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center relative">
            <h2 className="text-xl font-semibold mb-4">{selectedQR.eventName} QR Code</h2>
            <QRCodeCanvas
              id={`qr-${selectedQR.id}`}
              value={selectedQR.qr_code || "No QR data"}
              size={220}
              level="H"
              includeMargin
            />
            <div className="mt-5 flex justify-center gap-3">
              <Button variant="outline" onClick={() => handleDownloadQR(selectedQR.id)}>
                Download
              </Button>
              <Button variant="secondary" onClick={() => setSelectedQR(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bookings
