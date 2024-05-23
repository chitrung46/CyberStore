<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\Document;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrainted()->cascadeOnDelete();
            $table->foreignIdFor(Document::class)->constrainted()->cascadeOnDelete();
            $table->smallInteger('quantity');
            $table->double('totalPrice');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_documents');
    }
};
