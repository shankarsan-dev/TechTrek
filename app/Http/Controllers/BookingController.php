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
     $user = auth()->user();
   
    //     });
$bookings = Booking::with(['event', 'ticket'])

    ->where('user_id', $user->id)
    ->latest()
    ->get()
    ->map(function ($booking) {
        $ticketName  = $booking->ticket->name ?? 'General Ticket';
        $ticketPrice = (float) ($booking->ticket->price ?? 0);
        $quantity    = (int) ($booking->quantity ?? 1);
        $totalPrice  = $ticketPrice * $quantity;

        return [
            'id'          => $booking->id,
            'eventName'   => $booking->event->title ?? 'Unknown Event',
            'date'        => $booking->event->start_date ?? null,
            'time'        => $booking->event->start_time ?? null,
            'location'    => $booking->event->location ?? null,
            'status'      => ucfirst($booking->status),
            'ticketType'  => $ticketName,
            'ticketPrice' => number_format($ticketPrice, 2),
            'tickets'     => $quantity,
            'totalPrice'  => number_format($totalPrice, 2),
            'qr_code'     => $booking->qr_code,
            'event_id'    => $booking->event_id,
            'user_id'     => $booking->user_id,
        ];
    });

    return response()->json(['bookings' => $bookings]);
}
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



    public function verifyQrCode(Request $request)
{
    $request->validate([
        'qr_code' => 'required|string',
    ]);
    // Find booking with this QR code and active status
    $booking = Booking::with(['user', 'ticket', 'event'])
        ->where('qr_code', $request->qr_code)
        ->where('status', 'active')
        ->first();

    if (!$booking) {
        return response()->json([
            'success' => false,
            'message' => 'Invalid or inactive ticket.',
        ], 404);
    }

    return response()->json([
        'success' => true,
        'message' => 'Ticket verified successfully.',
        'data' => [
            'user' => [
                'id' => $booking->user->id,
                'name' => $booking->user->name,
                'email' => $booking->user->email,
            ],
            'event' => [
                'id' => $booking->event->id,
                'title' => $booking->event->title,
                'location' => $booking->event->location,
                'start_date' => $booking->event->start_date,
                'start_time' => $booking->event->start_time,
            ],
            'ticket' => [
                'id' => $booking->ticket->id,
                'name' => $booking->ticket->type,
                'price' => $booking->ticket->price,
            ],
            'booking' => [
                'id' => $booking->id,
                'status' => ucfirst($booking->status),
                'quantity' => $booking->quantity,
                'qr_code' => $booking->qr_code,
                'created_at' => $booking->created_at,
            ],
        ],
    ]);
}

public function checkInBooking(Request $request)
{
    $request->validate([
        'qr_code' => 'required|string',
    ]);

    $booking = Booking::where('qr_code', $request->qr_code)->first();

    if (!$booking) {
        return response()->json([
            'success' => false,
            'message' => 'Booking not found.',
        ], 404);
    }

    if ($booking->status === 'checked_in') {
        return response()->json([
            'success' => false,
            'message' => 'Ticket already checked in.',
        ], 400);
    }

    if ($booking->status !== 'active') {
        return response()->json([
            'success' => false,
            'message' => 'Booking is not active or has been cancelled.',
        ], 400);
    }

    $booking->status = 'checked_in';
    $booking->checked_in_at = now(); // optional
    $booking->save();

    return response()->json([
        'success' => true,
        'message' => 'Booking successfully checked in.',
        'booking' => $booking,
    ]);
}

}