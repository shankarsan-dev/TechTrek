// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // import { useNavigate } from "react-router-dom"
// // import { Button } from "../components/Layout/ui/button"
// // import { Card, CardContent, CardHeader, CardTitle } from "../components/layout/ui/card"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
// // import { bookingService } from "../services/bookingService"

// // export default function Bookings() {
// //   const queryClient = useQueryClient()
// //   const navigate = useNavigate()

// //   // Fetch user bookings
// //   const { data: bookings = [], isLoading, isError } = useQuery({
// //     queryKey: ["bookings"],
// //     queryFn: bookingService.getUserBookings,
// //   })

// //   // Cancel booking mutation
// //   const cancelMutation = useMutation({
// //     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ["bookings"] })
// //     },
// //     onError: (error) => {
// //       console.error("Failed to cancel booking:", error)
// //     },
// //   })

// //   // Skeleton loader for table rows
// //   const SkeletonRow = () => (
// //     <TableRow>
// //       {Array.from({ length: 8 }).map((_, idx) => (
// //         <TableCell key={idx}>
// //           <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
// //         </TableCell>
// //       ))}
// //     </TableRow>
// //   )

// //   if (isLoading)
// //     return (
// //       <div className="flex-1 flex flex-col overflow-y-auto p-6">
// //         <Card className="flex-1 flex flex-col">
// //           <CardHeader>
// //             <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
// //           </CardHeader>
// //           <CardContent className="overflow-x-auto">
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Event Name</TableHead>
// //                   <TableHead>Date</TableHead>
// //                   <TableHead>Time</TableHead>
// //                   <TableHead>Location</TableHead>
// //                   <TableHead>Ticket Type</TableHead>
// //                   <TableHead>Total Price</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {Array.from({ length: 5 }).map((_, idx) => (
// //                   <SkeletonRow key={idx} />
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     )

// //   if (isError) return <p className="text-center text-red-500">Failed to load bookings.</p>

// //   return (
// //     <div className="flex-1 flex flex-col overflow-y-auto p-6">
// //       <Card className="flex-1 flex flex-col">
// //         <CardHeader>
// //           <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
// //         </CardHeader>
// //         <CardContent className="overflow-x-auto">
// //           {bookings.length === 0 ? (
// //             <p className="text-center text-gray-500">You have no upcoming bookings.</p>
// //           ) : (
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Event Name</TableHead>
// //                   <TableHead>Date</TableHead>
// //                   <TableHead>Time</TableHead>
// //                   <TableHead>Location</TableHead>
// //                   <TableHead>Ticket Type</TableHead>
// //                   <TableHead>Total Price</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {bookings.map((booking) => (
// //                   <TableRow key={booking.id}>
// //                     <TableCell className="font-medium">{booking.eventName}</TableCell>
// //                     <TableCell>
// //                       {new Date(booking.date).toLocaleDateString("en-US", {
// //                         weekday: "long",
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       })}
// //                     </TableCell>
// //                     <TableCell>{booking.time}</TableCell>
// //                     <TableCell>
// //                       {booking.location
// //                         ? booking.location.split(",").slice(0, 3).join(", ")
// //                         : "-"}
// //                     </TableCell>
// //                     <TableCell>{booking.ticketType}</TableCell>
// //                     <TableCell>{booking.totalPrice}</TableCell>
// //                     <TableCell>
// //                       <span
// //                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
// //                           booking.status === "Confirmed"
// //                             ? "bg-green-100 text-green-800"
// //                             : booking.status === "Pending"
// //                             ? "bg-yellow-100 text-yellow-800"
// //                             : "bg-red-100 text-red-800"
// //                         }`}
// //                       >
// //                         {booking.status}
// //                       </span>
// //                     </TableCell>
// //                     <TableCell className="text-right flex gap-2 justify-end">
// //                       <Button
// //                         variant="outline"
// //                         size="sm"
// //                         onClick={() => navigate(`/events/${booking.event_id}`)}
// //                       >
// //                         View Event
// //                       </Button>
// //                       {booking.status === "Confirmed" && (
// //                         <Button
// //                           variant="destructive"
// //                           size="sm"
// //                           onClick={() => cancelMutation.mutate(booking.id)}
// //                           disabled={cancelMutation.isLoading}
// //                         >
// //                           {cancelMutation.isLoading ? "Cancelling..." : "Cancel"}
// //                         </Button>
// //                       )}
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           )}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// // import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// // import { useNavigate } from "react-router-dom"
// // import { Button } from "../components/Layout/ui/button"
// // import { Card, CardContent, CardHeader, CardTitle } from "../components/layout/ui/card"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
// // import { bookingService } from "../services/bookingService"

// // export default function Bookings() {
// //   const queryClient = useQueryClient()
// //   const navigate = useNavigate()

// //   // Fetch user bookings
// //   const { data: bookings = [], isLoading, isError } = useQuery({
// //     queryKey: ["bookings"],
// //     queryFn: bookingService.getUserBookings,
// //   })

// //   // Cancel booking mutation
// //   const cancelMutation = useMutation({
// //     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ["bookings"] })
// //     },
// //     onError: (error) => {
// //       console.error("Failed to cancel booking:", error)
// //     },
// //   })

// //   // Skeleton loader for table rows
// //   const SkeletonRow = () => (
// //     <TableRow>
// //       {Array.from({ length: 8 }).map((_, idx) => (
// //         <TableCell key={idx}>
// //           <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
// //         </TableCell>
// //       ))}
// //     </TableRow>
// //   )

// //   if (isLoading)
// //     return (
// //       <div className="flex-1 flex flex-col overflow-y-auto p-6">
// //         <Card className="flex-1 flex flex-col">
// //           <CardHeader>
// //             <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
// //           </CardHeader>
// //           <CardContent className="overflow-x-auto">
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Event Name</TableHead>
// //                   <TableHead>Date</TableHead>
// //                   <TableHead>Time</TableHead>
// //                   <TableHead>Location</TableHead>
// //                   <TableHead>Ticket Type</TableHead>
// //                   <TableHead>Total Price</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {Array.from({ length: 5 }).map((_, idx) => (
// //                   <SkeletonRow key={idx} />
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     )

// //   if (isError) return <p className="text-center text-red-500">Failed to load bookings.</p>

// //   // Function to get status styles
// //   const getStatusClasses = (status) => {
// //     switch (status) {
// //       case "Active":
// //         return "bg-yellow-100 text-yellow-800"
// //       case "Cancelled":
// //         return "bg-red-100 text-red-800"
// //       case "Checked_in":
// //         return "bg-green-100 text-green-800"
// //       default:
// //         return "bg-gray-100 text-gray-800"
// //     }
// //   }

// //   return (
// //     <div className="flex-1 flex flex-col overflow-y-auto p-6">
// //       <Card className="flex-1 flex flex-col">
// //         <CardHeader>
// //           <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
// //         </CardHeader>
// //         <CardContent className="overflow-x-auto">
// //           {bookings.length === 0 ? (
// //             <p className="text-center text-gray-500">You have no upcoming bookings.</p>
// //           ) : (
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>Event Name</TableHead>
// //                   <TableHead>Date</TableHead>
// //                   <TableHead>Time</TableHead>
// //                   <TableHead>Location</TableHead>
// //                   <TableHead>Ticket Type</TableHead>
// //                   <TableHead>Total Price</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {bookings.map((booking) => (
// //                   <TableRow key={booking.id}>
// //                     <TableCell className="font-medium">{booking.eventName}</TableCell>
// //                     <TableCell>
// //                       {new Date(booking.date).toLocaleDateString("en-US", {
// //                         weekday: "long",
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       })}
// //                     </TableCell>
// //                     <TableCell>{booking.time}</TableCell>
// //                     <TableCell>
// //                       {booking.location
// //                         ? booking.location.split(",").slice(0, 3).join(", ")
// //                         : "-"}
// //                     </TableCell>
// //                     <TableCell>{booking.ticketType}</TableCell>
// //                     <TableCell>{booking.totalPrice}</TableCell>
// //                     <TableCell>
// //                       <span
// //                         className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
// //                           booking.status
// //                         )}`}
// //                       >
// //                         {booking.status}
// //                       </span>
// //                     </TableCell>
// //                     <TableCell className="text-right flex gap-2 justify-end">
// //                       <Button
// //                         variant="outline"
// //                         size="sm"
// //                         onClick={() => navigate(`/events/${booking.event_id}`)}
// //                       >
// //                         View Event
// //                       </Button>
// //                       {booking.status === "Active" && (
// //                         <Button
// //                           variant="destructive"
// //                           size="sm"
// //                           onClick={() => cancelMutation.mutate(booking.id)}
// //                           disabled={cancelMutation.isLoading}
// //                         >
// //                           {cancelMutation.isLoading ? "Cancelling..." : "Cancel"}
// //                         </Button>
// //                       )}
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           )}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { QRCodeCanvas } from "qrcode.react"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { Button } from "../components/Layout/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/layout/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
// import { bookingService } from "../services/bookingService"

// export default function Bookings() {
//   const queryClient = useQueryClient()
//   const navigate = useNavigate()
//   const [selectedQR, setSelectedQR] = useState(null) // store selected booking for modal

//   // Fetch user bookings
//   const { data: bookings = [], isLoading, isError } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: bookingService.getUserBookings,
//   })

//   // Cancel booking mutation
//   const cancelMutation = useMutation({
//     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookings"] }),
//     onError: (error) => console.error("Failed to cancel booking:", error),
//   })

//   // Download QR code as image
//   const handleDownloadQR = (bookingId) => {
//     const canvas = document.getElementById(`qr-${bookingId}`)
//     const pngUrl = canvas.toDataURL("image/png")
//     const downloadLink = document.createElement("a")
//     downloadLink.href = pngUrl
//     downloadLink.download = `booking_${bookingId}_qr.png`
//     document.body.appendChild(downloadLink)
//     downloadLink.click()
//     document.body.removeChild(downloadLink)
//   }

//   // Status color mapping
//   const getStatusClasses = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-yellow-100 text-yellow-800"
//       case "Cancelled":
//         return "bg-red-100 text-red-800"
//       case "Checked_in":
//         return "bg-green-100 text-green-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   // Skeleton loader for table rows
//   const SkeletonRow = () => (
//     <TableRow>
//       {Array.from({ length: 9 }).map((_, idx) => (
//         <TableCell key={idx}>
//           <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
//         </TableCell>
//       ))}
//     </TableRow>
//   )

//   if (isLoading)
//     return (
//       <div className="flex-1 flex flex-col overflow-y-auto p-6">
//         <Card className="flex-1 flex flex-col">
//           <CardHeader>
//             <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
//           </CardHeader>
//           <CardContent className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Event Name</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Time</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Ticket Type</TableHead>
//                   <TableHead>Total Price</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {Array.from({ length: 5 }).map((_, idx) => (
//                   <SkeletonRow key={idx} />
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     )

//   if (isError) return <p className="text-center text-red-500">Failed to load bookings.</p>

//   return (
//     <div className="flex-1 flex flex-col overflow-y-auto p-6">
//       <Card className="flex-1 flex flex-col">
//         <CardHeader>
//           <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
//         </CardHeader>
//         <CardContent className="overflow-x-auto">
//           {bookings.length === 0 ? (
//             <p className="text-center text-gray-500">You have no upcoming bookings.</p>
//           ) : (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Event Name</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Time</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Ticket Type</TableHead>
//                   <TableHead>Total Price</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {bookings.map((booking) => (
//                   <TableRow key={booking.id}>
//                     <TableCell className="font-medium">{booking.eventName}</TableCell>
//                     <TableCell>
//                       {new Date(booking.date).toLocaleDateString("en-US", {
//                         weekday: "long",
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </TableCell>
//                     <TableCell>{booking.time}</TableCell>
//                     <TableCell>
//                       {booking.location ? booking.location.split(",").slice(0, 3).join(", ") : "-"}
//                     </TableCell>
//                     <TableCell>{booking.ticketType}</TableCell>
//                     <TableCell>{booking.totalPrice}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
//                           booking.status
//                         )}`}
//                       >
//                         {booking.status}
//                       </span>
//                     </TableCell>
//                     <TableCell className="text-right flex gap-2 justify-end">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => navigate(`/events/${booking.event_id}`)}
//                       >
//                         View Event
//                       </Button>

//                       {/* Show QR Button */}
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setSelectedQR(booking)}
//                       >
//                         Show QR
//                       </Button>

//                       {booking.status === "Active" && (
//                         <Button
//                           variant="destructive"
//                           size="sm"
//                           onClick={() => cancelMutation.mutate(booking.id)}
//                           disabled={cancelMutation.isLoading}
//                         >
//                           {cancelMutation.isLoading ? "Cancelling..." : "Cancel"}
//                         </Button>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </CardContent>
//       </Card>

//       {/* QR Modal */}
//       {selectedQR && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center relative">
//             <h2 className="text-xl font-semibold mb-4">{selectedQR.eventName} QR Code</h2>
//             <QRCodeCanvas
//               id={`qr-${selectedQR.id}`}
//               value={selectedQR.qr_code || "No QR data"}
//               size={220}
//               level="H"
//               includeMargin
//             />
//             <div className="mt-5 flex justify-center gap-3">
//               <Button
//                 variant="outline"
//                 onClick={() => handleDownloadQR(selectedQR.id)}
//               >
//                 Download
//               </Button>
//               <Button variant="secondary" onClick={() => setSelectedQR(null)}>
//                 Close
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  CheckCircle,
  Clock,
  Download,
  Mail,
  XCircle
} from "lucide-react"
import { QRCodeCanvas } from "qrcode.react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Layout/ui/button"
import { bookingService } from "../services/bookingService"

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
        <td className="px-6 py-4">Rs.{booking.totalPrice}</td>
        <td className="px-6 py-4">{getStatusBadge(booking.status)}</td>
        <td className="px-6 py-4">
          <div className="flex flex-col gap-1">
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate(`/events/${booking.event_id}`)}
            >
              View Event
            </span>
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setSelectedQR(booking)}
            >
              Show QR
            </span>
            {booking.status === "Active" && (
              <span
                className="text-red-600 cursor-pointer hover:underline"
                onClick={() => cancelMutation.mutate(booking.id)}
              >
                {cancelMutation.isLoading ? "Cancelling..." : "Cancel"}
              </span>
            )}
          </div>
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