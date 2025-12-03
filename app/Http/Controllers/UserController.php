<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Get authenticated user's own profile
     * Uses auth token, not ID from URL
     */
    public function getMyProfile()
    {
        try {
            // Get authenticated user from token
            $user = Auth::user();
            
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not authenticated',
                    'error' => 'UNAUTHENTICATED'
                ], 401);
            }
            
            // Return the authenticated user's data
            return response()->json([
                'success' => true,
                'message' => 'Profile retrieved successfully',
                'data' => [
                    '_id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'phone' => $user->phone,
                    'country' => $user->country,
                    'city' => $user->city,
                    'role' => $user->role,
                    'organization_name' => $user->organization_name,
                    'kyc_document_path' => $user->kyc_document_path,
                    'status' => $user->status,
                    'updated_at' => $user->updated_at,
                    'created_at' => $user->created_at
                ]
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve profile',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get public profile by ID (for viewing other users' profiles)
     */
    public function getPublicProfile($id)
    {
        try {
            $user = User::find($id);
            
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found'
                ], 404);
            }
            
            // Return only public information (no sensitive data)
            return response()->json([
                'success' => true,
                'message' => 'Public profile retrieved successfully',
                'data' => [
                    '_id' => $user->id,
                    'name' => $user->name,
                    'organization_name' => $user->organization_name,
                    'city' => $user->city,
                    'country' => $user->country,
                    'created_at' => $user->created_at,
                    // Add avatar or other public fields
                ]
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve public profile'
            ], 500);
        }
    }
}