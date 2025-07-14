<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();

            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();

            $table->date('start_date');
            $table->date('end_date');
            $table->time('start_time');
            $table->time('end_time');

            $table->string('venue_name');
            $table->string('location'); // City
            $table->string('address')->nullable();

            $table->unsignedInteger('capacity');
            $table->decimal('price', 10, 2)->nullable();
            $table->boolean('is_free')->default(false);

            $table->string('featured_image')->nullable(); // Path to image file

            $table->enum('status', ['draft', 'published'])->default('draft');

            $table->json('tags')->nullable();

            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
