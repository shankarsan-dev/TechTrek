// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { useNavigate } from "react-router-dom"
// import { Button } from "../components/Layout/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/layout/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
// import { bookingService } from "../services/bookingService"

// export default function Bookings() {
//   const queryClient = useQueryClient()
//   const navigate = useNavigate()

//   // Fetch user bookings
//   const { data: bookings = [], isLoading, isError } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: bookingService.getUserBookings,
//   })

//   // Cancel booking mutation
//   const cancelMutation = useMutation({
//     mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["bookings"] })
//     },
//     onError: (error) => {
//       console.error("Failed to cancel booking:", error)
//     },
//   })

//   // Skeleton loader for table rows
//   const SkeletonRow = () => (
//     <TableRow>
//       {Array.from({ length: 8 }).map((_, idx) => (
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
//                       {booking.location
//                         ? booking.location.split(",").slice(0, 3).join(", ")
//                         : "-"}
//                     </TableCell>
//                     <TableCell>{booking.ticketType}</TableCell>
//                     <TableCell>{booking.totalPrice}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           booking.status === "Confirmed"
//                             ? "bg-green-100 text-green-800"
//                             : booking.status === "Pending"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
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
//                       {booking.status === "Confirmed" && (
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
//     </div>
//   )
// }
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Layout/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/layout/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { bookingService } from "../services/bookingService"

export default function Bookings() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // Fetch user bookings
  const { data: bookings = [], isLoading, isError } = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingService.getUserBookings,
  })

  // Cancel booking mutation
  const cancelMutation = useMutation({
    mutationFn: (bookingId) => bookingService.cancelBooking(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] })
    },
    onError: (error) => {
      console.error("Failed to cancel booking:", error)
    },
  })

  // Skeleton loader for table rows
  const SkeletonRow = () => (
    <TableRow>
      {Array.from({ length: 8 }).map((_, idx) => (
        <TableCell key={idx}>
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        </TableCell>
      ))}
    </TableRow>
  )

  if (isLoading)
    return (
      <div className="flex-1 flex flex-col overflow-y-auto p-6">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <SkeletonRow key={idx} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )

  if (isError) return <p className="text-center text-red-500">Failed to load bookings.</p>

  // Function to get status styles
  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      case "Checked_in":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-6">
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {bookings.length === 0 ? (
            <p className="text-center text-gray-500">You have no upcoming bookings.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.eventName}</TableCell>
                    <TableCell>
                      {new Date(booking.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>
                      {booking.location
                        ? booking.location.split(",").slice(0, 3).join(", ")
                        : "-"}
                    </TableCell>
                    <TableCell>{booking.ticketType}</TableCell>
                    <TableCell>{booking.totalPrice}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/events/${booking.event_id}`)}
                      >
                        View Event
                      </Button>
                      {booking.status === "Active" && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => cancelMutation.mutate(booking.id)}
                          disabled={cancelMutation.isLoading}
                        >
                          {cancelMutation.isLoading ? "Cancelling..." : "Cancel"}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
