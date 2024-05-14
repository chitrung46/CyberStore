@extends('admin.layouts.app')
@section('title', 'Category')
@section('title1', 'Category')
@section('content')
<div class="card">
    @if(session('message'))
    <h1 class="text-primary">{{ session('message') }}</h1>

    @endif
    <h1>
        Category list
    </h1>
    <div>
        <h1>
            <a href="{{ route('categories.create') }}" class="btn btn-primary">Create</a>
        </h1>
    </div>

    <div>
        <table class="table table-hover">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>parent Name</th>
                <th>Action</th>
            </tr>
            @foreach($categories as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td>{{ $item->name }}</td>
                <td>{{ $item->parent_name }}</td>
                <td>
                    <a href="{{ route('categories.edit', $item->id) }}" class="btn btn-warning">Edit</a>
                    <form action="{{ route('categories.destroy', $item->id) }}" id="form-delete{{$item->id}}" method="POST">
                    @csrf
                    @method('delete')
                    <button class="btn btn-danger" data-id="{{$item->id}}" type="submit">Delete</button>

                    </form>

                </td>
            </tr>
            @endforeach
        </table>
        {{$categories->links()}}
    </div>
</div>
@endsection

@yield('script')

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
    <script>
        $(() => {
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('#show-image').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }

            $("#image-input").change(function() {
                readURL(this);
            });



        });
    </script>
