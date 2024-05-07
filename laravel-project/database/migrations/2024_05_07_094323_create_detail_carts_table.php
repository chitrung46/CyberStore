<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Cart;
use App\Models\Product;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_carts', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Cart::class)->constrainted()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrainted()->cascadeOnDelete();
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
        Schema::dropIfExists('detail_carts');
    }
};
