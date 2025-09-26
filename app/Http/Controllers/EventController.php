<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class EventController extends Controller
{
// public function store(Request $request)
// {
//     $validator = Validator::make($request->all(), [
//         'title'       => 'required|string|max:255',
//         'description' => 'required|string',
//         'category_id' => 'required|string',
//         'start_date'  => 'required|date',
//         'end_date'    => 'required|date',
//         'start_time'  => 'required',
//         'end_time'    => 'required',
//         'venue_name'  => 'nullable|string',
//         'location'    => 'nullable|string',
//         'capacity'    => 'nullable|integer',
//         'tags'        => 'nullable|string', // JSON
//         'agenda'      => 'nullable|string', // JSON
//         'speakers'    => 'nullable|string', // JSON
//         'tickets'     => 'nullable|string', // JSON
//         'status'      => 'nullable|string',
//         'featured_image' => 'nullable|image|max:2048', // max 2MB
//         'longitude'   => 'nullable|numeric',
//         'latitude'    => 'nullable|numeric',
//         'event_type' => 'nullable|string',
//     ]);

//     if ($validator->fails()) {
//         return response()->json(['errors' => $validator->errors()], 422);
//     }

//     try {
//         // ✅ get organizer from authenticated user
//         $organizer = auth()->user();

//         if (!$organizer) {
//             return response()->json(['message' => 'Unauthorized'], 401);
//         }

//         // Featured image
//         $imageUrl = null;
//         if ($request->hasFile('featured_image')) {
//             $imagePath = $request->file('featured_image')->store('events', 'public');
//             $imageUrl = Storage::disk('public')->url($imagePath);
//         }

//         // Decode JSON arrays
//         $agenda   = json_decode($request->agenda ?? '[]', true);
//         $speakers = json_decode($request->speakers ?? '[]', true);
//         $tags     = json_decode($request->tags ?? '[]', true);
//         $tickets  = json_decode($request->tickets ?? '[]', true);

//         // ✅ Create event with authenticated organizer_id
//         $event = Event::create([
//             'title'          => $request->title,
//             'description'    => $request->description,
//             'category_id'    => $request->category_id,
//             'start_date'     => $request->start_date,
//             'end_date'       => $request->end_date,
//             'start_time'     => $request->start_time,
//             'end_time'       => $request->end_time,
//             'venue_name'     => $request->venue_name,
//             'location'       => $request->location,
//             'address'        => $request->address,
//             'capacity'       => $request->capacity,
//             'status'         => $request->status,
//             'featured_image' => $imageUrl,
//             'agenda'         => $agenda,
//             'speakers'       => $speakers,
//             'tags'           => $tags,
//             'organizer_id'   => $organizer->_id, // ✅ from JWT, not request
//             'longitude'=> $request->longitude,
//             'latitude'=>$request->latitude,
//             'event_type' => $request->event_type,
//         ]);

//         // ✅ Create tickets linked to this event and organizer
//         foreach ($tickets as $ticket) {
//             Ticket::create([
//                 'event_id'        => $event->_id,
//                 'organizer_id'    => $organizer->_id,
//                 'type'            => $ticket['name'] ?? 'General',
//                 'price'           => $ticket['price'] ?? 0,
//                 'quantity'        => $ticket['capacity'] ?? 0,
//                 'description'     => $ticket['description'] ?? '',
//                 'sale_start_date' => $ticket['sale_start_date'] ?? null,
//                 'sale_end_date'   => $ticket['sale_end_date'] ?? null,
//                 'is_free'         => $ticket['is_free'] ?? false,
//                 'sold'            => 0,
                
//             ]);
//         }

//         return response()->json([
//             'message' => 'Event created successfully',
//             'data'    => $event,
//             'id'      => (string) $event->_id,
//         ], 201);

//     } catch (\Exception $e) {
//         return response()->json([
//             'message' => 'Error creating event',
//             'error'   => $e->getMessage(),
//         ], 500);
//     }
// }
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
//    public function upcomingNearest(Request $request)
//     {
//         $query = Event::query();

//         // Only upcoming events
//         $query->whereDate('start_date', '>=', Carbon::today());

//         // Optional: filter by user coordinates if provided
//         if ($request->has(['lat', 'lng'])) {
//             $lat = $request->lat;
//             $lng = $request->lng;
//             // Simple Haversine formula for distance in km
//             $query->selectRaw(
//                 "*, (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance",
//                 [$lat, $lng, $lat]
//             )
//             ->orderBy('distance', 'asc');
//         } else {
//             $query->orderBy('start_date', 'asc');
//         }

//         // Limit results for frontend
//         $events = $query->take(10)->get([
//             'id',
//             'title',
//             'featured_image',
//             'location',
//             'venue_name',
//             'start_date',
//             'end_date',
//             'start_time',
//             'end_time',
//             'category_id',
//             'price',
//             'is_free',
//             'booked_count',
//             'capacity'
//         ]);

//         // Include category name if you want
//         $events->load('category:id,name');

//         return response()->json([
//             'success' => true,
//             'data' => $events
//         ]);
//     }
public function upcomingNearest(Request $request)
{
    $limit = $request->get('limit', 3); // default to 3

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

    // Include category info
    $events->load('category:id,name');

    return response()->json([
        'success' => true,
        'events' => $events
    ]);
}

}
