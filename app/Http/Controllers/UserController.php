<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

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
                    'profile_picture' => $user->profile_picture_url, // Add this
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
                    'profile_picture' => $user->profile_picture_url, // Add this
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
    // app/Http/Controllers/UserController.php
public function updateProfile(Request $request)
{
    $user = auth()->user();
    
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'phone' => 'nullable|string|max:20',
        'city' => 'nullable|string|max:100',
        'country' => 'nullable|string|max:100',
        'organization_name' => 'nullable|string|max:255',
        
    ]);
    
    $user->update($validated);
    
    return response()->json([
        'message' => 'Profile updated successfully',
        'user' => $user
    ]);
}
public function changePassword(Request $request)
    {
        try {
            $user = Auth::user();
            
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not authenticated'
                ], 401);
            }
            
            // Validate request
            $request->validate([
                'current_password' => 'required|string',
                'new_password' => 'required|string|min:8|confirmed',
            ]);
            
            // Check current password
            if (!Hash::check($request->current_password, $user->password)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Current password is incorrect'
                ], 400);
            }
            
            // Check if new password is same as current password
            if (Hash::check($request->new_password, $user->password)) {
                return response()->json([
                    'success' => false,
                    'message' => 'New password cannot be the same as current password'
                ], 400);
            }
            
            // Update password
            $user->password = Hash::make($request->new_password);
            $user->save();
            
            return response()->json([
                'success' => true,
                'message' => 'Password changed successfully'
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to change password',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
public function uploadProfilePicture(Request $request)
{
    $request->validate([
        'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // 5MB
    ]);

    $user = auth()->user();
    
    // Delete old profile picture if exists
    if ($user->profile_picture) {
        Storage::delete($user->profile_picture);
    }
    
    // Store new profile picture
    $path = $request->file('profile_picture')->store('profile-pictures', 'public');
    
    // Update user record
    $user->update(['profile_picture' => $path]);
    
    return response()->json([
        'message' => 'Profile picture uploaded successfully',
        'profile_picture_url' => $user->profile_picture_url
    ]);
}

public function removeProfilePicture()
{
    $user = auth()->user();
    
    if ($user->profile_picture) {
        Storage::delete($user->profile_picture);
        $user->update(['profile_picture' => null]);
    }
    
    return response()->json([
        'message' => 'Profile picture removed successfully'
    ]);
}

}
