<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\BookingController;
/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/events/upcoming', [EventController::class, 'upcomingEvents']);
Route::get('/events/nearest', [EventController::class, 'nearestEvents']);
Route::get('/events/{id}', [EventController::class, 'showEvent']);

/*
|--------------------------------------------------------------------------
| Protected Routes (JWT Auth)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:api')->group(function () {
    // Logout for all authenticated users
    Route::post('/logout', [LoginController::class, 'logout']);
    // User-specific routes
        Route::get('/events', [EventController::class, 'index']);
        //Route::get('/events/{slug}', [EventController::class, 'show']);
        Route::get('/events/{slug}/recommend', [EventController::class, 'recommend']);
      
    // Organizer-specific routes

        Route::post('/events', [EventController::class, 'store']);
        Route::get('/organizer/events', [EventController::class, 'organizerEvents']);
        Route::get('/organizer/events/{id}', [EventController::class, 'showOrganizerEvent']);
        Route::put('/organizer/events/{slug}', [EventController::class, 'update']);
        Route::delete('/organizer/events/{slug}', [EventController::class, 'destroy']);

});

Route::middleware('auth:api')->get('/test-user', function (Request $request) {
    $user = auth()->user(); // fetch user from JWT
    return response()->json([
        'success' => true,
        'user' => $user,
    ]);
});




Route::get('/bookings', [BookingController::class, 'index']); // List bookings for authenticated user
Route::post('/bookings', [BookingController::class, 'store']); // Create a booking
Route::put('/bookings/{id}/cancel', [BookingController::class, 'cancelBooking']); // Cancel a booking


Route::post('/pay/{ticket}', [PaymentController::class, 'pay']); // API endpoint to start payment
Route::post('/verify', [PaymentController::class, 'verify'])->name('api.payment.verify'); // Verification callback

Route::get('/user-bookings', [BookingController::class, 'getUserBookings']);

