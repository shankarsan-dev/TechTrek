<?php


// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\UserPreference;
// use App\Models\Event;
// use Illuminate\Support\Facades\Auth;

// class UserPreferenceController extends Controller
// {
//     public function store(Request $request)
//     {
//         $request->validate([
//             'event_id' => 'required|string|exists:events,_id',
//             'interaction_type' => 'required|string|in:view,bookmark,registration',
//         ]);

//         $user = Auth::user();
//         $event = Event::findOrFail($request->event_id);

//         foreach ($event->tags as $tag) {
//             UserPreference::create([
//                 'user_id' => $user->_id,
//                 'event_id' => $event->_id,
//                 'tag' => $tag,
//                 'interaction_type' => $request->interaction_type,
//             ]);
//         }

//         return response()->json([
//             'success' => true,
//             'message' => 'User preferences recorded successfully',
//         ]);
//     }

//     // Optional: Fetch top tags for a user
//     public function topTags()
//     {
//         $userId = Auth::id();

//         $result = UserPreference::raw(function($collection) use ($userId) {
//             return $collection->aggregate([
//                 ['$match' => ['user_id' => $userId]],
//                 ['$group' => ['_id' => '$tag', 'count' => ['$sum' => 1]]],
//                 ['$sort' => ['count' => -1]],
//                 ['$limit' => 5]
//             ]);
//         });

//         return response()->json([
//             'success' => true,
//             'tags' => $result,
//         ]);
//     }
// }


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserPreference;
use Illuminate\Support\Facades\Auth;

class UserPreferenceController extends Controller
{
    /**
     * Update user preferences when viewing an event.
     */
    public function updatePreferences(Request $request)
    {
        $user = Auth::user()->id;
        $eventId = $request->input('event_id');
        $tags = $request->input('tags', []); // tags as array
        $interactionType = $request->input('interaction_type', 'view'); // default view
        $scoreIncrement = $interactionType === 'registration' ? 5 : 1;

        foreach ($tags as $tag) {
            UserPreference::updateOrCreate(
                [
                    'user_id' => $user->_id,
                    'event_id' => $eventId,
                    'tags' => $tag,
                    'interaction_type' => $interactionType,
                ],
                [
                    '$inc' => ['score' => $scoreIncrement], // increment score in MongoDB
                ]
            );
        }

        return response()->json(['success' => true, 'message' => 'User preferences updated']);
    }

    /**
     * Get user preferences for recommendations
     */
    public function getUserPreferences(Request $request)
    {
        $user = Auth::user();

        $preferences = UserPreference::where('user_id', $user->_id)
            ->orderByDesc('score')
            ->get();

        return response()->json($preferences);
    }
}
