<?php

// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


use Illuminate\Support\Facades\Route;

// This route will handle all React routes
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');