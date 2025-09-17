<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use MongoDB\BSON\ObjectId;

class EventController extends Controller
{
public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'title'       => 'required|string|max:255',
        'description' => 'required|string',
        'category_id' => 'required|string',
        'start_date'  => 'required|date',
        'end_date'    => 'required|date',
        'start_time'  => 'required',
        'end_time'    => 'required',
        'venue_name'  => 'nullable|string',
        'location'    => 'nullable|string',
        'address'     => 'nullable|string',
        'capacity'    => 'nullable|integer',
        'tags'        => 'nullable|string', // JSON
        'agenda'      => 'nullable|string', // JSON
        'speakers'    => 'nullable|string', // JSON
        'tickets'     => 'nullable|string', // JSON
        'status'      => 'nullable|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    try {
        // ✅ get organizer from authenticated user
        $organizer = auth()->user();

        if (!$organizer) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Featured image
        $imageUrl = null;
        if ($request->hasFile('featured_image')) {
            $imagePath = $request->file('featured_image')->store('events', 'public');
            $imageUrl = Storage::disk('public')->url($imagePath);
        }

        // Decode JSON arrays
        $agenda   = json_decode($request->agenda ?? '[]', true);
        $speakers = json_decode($request->speakers ?? '[]', true);
        $tags     = json_decode($request->tags ?? '[]', true);
        $tickets  = json_decode($request->tickets ?? '[]', true);

        // ✅ Create event with authenticated organizer_id
        $event = Event::create([
            'title'          => $request->title,
            'description'    => $request->description,
            'category_id'    => $request->category_id,
            'start_date'     => $request->start_date,
            'end_date'       => $request->end_date,
            'start_time'     => $request->start_time,
            'end_time'       => $request->end_time,
            'venue_name'     => $request->venue_name,
            'location'       => $request->location,
            'address'        => $request->address,
            'capacity'       => $request->capacity,
            'status'         => $request->status,
            'featured_image' => $imageUrl,
            'agenda'         => $agenda,
            'speakers'       => $speakers,
            'tags'           => $tags,
            'organizer_id'   => $organizer->_id, // ✅ from JWT, not request
        ]);

        // ✅ Create tickets linked to this event and organizer
        foreach ($tickets as $ticket) {
            Ticket::create([
                'event_id'        => $event->_id,
                'organizer_id'    => $organizer->_id,
                'type'            => $ticket['name'] ?? 'General',
                'price'           => $ticket['price'] ?? 0,
                'quantity'        => $ticket['capacity'] ?? 0,
                'description'     => $ticket['description'] ?? '',
                'sale_start_date' => $ticket['sale_start_date'] ?? null,
                'sale_end_date'   => $ticket['sale_end_date'] ?? null,
                'is_free'         => $ticket['is_free'] ?? false,
                'sold'            => 0,
            ]);
        }

        return response()->json([
            'message' => 'Event created successfully',
            'data'    => $event,
            'id'      => (string) $event->_id,
        ], 201);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Error creating event',
            'error'   => $e->getMessage(),
        ], 500);
    }
}


public function organizerEvents(Request $request)
{
    $organizer = auth()->user(); // JWT-authenticated organizer
    $organizerId = $organizer->_id;

    $query = Event::where('organizer_id', $organizerId);

    // Search filter
    if ($request->filled('search')) {
        $query->where('title', 'like', $request->search);
    }

    // Sorting
    $sortBy = $request->get('sort_by', 'created_at');
    $sortOrder = $request->get('sort_order', 'desc');
    $query->orderBy($sortBy, $sortOrder);

    // Pagination
    $perPage = 10;
    $page = $request->get('page', 1);

    $events = $query->skip(($page - 1) * $perPage)
        ->take($perPage)
        ->get();

    // Add category and booked tickets count
    $events->transform(function ($event) {
        // If tickets are embedded in Event
        if (isset($event->tickets)) {
            $event->booked_count = collect($event->tickets)
                ->where('sold', '>', 0)
                ->count();
        } 
        // If tickets are in a separate collection
        else {
            $event->booked_count = \App\Models\Ticket::where('event_id', $event->_id)
                ->where('sold', '>', 0)
                ->count();
        }

        // Load category manually (MongoDB does not support Eloquent relations fully)
        if (isset($event->category_id)) {
            $event->category = \App\Models\Category::find($event->category_id);
        }

        return $event;
    });

    return response()->json([
        'current_page' => (int) $page,
        'per_page' => $perPage,
        'total' => $query->count(),
        'data' => $events,
    ]);
}
public function showOrganizerEvent($id)
{
    $organizer = auth()->user(); // JWT-authenticated organizer
    $organizerId = $organizer->_id;

    // Fetch event by slug and organizer
    $event = Event::where('organizer_id', $organizerId)
        ->where('_id', $id)
        ->first();

    if (!$event) {
        return response()->json([
            'message' => 'Event not found',
        ], 404);
    }

    // Attach category info
    if (isset($event->category_id)) {
        $event->category = \App\Models\Category::find($event->category_id);
    }

    // Attach tickets info
    if (isset($event->tickets)) {
        $event->booked_count = collect($event->tickets)
            ->where('sold', '>', 0)
            ->count();
    } else {
        $tickets = Ticket::where('event_id', $event->_id)->get();
        $event->tickets = $tickets;
        $event->booked_count = $tickets->where('sold', '>', 0)->count();
    }

    return response()->json([
        'success' => true,
        'data' => $event,
    ]);
}

}
