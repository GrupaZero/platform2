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
    setMultilangRouting(['middleware' => ['web']]),
    function () {
        // START Laravel Auth routes
        // Authentication Routes...
        Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
        Route::post('login', 'Auth\LoginController@login')->name('post.login');
        Route::post('logout', 'Auth\LoginController@logout')->name('post.logout');

        // Registration Routes...
        Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
        Route::post('register', 'Auth\RegisterController@register')->name('post.register');

        // Password Reset Routes...
        Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
        Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('post.password.email');
        Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset.token');
        Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('post.password.reset');
        // END Laravel Auth routes

        Route::get('/', 'HomeController@index')->name('home');
        Route::get('{path?}', 'ContentController@dynamicRouter')->where('path', '.*');
    }
);


// By default we're redirecting to multi language page
Route::get(
    '/',
    function () {
        return redirect()->to(route('home'));
    }
);
