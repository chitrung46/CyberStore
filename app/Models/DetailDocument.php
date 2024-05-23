<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'documentId',
        'quantity',
        'totalPrice'
    ];
}
