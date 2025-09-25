<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/upcoming-nearest', [EventController::class, 'upcomingNearest']);
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
        Route::get('/events/{slug}', [EventController::class, 'show']);
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

