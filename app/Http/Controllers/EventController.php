<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

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
        'capacity'    => 'nullable|integer',
        'tags'        => 'nullable|string',
        'agenda'      => 'nullable|string',
        'speakers'    => 'nullable|string',
        'tickets'     => 'nullable|string', // JSON
        'status'      => 'nullable|string',
        'featured_image' => 'nullable|image|max:2048',
        'longitude'   => 'nullable|numeric',
        'latitude'    => 'nullable|numeric',
        'event_type'  => 'nullable|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    try {
        $organizer = auth()->user();
        if (!$organizer) return response()->json(['message' => 'Unauthorized'], 401);

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

        // Step 1: Create event without is_free
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
            'organizer_id'   => $organizer->_id,
            'longitude'      => $request->longitude,
            'latitude'       => $request->latitude,
            'event_type'     => $request->event_type,
            'is_free'        => false, // default, will update below
        ]);

        // Step 2: Create tickets and check if any is free
        $isFree = false;
        foreach ($tickets as $ticket) {
            $ticketData = Ticket::create([
                'event_id'        => $event->_id,
                'organizer_id'    => $organizer->_id,
                'type'            => $ticket['name'] ?? 'General',
                'price'           => $ticket['price'] ?? 0,
                'quantity'        => $ticket['capacity'] ?? 0,
                'description'     => $ticket['description'] ?? '',
                'sale_start_date' => $ticket['sale_start_date'] ?? null,
                'sale_end_date'   => $ticket['sale_end_date'] ?? null,
                'is_free'         => $ticket['price'] == 0 || ($ticket['is_free'] ?? false),
                'sold'            => 0,
            ]);

            if ($ticketData->is_free) {
                $isFree = true;
            }
        }

        // Step 3: Update event's is_free if at least one ticket is free
        if ($isFree) {
            $event->update(['is_free' => true]);
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
            $event->booked_count = Ticket::where('event_id', $event->_id)
                ->where('sold', '>', 0)
                ->count();
        }

        // Load category manually (MongoDB does not support Eloquent relations fully)
        if (isset($event->category_id)) {
            $event->category = Category::find($event->category_id);
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
        $event->category = Category::find($event->category_id);
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

// public function showEvent($id)
// {
//     // Fetch event by slug and organizer
//     $event = Event::where('_id', $id)
//         ->first();

//     if (!$event) {
//         return response()->json([
//             'message' => 'Event not found',
//         ], 404);
//     }

//     // Attach category info
//     if (isset($event->category_id)) {
//         $event->category = Category::find($event->category_id);
//     }

//     // Attach tickets info
//     if (isset($event->tickets)) {
//         $event->booked_count = collect($event->tickets)
//             ->where('sold', '>', 0)
//             ->count();
//     } else {
//         $tickets = Ticket::where('event_id', $event->_id)->get();
//         $event->tickets = $tickets;
//         $event->booked_count = $tickets->where('sold', '>', 0)->count();
//     }

//     return response()->json([
//         'success' => true,
//         'data' => $event,
//     ]);
// }


public function showEvent($id)
{
    // Fetch event with category and tickets
    $event = Event::with(['category', 'tickets'])
        ->where('_id', $id)
        ->first();

    if (!$event) {
        return response()->json([
            'success' => false,
            'message' => 'Event not found',
        ], 404);
    }

    // Calculate booked count (sum of sold tickets)
    $bookedCount = $event->tickets ? $event->tickets->sum('sold') : 0;

    // Transform response
    $responseData = [
        'id'            => $event->_id,
        'title'         => $event->title,
        'description'   => $event->description,
        'category'      => $event->category ? [
            'id'   => $event->category->_id ?? $event->category->id,
            'name' => $event->category->name,
        ] : null,
        'start_date'    => $event->start_date,
        'end_date'      => $event->end_date,
        'start_time'    => $event->start_time,
        'end_time'      => $event->end_time,
        'venue_name'    => $event->venue_name,
        'location'      => $event->location,
        'address'       => $event->address,
        'capacity'      => $event->capacity,
        'featured_image'=> $event->featured_image,
        'agenda'        => $event->agenda ?? [],
        'speakers'      => $event->speakers ?? [],
        'tags'          => $event->tags ?? [],
        'tickets'       => $event->tickets ?? [],
        'booked_count'  => $bookedCount,
        'organizer_id'  => $event->organizer_id,
        'created_at'    => $event->created_at,
        'updated_at'    => $event->updated_at,
    ];

    return response()->json([
        'success' => true,
        'data'    => $responseData,
    ]);
}

public function nearestEvents(Request $request) {
    $lat = (float) $request->get('lat');
    $lng = (float) $request->get('lng');
    $limit = (int) $request->get('limit', 3);

    if (!$lat || !$lng) {
        return response()->json(['message' => 'Latitude and Longitude are required'], 400);
    }

    // Fetch all events with coordinates and only upcoming events
    $events = Event::whereNotNull('latitude')
        ->whereNotNull('longitude')
        ->whereDate('start_date', '>=', now()) // ✅ upcoming events only
        ->get();

    // Add distance to each event
    $events = $events->map(function ($event) use ($lat, $lng) {
        $event->distance = $this->haversineDistance(
            $lat,
            $lng,
            (float) $event->latitude,
            (float) $event->longitude
        );
        return $event;
    });

    // Sort by distance and take nearest
    $nearest = $events->sortBy('distance')->take($limit)->values();

    // Map to only needed fields
    $nearest = $nearest->map(function ($event) {
        return [
            'title'      => $event->title,
            'start_date' => $event->start_date->format('M d, Y'),
            'distance'   => round($event->distance, 2) . ' km',
            'featured_image' => $event->featured_image,
            'id'         => (string) $event->_id,
        ];
    });

    return response()->json([
        'success' => true,
        'events'  => $nearest,
    ]);
}


/**
 * Haversine formula to calculate distance in km
 */
private function haversineDistance($lat1, $lon1, $lat2, $lon2)
{
    $earthRadius = 6371; // km

    $dLat = deg2rad($lat2 - $lat1);
    $dLon = deg2rad($lon2 - $lon1);

    $a = sin($dLat / 2) * sin($dLat / 2) +
        cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
        sin($dLon / 2) * sin($dLon / 2);

    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
    return $earthRadius * $c;
}

public function upcomingEvents(Request $request)
{
    $limit = $request->get('limit',3); // default to 3

    $events = Event::whereDate('start_date', '>=', Carbon::today())
        ->orderBy('start_date', 'asc')
        ->take($limit)
        ->get([
            '_id',
            'title',
            'featured_image',
            'location',
            'venue_name',
            'start_date',
            'end_date',
            'start_time',
            'end_time',
            'category_id',
            'price',
            'is_free',
            'booked_count',
            'capacity',
        ]);

    // Load category relation
    $events->load('category:id,name');

    return response()->json([
        'success' => true,
        'events' => $events,
    ]);
}

}
