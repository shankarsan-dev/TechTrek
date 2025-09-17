<?php

// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class Event extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'events';
//     protected $primaryKey = '_id';

//     protected $fillable = [
//         'title',
//         'description',
//         'category_id',
//         'start_date',
//         'end_date',
//         'start_time',
//         'end_time',
//         'venue_name',
//         'location',
//         'address',
//         'capacity',
//         'featured_image',
//         'agenda',
//         'tags',
//         'organizer_id',
//         'speakers',
//     ];

//     protected $casts = [
//         'capacity'   => 'integer',
//         'is_free'    => 'boolean',
//         'tags'       => 'array',
//         'agenda'     => 'array',
//         'speakers'   => 'array',
//         'start_date' => 'date',
//         'end_date'   => 'date',
//     ];
// }
namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Event extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'events';
    protected $primaryKey = '_id';

    protected $fillable = [
        'title',
        'description',
        'category_id',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'venue_name',
        'location',
        'address',
        'capacity',
        'featured_image',
        'agenda',
        'tags',
        'organizer_id',
        'speakers',
    ];

    protected $casts = [
        'capacity'   => 'integer',
        'is_free'    => 'boolean',
        'tags'       => 'array',
        'agenda'     => 'array',
        'speakers'   => 'array',
        'start_date' => 'date',
        'end_date'   => 'date',
    ];

    // Add this relationship if tickets are in a separate collection
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'event_id', '_id');
    }

    // Optional: Category relationship
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', '_id');
    }
}
