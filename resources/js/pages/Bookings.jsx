import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const dummyBookings = [
  {
    id: "b1",
    eventName: "Tech Summit 2024",
    date: "2024-10-26",
    time: "09:00 AM",
    location: "Convention Center",
    status: "Confirmed",
    tickets: 2,
    totalPrice: "$120.00",
  },
  {
    id: "b2",
    eventName: "AI & ML Workshop",
    date: "2024-11-15",
    time: "01:00 PM",
    location: "Innovation Hub",
    status: "Pending",
    tickets: 1,
    totalPrice: "$75.00",
  },
  {
    id: "b3",
    eventName: "Cybersecurity Conference",
    date: "2024-12-01",
    time: "10:00 AM",
    location: "Grand Hotel",
    status: "Cancelled",
    tickets: 3,
    totalPrice: "$250.00",
  },
]

// export default function Bookings() {
//   return (
//     <div className="container mx-auto py-8">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {dummyBookings.length === 0 ? (
//             <p className="text-center text-gray-500">You have no upcoming bookings.</p>
//           ) : (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Event Name</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Time</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Tickets</TableHead>
//                   <TableHead>Total Price</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {dummyBookings.map((booking) => (
//                   <TableRow key={booking.id}>
//                     <TableCell className="font-medium">{booking.eventName}</TableCell>
//                     <TableCell>{booking.date}</TableCell>
//                     <TableCell>{booking.time}</TableCell>
//                     <TableCell>{booking.location}</TableCell>
//                     <TableCell>{booking.tickets}</TableCell>
//                     <TableCell>{booking.totalPrice}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           booking.status === "Confirmed"
//                             ? "bg-green-100 text-green-800"
//                             : booking.status === "Pending"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {booking.status}
//                       </span>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <Button variant="outline" size="sm" className="mr-2">
//                         View Details
//                       </Button>
//                       {booking.status === "Confirmed" && (
//                         <Button variant="destructive" size="sm">
//                           Cancel
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
export default function Bookings() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-6">
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">My Bookings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {dummyBookings.length === 0 ? (
            <p className="text-center text-gray-500">You have no upcoming bookings.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Tickets</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.eventName}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>{booking.location}</TableCell>
                    <TableCell>{booking.tickets}</TableCell>
                    <TableCell>{booking.totalPrice}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      {booking.status === "Confirmed" && (
                        <Button variant="destructive" size="sm">
                          Cancel
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
