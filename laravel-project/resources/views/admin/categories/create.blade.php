@extends('admin.layouts.app')
@section('title', 'Create Category')
@section('title1', 'Category')
@section('content')

<div class="card">
    <h1>
        Create Category
    </h1>
    <div>
        <form action="{{route ('categories.store')}}" method="post">
            @csrf
            <div class="input-group input-group-static mb-4">
                <label>Name</label>
                <input type="text" value="{{old('name')}}" class="form-control" name="name">
                @error('name')
                <span class="text-danger">{{$message}}</span>
                @enderror
            </div>

            <div class="input-group input-group-static mb-4">
                <label name="group" class="ms-0">Parent Category</label>
                <select name="parentId" class="form-control"  >
                <option value="">Select Parent category</option>

                @foreach($parentCategories as $item)
                        <option value="{{$item->id}}" {{old('parentId')==$item->id ?'selected':''}} > {{$item->name}} </option>
                    
                    @endforeach

                </select>

                
            </div>
            <button type="submit" class="btn btn-submit btn-primary">Submit</button>
        </form>
    </div>
</div>

@endsection