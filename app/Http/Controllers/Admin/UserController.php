<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $user;
    protected $role;

    public function __construct(User $user, Role $role)
    {
        $this->user = $user;
        $this->role = $role;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->user->latest('id')->paginate(5);
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    
    public function create()
    {
        $roles = $this->role->all()->groupBy('group');
        return view('admin.users.create',compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     */
   

    public function store(CreateUserRequest $request)
    {
        $dataCreate = $request->all();
        $dataCreate['password'] = Hash::make($request->password);
        $dataCreate['image'] = $this->user->saveImage($request);
        $user = $this->user->create($dataCreate);
        $user->images()->create(['url' => $dataCreate['image']]);
        $user->roles()->attach($dataCreate['role_ids']);
        return to_route('users.index')->with(['message'=>'create success']);
    }

  

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $roles = $this->role->all()->groupBy('group');

        $user =$this->user->findOrFail($id)->load('roles');
        // Co role nhung tam thoi bo qua
        return view('admin.users.edit',compact('user','roles') );

        // return view('admin.users.edit',compact('user','roles') );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        $dataUpdate = $request->except('password');
        $user =$this->user->findOrFail($id)->load('roles');

        if($request->password)
        {
            $dataCreate['password']= Hash::make($request->password);
        }
        $currentImage=$user->image ? $user->image->first()->url :'';
        $dataUpdate['image'] = $this->user->updateImage($request,$currentImage);

        $user->update($dataUpdate);
        $user->images()->delete();
        $user->images()->create(['url' => $dataUpdate['image']]);
        $user->roles()->sync($dataUpdate['role_ids']?? []);
        return to_route('users.index')->with(['message'=>'Update success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user =$this->user->findOrFail($id)->load('roles');
        $user->images()->delete();
        $imageName=$user->images->count()>0 ? $user->images->first()->url :'';

        $this->user->deleteImage($imageName);
        $user->delete();
        return to_route('users.index')->with(['message'=>'Delete success']);

    }
}
