@extends('layouts.default')

@section('content')
    <div class="jumbotron text-center">
        <h1>Marketing stuff!</h1>

        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
        <p>
            <a class="btn btn-lg btn-success" href="{{ route('register') }}" role="button">Get started today</a>
        </p>
    </div>

    @foreach($contents as $index => $child)
        <?php $activeTranslation = $child->translation($lang->code); ?>
        @if($activeTranslation)
            <?php $activeRoute = $child->routeTranslation($lang->code); ?>
            <?php $childUrl = url('/'). '/' . $activeRoute->langCode .'/' . $activeRoute->url; ?>
            <div class="media">
                <h2 class="page-header">
                    <a href="{{ $childUrl }}">
                        {{ $activeTranslation->title }}
                    </a>
                </h2>
                <div class="media-body">
                    <div class="row">
                        <div class="col-md-8">
                            <p class="text-muted">
                                @lang('common.postedBy') {{ $child->authorName() }}
                                @lang('common.postedOn') {{ $child->publishDate() }}
                            </p>
                        </div>
                        <div class="col-md-4 text-right">
                            <p class="text-muted">@lang('common.rating') {!! $child->ratingStars() !!}</p>
                        </div>
                    </div>
                    <p>
                        <a href="{{ $childUrl }}">
                            <img class="img-responsive" src="http://placehold.it/847x312"
                                 width="847" height="312" alt="{{$activeTranslation->title}}">
                        </a>
                    </p>
                    {!! $activeTranslation->teaser !!}
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-6">
                        <a href="{{ $childUrl }}" class="btn btn-default">
                            @lang('common.readMore')
                        </a>
                    </div>
                    <div class="col-md-6 text-right">
                        <p class="text-muted">@lang('common.numberOfViews') {{ $child->visits }}</p>
                    </div>
                </div>
            </div>
        @endif
    @endforeach

    {!! $contents->render() !!}

@stop
