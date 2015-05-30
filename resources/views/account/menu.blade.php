@section('menuTree')
    @foreach($menu as $link)
        <li class="{{ (URL::full() ==  $link['url']) ? 'active' : '' }}">
            @if($link['children'])
                <a href="#" title="@lang($link['title'])">@lang($link['title'])<i class="fa arrow"></i></a>
                <ul class="nav collapse">
                    @foreach($link['children'] as $link)
                        <li class="{{ (URL::full() ==  $link['url']) ? 'active' : '' }}">
                            <a href="{{ $link['url'] }}" title="@lang($link['title'])">@lang($link['title'])</a>
                        </li>
                    @endforeach
                </ul>
            @else
                <a href="{{ $link['url'] }}" title="@lang($link['title'])">@lang($link['title'])</a>
            @endif
        </li>
    @endforeach
@stop

<ul class="nav nav-pills nav-stacked" role="navigation">
    @yield('menuTree')
</ul>
