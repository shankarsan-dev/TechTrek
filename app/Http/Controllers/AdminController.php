<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Event;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminController extends Controller
{
    // Example: Stats endpoint
    public function stats($period = '30')
    {
        // Get user from JWT
        $user = JWTAuth::parseToken()->authenticate();

        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $fromDate = now()->subDays($period);

        $totalOrganizers = User::where('role', 'organizer')->count();
        $pendingOrganizers = User::where('role', 'organizer')
            ->where('status', 'pending')
            ->count();
        $verifiedOrganizers = User::where('role', 'organizer')
            ->where('status', 'verified')
            ->count();

        $totalEvents = Event::count();
        $pendingEvents = Event::where('status', 'pending')->count();
        $totalAttendees = User::where('role', 'user')->count(); 
        $totalUsers = User::count();

        $organizersChange = $pendingOrganizers; 
        $eventsChange = $pendingEvents;
        $usersChange = 0;

        return response()->json([
            'total_organizers' => $totalOrganizers,
            'pending_organizers' => $pendingOrganizers,
            'verified_organizers' => $verifiedOrganizers,
            'total_events' => $totalEvents,
            'total_attendees' => $totalAttendees,
            'total_users' => $totalUsers,

              // 'pending_events' => $pendingEvents,
            // 'organizers_change' => $organizersChange,
            // 'events_change' => $eventsChange,
            // 'users_change' => $usersChange,
        ]);
    }

    // Example: Recent activity
    public function recentActivity()
    {   
        $user = auth()->user();


        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $activities = [
            [
                'id' => 1,
                'type' => 'organizer_registered',
                'message' => 'New organizer registration: TechCorp Events',
                'timestamp' => now()->subHours(2),
                'status' => 'pending',
            ],
            [
                'id' => 2,
                'type' => 'event_reported',
                'message' => 'Event reported: React Conference 2024',
                'timestamp' => now()->subHours(3),
                'status' => 'review',
            ],
            [
                'id' => 3,
                'type' => 'organizer_verified',
                'message' => 'Organizer verified: Innovation Hub',
                'timestamp' => now()->subHours(5),
                'status' => 'completed',
            ],
        ];

        return response()->json(['data' => $activities]);
    }
    public function allUsers(Request $request)
{
    $admin = auth()->user();
    if ($admin->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $query = User::all();

    // ROLE filter
    if ($request->has('role')) {
        $query->where('role', $request->role);
    }

    // STATUS filter (for organizers)
    if ($request->has('status')) {
        $query->where('status', $request->status);
    }

    // SEARCH (name, email, phone)
    if ($request->has('search')) {
        $search = $request->search;

        $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%$search%")
              ->orWhere('email', 'LIKE', "%$search%")
              ->orWhere('phone', 'LIKE', "%$search%");
        });
    }

    // PAGINATION (defaults to 20 per page)
    // $users = $query->paginate(20);

    return response()->json([
        'status' => true,
        'data' => $query,
    ]);
}

//   public function organizers()
//     {
//          $admin = auth()->user();
//      if ($admin->role !== 'admin') {
//        return response()->json(['message' => 'Unauthorized'], 403);
//     }
//     else{
//         $organizers = User::where('role', 'organizer')
//             ->select('id', 'name', 'email', 'phone', 'organization_name', 'kyc_document_path', 'status', 'created_at')
//             ->orderBy('created_at', 'desc')
//             ->get();

//         return response()->json([
//             'success' => true,
//             'data' => $organizers
//         ]);}
//     }

     // Approve organizer
    public function approve($id)
    {
        $organizer = User::findOrFail($id);

        $organizer->status = 'verified';
        $organizer->save();

        return response()->json([
            'success' => true,
            'message' => 'Organizer verified successfully.',
        ]);
    }

    // Reject organizer
    public function reject(Request $request, $id)
    {
        $organizer = User::findOrFail($id);

        $organizer->status = 'rejected';
        $organizer->save();

        return response()->json([
            'success' => true,
            'message' => 'Organizer rejected successfully.',
        ]);
    }

    // Cancel organizer
    public function cancel($id)
    {
        $organizer = User::findOrFail($id);

        $organizer->status = 'cancelled';
        $organizer->save();

        return response()->json([
            'success' => true,
            'message' => 'Organizer status set to cancelled.',
        ]);
    }
// public function organizers(Request $request)
// {
//     $admin = auth()->user();
//     if ($admin->role !== 'admin') {
//         return response()->json(['message' => 'Unauthorized'], 403);
//     }

//     $query = User::where('role', 'organizer');

//     if ($request->has('status')) {
//         $query->where('status', $request->status);
//     }

//     if ($request->has('search')) {
//         $search = $request->search;
//         $query->where(function ($q) use ($search) {
//             $q->where('name', 'LIKE', "%$search%")
//               ->orWhere('organization_name', 'LIKE', "%$search%");
//         });
//     }

//     $organizers = $query->paginate(20);

//     return response()->json([
//         'status' => true,
//         'total' => $organizers->total(),
//         'data' => $organizers->items(),
//     ]);
// }
public function organizers(Request $request)
{
    $admin = auth()->user();
    if ($admin->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $query = User::where('role', 'organizer');

    // Only apply status filter if it's not empty
    if ($request->has('status') && !empty($request->status) && $request->status !== '') {
        $query->where('status', $request->status);
    }

    // Only apply search filter if it's not empty
    if ($request->has('search') && !empty($request->search) && $request->search !== '') {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%$search%")
              ->orWhere('organization_name', 'LIKE', "%$search%")
              ->orWhere('email', 'LIKE', "%$search%");
        });
    }

    $organizers = $query->paginate(20);

    return response()->json([
        'status' => true,
        'total' => $organizers->total(),
        'data' => $organizers->items(),
    ]);
}
public function normalUsers(Request $request)
{
  $admin = auth()->user();
    if ($admin->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $query = User::where('role', 'user');

    if ($request->has('search')) {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%$search%")
              ->orWhere('email', 'LIKE', "%$search%");
        });
    }

    $users = $query->paginate(20);

    return response()->json([
        'status' => true,
        'total' => $users->total(),
        'data' => $users->items(),
    ]);
}

// public function updateOrganizerStatus(Request $request, $id)
// {
//     $admin = auth()->user();
//     if ($admin->role !== 'admin') {
//         return response()->json(['message' => 'Unauthorized'], 403);
//     }

//     $organizer = User::find($id);
//     if (!$organizer || $organizer->role !== 'organizer') {
//         return response()->json(['message' => 'Organizer not found'], 404);
//     }

//     $validated = $request->validate([
//         'status' => 'required|in:pending,verified,suspended',
//     ]);

//     $organizer->status = $validated['status'];
//     $organizer->save();

//     return response()->json([
//         'status' => true,
//         'message' => 'Organizer status updated successfully',
//         'data' => $organizer,
//     ]);
// }
public function updateOrganizerStatus(Request $request)
{
    $admin = auth()->user();
    if ($admin->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
        'status' => 'required|in:pending,verified,suspended,rejected'
    ]);

    $organizer = User::where('id', $validated['user_id'])
                    ->where('role', 'organizer')
                    ->first();

    if (!$organizer) {
        return response()->json(['message' => 'Organizer not found'], 404);
    }

    $organizer->status = $validated['status'];
    $organizer->save();

    return response()->json([
        'status' => true,
        'message' => 'Organizer status updated successfully',
        'data' => $organizer,
    ]);
}
}
