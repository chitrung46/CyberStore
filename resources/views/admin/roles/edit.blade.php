@extends('admin.layouts.app')
@section('title', 'Update Roles'.$role->name)
@section('title1', 'Role')
@section('content')

<div class="card">
    <h1>
        Update Role
    </h1>
    <div>
        <form action="{{route ('roles.update',$role->id)}}" method="post">
            @csrf
            @method ('PUT')
            <div class="input-group input-group-static mb-4">
                <label>Name</label>
                <input type="text" value="{{old('name')?? $role->name}}" class="form-control" name="name">
                @error('name')
                <span class="text-danger">{{$message}}</span>
                @enderror
            </div>
            <div class="input-group input-group-static mb-4">
                <label>Display Name</label>
                <input type="text" value="{{old('displayName')?? $role->displayName}}" class="form-control" name="displayName">
                @error('displayName')
                <span class="text-danger">{{$message}}</span>
                @enderror
            </div>

            <div class="input-group input-group-static mb-4">
                <label for="exampleFormControlSelect1"  class="ms-0">Group</label>
                <select class="form-control" name='group' value='{{$role->group}}' >
                    <option value="system">System</option>
                    <option value="user">User</option>
                   
                </select>
                @error('group')
                <span class="text-danger">{{$message}}</span>
                @enderror
            </div>

            <div class="form-group">
                <label for="">Permission</label>

                <div class="row">
                    @foreach ($permissions as $groupName => $permission)
                    <div class="col-5">
                        <h4>{{$groupName}}</h4>
                        <div>
                            @foreach($permission as $item)
                            <div class="form-check">
                                <input class="form-check-input" name="permission_ids[]" {{$role->permissions->contains('name',$item->name) ? 'checked' : ''}} type="checkbox" value="{{$item->id}} ">
                               
                                <label class="custom-control-label" for="customCheck1">{{$item->displayName}}</label>

                            </div>
                            @endforeach
                        </div>
                    </div>


                    @endforeach
                </div>
            </div>
            <button type="submit" class="btn btn-submit btn-primary">Submit</button>
        </form>
    </div>
</div>

@endsection