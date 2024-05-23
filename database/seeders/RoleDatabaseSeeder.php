<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles=[
            ['name'=> 'admin','displayName'=> 'Admin','group'=> 'system'],
            ['name'=> 'seller','displayName'=> 'Seller','group'=> 'system'],
            ['name'=> 'user','displayName'=> 'User','group'=> 'user'],
        ];
        foreach($roles as $role){
            Role::updateOrCreate($role);
        }
        $permission=[
            ['name'=> 'create-user','displayName'=> 'Create User','group'=> 'User'],
            ['name'=> 'update-user','displayName'=> 'Update User','group'=> 'User'],
            ['name'=> 'show-user','displayName'=> 'Show User','group'=> 'User'],
            ['name'=> 'delete-user','displayName'=> 'Delete User','group'=> 'User'],

            ['name'=> 'create-role','displayName'=> 'Create Role','group'=> 'Role'],
            ['name'=> 'update-role','displayName'=> 'Update Role','group'=> 'Role'],
            ['name'=> 'show-role','displayName'=> 'Show Role','group'=> 'Role'],
            ['name'=> 'delete-role','displayName'=> 'Delete Role','group'=> 'Role'],
            
            ['name'=> 'create-category','displayName'=> 'Create Category','group'=> 'Category'],
            ['name'=> 'update-category','displayName'=> 'Update Category','group'=> 'Category'],
            ['name'=> 'show-category','displayName'=> 'Show Category','group'=> 'Category'],
            ['name'=> 'delete-category','displayName'=> 'Delete Category','group'=> 'Category'],

            ['name'=> 'create-product','displayName'=> 'Create Product','group'=> 'Product'],
            ['name'=> 'update-product','displayName'=> 'Update Product','group'=> 'Product'],
            ['name'=> 'show-product','displayName'=> 'Show Product','group'=> 'Product'],
            ['name'=> 'delete-product','displayName'=> 'Delete Product','group'=> 'Product'],

            ['name'=> 'create-coupon','displayName'=> 'Create Coupon','group'=> 'Coupon'],
            ['name'=> 'update-coupon','displayName'=> 'Update Coupon','group'=> 'Coupon'],
            ['name'=> 'show-coupon','displayName'=> 'Show Coupon','group'=> 'Coupon'],
            ['name'=> 'delete-coupon','displayName'=> 'Delete Coupon','group'=> 'Coupon'],
        

        ];
        foreach($permission as $item){
            Permission::updateOrCreate($item);
        }
    }
}
