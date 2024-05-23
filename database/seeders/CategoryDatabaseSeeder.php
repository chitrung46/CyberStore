<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoryDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories=[
            ['name'=> 'Instock','parentId' => null],
            ['name'=> 'Bàn phím cơ','parentId' => 1],
            ['name'=> 'Switch','parentId' => 1],
            ['name'=> 'Phụ kiện','parentId' => 1]
        ];
        foreach($categories as $category){
            Category::updateOrCreate($category);
        }
    }
}
