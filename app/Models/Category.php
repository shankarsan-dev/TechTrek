<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Category extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'categories';

    // Use slug as primary key (_id)
    protected $primaryKey = '_id';
    public $incrementing = false;
    protected $keyType = 'string';

    // Only fillable field is "name"
    protected $fillable = [
        '_id',   // slug like "ai-ml"
        'name',  // display name like "AI & Machine Learning"
    ];

    // No timestamps (since you said only name)
    public $timestamps = false;
}
