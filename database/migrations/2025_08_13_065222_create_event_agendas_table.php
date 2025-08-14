<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
// database/migrations/xxxx_xx_xx_create_event_agendas_table.php
return new class extends Migration {
    public function up(): void
    {
        Schema::create('event_agendas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('event_id');
            $table->time('time');
            $table->text('description');
            $table->timestamps();

            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_agendas');
    }
};
