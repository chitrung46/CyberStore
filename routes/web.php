<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\DangKyController;
use App\Http\Controllers\Auth\DangNhapController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\QuenMatKhauController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SessionController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\CartController;
use App\Http\Controllers\Client\ProductController as ClientProductController;
use Illuminate\Support\Facades\Route;
Route :: resource('register',RegisterController::class);

Route::get('/', [HomeController::class, 'index']);



//Dang Nhap Route
Route::get('/login', [DangNhapController::class, 'showLoginForm'])->name('dangnhap');
Route::post('/login', [DangNhapController::class, 'login']);
Route::post('/logout', [DangNhapController::class, 'logout'])->name('dangxuat');

//Dang Ky route
Route::get('/register', [DangKyController::class, 'showRegistrationForm'])->name('dangky');
Route::post('/register', [DangKyController::class, 'store']);

//Quen Mat khau route
Route::get('forgot-password', [QuenMatKhauController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('forgot-password', [QuenMatKhauController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('pincode-login', [QuenMatKhauController::class, 'showLoginPincodeForm'])->name('pincodelogin.request');
Route::post('/pincode-login', [QuenMatKhauController::class, 'checkPinCode'])->name('pincode-login');
// Doi mat khau
Route::get('change_password',[QuenMatKhauController::class,'showChangePasswordForm'])->name('change_password.request');
Route::post('/change_password',[QuenMatKhauController::class,'capNhatMatKhau'])->name('change_password.update');
Route :: resource('home',HomeController::class);

// Auth::routes();

// Hien thi san pham theo loai
Route::get('product/{category_id}', [ClientProductController::class, 'index'])->name('client.product.index');
Route::get('product-detail/{id}', [ClientProductController::class, 'show'])->name('client.product.show');

Route :: resource('cart',CartController::class);

// Route::middleware('auth')->group(function(){
    
// });

    Route :: resource('roles',RoleController::class);
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
