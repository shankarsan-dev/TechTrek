<?php

// app/Policies/EventPolicy.php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;

class EventPolicy
{
    public function delete(User $user, Event $event)
    {
        // Organizer can only delete their own events
        if ($user->role === 'organizer') {
            return $user->id === $event->organizer_id;
        }
        
        // Admin can delete any event
        if ($user->role === 'admin') {
            return true;
        }
        
        return false;
    }
}