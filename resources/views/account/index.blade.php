@extends('layouts.sidebarLeft')

@section('title')
    @lang('common.account')
@stop

@section('sidebarLeft')
    @include('account.menu', ['menu' => $menu])
@stop

@section('content')
    <h1 class="page-header">@lang('user.my_account')</h1>

    <h3>{{ $user->firstName }} {{ $user->lastName }}</h3>

    @if(isset($user->hasSocialIntegrations) && strpos($user->email,'social_') !== false)
        <p>@lang('common.accountConected')</p>
        <p class="text-danger"><i class="fa fa-exclamation-triangle"><!-- icon --></i> @lang('common.emailIsMissing')</p>
    @else
        <p>
            <strong>@choice('common.email', 1):</strong> {{ $user->email }}
            <small class="help-block">@lang('common.emailIsHidden')</small>
        </p>
    @endif

    <passport-clients></passport-clients>
    <passport-authorized-clients></passport-authorized-clients>
    <passport-personal-access-tokens></passport-personal-access-tokens>
    <example></example>

    <a href="{{ route('account.edit') }}" title="@lang('user.edit_account')" class="btn btn-default">
        @lang('user.edit_account')
    </a>

    <a href="{{ route('logout') }}" title="@lang('common.logout')" class="btn btn-danger">
        @lang('common.logout')
    </a>

@stop
