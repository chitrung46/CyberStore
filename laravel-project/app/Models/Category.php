<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'parentId',

    ];
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parentId');
    }
    public function childrens()
    {
       return $this->hasMany(Category::class, 'parentId');
    }

    public function getParentNameAttribute()
    {
        return optional($this->parent)->name;
    }
    public function getParents()
    {
        return Category::whereNull('parentId')->get(['id','name']);
    }
}
