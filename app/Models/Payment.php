<?php

namespace App\Models;

use Mongodb\Laravel\Eloquent\Model;

class Payment extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'payments';

    protected $fillable = [
        'ticket_id',
        'user_id',
        'amount',
        'status',
        'esewa_data',
    ];

    protected $casts = [
        'esewa_data' => 'array',
    ];
}
