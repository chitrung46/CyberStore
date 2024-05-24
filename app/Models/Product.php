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
        'price',
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function details() 
    {
        return $this->hasMany(ProductDetail::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function assignCategory($categoryIds)
    {
        return $this->categories()->sync($categoryIds);
    }

    // public function assignDetail($details)
    // {
    //     return $this->de()->sync($details);
    // }

    public function getBy($dataSearch, $category_id)
    {
        return $this->whereHas('categories', fn($q) => $q -> where('category_id', $category_id))->paginate(10);
    }
};


