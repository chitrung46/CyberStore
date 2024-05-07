<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailCart extends Model
{
    use HasFactory;

    protected $fillable = [
        'cartId',
        'productId',
        'quantity',
        'totalPrice'
    ];
}
