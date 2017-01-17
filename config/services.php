<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\Models\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'google' => [
        'client_id'     => env('OAUTH_GOOGLE_CLIENT_ID'),
        'client_secret' => env('OAUTH_GOOGLE_CLIENT_SECRET'),
    ],

    'facebook' => [
        'app_id'        => env('FB_APP_ID'),
        'client_id'     => env('OAUTH_FB_CLIENT_ID'),
        'client_secret' => env('OAUTH_FB_CLIENT_SECRET'),
    ],

    'twitter' => [
        'client_id'     => env('OAUTH_TWITTER_CLIENT_ID'),
        'client_secret' => env('OAUTH_TWITTER_CLIENT_SECRET'),
    ],

];
