<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'gender',
        'address',
        'email',
        'phone',
        'username',
        'password',
        'googleId',
        'facebookId'
    ];
}
