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
public function organizers(Request $request)
{
    $admin = auth()->user();
    if ($admin->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $query = User::where('role', 'organizer');

    if ($request->has('status')) {
        $query->where('status', $request->status);
    }

    if ($request->has('search')) {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%$search%")
              ->orWhere('organization_name', 'LIKE', "%$search%");
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

}
