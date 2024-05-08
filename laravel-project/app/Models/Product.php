<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HandleImageTrait;

class Product extends Model
{
    use HasFactory, HandleImageTrait;

    protected $fillable = [
        'name',
        'manufacturer',
        'description',
        'color',
        'price',
        'quantity'
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
};


