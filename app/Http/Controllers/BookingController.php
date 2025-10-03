<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use Illuminate\Support\Str;

class BookingController extends Controller
{
    //

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
public function store(Request $request)
{
    $request->validate([
        'event_id'  => 'required',
        'ticket_id' => 'required',
        'user_id'   => 'required',
    ]);

    $booking = Booking::create([
        'event_id'   => $request->event_id,
        'ticket_id'  => $request->ticket_id,
        'user_id'    => $request->user_id,
        'quantity'   => $request->quantity ?? 1,
        'qr_code'    => Str::uuid()->toString(), // only generate QR string
        'checked_in' => false,
    ]);

    return response()->json([
        'success' => true,
        'booking' => $booking
    ]);
}

    // Cancel a booking
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

        // Option 1: Soft cancel using status
        $booking->status = 'cancelled';
        $booking->save();

        // Option 2: Delete the booking
        // $booking->delete();

        return response()->json(['message' => 'Booking cancelled successfully']);
    }
}