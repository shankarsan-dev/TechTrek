<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use Illuminate\Support\Str;
use App\Models\Event;
use App\Models\Ticket;

class BookingController extends Controller
{
      public function index(Request $request)
    {
        $user = $request->user(); // Authenticated user
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Get all bookings for this user
        $bookings = Booking::where('user_id', $user->_id)->get();

        return response()->json($bookings);
    }
public function getUserBookings(Request $request)
{
    $user = $request->user();

    $bookings = Booking::with(['event', 'ticket'])
        ->where('user_id', $user->id)
        ->latest()
        ->get()
        ->map(function ($booking) {
            $ticketName  = $booking->ticket->name ?? 'General Ticket';
            $ticketPrice = $booking->ticket->price ?? 0;
            $quantity    = $booking->quantity ?? 1;
            $totalPrice  = $ticketPrice * $quantity;

            return [
                'id'          => $booking->id,
                'eventName'   => $booking->event->title ?? 'Unknown Event',
                'date'        => $booking->event->start_date ?? null,
                'time'        => $booking->event->start_time ?? null,
                'location'    => $booking->event->location ?? null,
                'status'      => ucfirst($booking->status ),
                'ticketType'  => $ticketName,
                'ticketPrice' =>  number_format($ticketPrice, 2),
                'tickets'     => $quantity,
                'totalPrice'  =>  number_format($totalPrice, 2),
                'qr_code'         => $booking->qr_code,
                'event_id'    => $booking->event_id,
            ];
        });

    return response()->json(['bookings' => $bookings]);
}

// public function store(Request $request)
// {
//     $request->validate([
//         'event_id'  => 'required',
//         'ticket_id' => 'required',
//         'user_id'   => 'required',
//     ]);

//     $booking = Booking::create([
//         'event_id'   => $request->event_id,
//         'ticket_id'  => $request->ticket_id,
//         'user_id'    => $request->user_id,
//         'quantity'   => $request->quantity ?? 1,
//         'qr_code'    => Str::uuid()->toString(), // only generate QR string
//         'checked_in' => false,
//     ]);

//     return response()->json([
//         'success' => true,
//         'booking' => $booking
//     ]);
// }


public function store(Request $request)
{
    $request->validate([
        'event_id'  => 'required',
        'ticket_id' => 'required',
        'user_id'   => 'required',
    ]);

    // Create the booking
    $booking = Booking::create([
        'event_id'   => $request->event_id,
        'ticket_id'  => $request->ticket_id,
        'user_id'    => $request->user_id,
        'quantity'   => $request->quantity ?? 1,
        'qr_code'    => Str::uuid()->toString(), // generate QR code string
        'checked_in' => false,
    ]);

    // Increment sold count for the ticket
    Ticket::where('id', $request->ticket_id)->increment('sold', $request->quantity ?? 1);

    return response()->json([
        'success' => true,
        'booking' => $booking
    ]);
}
public function cancelBooking(Request $request, $id)
{
    $user = $request->user();
    $booking = Booking::find($id);

    if (!$booking) {
        return response()->json(['message' => 'Booking not found'], 404);
    }

    // Only allow owner to cancel
    if ($booking->user_id !== $user->_id) {
        return response()->json(['message' => 'Forbidden'], 403);
    }

    // Soft cancel using status
    $booking->status = 'cancelled';
    $booking->save();

    // Decrement sold count for the ticket
    Ticket::where('id', $booking->ticket_id)
        ->decrement('sold', $booking->quantity ?? 1);

    return response()->json(['message' => 'Booking cancelled successfully']);
}
    // Cancel a booking
    // public function cancelBooking(Request $request, $id)
    // {
    //     $user = $request->user();
    //     $booking = Booking::find($id);

    //     if (!$booking) {
    //         return response()->json(['message' => 'Booking not found'], 404);
    //     }

    //     // Only allow owner to cancel
    //     if ($booking->user_id !== $user->_id) {
    //         return response()->json(['message' => 'Forbidden'], 403);
    //     }

    //     // Option 1: Soft cancel using status
    //     $booking->status = 'cancelled';
    //     $booking->save();

    //     // Option 2: Delete the booking
    //     // $booking->delete();

    //     return response()->json(['message' => 'Booking cancelled successfully']);
    // }
}