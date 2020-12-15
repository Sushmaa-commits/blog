<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

function test($documentRoot){
    $exp = explode("\\",$documentRoot);
    echo(strlen('Sushma'));
    dd(implode(" ",$exp));
    dd($documentRoot); 
}

Route::get('/about', function () {
   test($_SERVER['DOCUMENT_ROOT']);
});



Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::prefix('api')->group(function () {
    Route::get('blog/recent', [ApiController::class, 'recentBlogs']);
    Route::get('blog/list', [ApiController::class, 'blogList']);
    Route::get('blog/{slug}', [ApiController::class, 'getBlogBySlug']);

    Route::get('art/recent', [ApiController::class, 'recentArts']);
    Route::get('art/list', [ApiController::class, 'artList']);
    Route::get('art/{slug}', [ApiController::class, 'getArtBySlug']);

    Route::get('tag/recent', [ApiController::class, 'recentTags']);
    Route::get('tag/list', [ApiController::class, 'taglist']);
    Route::get('tag/{slug}', [ApiController::class, 'getTagBySlug']);


});
