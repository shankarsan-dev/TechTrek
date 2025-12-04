<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use MongoDB\Laravel\Eloquent\Model as Eloquent;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Eloquent implements AuthenticatableContract, JWTSubject
{
    use Authenticatable, SoftDeletes;

    // Use the 'mongodb' connection
    protected $connection = 'mongodb';

    // Optional: specify the collection name (default: 'users')
    protected $collection = 'users';

    // Fillable fields for mass assignment
    protected $fillable = [
        // 'name',
        // 'email',
        // 'password',
        // 'role',
        // 'organization_name',
        // 'kyc_document_path',
        // 'phone',
     
        'name',
        'email',
        'phone',
        'country',
        'city',
        'password',
        'role',
        'organization_name',
        'kyc_document_path',
        'status',
        'profile_picture'
    ];

    // Hidden fields from JSON responses
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Casts for attributes
    protected $casts = [
        'email_verified_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    // Dates to be treated as Carbon instances
    protected $dates = ['deleted_at'];

    // JWT: Get the identifier that will be stored in the token
    public function getJWTIdentifier()
    {
        return $this->getKey(); // Returns the _id
    }

    // JWT: Return any custom claims to be added to the token
    public function getJWTCustomClaims()
    {
        return [
            'id' => $this->getKey(),
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->role,
            'phone' => $this->phone,
        ];
    }

    // Optional: Mutator for email (force lowercase)
    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value);
    }

    // Optional: Accessor for role (default to 'user')
    public function getRoleAttribute($value)
    {
        return $value ?: 'user';
    }
    
     public function getProfilePictureUrlAttribute()
    {
        if ($this->profile_picture) {
            // Return full URL
            return Storage::url($this->profile_picture);
        }
        
        return null;
    }
}