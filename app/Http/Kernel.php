<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
//     protected $routeMiddleware = [
//         'auth:api' => \Tymon\JWTAuth\Http\Middleware\Authenticate::class,
//         'role' => \App\Http\Middleware\CheckRole::class,
//     ];
// }
protected $routeMiddleware = [
    // existing Laravel middleware...
    'auth' => \App\Http\Middleware\Authenticate::class,
    'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
    'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
    'can' => \Illuminate\Auth\Middleware\Authorize::class,
    'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
    'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,

    // Your custom middleware
    'jwt.auth' => \Tymon\JWTAuth\Http\Middleware\Authenticate::class,
    'role' => \App\Http\Middleware\CheckRole::class,
];}
