<?php
namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
class Ticket extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'tickets';

    protected $fillable = [
        'event_id',
        'organizer_id',
        'name',              // frontend sends this
        'type',              // optional
        'price',
        'quantity',          // capacity 
        'description',
        'sale_start_date',
        'sale_end_date',
        'is_free',
        'sold',
    ];
    
    function event()
    {
        return $this->belongsTo(Event::class, 'event_id', '_id');
    }
   
}
