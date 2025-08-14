<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class EventAgenda extends Model
{
    protected $fillable = [
        'event_id',
        'time',
        'description'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
