<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Roles\CreateRoleRequest;
use App\Http\Requests\Roles\UpdateRoleRequest;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles= Role::latest('id')->paginate(3);
        return view('admin.roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $permissions= Permission::all()->groupBy('group');
        return view('admin.roles.create', compact('permissions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoleRequest $request)
    {
        
        $dataCreate =$request->all();
        $role= Role::create($dataCreate);
        $role->permissions()->attach($dataCreate['permission_ids']);
        return to_route('roles.index')->with(['message'=>'Create success!','type'=>'success']);

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
        $role= Role::with('permissions')->findOrFail($id);
        $permissions= Permission::all()->groupBy('group');
        return view('admin.roles.edit',compact('role','permissions'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, string $id)
    {
        $role= Role::findOrFail($id);
        $dataUpdate= $request->all();
        $role->update($dataUpdate);
        $role->permissions()->sync($dataUpdate['permission_ids']);
        return to_route('roles.index')->with(['message'=>'Update success!','type'=>'success']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Role::destroy($id);
        return to_route('roles.index')->with(['message'=>'Delete success!','type'=>'success']);

    }
}
