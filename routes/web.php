<?php

// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
// This route will handle all React routes
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');


// Route::get('/pay/{ticket}', [PaymentController::class, 'pay']);
// Route::post('/esewa/verify', [PaymentController::class, 'verify'])->name('esewa.verify');