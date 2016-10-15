<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::group(
    setMultilangRouting(),
    function () {
        Auth::routes();
        Route::group(
            ['middleware' => ['web', 'detectLang']],
            function () {
                Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);
                Route::get('{path?}', 'ContentController@dynamicRouter')->where('path', '.*');
            }
        );
    }
);


// By default we're redirecting to multi language page
Route::get(
    '/',
    function () {
        return redirect()->to(route('home'));
    }
);
