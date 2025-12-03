<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\UserPreferenceController;
use App\Http\Controllers\AttendeesController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\UserController;


use App\Http\Controllers\NotificationController;    

/*

|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::post('/check-in', [BookingController::class, 'checkInBooking']);
Route::post('/verify-qr', [BookingController::class, 'verifyQrCode']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/events/upcoming', [EventController::class, 'upcomingEvents']);
Route::get('/events/nearest', [EventController::class, 'nearestEvents']);
Route::get('/events/{id}', [EventController::class, 'showEvent']);


 Route::get('/events', [EventController::class, 'index']);
 Route::get('profile/{id}/', [UserController::class, 'getPublicProfile']);
/*
|--------------------------------------------------------------------------
| Protected Routes (JWT Auth)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:api')->group(function () {
    // Get authenticated user's own profile
    Route::get('/user/profile', [UserController::class, 'getMyProfile']);
    
    // Update profile
    Route::put('/profile', [UserController::class, 'updateProfile']);
    
    // Change password
    Route::put('/profile/password', [UserController::class, 'changePassword']);
});


Route::middleware('auth:api')->group(function () {

    Route::post('/logout', [LoginController::class, 'logout']);
    // User-specific routes
        Route::get('/user-bookings', [BookingController::class, 'getUserBookings']);
   
    Route::get('/attendees', [AttendeesController::class, 'getOrganizerBookings']);
      Route::put('/attendees/{bookingId}/check-in', [AttendeesController::class, 'checkIn']);
    Route::post('/user/preferences', [UserPreferenceController::class, 'updatePreferences']);
    Route::get('/user/preferences', [UserPreferenceController::class, 'getUserPreferences']);
    Route::get('/recommended-events', [EventController::class, 'recommendedEvents']);
    Route::get("/top-tags", [EventController::class, "topTags"]);
      Route::post("/bookings",[BookingController::class,"store"]);
      Route::put("/bookings/{id}/cancel",[BookingController::class,"cancelBooking"]);
    // Organizer-specific routes
        Route::post('/events', [EventController::class, 'store']);
        Route::get('/organizer/events', [EventController::class, 'organizerEvents']);
         Route::get('/organizer/events/{id}', [EventController::class, 'showOrganizerEvent']);
   

        
//Admin-specific routes
        Route::get("/admin-test", function() {
            return response()->json(["message" => "Admin access granted"]);
        }); 
        Route::get('/admin/stats/{period?}', [AdminController::class, 'stats']);
        Route::get('/admin/recent-activity', [AdminController::class, 'recentActivity']);
        
Route::get('/admin/get-users', [AdminController::class, 'allUsers']);
Route::get('/admin/get-organizers', [AdminController::class, 'organizers']);

Route::get('/admin/users/normal', [AdminController::class, 'normalUsers']);

Route::post('/admin/approve', [AdminController::class, 'updateOrganizerStatus']);
    // Route::post('/admin/organizers/{id}/reject', [AdminController::class, 'reject']);
    // Route::post('/admin/organizers/{id}/cancel', [AdminController::class, 'cancel']);

});


Route::middleware('auth:api')->group(function () {
    Route::get('/secure-documents/{userId}/{filename}', [DocumentController::class, 'viewDocument']);
    Route::get('/secure-documents/{userId}/{filename}/download', [DocumentController::class, 'downloadDocument']);
});