<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // @TODO Routes blocks handler
        //'Illuminate\Routing\Events\RouteMatched' => [
        //    'Gzero\Core\Listeners\Events\BlockLoad',
        //],
        'router.contentMatched' => [
            'Gzero\Core\Listeners\Events\BlockLoad',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
