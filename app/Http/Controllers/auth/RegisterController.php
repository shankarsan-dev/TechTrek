<?php

// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Str;
// use Illuminate\Support\Facades\Storage;
// use Tymon\JWTAuth\Facades\JWTAuth;

// class RegisterController extends Controller
// {
//     /**
//      * Handle user registration.
//      */
//     public function register(Request $request)
//     {
//         // Validate the incoming request
//         $validator = Validator::make($request->all(), [
//             'name' => [
//                 'required',
//                 'string',
//                 'regex:/^[a-zA-Z\s]+$/',
//                 'min:2',
//                 'max:100',
//                 function ($attribute, $value, $fail) {
//                     $parts = array_filter(explode(' ', $value));
//                     if (count($parts) < 2) {
//                         $fail('Please enter your full name (first and last).');
//                     }
//                     foreach ($parts as $part) {
//                         if (strlen($part) < 2) {
//                             $fail('Each name part must be at least 2 characters.');
//                             return;
//                         }
//                     }
//                 }
//             ],
//             'email' => 'required|email|unique:users,email|max:100',
//             'password' => [
//                 'required',
//                 'string',
//                 'min:8',
//                 'confirmed',
//                 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/',
//                 'regex:/^(?=.*[!@#$%^&*()_+\-=\[\]{};":\\\\|,.<>\\/?])/',
//             ],
//             'role' => 'required|in:user,organizer',
//             'organizationName' => 'required_if:role,organizer|string|max:100',
//             'kycDocument' => 'required_if:role,organizer|file|mimes:jpg,jpeg,png,pdf|max:5120',
//             'terms' => 'required|accepted',
//         ], [
//             'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
//             'terms.accepted' => 'You must agree to the terms and conditions.',
//         ]);

//         if ($validator->fails()) {
//             return response()->json([
//                 'message' => 'Validation failed',
//                 'errors' => $validator->errors()
//             ], 422);
//         }

//         // Handle KYC document upload if organizer
//         $kycPath = null;
//         if ($request->hasFile('kycDocument')) {
//             $file = $request->file('kycDocument');
//             $filename = 'kyc_' . Str::random(32) . '_' . time() . '.' . $file->getClientOriginalExtension();
//             $kycPath = $file->storeAs('kyc_documents', $filename, 'public');
//         }

//         // Create the user in MongoDB
//         $user = User::create([
//             'name' => trim($request->name),
//             'email' => $request->email,
//             'password' => Hash::make($request->password),
//             'role' => $request->role,
//             'organization_name' => $request->role === 'organizer' ? trim($request->organizationName) : null,
//             'kyc_document_path' => $kycPath,
//             'status' => $request->role === 'organizer' ? 'pending' : 'verified',
//         ]);

//         // Generate JWT token
//         $token = JWTAuth::fromUser($user);

//         // Return success response
//         return response()->json([
//             'token' => $token,
//             'user' => [
//                 'id' => $user->_id,
//                 'name' => $user->name,
//                 'email' => $user->email,
//                 'role' => $user->role,
//                 'organization_name' => $user->organization_name,
//                 'kyc_document_url' => $kycPath ? asset('storage/' . $kycPath) : null,
//                 'created_at' => $user->created_at,
//                 'updated_at' => $user->updated_at,
//             ],
//             'message' => 'Registration successful'
//         ], 201);
//     }
// }


namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;

class RegisterController extends Controller
{
    /**
     * Handle user registration.
     */
    public function register(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                'regex:/^[a-zA-Z\s]+$/',
                'min:2',
                'max:100',
                function ($attribute, $value, $fail) {
                    $parts = array_filter(explode(' ', $value));
                    if (count($parts) < 2) {
                        $fail('Please enter your full name (first and last).');
                    }
                    foreach ($parts as $part) {
                        if (strlen($part) < 2) {
                            $fail('Each name part must be at least 2 characters.');
                            return;
                        }
                    }
                }
            ],
            'email' => 'required|email|unique:users,email|max:100',
            'phone' => [
                'required',
                'string',
                'max:20',
                'regex:/^\+?[\d\s\-\(\)]{10,}$/',
            ],
            'country' => 'required|string|max:50',
            'city' => 'required|string|max:50',
            'password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/',
                'regex:/^(?=.*[!@#$%^&*()_+\-=\[\]{};":\\\\|,.<>\\/?])/',
            ],
            'role' => 'required|in:user,organizer',
            'organizationName' => 'required_if:role,organizer|string|max:100',
            'kycDocument' => 'required_if:role,organizer|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'terms' => 'required|accepted',
        ], [
            'phone.regex' => 'Please enter a valid phone number.',
            'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            'terms.accepted' => 'You must agree to the terms and conditions.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        // Handle KYC document upload if organizer
        $kycPath = null;
        if ($request->hasFile('kycDocument')) {
            $file = $request->file('kycDocument');
            $filename = 'kyc_' . Str::random(32) . '_' . time() . '.' . $file->getClientOriginalExtension();
            $kycPath = $file->storeAs('kyc_documents', $filename, 'private');
        }

        // Create the user in MongoDB
        $user = User::create([
            'name' => trim($request->name),
            'email' => $request->email,
            'phone' => trim($request->phone),
            'country' => $request->country,
            'city' => $request->city,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'organization_name' => $request->role === 'organizer' ? trim($request->organizationName) : null,
            'kyc_document_path' => $kycPath,
            'status' => $request->role === 'organizer' ? 'pending' : 'verified',
            'profile_picture' => null,
        ]);

        // Generate JWT token
        $token = JWTAuth::fromUser($user);

        // Return success response
        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->_id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'country' => $user->country,
                'city' => $user->city,
                'role' => $user->role,
                'organization_name' => $user->organization_name,
                'kyc_document_url' => $kycPath ? asset('storage/' . $kycPath) : null,
                'status' => $user->status,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ],
            'message' => 'Registration successful'
        ], 201);
    }
}