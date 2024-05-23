@extends('admin.layouts.app')
@section('title', 'Products')
@section('title1', 'Product')
@section('content')
<div class="card">
    @if(session('message'))
    <h1 class="text-primary">{{ session('message') }}</h1>

    @endif
    <h1>
        Product list
    </h1>
    <div>
        <h1>
            <a href="{{ route('products.create') }}" class="btn btn-primary">Create</a>
        </h1>
    </div>

    <div>
        <table class="table table-hover">
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            @foreach($products as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td><img src="{{$item->images->count()>0 ? asset('upload/' . $item->images->first()->url) : 'upload/default.png'}}" width="200px" height="200px" alt=""></td>
                <td>{{ $item->name }}</td>
                <td>{{ $item->manufacturer }}</td>
                <td>{{ $item->description }}</td>
                <td>{{ $item->price }}</td>
                <td>
                    <a href="{{ route('products.edit', $item->id) }}" class="btn btn-warning">Edit</a>
                    <form action="{{ route('products.destroy', $item->id) }}" id="form-delete{{$item->id}}" method="POST">
                    @csrf
                    @method('delete')
                    <button class="btn btn-danger" type="submit"data-id="{{$item->id}}">Delete</button>

                    </form>

                </td>
            </tr>
            @endforeach
        </table>
        {{ $products->links() }}
    </div>
</div>
@endsection

@section('script')
@endsection