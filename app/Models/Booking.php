<?php
// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class Booking extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'bookings';

//     protected $fillable = [
//         'event_id',
//         'ticket_id',
//         'user_id',
//         'quantity',
//         'qr_code',
//         'checked_in'
//     ];
// }

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Booking extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'bookings';

    protected $fillable = [
        'event_id',       // ObjectId of the event
        'ticket_id',      // ObjectId of the ticket
        'user_id',        // ObjectId of the user
        'quantity',       // Number of tickets booked
        'qr_code',        // QR code string
        'checked_in',     // Boolean: has the user checked in
        'status',         // "active" or "cancelled"
    ];

    protected $attributes = [
        'quantity' => 1,
        'checked_in' => false,
        'status' => 'active',
    ];

    /**
     * Optional: cast fields to proper types
     */
    protected $casts = [
        'quantity' => 'integer',
        'checked_in' => 'boolean',
        'status' => 'string',
    ];

    function event()
    {
        return $this->belongsTo(Event::class, 'event_id', '_id');
    }
     function Ticket()
    {
        return $this->belongsTo(Ticket::class, 'ticket_id', '_id');
    }
}
