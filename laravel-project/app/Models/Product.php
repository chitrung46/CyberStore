<?php

namespace App\Models;

use App\Traits\HandleImageTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory,HandleImageTrait;
    protected $fillable=[
        'name',
        'description',
        'sale',
        'price',
    ];
    public function images()
{
    return $this->morphMany(Image::class, 'imageable');
}
}
