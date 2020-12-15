<?php

namespace App\Http\Controllers;

use App\Blog;
use App\Artwork;
use App\Models\Tag;
use App\Http\Resources\Blog as BlogResource;
use App\Http\Resources\Artwork as ArtworkResource;
use App\Http\Resources\Tag as TagResource;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //for homepage
    public function recentBlogs(){
        return BlogResource::collection(Blog::orderby('created_at','desc')->take(3)->get());
    }
    
    //for blogpage
    public function blogList(){
        return BlogResource::collection(Blog::paginate(3));
    }
    
    //for SingleBlogPage
    public function getBlogBySlug($slug){
        $blog = Blog::where('slug', $slug)->get();
        return BlogResource::collection($blog);
    }

    

      //for homepage
    public function recentArts(){
        return ArtworkResource::collection(Artwork::orderby('created_at','desc')->take(4)->get());
    }

     //for artsPage
     public function artList(){
        return ArtworkResource::collection(Artwork::paginate(4));
    }

      //for SingleArtPage
      public function getArtBySlug($slug){
        $art = Artwork::where('slug', $slug)->get();
        return ArtworkResource::collection($art);
    }

    

      //for homepage
    public function recentTags(){
        return TagResource::collection(Tag::orderby('created_at','desc')->take(4)->get());
    }

     //for tagsPage
     public function tagList(){
        return TagResource::collection(Tag::paginate(4));
    }

     //for SingleTagPage
    public function getTagBySlug($slug){
        $tag = Tag::where('slug', $slug)->get();
        return TagResource::collection($tag);
    }

}
