<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
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
        'is_free',
        'featured_image',
        'status',
        'organizer_id'
    ];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function agendas()
    {
        return $this->hasMany(EventAgenda::class);
    }

    public function speakers()
    {
        return $this->hasMany(Speaker::class);
    }

    public function tags()
    {
        return $this->hasMany(EventTag::class);
    }
}
