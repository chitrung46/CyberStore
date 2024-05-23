<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDetail;
use App\Http\Requests\Products\CreateProductRequest;
use App\Http\Requests\Products\UpdateProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $category;
    protected $product;

    public function __construct(Product $product, Category $category)
    {
        $this->product = $product;
        $this->category = $category;
    }
    public function index()
    {
        $products = $this->product->latest('id')->paginate(5);
        return view('admin.products.index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = $this->category->get(['id', 'name']);
        return view('admin.products.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProductRequest $request)
    {
        $colors = $request->colors ? json_decode($request->colors) : [];
        $dataCreate = $request->except('colors');

        $product = Product::create($dataCreate);
        $dataCreate['image'] = $this->product->saveImage($request);
        $product->images()->create(['url' => $dataCreate['image']]);
        $product->assignCategory($dataCreate['categoryIds']);
                
        $colorArray = [];
        foreach($colors as $color) 
        {
            $colorArray[] = [
                'product_id' => $product->id,
                'color' => $color->color,
                'quantity' => $color->quantity
            ];
        }

        ProductDetail::insert($colorArray);
        return redirect()->route('products.index')->with(['message'=>'Create product success!']);
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
        $product = $this->product->with(['details','categories'])->findOrFail($id);
        $categories = $this->category->get(['id', 'name']);
        return view('admin.products.edit', compact('categories', 'product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, string $id)
    {
        $colors = $request->colors ? json_decode($request->colors) : [];
        $dataUpdate = $request->except('colors');
        $product = $this->product->findOrFail($id);
        $currentImage = $product->image ? $product->image->first()->url :'';
        $dataUpdate['image'] = $this->product->updateImage($request, $currentImage);

        $product->update($dataUpdate);
        $product->images()->update(['url' => $dataUpdate['image']]);
        $product->assignCategory($dataUpdate['categoryIds']);
                
        $colorArray = [];
        foreach($colors as $color) 
        {
            $colorArray[] = [
                'productId' => $product->id,
                'color' => $color->color,
                'quantity' => $color->quantity
            ];
        }

        // print_r($colors);

        $product->details()->delete();
        ProductDetail::insert($colorArray);
        return redirect()->route('products.index')->with(['message'=>'Update product success!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {        
        $product = $this->product->findOrFail($id);
        $product->delete();
        $product->details()->delete();
        $imageName=$product->images->count()>0 ? $product->images->first()->url :'';
        $this->product->deleteImage($imageName);
        return redirect()->route('products.index')->with(['message'=>'Delete product success!']);    
    }
}