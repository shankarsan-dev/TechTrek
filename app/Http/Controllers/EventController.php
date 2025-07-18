<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\EventAgenda;
use App\Models\EventSpeaker;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;


class EventController extends Controller
{
    // List all events
    public function index()
    {
        return Event::with(['agendaItems', 'speakers', 'tags'])->get();
    }

    // Show a specific event
    public function show($slug)
    {
        $event = Event::where('slug', $slug)->with(['agendaItems', 'speakers', 'tags'])->firstOrFail();
        return response()->json($event);
    }

    // Store a new event
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'        => 'required|string|max:255',
            'description'  => 'required|string',
            'location'     => 'required|string',
            'venue'        => 'nullable|string',
            'date'         => 'required|date',
            'start_time'   => 'required|date_format:H:i',
            'end_time'     => 'required|date_format:H:i|after:start_time',
            'price'        => 'nullable|numeric',
            'discount_price' => 'nullable|numeric',
            'capacity'     => 'nullable|integer',
            'latitude'     => 'nullable|numeric',
            'longitude'    => 'nullable|numeric',
            'image_url'    => 'nullable|url',
            'organizer_id' => 'required|exists:users,id',

            'agenda'       => 'nullable|array',
            'agenda.*.time' => 'required_with:agenda|date_format:H:i',
            'agenda.*.title' => 'required_with:agenda|string',
            'agenda.*.description' => 'nullable|string',

            'speakers'     => 'nullable|array',
            'speakers.*.name' => 'required_with:speakers|string',
            'speakers.*.title' => 'required_with:speakers|string',
            'speakers.*.bio' => 'nullable|string',

            'tags' => 'nullable|array',
            'tags.*' => 'string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create event
        $event = Event::create([
            'title'        => $request->title,
            'slug'         => Str::slug($request->title) . '-' . uniqid(),
            'description'  => $request->description,
            'location'     => $request->location,
            'venue'        => $request->venue,
            'latitude'     => $request->latitude,
            'longitude'    => $request->longitude,
            'date'         => $request->date,
            'start_time'   => $request->start_time,
            'end_time'     => $request->end_time,
            'price'        => $request->price,
            'discount_price' => $request->discount_price,
            'capacity'     => $request->capacity,
            'organizer_id' => $request->organizer_id,
            'image_url'    => $request->image_url ?? 'https://via.placeholder.com/600x400?text=Event+Image',
        ]);

        // Create agenda items
        if ($request->has('agenda')) {
            foreach ($request->agenda as $item) {
                $event->agendaItems()->create($item);
            }
        }

        // Create speakers
        if ($request->has('speakers')) {
            foreach ($request->speakers as $speaker) {
                $event->speakers()->create($speaker);
            }
        }

        // Attach tags
        if ($request->has('tags')) {
            $tagIds = [];
            foreach ($request->tags as $tagName) {
                $tag = Tag::firstOrCreate(['name' => $tagName]);
                $tagIds[] = $tag->id;
            }
            $event->tags()->sync($tagIds);
        }

        return response()->json($event->load(['agendaItems', 'speakers', 'tags']), 201);
    }

    // Recommend similar events based on tags
    public function recommend($slug)
    {
        $event = Event::where('slug', $slug)->with('tags')->firstOrFail();

        $recommended = Event::where('id', '!=', $event->id)
            ->whereHas('tags', function ($query) use ($event) {
                $query->whereIn('tags.id', $event->tags->pluck('id'));
            })
            ->with('tags')
            ->limit(5)
            ->get();

        return response()->json($recommended);
    }
}
