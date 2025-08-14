<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

// EventTag.php
class EventTag extends Model
{
    protected $fillable = ['event_id', 'tag'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
