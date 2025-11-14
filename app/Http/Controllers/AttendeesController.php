<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Event;
use App\Models\Ticket;
use App\Models\User;

class AttendeesController extends Controller
{

    public function getOrganizerBookings(Request $request)
{
    $organizer = auth()->user(); 
    $status    = $request->query('status', 'all'); 
    $eventId   = $request->query('event_id', 'all'); 
    $perPage   = (int) $request->query('per_page', 20); // default 20 per page

    // Step 1: Get all event IDs created by this organizer
    $eventIds = Event::where('organizer_id', $organizer->_id)
        ->when($eventId !== 'all', fn($q) => $q->where('_id', $eventId))
        ->get()
        ->map(fn($event) => (string) $event->_id)
        ->toArray();

    // Step 2: Get all bookings for these events
    $bookingsQuery = Booking::with(['user', 'ticket', 'event'])
        ->whereIn('event_id', $eventIds);

    if ($status !== 'all') {
        $bookingsQuery->where('status', $status);
    }

    $bookings = $bookingsQuery->latest()->paginate($perPage);

    // Step 3: Format bookings
    $attendees = $bookings->getCollection()->map(function ($booking) {
        $ticketName  = $booking->ticket->name ?? 'General Ticket';
        $ticketPrice = (float) ($booking->ticket->price ?? 0);
        $quantity    = (int) ($booking->quantity ?? 1);
        $totalPrice  = $ticketPrice * $quantity;

        return [
            'id'          => (string) $booking->_id,
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
            'user'        => $booking->user ? [
                'name'  => $booking->user->name,
                'email' => $booking->user->email,
                'phone' => $booking->user->phone,
            ] : null,
            'event_id'    => $booking->event_id,
            'user_id'     => $booking->user_id,
        ];
    });

    // Step 4: Return with pagination info
    return response()->json([
        'data'       => $attendees,
        'currentPage'=> $bookings->currentPage(),
        'lastPage'   => $bookings->lastPage(),
        'perPage'    => $bookings->perPage(),
        'total'      => $bookings->total(),
    ]);
}

}
