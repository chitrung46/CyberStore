<?php
namespace App\Traits;
// use App\Models\Image;
use Intervention\Image\Facades\Image;

// use Intervention\Image\ImageManagerStatic as Image;

use Illuminate\Support\Facades\Storage;


trait HandleImageTrait

{
    protected $path = 'upload/';
    public function veryfy($request)
    {
       return $request->has('image');
    }
    public function saveImage($request)
    {
        if($this->veryfy($request))
        {
            $image = $request->file('image');
            $name = time() . $image->getClientOriginalName();
            Image::make($image)->resize(300, 300)->save($this->path . $name);
            // $extension = $image->getClientOriginalExtension();
            // $image = Image::make($image)->resize(300, 300);
            // Storage::put($this->path . $name, $image);
            return $name;


        }
    }
    public function updateImage($request,$currentImage)
    {
        if ($this-> veryfy($request)) {
            $this->deleteImage($currentImage);
            return $this->saveImage($request);
        }
        return $currentImage;
    }
    public function deleteImage($imageName)
    {
        if( $imageName && file_exists($this->path.$imageName))
        {
            unlink($this->path.$imageName);
        }
    }
}
