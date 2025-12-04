<?php
namespace App\Http\Controllers;
use App\Models\Event;
use App\Models\Ticket;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Models\UserPreference;
use App\Models\User;

class EventController extends Controller
{
// public function index(Request $request)
// {
//     $limit = $request->get('limit', 10); // default 10
//     $category = $request->get('category'); // optional
//     $search = $request->get('search'); // optional
//     $filter = $request->get('filter', 'all'); // week, month, year, all

//     $query = Event::whereDate('start_date', '>=', Carbon::today());

//     // Apply category filter
//     if ($category && $category !== 'all') {
//         $query->where('category_id', $category);
//     }

//     // Apply search filter
//     if ($search && !empty($search)) {
//         $query->where(function ($q) use ($search) {
//             $q->where('title', 'like', "%{$search}%")
//               ->orWhere('description', 'like', "%{$search}%")->orWhere('venue_name', 'like', "%{$search}%")->orWhere('location', 'like', "%{$search}%");
//         });
//     }

//     // Apply date filter
//     switch ($filter) {
//         case 'week':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfWeek()]);
//             break;
//         case 'month':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfMonth()]);
//             break;
//         case 'year':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfYear()]);
//             break;
//         case 'all':
//         default:
//             // just future events, no extra filter
//             break;
//     }

//     // Fetch events with category relation
//     $events = $query->with('category:id,name')
//         ->orderBy('start_date', 'asc')
//         ->take($limit)
//         ->get([
//             '_id',
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
//             'capacity',
//         ]);

//     return response()->json([
//         'success' => true,
//         'filter'  => $filter,
//         'events'  => $events,
//     ]);
//}
// public function index(Request $request)
// {
//     $limit = $request->get('limit', 10);
//     $category = $request->get('category');
//     $search = $request->get('search');
//     $filter = $request->get('filter', 'all');
//     $tags = $request->get('tags'); // e.g. "react,javascript"

//     $query = Event::where('start_date', '>=', Carbon::today());

//     // Category filter
//     if ($category && $category !== 'all') {
//         $query->where('category_id', $category);
//     }

//     // ✅ Tag filter (?tags=react,javascript)
//     if ($tags && !empty($tags)) {
//         $tagArray = array_map('trim', explode(',', $tags));
//         // Matches if tags array contains *any* of the given values
//         $query->whereIn('tags', $tagArray);
//     }

//     // ✅ Search filter (title, description, location, AND tags)
//     if ($search && !empty($search)) {
//         $query->where(function ($q) use ($search) {
//             $regex = new \MongoDB\BSON\Regex($search, 'i'); // case-insensitive

//             $q->where('title', 'like', "%{$search}%")
//               ->orWhere('description', 'like', "%{$search}%")
//               ->orWhere('venue_name', 'like', "%{$search}%")
//               ->orWhere('location', 'like', "%{$search}%")
//               // Match inside tags array
//               ->orWhere('tags', $regex);
//         });
//     }

//     // Date filter
//     switch ($filter) {
//         case 'week':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfWeek()]);
//             break;
//         case 'month':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfMonth()]);
//             break;
//         case 'year':
//             $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfYear()]);
//             break;
//         case 'all':
//         default:
//             break;
//     }

//     // Fetch events
//     $events = $query->with('category:id,name')
//         ->orderBy('start_date', 'asc')
//         ->take($limit)
//         ->get([
//             '_id',
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
//             'capacity',
//             'tags',
//         ]);

//     return response()->json([
//         'success' => true,
//         'filter'  => $filter,
//         'events'  => $events,
//     ]);
// }

public function index(Request $request)
{
    $limit = $request->get('limit', 10);
    $category = $request->get('category');
    $search = $request->get('search');
    $filter = $request->get('filter', 'all');
    $tags = $request->get('tags'); // e.g. "react,javascript"

    $query = Event::where('start_date', '>=', Carbon::today());

    // Category filter
    if ($category && $category !== 'all') {
        $query->where('category_id', $category);
    }

    // Tag filter
    if ($tags && !empty($tags)) {
        $tagArray = array_map('trim', explode(',', $tags));
        $query->whereIn('tags', $tagArray);
    }

    // Search filter
    if ($search && !empty($search)) {
        $query->where(function ($q) use ($search) {
            $regex = new \MongoDB\BSON\Regex($search, 'i'); // case-insensitive

            $q->where('title', 'like', "%{$search}%")
              ->orWhere('description', 'like', "%{$search}%")
              ->orWhere('venue_name', 'like', "%{$search}%")
              ->orWhere('location', 'like', "%{$search}%")
              ->orWhere('tags', $regex);
        });
    }

    // Date filter
    switch ($filter) {
        case 'week':
            $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfWeek()]);
            break;
        case 'month':
            $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfMonth()]);
            break;
        case 'year':
            $query->whereBetween('start_date', [Carbon::today(), Carbon::today()->endOfYear()]);
            break;
        case 'all':
        default:
            break;
    }

    // Fetch events
    $events = $query->with('category:id,name')
        ->orderBy('start_date', 'asc')
        ->take($limit)
        ->get([
            '_id',
            'title',
            'description',
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
            'capacity',
            'tags',
            'organizer_id'
        ]);

 

    return response()->json([
        'success' => true,
        'filter'  => $filter,
        'events'  => $events,
    ]);
}

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
        // 'featured_image' => 'nullable|image|max:2048',
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
//     // Fetch event with category and tickets
//     $event = Event::with(['category', 'tickets'])
//         ->where('_id', $id)
//         ->first();

//     if (!$event) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Event not found',
//         ], 404);
//     }

//     // Calculate booked count (sum of sold tickets)
//     $bookedCount = $event->tickets ? $event->tickets->sum('sold') : 0;

//     // Transform response
//     $responseData = [
//         'id'            => $event->_id,
//         'title'         => $event->title,
//         'description'   => $event->description,
//         'category'      => $event->category ? [
//             'id'   => $event->category->_id ?? $event->category->id,
//             'name' => $event->category->name,
//         ] : null,
//         'start_date'    => $event->start_date,
//         'end_date'      => $event->end_date,
//         'start_time'    => $event->start_time,
//         'end_time'      => $event->end_time,
//         'venue_name'    => $event->venue_name,
//         'location'      => $event->location,
//         'address'       => $event->address,
//         'capacity'      => $event->capacity,
//         'featured_image'=> $event->featured_image,
//         'agenda'        => $event->agenda ?? [],
//         'speakers'      => $event->speakers ?? [],
//         'tags'          => $event->tags ?? [],
//         'tickets'       => $event->tickets ?? [],
//         'booked_count'  => $bookedCount,
//         'organizer_id'  => $event->organizer_id,
//         'created_at'    => $event->created_at,
//         'updated_at'    => $event->updated_at,
//     ];

//     return response()->json([
//         'success' => true,
//         'data'    => $responseData,
//     ]);
// }


// public function showEvent($id)
// {
//     $event = Event::with(['category', 'tickets'])->where('_id', $id)->first();

//     if (!$event) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Event not found',
//         ], 404);
//     }

    
// // Update user preference with score increment
// if (auth()->user() && !empty($event->tags)) {
//     $userId = auth()->id();
//     $interactionType = 'view';

//     foreach ($event->tags as $tag) {
//         $pref = UserPreference::firstOrNew([
//             'user_id' => $userId,
//             'event_id' => $event->_id,
//             'tag' => $tag,
//             'interaction_type' => $interactionType,
//             'score' => 1,
//         ]);

//         // Increment score
//         // $pref->score = ($pref->score ?? 0) + 1;
//         $pref->save();
//     }
// }


//     $bookedCount = $event->tickets ? $event->tickets->sum('sold') : 0;

//     $responseData = [
//         'id'             => $event->_id,
//         'title'          => $event->title,
//         'description'    => $event->description,
//         'category'       => $event->category ? [
//             'id'   => $event->category->_id ?? $event->category->id,
//             'name' => $event->category->name,
//         ] : null,
//         'start_date'     => $event->start_date,
//         'end_date'       => $event->end_date,
//         'start_time'     => $event->start_time,
//         'end_time'       => $event->end_time,
//         'venue_name'     => $event->venue_name,
//         'location'       => $event->location,
//         'address'        => $event->address,
//         'capacity'       => $event->capacity,
//         'featured_image' => $event->featured_image,
//         'agenda'         => $event->agenda ?? [],
//         'speakers'       => $event->speakers ?? [],
//         'tags'           => $event->tags ?? [],
//         'tickets'        => $event->tickets ?? [],
//         'booked_count'   => $bookedCount,
//         'organizer_id'   => $event->organizer_id,
//         'created_at'     => $event->created_at,
//         'updated_at'     => $event->updated_at,
//     ];

//     return response()->json([
//         'success' => true,
//         'data'    => $responseData,
//     ]);
// }
public function showEvent($id)
{
    $event = Event::with(['category', 'tickets'])->where('_id', $id)->first();

    if (!$event) {
        return response()->json([
            'success' => false,
            'message' => 'Event not found',
        ], 404);
    }
    
    // Increment user tag scores for 'view'
    if (auth()->check() && !empty($event->tags)) {
        $userId = auth()->id();

        // Increment all tags by 1 for a view
        UserPreference::incrementTags($userId, $event->tags, 'view', 1);
    }

    $bookedCount = $event->tickets ? $event->tickets->sum('sold') : 0;
    // $organizer = User::where('_id', $event->organizer_id)->first();
    $organizer = User::find($event->organizer_id);



    $responseData = [
        'id'             => $event->_id,
        'title'          => $event->title,
        'description'    => $event->description,
        'category'       => $event->category ? [
            'id'   => $event->category->_id ?? $event->category->id,
            'name' => $event->category->name,
        ] : null,
        'start_date'     => $event->start_date,
        'end_date'       => $event->end_date,
        'start_time'     => $event->start_time,
        'end_time'       => $event->end_time,
        'venue_name'     => $event->venue_name,
        'location'       => $event->location,
        'address'        => $event->address,
        'capacity'       => $event->capacity,
        'featured_image' => $event->featured_image,
        'agenda'         => $event->agenda ?? [],
        'speakers'       => $event->speakers ?? [],
        'tags'           => $event->tags ?? [],
        'tickets'        => $event->tickets ?? [],
        'booked_count'   => $bookedCount,
        'organizer_id'   => $event->organizer_id,
        'organizer_name' => $organizer->organization_name,
        'organizer_city' => $organizer->city,
        'organizer_status'=> $organizer->status,
        'organizier_phone'=> $organizer->phone,
        'organizer_email'=> $organizer->email,
        'created_at'     => $event->created_at,
        'updated_at'     => $event->updated_at,
        'longitude'      => $event->longitude,
        'latitude'       => $event->latitude,
    ];

    return response()->json([
        'success' => true,
        'data'    => $responseData,
    ]);
}
// public function showEvent($id)
//     {
//     $event = Event::with(['category', 'tickets'])->where('_id', $id)->first();

//     if (!$event) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Event not found',
//         ], 404);
//     }

//     // Increment user tag scores for 'view'
//     if (auth()->check() && !empty($event->tags)) {
//         $userId = auth()->id();
//         UserPreference::incrementTags($userId, $event->tags, 'view', 1);
//     }

//     // Get booked tickets count
//     $bookedCount = $event->tickets ? $event->tickets->sum('sold') : 0;

//     // Load organizer
//     $organizer = User::find($event->organizer_id);

//     // ---------------------------
//     // 🍀 TICKET VISIBILITY LOGIC
//     // ---------------------------
//     $now = now();

//     $availableTickets = $event->tickets->filter(function ($ticket) use ($now, $event) {
//         $start = $ticket->sale_start_date ? \Carbon\Carbon::parse($ticket->sale_start_date) : null;
//         $end   = $ticket->sale_end_date ? \Carbon\Carbon::parse($ticket->sale_end_date) : null;

//         // Case 1: Both sale_start_date AND sale_end_date exist
//         if ($start && $end) {
//             return $now->between($start, $end);
//         }

//         // Case 2: One or both dates missing → Allow only before event start date
//         return $now->lte(\Carbon\Carbon::parse($event->start_date));
//     });

//     // ---------------------------
//     // Response Formatting
//     // ---------------------------

//     $responseData = [
//         'id'             => $event->_id,
//         'title'          => $event->title,
//         'description'    => $event->description,
//         'category'       => $event->category ? [
//             'id'   => $event->category->_id ?? $event->category->id,
//             'name' => $event->category->name,
//         ] : null,
//         'start_date'     => $event->start_date,
//         'end_date'       => $event->end_date,
//         'start_time'     => $event->start_time,
//         'end_time'       => $event->end_time,
//         'venue_name'     => $event->venue_name,
//         'location'       => $event->location,
//         'address'        => $event->address,
//         'capacity'       => $event->capacity,
//         'featured_image' => $event->featured_image,
//         'agenda'         => $event->agenda ?? [],
//         'speakers'       => $event->speakers ?? [],
//         'tags'           => $event->tags ?? [],
        
//         // ⬇️ ONLY AVAILABLE TICKETS ARE RETURNED
//         'tickets'        => $availableTickets->values(),

//         'booked_count'   => $bookedCount,
//         'organizer_id'   => $event->organizer_id,
//         'organizer_name' => $organizer->organization_name ?? null,
//         'created_at'     => $event->created_at,
//         'updated_at'     => $event->updated_at,
//     ];

//     return response()->json([
//         'success' => true,
//         'data'    => $responseData,
//     ]);
// }

public function nearestEvents(Request $request)
{
    $lat = (float) $request->get('lat');
    $lng = (float) $request->get('lng');
    $limit = (int) $request->get('limit', 3);
    $maxDistance = (float) $request->get('max_distance'); // required from frontend
    $categoryId = $request->get('category'); // optional

    // Basic validation
    if (!$lat || !$lng) {
        return response()->json(['message' => 'Latitude and Longitude are required'], 400);
    }
    if (!$maxDistance) {
        return response()->json(['message' => 'max_distance is required'], 400);
    }

    // Base query: upcoming events with coordinates
    $query = Event::whereNotNull('latitude')
        ->whereNotNull('longitude')
        ->whereDate('start_date', '>=', now())
        ->with('category:id,name');

    // Filter by category if provided and not 'all'
    if ($categoryId && $categoryId !== 'all') {
        $query->where('category_id', $categoryId);
    }

    $events = $query->get();


    // Compute distance and filter by max distance from frontend
    $events = $events->map(function ($event) use ($lat, $lng) {
        $event->distance = $this->haversineDistance(
            $lat,
            $lng,
            (float) $event->latitude,
            (float) $event->longitude
        );
        return $event;
    })->filter(function ($event) use ($maxDistance) {
        return $event->distance <= $maxDistance;
    });

    // Sort by distance and limit
    $nearest = $events->sortBy('distance')->take($limit)->values();

    // Format the response
    $nearest = $nearest->map(function ($event) {
        return [
            'id'             => (string) $event->_id,
            'title'          => $event->title,
            'description'    => $event->description,
            'location'       => $event->location,
            'venue_name'     => $event->venue_name,
            'slug'           => $event->slug,
            'start_date'     => $event->start_date->format('M d, Y'),
            'end_date'       => $event->end_date->format('M d, Y'),
            'distance'       => round($event->distance, 2) . ' km',
            'featured_image' => $event->featured_image,
            'category_id'    => $event->category_id,
            'category_name'  => $event->category->name ?? 'Uncategorized',
        ];
    });

    // Handle case: no nearby events found
    if ($nearest->isEmpty()) {
        return response()->json([
            'success' => false,
            'message' => "No events found within {$maxDistance} km",
            'events'  => [],
        ]);
    }

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

// public function upcomingEvents(Request $request)
// {
//     $limit = $request->get('limit',3); // default to 3

//     $events = Event::whereDate('start_date', '>=', Carbon::today())
//         ->orderBy('start_date', 'asc')
//         ->take($limit)
//         ->get([
//             '_id',
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
//             'capacity',
//         ]);

//     // Load category relation
//     $events->load('category:id,name');

//     return response()->json([
//         'success' => true,
//         'events' => $events,
//     ]);
// }

// public function upcomingEvents(Request $request)
// {
//     $limit = $request->get('limit', 3);
//     $filter = $request->get('filter', 'all'); // default: all time

//     // Start building the query
//     $query = Event::whereDate('start_date', '>=', Carbon::today());

//     // Apply filter based on the period
//     switch ($filter) {
//         case 'week':
//             $query->whereBetween('start_date', [
//                 Carbon::today(),
//                 Carbon::today()->endOfWeek()
//             ]);
//             break;

//         case 'month':
//             $query->whereBetween('start_date', [
//                 Carbon::today(),
//                 Carbon::today()->endOfMonth()
//             ]);
//             break;

//         case 'year':
//             $query->whereBetween('start_date', [
//                 Carbon::today(),
//                 Carbon::today()->endOfYear()
//             ]);
//             break;

//         case 'all':
//         default:
//             // no extra condition — just future events
//             break;
//     }

//     // Fetch data
//     $events = $query->orderBy('start_date', 'asc')
//         ->take($limit)
//         ->get([
//             '_id',
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
//             'capacity',
//         ]);

//     // Load category relation
//     $events->load('category:id,name');

//     return response()->json([
//         'success' => true,
//         'filter' => $filter,
//         'events' => $events,
//     ]);
// }

public function upcomingEvents(Request $request)
{
    $limit = $request->get('limit', 3);
    $filter = $request->get('filter', 'all'); // possible: week, month, year, all

    $query = Event::whereDate('start_date', '>=', Carbon::today());

    switch ($filter) {
        case 'week':
            $query->whereBetween('start_date', [
                Carbon::today(),
                Carbon::today()->endOfWeek(),
            ]);
            break;

        case 'month':
            $query->whereBetween('start_date', [
                Carbon::today(),
                Carbon::today()->endOfMonth(),
            ]);
            break;

        case 'year':
            $query->whereBetween('start_date', [
                Carbon::today(),
                Carbon::today()->endOfYear(),
            ]);
            break;

        case 'all':
        default:
            // no extra date restriction, just future events
            break;
    }

    $events = $query
        ->orderBy('start_date', 'asc')
        ->take($limit)
        ->get([
            '_id',
            'title',
            'featured_image',
            'description',
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

    $events->load('category:id,name');

    return response()->json([
        'success' => true,
        'filter' => $filter,
        'events' => $events,
    ]);
}



    // public function recommendedEvents(Request $request)
    // {
    //     $user = auth()->user(); // JWT authenticated user

    //     if (!$user) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Unauthorized'
    //         ], 401);
    //     }

    //     // Step 1: Get all user tag scores
    //     $tagScores = UserPreference::where('user_id', $user->_id)
    //         ->where('interaction_type', 'view') // optional, or include all types
    //         ->get()
    //         ->groupBy('tag')
    //         ->map(function ($items) {
    //             return $items->sum('score');
    //         });

    //     if ($tagScores->isEmpty()) {
    //         return response()->json([
    //             'success' => true,
    //             'data' => [], // no preferences yet
    //             'message' => 'No tag preferences found'
    //         ]);
    //     }

    //     // Step 2: Fetch events and calculate match score
    //     $events = Event::all()->map(function ($event) use ($tagScores) {
    //         $eventTags = is_string($event->tags) ? json_decode($event->tags, true) : $event->tags;
    //         $eventScore = 0;

    //         if (is_array($eventTags)) {
    //             foreach ($eventTags as $tag) {
    //                 $eventScore += $tagScores[$tag] ?? 0;
    //             }
    //         }

    //         $event->recommendation_score = $eventScore;
    //         return $event;
    //     });

    //     // Step 3: Sort events by score descending
    //     $recommendedEvents = $events->sortByDesc('recommendation_score')->values();

    //     return response()->json([
    //         'success' => true,
    //         'data' => $recommendedEvents
    //     ]);
    // }
 
//     public function recommendedEvents(Request $request)
// {
//     $user = auth()->user(); // JWT-authenticated user

//     if (!$user) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Unauthorized'
//         ], 401);
//     }

//     $categoryId = $request->get('category_id');
//     $search = $request->get('search');
//     $filter = $request->get('filter', 'all');
//     $limit = (int) $request->get('limit', 20);

//     // Step 1️⃣: Get all user tag scores (based on interactions)
//     $tagScores = UserPreference::where('user_id', $user->_id)
//         ->get()
//         ->groupBy('tag')
//         ->map(fn($items) => $items->sum('score'));

//     // Step 2️⃣: Base query (filter events before scoring)
//     $query = Event::query();

//     // Category Filter
//     if ($categoryId && $categoryId !== 'all') {
//         $query->where('category_id', $categoryId);
//     }

//     // Search Filter (title, description, tags)
//     if ($search) {
//         $query->where(function ($q) use ($search) {
//             $q->where('title', 'like', "%{$search}%")
//               ->orWhere('description', 'like', "%{$search}%")
//               ->orWhere('tags', 'like', "%{$search}%");
//         });
//     }

//     // Time Filter
//     if ($filter !== 'all') {
//         $now = now();
//         if ($filter === 'week') {
//             $query->whereBetween('start_date', [$now->startOfWeek(), $now->endOfWeek()]);
//         } elseif ($filter === 'month') {
//             $query->whereBetween('start_date', [$now->startOfMonth(), $now->endOfMonth()]);
//         } elseif ($filter === 'year') {
//             $query->whereBetween('start_date', [$now->startOfYear(), $now->endOfYear()]);
//         }
//     }

//     // Step 3️⃣: Fetch events (limit to avoid memory load)
//     $events = $query->take($limit * 5)->get(); // fetch more than limit to sort later

//     // Step 4️⃣: Calculate match score based on user tag preferences
//     $scoredEvents = $events->map(function ($event) use ($tagScores) {
//         $eventTags = is_string($event->tags) ? json_decode($event->tags, true) : $event->tags;
//         $eventScore = 0;

//         if (is_array($eventTags)) {
//             foreach ($eventTags as $tag) {
//                 $eventScore += $tagScores[$tag] ?? 0;
//             }
//         }

//         $event->recommendation_score = $eventScore;
//         return $event;
//     });

//     // Step 5️⃣: Sort by recommendation score (desc)
//     $recommended = $scoredEvents->sortByDesc('recommendation_score')->values()->take($limit);

//     return response()->json([
//         'success' => true,
//         'data' => $recommended,
//     ]);
// }
// public function recommendedEvents(Request $request)
// {
//     $user = auth()->user();

//     if (!$user) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Unauthorized'
//         ], 401);
//     }

//     // Step 1: Get all user preference scores (by tag/category)
//     $tagScores = UserPreference::where('user_id', $user->_id)
//         ->where('interaction_type', 'view') // or include all types
//         ->get()
//         ->groupBy('tag')
//         ->map(fn($items) => $items->sum('score'));

//     if ($tagScores->isEmpty()) {
//         return response()->json([
//             'success' => true,
//             'data' => [],
//             'message' => 'No preferences found yet'
//         ]);
//     }

//     // Step 2: Compute recommendation score for each event
//     $events = Event::all()->map(function ($event) use ($tagScores) {
//         $eventTags = is_string($event->tags)
//             ? json_decode($event->tags, true)
//             : $event->tags;

//         $eventScore = 0;
//         if (is_array($eventTags)) {
//             foreach ($eventTags as $tag) {
//                 $eventScore += $tagScores[$tag] ?? 0;
//             }
//         }

//         $event->recommendation_score = $eventScore;
//         return $event;
//     });

//     // Step 3: Find max score for normalization
//     $maxScore = $events->max('recommendation_score') ?: 1;

//     // Step 4: Calculate match percentage
//     $events = $events->map(function ($event) use ($maxScore) {
//         $event->match_percentage = round(($event->recommendation_score / $maxScore) * 100);
//         return $event;
//     });

//     // Step 5: Sort by match percentage (descending)
//     $recommendedEvents = $events->sortByDesc('match_percentage')->values();

//     return response()->json([
//         'success' => true,
//         'data' => $recommendedEvents
//     ]);
// }
// public function recommendedEvents(Request $request)
// {
//     $user = auth()->user();

//     if (!$user) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Unauthorized'
//         ], 401);
//     }

//     // Optional limit parameter
//     $limit = intval($request->get('limit', 10));

//     // Step 1: Get user preference scores
//     $tagScores = UserPreference::where('user_id', $user->_id)
//         ->where('interaction_type', 'view') // can include other types if needed
//         ->get()
//         ->groupBy('tag')
//         ->map(fn($items) => $items->sum('score'));

//     if ($tagScores->isEmpty()) {
//         return response()->json([
//             'success' => true,
//             'data' => [],
//             'message' => 'No preferences found yet'
//         ]);
//     }

//     // Convert Collection to array to avoid array_keys() errors
//     $tagScoresArray = $tagScores->toArray();

//     // Step 2: Compute recommendation score for each event
//     $events = Event::all()->map(function ($event) use ($tagScoresArray) {
//         $eventTags = is_string($event->tags)
//             ? json_decode($event->tags, true)
//             : $event->tags;

//         $eventScore = 0;
//         if (is_array($eventTags)) {
//             foreach ($eventTags as $tag) {
//                 $eventScore += $tagScoresArray[$tag] ?? 0;
//             }
//         }

//         $event->recommendation_score = $eventScore;
//         return $event;
//     });

//     // Step 3: Find max score for normalization
//     $maxScore = $events->max('recommendation_score') ?: 1;

//     // Step 4: Calculate match percentage
//     $events = $events->map(function ($event) use ($maxScore) {
//         $event->match_percentage = round(($event->recommendation_score / $maxScore) * 100);
//         return $event;
//     });

//     // Step 5: Sort by match percentage descending and limit results
//     $recommendedEvents = $events->sortByDesc('match_percentage')->take($limit)->values();

//     return response()->json([
//         'success' => true,
//         'data' => $recommendedEvents
//     ]);
// }

// public function topTags(Request $request)
// {
//     $userId = auth()->id();

//     if (!$userId) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Unauthenticated',
//         ], 401);
//     }

//     // MongoDB aggregation to sum scores per tag
//     $topTags = UserPreference::raw(function($collection) use ($userId) {
//         return $collection->aggregate([
//             ['$match' => ['user_id' => $userId]],
//             ['$group' => [
//                 '_id' => '$tag',
//                 'total_score' => ['$sum' => '$score']
//             ]],
//             ['$sort' => ['total_score' => -1]],
//             ['$limit' => 10]
//         ]);
//     });

//     return response()->json([
//         'success' => true,
//         'data' => iterator_to_array($topTags),
//     ]);
// }
public function recommendedEvents(Request $request)
{
    $user = auth()->user();
    if (!$user) {
        return response()->json([
            'success' => false,
            'message' => 'Unauthorized'
        ], 401);
    }

    $limit = intval($request->get('limit', 10));

    // Fetch the user's tag scores (combine all interaction types or pick one)
    $preferences = UserPreference::where('user_id', $user->_id)->get();

    if ($preferences->isEmpty()) {
        return response()->json([
            'success' => true,
            'data' => [],
            'message' => 'No preferences found yet'
        ]);
    }

    // Combine scores from all interaction types
    $tagScores = [];
    foreach ($preferences as $pref) {
        foreach ($pref->tag_scores as $tag => $score) {
            $tagScores[$tag] = ($tagScores[$tag] ?? 0) + $score;
        }
    }

    if (empty($tagScores)) {
        return response()->json([
            'success' => true,
            'data' => [],
            'message' => 'No preferences found yet'
        ]);
    }

    // Fetch all events
    $events = Event::all()->map(function ($event) use ($tagScores) {
        $eventTags = is_string($event->tags) ? json_decode($event->tags, true) : $event->tags;

        $score = 0;
        if (is_array($eventTags)) {
            foreach ($eventTags as $tag) {
                $score += $tagScores[$tag] ?? 0;
            }
        }

        $event->recommendation_score = $score;
        return $event;
    });

    // Normalize scores to percentage
    $maxScore = $events->max('recommendation_score') ?: 1;

    $recommendedEvents = $events
        ->map(fn($event) => tap($event, fn($e) => $e->match_percentage = round(($e->recommendation_score / $maxScore) * 100)))
        ->sortByDesc('match_percentage')
        ->take($limit)
        ->values();

    return response()->json([
        'success' => true,
        'data' => $recommendedEvents
    ]);
}

}
