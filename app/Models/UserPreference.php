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


// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class UserPreference extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'user_preferences';

//     public $timestamps = true; // auto-manage created_at & updated_at

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

//     // Set default score on creating
//     protected static function booted()
//     {
//         static::creating(function ($model) {
//             if ($model->score === null) {
//                 $model->score = 0;
//             }
//         });
//     }

//     /**
//      * Increment score, limited to once per day
//      */
//     public function incrementScoreDaily($value = 1)
//     {
//         $today = now()->startOfDay();

//         // Increment only if last update was before today
//         if (!$this->updated_at || $this->updated_at < $today) {
//             $this->score = ($this->score ?? 0) + $value;
//             $this->save();
//         }

//         return $this;
//     }
//}


// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class UserPreference extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'user_preferences';

//     public $timestamps = true; // auto-manage created_at & updated_at

//     protected $fillable = [
//         'user_id',
//         'event_id',
//         'tag',
//         'interaction_type',
//         'score',
//     ];

//     protected $casts = [
//         'user_id' => 'string',     // ✅ Force ID to be stored as string
//         'event_id' => 'string',    // ✅ Prevent storing event_id as object
//         'score' => 'integer',
//     ];

//     /**
//      * Automatically set default score if not defined
//      */
//     protected static function booted()
//     {
//         static::creating(function ($model) {
//             if ($model->score === null) {
//                 $model->score = 0;
//             }

//             // ✅ Force user_id and event_id to strings before saving
//             if (is_object($model->user_id) && property_exists($model->user_id, '_id')) {
//                 $model->user_id = (string) $model->user_id->_id;
//             }
//             if (is_object($model->event_id) && property_exists($model->event_id, '_id')) {
//                 $model->event_id = (string) $model->event_id->_id;
//             }
//         });
//     }

//     /**
//      * Increment score only once per day
//      */
//     public function incrementScoreDaily($value = 1)
//     {
//         $today = now()->startOfDay();

//         if (!$this->updated_at || $this->updated_at < $today) {
//             $this->score = ($this->score ?? 0) + $value;
//             $this->save();
//         }

//         return $this;
//     }
// }

// namespace App\Models;

// use MongoDB\Laravel\Eloquent\Model;

// class UserPreference extends Model
// {
//     protected $connection = 'mongodb';
//     protected $collection = 'user_preferences';

//     public $timestamps = true; // auto-manage created_at & updated_at

//     protected $fillable = [
//         'user_id',
//         'event_id',
//         'tag',
//         'interaction_type',
//         'score',
//     ];

//     protected $casts = [
//         'user_id' => 'string',
//         'event_id' => 'string',
//         'score' => 'integer',
//     ];

//     protected static function booted()
//     {
//         static::creating(function ($model) {
//             // default score
//             if ($model->score === null) {
//                 $model->score = 1; // initial score
//             }

//             // Force IDs to strings
//             if (is_object($model->user_id) && property_exists($model->user_id, '_id')) {
//                 $model->user_id = (string) $model->user_id->_id;
//             }
//             if (is_object($model->event_id) && property_exists($model->event_id, '_id')) {
//                 $model->event_id = (string) $model->event_id->_id;
//             }
//         });
//     }

//     /**
//      * Create a preference only if it doesn't exist
//      */
//     public static function createUnique($userId, $eventId, $tag, $interactionType = 'view', $score = 1)
//     {
//         $userId = (string) $userId;
//         $eventId = (string) $eventId;

//         // Check if record already exists
//         $exists = self::where('user_id', $userId)
//             ->where('event_id', $eventId)
//             ->where('interaction_type', $interactionType)
//             ->first();

//         if ($exists) {
//             return $exists; // just return existing record, do NOT increment
//         }

//         // Create new record
//         return self::create([
//             'user_id' => $userId,
//             'event_id' => $eventId,
//             'tag' => $tag,
//             'interaction_type' => $interactionType,
//             'score' => $score,
//         ]);
//     }
// }
namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class UserPreference extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'user_preferences';

    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'interaction_type', // e.g., 'view', 'booking'
        'tag_scores',       // dynamic tag scores stored as key-value
    ];

    protected $casts = [
        'user_id' => 'string',
        'tag_scores' => 'array',
    ];

    protected static function booted()
    {
        static::creating(function ($model) {
            // Ensure tag_scores exists
            if (!isset($model->tag_scores) || !is_array($model->tag_scores)) {
                $model->tag_scores = [];
            }

            // Force user_id to string
            if (is_object($model->user_id) && property_exists($model->user_id, '_id')) {
                $model->user_id = (string) $model->user_id->_id;
            }
        });
    }

    /**
     * Increment scores for multiple tags in a single document
     *
     * @param string $userId
     * @param array $tags
     * @param string $interactionType
     * @param int|array $weights Optional weight per tag or single integer
     * @return UserPreference
     */
    public static function incrementTags($userId, array $tags, $interactionType = 'view', $weights = 1)
    {
        $userId = (string) $userId;

        // Find or create the single preference document for this user + interaction type
        $pref = self::firstOrCreate(
            ['user_id' => $userId, 'interaction_type' => $interactionType],
            ['tag_scores' => []]
        );

        $tagScores = $pref->tag_scores ?? [];

        foreach ($tags as $tag) {
            // Determine increment: allow single weight or array of weights
            $increment = is_array($weights) && isset($weights[$tag]) ? $weights[$tag] : (int)$weights;

            if (!isset($tagScores[$tag])) {
                $tagScores[$tag] = $increment; // first-time score
            } else {
                $tagScores[$tag] += $increment; // increment existing
            }
        }

        $pref->tag_scores = $tagScores;
        $pref->save();

        return $pref;
    }

    /**
     * Optional: apply decay to all tag scores
     *
     * @param float $decayRate 0 < decayRate <= 1
     */
    public function applyDecay($decayRate = 0.95)
    {
        foreach ($this->tag_scores as $tag => $score) {
            $this->tag_scores[$tag] = round($score * $decayRate, 2);
        }

        $this->save();
    }
}
