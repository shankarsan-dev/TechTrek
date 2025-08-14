<?php

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
// use Illuminate\Support\Facades\DB;
// use App\Models\Event;
// use App\Models\Ticket;
// use App\Models\EventAgenda;
// use App\Models\Speaker;
// use App\Models\EventTag;

// class EventController extends Controller
// {
//     public function store(Request $request)
//     {
//         // Log the full incoming request for debugging
//         Log::info('Incoming Event Create Request:', $request->all());

//         DB::beginTransaction();

//         try {
//             //  Create the event
//             $event = Event::create([
//                 'title'          => $request->title,
//                 'description'    => $request->description,
//                 'category_id'    => $request->category_id,
//                 'start_date'     => $request->start_date,
//                 'end_date'       => $request->end_date,
//                 'start_time'     => $request->start_time,
//                 'end_time'       => $request->end_time,
//                 'venue_name'     => $request->venue_name,
//                 'location'       => $request->location,
//                 'address'        => $request->address,
//                 'is_free'        => $request->is_free,
//                 'featured_image' => $request->featured_image ?? null,
//                 'status'         => $request->status ?? 'draft',
//                 'organizer_id'   => $request->organizer_id,
//             ]);

//             //  Create tickets if provided
//             if ($request->has('tickets') && is_array($request->tickets)) {
//                 foreach ($request->tickets as $ticket) {
//                     Ticket::create([
//                         'event_id' => $event->id,
//                         'name'     => $ticket['name'],
//                         'price'    => $ticket['price'],
//                         'capacity' => $ticket['capacity']
//                     ]);
//                 }
//             }

//             // Create agendas if provided
//             if ($request->has('agenda') && is_array($request->agenda)) {
//                 foreach ($request->agenda as $item) {
//                     EventAgenda::create([
//                         'event_id'    => $event->id,
//                         'time'        => $item['time'],
//                         'description' => $item['description']
//                     ]);
//                 }
//             }

//             // Create speakers if provided
//             if ($request->has('speakers') && is_array($request->speakers)) {
//                 foreach ($request->speakers as $speaker) {
//                     Speaker::create([
//                         'event_id'   => $event->id,
//                         'name'       => $speaker['name'],
//                         'profession' => $speaker['profession']
//                     ]);
//                 }
//             }

//             //  Create tags if provided
//             if ($request->has('tags') && is_array($request->tags)) {
//                 foreach ($request->tags as $tag) {
//                     EventTag::create([
//                         'event_id' => $event->id,
//                         'tag'      => $tag
//                     ]);
//                 }
//             }

//             DB::commit();

//             // Return the event with relationships for immediate verification
//             $event->load(['tickets', 'agendas', 'speakers', 'tags']);

//             return response()->json([
//                 'success' => true,
//                 'message' => 'Event created successfully',
//                 'data'    => $event
//             ], 201);

//         } catch (\Exception $e) {
//             DB::rollBack();

//             // Log the error for debugging
//             Log::error('Event creation failed: ' . $e->getMessage(), [
//                 'trace' => $e->getTraceAsString()
//             ]);

//             return response()->json([
//                 'success' => false,
//                 'message' => 'Event creation failed',
//                 'error'   => $e->getMessage()
//             ], 500);
//         }
//     }
// }

// Decode JSON arrays safely
private function decodeJsonArray($jsonString, $default = [])
{
    if (!$jsonString) return $default;
    $decoded = json_decode($jsonString, true);
    return is_array($decoded) ? $decoded : $default;
}

public function store(Request $request)
{
    // Validation here (same as before) ...
    DB::beginTransaction();

    try {
        $featuredImagePath = $request->hasFile('featured_image')
            ? $request->file('featured_image')->store('events', 'public')
            : null;

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
            'is_free'        => $request->is_free ?? false,
            'featured_image' => $featuredImagePath,
            'status'         => $request->status ?? 'draft',
            'organizer_id'   => $request->organizer_id,
        ]);

        // ✅ Safely decode JSON arrays
        $tickets  = $this->decodeJsonArray($request->tickets);
        $agenda   = $this->decodeJsonArray($request->agenda);
        $speakers = $this->decodeJsonArray($request->speakers);
        $tags     = $this->decodeJsonArray($request->tags);

        foreach ($tickets as $ticket) {
            Ticket::create([
                'event_id' => $event->id,
                'name'     => $ticket['name'] ?? '',
                'price'    => $ticket['price'] ?? 0,
                'capacity' => $ticket['capacity'] ?? 0,
            ]);
        }

        foreach ($agenda as $item) {
            EventAgenda::create([
                'event_id'    => $event->id,
                'time'        => $item['time'] ?? null,
                'description' => $item['description'] ?? '',
            ]);
        }

        foreach ($speakers as $speaker) {
            Speaker::create([
                'event_id'   => $event->id,
                'name'       => $speaker['name'] ?? '',
                'profession' => $speaker['profession'] ?? '',
            ]);
        }

        foreach ($tags as $tag) {
            EventTag::create([
                'event_id' => $event->id,
                'tag'      => $tag,
            ]);
        }

        DB::commit();

        $event->load(['tickets', 'agendas', 'speakers', 'tags']);

        return response()->json([
            'success' => true,
            'message' => 'Event created successfully',
            'data'    => $event
        ], 201);

    } catch (\Exception $e) {
        DB::rollBack();
        Log::error('Event creation failed', [
            'message' => $e->getMessage(),
            'trace'   => $e->getTraceAsString(),
            'request' => $request->all(),
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Event creation failed',
            'error'   => $e->getMessage(),
        ], 500);
    }
}
