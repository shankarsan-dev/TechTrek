<?php
// namespace App\Http\Controllers\Auth;
// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Validator;
// use Tymon\JWTAuth\Facades\JWTAuth;
// use App\Models\User;

// class LoginController extends Controller
// {
//     /**
//      * Login a user and return JWT token
//      */
//     public function login(Request $request)
//     {
//         // Validate request
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

//         // Attempt login
//         if (!$token = JWTAuth::attempt($credentials)) {
//             return response()->json(['message' => 'Invalid credentials'], 401);
//         }

//         // Get the authenticated user
//         $user = auth()->user(); // This works because JWT middleware parses token

//         // Organizer-specific check
//         if ($user->role === 'organizer') {
//             if (!$request->filled('organizationName') || $request->organizationName !== $user->organization_name) {
//                 return response()->json([
//                     'message' => 'Organization name mismatch'
//                 ], 403);
//             }

//             // Optional: check verification
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

//     /**
//      * Logout user (invalidate token)
//      */
//     public function logout(Request $request)
//     {
//         try {
//             JWTAuth::invalidate(JWTAuth::getToken());
//             return response()->json(['message' => 'Successfully logged out']);
//         } catch (\Exception $e) {
//             return response()->json(['message' => 'Failed to logout', 'error' => $e->getMessage()], 500);
//         }
//     }

//     /**
//      * Return currently authenticated user
//      */
//     public function me()
//     {
//         return response()->json([
//             'user' => auth()->user()
//         ]);
//     }
// }
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        \Log::info('Login attempt started', ['request' => $request->all()]);

        // Validate request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:100',
            'password' => 'required|string|min:8',
            'organizationName' => 'sometimes|string|max:255', // optional for organizers
        ]);

        if ($validator->fails()) {
            \Log::warning('Validation failed', ['errors' => $validator->errors()]);
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $credentials = $request->only('email', 'password');
        \Log::info('Credentials received', ['credentials' => $credentials]);

        try {
            // Attempt login
            if (!$token = JWTAuth::attempt($credentials)) {
                \Log::warning('Invalid credentials', ['email' => $request->email]);
                return response()->json(['message' => 'Invalid credentials'], 401);
            }
        } catch (\Exception $e) {
            \Log::error('JWT token creation failed', ['exception' => $e->getMessage()]);
            return response()->json(['message' => 'Could not create token', 'error' => $e->getMessage()], 500);
        }

        // Get the authenticated user
        $user = auth()->user();
        \Log::info('User authenticated', ['user' => $user]);

        // Organizer-specific check
        if ($user->role === 'organizer') {
            if (!$request->filled('organizationName') || $request->organizationName !== $user->organization_name) {
                \Log::warning('Organization name mismatch', [
                    'provided' => $request->organizationName,
                    'expected' => $user->organization_name
                ]);
                return response()->json(['message' => 'Organization name mismatch'], 403);
            }
        }

        \Log::info('Login successful', ['user_id' => $user->_id, 'token' => $token]);

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

    public function logout(Request $request)
    {
        try {
            $token = JWTAuth::getToken();
            \Log::info('Logout attempt', ['token' => $token]);

            JWTAuth::invalidate($token);

            \Log::info('Logout successful');
            return response()->json(['message' => 'Successfully logged out']);
        } catch (\Exception $e) {
            \Log::error('Logout failed', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to logout', 'error' => $e->getMessage()], 500);
        }
    }

    public function me()
    {
        $user = auth()->user();
        \Log::info('Fetch current user', ['user' => $user]);
        return response()->json(['user' => $user]);
    }
}
