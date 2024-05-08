@extends('admin.layouts.app')
@section('title', 'Create Product')
@section('content')
    <div class="card">
        <h1>Create Product</h1>

        <div>
            <form action="{{ route('products.store') }}" method="post" id="createForm" enctype="multipart/form-data">
                @csrf

                <div class="row">
                    <div class=" input-group-static col-5 mb-4">
                        <label>Image</label>
                        <input type="file" accept="image/*" name="image" id="image-input" class="form-control">

                        @error('image')
                            <span class="text-danger"> {{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-5">
                        <img src="" id="show-image" alt="" width="300px">
                    </div>
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Name</label>
                    <input type="text" value="{{ old('name') }}" name="name" class="form-control">

                    @error('name')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Manufacturer</label>
                    <input type="text" value="{{ old('manufacturer') }}" name="manufacturer" class="form-control">
                    @error('manufacturer')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <div class="row w-100 h-100">
                        <textarea name="description" id="description" class="form-control" cols="4" rows="5"
                            style="width: 100%">{{ old('description') }} </textarea>
                    </div>
                    @error('description')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Color</label>
                    <input type="text" value="{{ old('color') }}" name="color" class="form-control">
                    @error('color')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Price</label>
                    <input type="text" value="{{ old('price') }}" name="price" class="form-control">
                    @error('price')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Quantity</label>
                    <input type="text" value="{{ old('quantity') }}" name="quantity" class="form-control">
                    @error('quantity')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label name="group" class="ms-0">Category</label>
                    <select name="categoryIds[]" class="form-control">
                        @foreach ($categories as $item)
                            <option value="{{ $item->id }}">{{$item->name}}</option>
                        @endforeach
                    </select>

                    @error('categoryIds')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <button type="submit" class="btn btn-submit btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection


@section('style')
    <style>
        .w-40 {
            width: 40%;
        }

        .w-20 {
            width: 20%;
        }

        .row {
            justify-content: center;
            align-items: center
        }

        .ck.ck-editor {
            width: 100%;
            height: 100%;
        }

    </style>
@endsection

@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('plugin/ckeditor5-build-classic/ckeditor.js') }}"></script>

    <script src="{{ asset('admin/assets/js/product/product.js') }}"></script>
@endsection
