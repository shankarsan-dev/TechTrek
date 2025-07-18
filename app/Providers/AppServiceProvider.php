<?php

namespace App\Providers;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        // app/Providers/AppServiceProvider.php




    }
public function boot(): void
{
    Schema::defaultStringLength(191); // safe value under utf8mb4
}

    /**
     * Bootstrap any application services.
     */
  
}
