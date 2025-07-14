<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Exception;

class AuthController extends Controller
{

    /**
     * Register a new user and return JWT token
     */
    public function register(Request $request)
    {
        try {
            // Validate input
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6|confirmed',
                'role' => 'required|string|in:user,organizer,admin',
            ]);
            Log::info('User registered');
            if ($validator->fails()) {
                Log::warning('Validation failed during registration', [
                    'errors' => $validator->errors()->toArray(),
                    'email' => $request->email
                ]);

                return response()->json([
                    'message' => 'Validation failed',
                    'errors' => $validator->errors(),
                ], 422);
            }

            // Create user
            $user = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => Hash::make($request->password),
                'role'     => $request->role,
            ]);

            Log::info('User registered successfully', [
                'email' => $user->email,
                'role'  => $user->role
            ]);

            // Generate JWT token
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];
            $token = auth('api')->attempt($credentials);

            return response()->json([
                'message' => 'User successfully registered',
                'user'    => $user,
                'token'   => $token,
            ], 201);

        } catch (Exception $e) {
            Log::error('Register error', [
                'error' => $e->getMessage(),
                'email' => $request->email ?? null,
            ]);

            return response()->json([
                'message' => 'Registration failed',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }


    public function login(Request $request)
{
    try {
        // Validate input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            Log::warning('Validation failed during login', [
                'errors' => $validator->errors()->toArray(),
                'email' => $request->email
            ]);

            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $credentials = $request->only('email', 'password');

        // Attempt to login using JWT
        if (!$token = auth('api')->attempt($credentials)) {
            Log::notice('Login failed: Invalid credentials', ['email' => $request->email]);

            return response()->json([
                'message' => 'Invalid email or password',
            ], 401);
        }

        // Success
        $user = auth('api')->user();

        Log::info('User logged in successfully', [
            'email' => $user->email,
            'role'  => $user->role
        ]);

        return response()->json([
            'message' => 'Login successful',
            'user'    => $user,
            'token'   => $token,
        ], 200);

    } catch (Exception $e) {
        Log::error('Login error', [
            'error' => $e->getMessage(),
            'email' => $request->email ?? null,
        ]);

        return response()->json([
            'message' => 'Login failed',
            'error'   => $e->getMessage(),
        ], 500);
    }
}

}
