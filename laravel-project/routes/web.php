<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dashboard', function () {
    return view('admin.dashboard.index');
})->name('dashboard');
Route::get('/home', function () {
    return view('client.layouts.app');
});
Auth::routes();

Route :: resource('roles',RoleController::class);
Route:: resource('users',UserController::class);
Route:: resource('categories',CategoryController::class);
Route:: resource('products',ProductController::class);


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
