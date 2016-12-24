@extends('layouts.sidebarLeft')

@section('title')
    @lang('common.edit')
@stop

@section('sidebarLeft')
    @include('account.menu', ['menu' => $menu])
@stop

@section('content')
    <h1 class="page-header">@lang('common.edit')</h1>

    <div class="row">
        <div class="col-md-5">
            <form id="edit-account-form" action="#" method="POST" role="form">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group{{ $errors->first('nick') ? ' has-error' : '' }}">
                    <label class="control-label" for="firstName">@lang('common.nick')</label>
                    <input type="text" id="nick" name="nick" class="form-control"
                           value="{{ $user->nick }}"
                           placeholder="@lang('common.nick')">
                    @if($errors->first('nick'))
                        <p class="help-block">{{ $errors->first('nick') }}</p>
                    @endif
                </div>
                <div class="form-group{{ $errors->first('email') ? ' has-error' : '' }}">
                    <label class="control-label" for="email">@choice('common.email', 1)</label>
                    <input type="email" id="email" name="email" class="form-control"
                           value="{{ $user->email }}"
                           placeholder="@choice('common.email', 1)">
                    @if($errors->first('email'))
                        <p class="help-block">{{ $errors->first('email') }}</p>
                    @endif
                </div>
                <div class="form-group{{ $errors->first('firstName') ? ' has-error' : '' }}">
                    <label class="control-label" for="firstName">@lang('common.first_name')</label>
                    <input type="text" id="firstName" name="firstName" class="form-control"
                           value="{{ $user->firstName }}"
                           placeholder="@lang('common.first_name')">
                    @if($errors->first('firstName'))
                        <p class="help-block">{{ $errors->first('firstName') }}</p>
                    @endif
                </div>
                <div class="form-group{{ $errors->first('lastName') ? ' has-error' : '' }}">
                    <label class="control-label" for="lastName">@lang('common.last_name')</label>
                    <input type="text" id="lastName" name="lastName" class="form-control"
                           value="{{ $user->lastName }}"
                           placeholder="@lang('common.last_name')">
                    @if($errors->first('lastName'))
                        <p class="help-block">{{ $errors->first('lastName') }}</p>
                    @endif
                </div>
                @if(strpos($user->email,'@'))
                    @if($user->password)
                        <div class="separator">
                            <span>@lang('common.password_change')</span>
                        </div>
                        <p class="text-muted">
                            <i class="fa fa-info-circle"><!-- icon --></i> @lang('common.leave_blank')
                        </p>
                    @else
                        <div class="separator">
                            <span>@lang('common.password_set')</span>
                        </div>
                        <p class="text-success">
                            <i class="fa fa-info-circle"><!-- icon --></i> @lang('common.set_password_to_login')
                        </p>
                    @endif
                    <div class="form-group{{ $errors->first('password') ? ' has-error' : '' }}">
                        <label class="control-label" for="password">@lang('common.new_password')</label>
                        <input type="password" id="password" name="password" class="form-control"
                               placeholder="@lang('common.new_password')">
                        @if($errors->first('password'))
                            <p class="help-block">{{ $errors->first('password') }}</p>
                        @endif
                    </div>
                    <div class="form-group{{ $errors->first('password_confirmation') ? ' has-error' : '' }}">
                        <label class="control-label" for="passwordConfirmation">@lang('common.password_repeat')</label>
                        <input type="password" id="passwordConfirmation" name="password_confirmation"
                               class="form-control"
                               placeholder="@lang('common.password_repeat')">
                        @if($errors->first('password_confirmation'))
                            <p class="help-block">{{ $errors->first('password_confirmation') }}</p>
                        @endif
                    </div>
                @endif
                <button id="edit-account" type="submit" class="btn btn-primary">@lang('common.save')</button>
            </form>
        </div>
    </div>
@stop
@section('footerScripts')
    <script type="text/javascript">
        $(function() {
            $('#edit-account').click(function(event) {
                event.preventDefault();
                Loading.start('#main-container');
                $.ajax({
                    url: "/<?php echo (config(
                        'gzero.multilang.enabled'
                    )) ? $lang->code . '/' : '';?>api/v1/account/<?php echo $user->id; ?>",
                    data: $('#edit-account-form').serializeObject(),
                    type: 'PUT',
                    success: function(xhr) {
                        Loading.stop();
                        // set success message
                        setGlobalMessage('success', "@lang('common.changes_saved_message')");
                        hideMessages();
                        clearFormValidationErrors();
                        // reload page to load any view changes
                        setTimeout(function() {
                            location.reload();
                        }, 1000);
                    },
                    error: function(xhr, status, error) {
                        Loading.stop();
                        if (typeof xhr.responseJSON !== 'undefined') {
                            // clear previous errors
                            clearFormValidationErrors();
                            $.each(xhr.responseJSON.errors, function(index, error) {
                                // set form errors
                                setFormValidationErrors(index, error);
                            });
                        }
                    }
                });
            })
        });
    </script>
@append
