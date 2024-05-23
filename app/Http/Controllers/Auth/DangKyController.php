<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DangKyController extends Controller
{
    protected $user;
    protected $role;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function store(Request $request)
    {
        
        $dataCreate = $request->all();
        $dataCreate['password'] = Hash::make($request->password);
        $dataCreate['image'] = $this->user->saveImage($request);
        $user = $this->user->create($dataCreate);
        $user->images()->create(['url' => $dataCreate['image']]);

    
        return view('auth.login');
    }
    public function showRegistrationForm()
    {
        return view('auth.register');
    }
}
