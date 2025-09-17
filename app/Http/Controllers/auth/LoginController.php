<?php
// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Tymon\JWTAuth\Facades\JWTAuth;
// use Illuminate\Support\Facades\Validator;
// use App\Models\User;

// class LoginController extends Controller
// {
//     public function login(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'email' => 'required|email|max:100',
//             'password' => 'required|string|min:8',
//             'organizationName' => 'sometimes|string|max:255', // optional for organizers
//         ]);

//         if ($validator->fails()) {
//             return response()->json([
//                 'message' => 'Validation failed',
//                 'errors' => $validator->errors()
//             ], 422);
//         }

//         $credentials = $request->only('email', 'password');

//         if (!$token = JWTAuth::attempt($credentials)) {
//             return response()->json(['message' => 'Invalid credentials'], 401);
//         }

//         $user = Auth::user();

//         // If the user is an organizer, check organization name
//         if ($user->role === 'organizer') {
//             if (!$request->filled('organizationName') || $request->organizationName !== $user->organization_name) {
//                 return response()->json([
//                     'message' => 'Organization name mismatch'
//                 ], 403);
//             }

//             // Optional: check if organizer is verified
//             // if (!$user->is_verified) {
//             //     return response()->json([
//             //         'message' => 'Your account is not verified yet'
//             //     ], 403);
//             // }
//         }

//         return response()->json([
//             'token' => $token,
//             'user' => [
//                 'id' => $user->_id,
//                 'name' => $user->name,
//                 'email' => $user->email,
//                 'role' => $user->role,
//                 'organization_name' => $user->organization_name,
//                 'kyc_document_url' => $user->kyc_document_path ? asset('storage/' . $user->kyc_document_path) : null,
//                 'is_verified' => $user->is_verified,
//                 'created_at' => $user->created_at,
//                 'updated_at' => $user->updated_at,
//             ]
//         ], 200);
//     }
// } -->

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * Login a user and return JWT token
     */
    public function login(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:100',
            'password' => 'required|string|min:8',
            'organizationName' => 'sometimes|string|max:255', // optional for organizers
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $credentials = $request->only('email', 'password');

        // Attempt login
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Get the authenticated user
        $user = auth()->user(); // This works because JWT middleware parses token

        // Organizer-specific check
        if ($user->role === 'organizer') {
            if (!$request->filled('organizationName') || $request->organizationName !== $user->organization_name) {
                return response()->json([
                    'message' => 'Organization name mismatch'
                ], 403);
            }

            // Optional: check verification
            // if (!$user->is_verified) {
            //     return response()->json([
            //         'message' => 'Your account is not verified yet'
            //     ], 403);
            // }
        }

        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->_id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'organization_name' => $user->organization_name,
                'kyc_document_url' => $user->kyc_document_path ? asset('storage/' . $user->kyc_document_path) : null,
                'is_verified' => $user->is_verified,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ], 200);
    }

    /**
     * Logout user (invalidate token)
     */
    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json(['message' => 'Successfully logged out']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to logout', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Return currently authenticated user
     */
    public function me()
    {
        return response()->json([
            'user' => auth()->user()
        ]);
    }
}
