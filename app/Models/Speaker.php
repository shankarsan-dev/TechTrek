<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// Speaker.php
class Speaker extends Model
{
    protected $fillable = ['event_id', 'name', 'profession'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}

