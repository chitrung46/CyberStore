@extends('admin.layouts.app')
@section('title1', 'Product')
@section('title', 'Update Product'.$product->image)
@section('content')
    <div class="card">
        <h1>Update Product</h1>

        <div>
            <form action="{{ route('products.update',$product->id) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class=" input-group-static col-5 mb-4">
                        <label>Image</label>
                        <input type="file" accept="image/*" name="image" id="image-input" class="form-control">

                        @error('image')
                            <span class="text-danger"> {{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-5">

                        <img src="{{$product->images->count() > 0 ? asset('upload/' . $product->images->first()->url) : 'upload/default.png'}}" id="show-image" alt="" width="300px">
                    </div>
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Name</label>
                    <input type="text" value="{{ old('name') ?? $product->name}}" name="name" class="form-control">

                    @error('name')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Manufacturer</label>
                    <input type="manufacturer" value="{{ old('manufacturer') ?? $product->manufacturer}}" name="manufacturer" class="form-control">
                    @error('manufacturer')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <div class="row w-100 h-100">
                        <textarea name="description" id="description" class="form-control" cols="4" rows="5"
                            style="width: 100%">{{ old('description') ?? $product->description }} </textarea>
                    </div>
                    @error('description')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <input type="hidden" id="inputColor" name='colors'>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddColorModal">
                    Add color
                </button>

                <!-- Modal -->
                <div class="modal fade" id="AddColorModal" tabindex="-1" aria-labelledby="AddColorModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="AddColorModalLabel">Add color</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body" id="AddColorModalBody">

                            </div>
                            <div class="mt-3">
                                <button type="button" class="btn  btn-primary btn-add-color m-3">Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="input-group input-group-static mb-4">
                    <label>Price</label>
                    <input type="price" value="{{ old('price') ?? $product->price}}" name="price" class="form-control">
                    @error('price')
                        <span class="text-danger"> {{ $message }}</span>
                    @enderror
                </div>

                <div class="input-group input-group-static mb-4">
                    <label name="group" class="ms-0">Category</label>
                    <select name="categoryIds[]" class="form-control" multiple>
                        @foreach ($categories as $item)
                            <option value="{{ $item->id }}"
                                {{ $product->categories->contains('id', $item->id) ? 'selected' : '' }}>{{ $item->name }}
                            </option>
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

@section('script')
    <script src="https://cdn.ckeditor.com/ckeditor5/41.3.1/classic/ckeditor.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
    
    $(document).ready(function() {
    ClassicEditor.create(document.querySelector("#description"), {
        // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
    })
        .then((editor) => {
            window.editor = editor;
        })
        .catch((err) => {
            console.error(err.stack);
        });

    var colors = {!! json_encode($product->details) !!};
    renderColors(colors);
    appendColorsToForm();

    function renderColors(colors) {
        for (let color of colors) {
            renderColor(color);
        }
    }

    function getColorIndex(colors, id) {
        let index = _.findIndex(colors, function (o) {
            return o.id == id;
        });

        return index;
    }

    function removeColor(colors, id) {
        let index = getColorIndex(colors, id);
        if (index >= 0) {
            $(`#product-color${colors[index].id}`).remove();
            colors.splice(index, 1);
        }
    }

    function addColor() {
        let color = {
            id: Date.now(),
            color: "Black",
            quantity: 1,
        };
        colors = [...colors, color];
        renderColor(color);
    }

    function appendColorsToForm() {
        $("#inputcolor").val(JSON.stringify(colors));
    }

    $(document).on("click", ".btn-remove-color", function () {
        let id = $(this).data("id");
        removeColor(colors, id);
        appendColorsToForm();
    });

    $(document).on("click", ".btn-add-color", function () {
        addColor();
        appendColorsToForm();
    });

    $(document).on("keyup", ".input-color", function () {
        let id = $(this).data("id");
        let color = $(this).val();
        let index = getColorIndex(colors, id);

        if (index >= 0) {
            colors[index].color = color;
        }
        appendColorsToForm();
    });

    function renderColor(color) {
        let html = `<div class="product-item-color" id="product-color${color.id}">
                            <div class="row ">
                                <div class="input-group input-group-static col-5 w-40">
                                    <label>Color</label>
                                    <input value="${color.color}" type="text" class="form-control input-color" data-id="${color.id}">
                                </div>

                                <div class="input-group input-group-static col-5 w-40">
                                    <label>Quantity</label>
                                    <input type="number" value="${color.quantity}" class="form-control input-quantity" data-id="${color.id}">
                                </div>
                                <div class="w-20">
                                    <button type="button" class="btn btn-danger btn-remove-color" data-id="${color.id}">X</button>
                                </div>
                            </div>`;
        $("#AddColorModalBody").append(html);
    }

    $(document).on("keyup", ".input-quantity", function () {
        let id = $(this).data("id");
        let quantity = $(this).val();
        let index = getColorIndex(colors, id);

        if (index >= 0) {
            colors[index].quantity = quantity;
        }
        appendColorsToForm();
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#show-image").attr("src", e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#image-input").change(function () {
        readURL(this);
    });
})
    </script>
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
