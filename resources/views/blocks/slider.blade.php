<div class="slider" id="slider">
    <ul class="sequence-canvas">
        @foreach($slides as $slide)
            <li style=" background: url(/slides/{{ $slide }});
                    background-size: cover;
                    background-position: center;
                    height: 400px;"
                class="animated">

                <div class="jumbotron text-center">
                    <h1>Marketing stuff!</h1>

                    <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac
                        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                    <p>
                        <a class="btn btn-lg btn-success" href="{{ route('register') }}" role="button">Get started today</a>
                    </p>
                </div>

            </li>
        @endforeach
    </ul>
</div>

@section('footerScripts')

<script src="{{ asset('/js/jquery.sequence-min.js') }}"></script>

<script>
    $(document).ready(function() {

        $(document).ready(function(){
            var options = {
                nextButton: true,
                prevButton: true,
                pagination: true,
                animateStartingFrameIn: true,
                autoPlay: true,
                autoPlayDelay: 3000
            };

            var mySequence = $("#slider").sequence(options).data("sequence");
        });

    });
</script>

@stop