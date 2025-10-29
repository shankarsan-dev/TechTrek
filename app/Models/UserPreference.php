<?php

// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class UserPreference extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'user_preferences';

//     protected $fillable = [
//         'user_id',
//         'event_id',
//         'tag',
//         'interaction_type',
//         'score',
//     ];

//     protected $casts = [
//         'score' => 'integer',
//     ];

//     // Automatically set default score = 0 if not set
//     protected static function booted()
//     {
//         static::creating(function ($model) {
//             if ($model->score === null) {
//                 $model->score = 0;
//             }
//         });
//     }
// }


namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class UserPreference extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_preferences';

    public $timestamps = true; // auto-manage created_at & updated_at

    protected $fillable = [
        'user_id',
        'event_id',
        'tag',
        'interaction_type',
        'score',
    ];

    protected $casts = [
        'score' => 'integer',
    ];

    // Set default score on creating
    protected static function booted()
    {
        static::creating(function ($model) {
            if ($model->score === null) {
                $model->score = 0;
            }
        });
    }

    /**
     * Increment score, limited to once per day
     */
    public function incrementScoreDaily($value = 1)
    {
        $today = now()->startOfDay();

        // Increment only if last update was before today
        if (!$this->updated_at || $this->updated_at < $today) {
            $this->score = ($this->score ?? 0) + $value;
            $this->save();
        }

        return $this;
    }
}
