@extends('admin.layouts.app')
@section('title', 'Edit Category ' . $category->name)
@section('content')
    <div class="card">
        <h1>Edit Category</h1>


        <div>
            <form action="{{ route('categories.update', $category->id) }}" method="post">
                @csrf
                
                @method('put')
                <div class="input-group input-group-static mb-4">
                    <label>Name</label>
                    <input type="text" value="{{ old('name') ?? $category->name }}" name="name" class="form-control">

                    @error('name')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>
                @if ($category->childrens->count() < 1)
                    <div class="input-group input-group-static mb-4">
                        <label name="group" class="ms-0">Parent Category</label>
                        <select name="parent_id" class="form-control">
                            <option value=""> Select Parent Category </option>
                            @foreach ($parentCategories as $item)
                                <option value="{{ $item->id }}"
                                    {{ (old('parent_id') ?? $category->parent_id) == $item->id ? 'selected' : '' }}>
                                    {{ $item->name }}</option>
                            @endforeach
                        </select>
                    </div>
                @endif
                <button type="submit" class="btn btn-submit btn-primary">Submit</button>
            </form>
        </div>
    </div>

@endsection
