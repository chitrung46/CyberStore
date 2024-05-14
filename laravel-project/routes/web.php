<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SessionController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Middleware\ClientMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route :: resource('home',HomeController::class);

Route::resource('registers', RegisterController::class);
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::group(['middleware' => 'clientMiddleware'], function() {
    
});

Route:: resource('roles',RoleController::class);
Route:: resource('users',UserController::class);
Route:: resource('categories',CategoryController::class);
Route:: resource('products',ProductController::class);
Route::get('/dashboard', function () {
    return view('admin.dashboard.index');
})->name('dashboard');
    

// Route::prefix('roles')->controller(RoleController::class)->name('roles.')->group(function(){
//     Route::get('/', 'index')->name('index')->middleware('role:super-admin');
//     Route::post('/', 'store')->name('store')->middleware('role:super-admin');
//     Route::get('/create', 'create')->name('create')->middleware('role:super-admin');
   
// });
// // Route::resource('users', UserController::class);
// Route::prefix('users')->controller(UserController::class)->name('users.')->group(function(){
//     Route::get('/', 'index')->name('index')->middleware('permission:show-user');
//     Route::post('/', 'store')->name('store');
//     Route::get('/create', 'create')->name('create')->middleware('permission:create-user');

// });
// // Route::resource('categories', CategoryController::class);
// Route::prefix('categories')->controller(CategoryController::class)->name('categories.')->group(function(){
//     Route::get('/', 'index')->name('index')->middleware('permission:show-category');
//     Route::post('/', 'store')->name('store')->middleware('permission:create-category');
//     Route::get('/create', 'create')->name('create')->middleware('permission:create-category');
// });

// // Route::resource('products', ProductController::class);

// Route::prefix('products')->controller(ProductController::class)->name('products.')->group(function(){
//     Route::get('/', 'index')->name('index')->middleware('permission:show-product');
//     Route::post('/', 'store')->name('store')->middleware('permission:create-product');
//     Route::get('/create', 'create')->name('create')->middleware('permission:create-product');
// });



// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
