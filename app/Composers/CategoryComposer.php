<?php
 
namespace App\Composers;
 
use Illuminate\View\View;
use App\Models\Category;

class CategoryComposer
{
    /**
     * Create a new profile composer.
     */
    protected $category;

    public function __construct(Category $category) 
    {
        $this->category = $category;
    }
 
    /**
     * Bind data to the view.
     */
    public function compose(View $view): void
    {
        $view->with('categories', $this->category->getParents());
    }
}