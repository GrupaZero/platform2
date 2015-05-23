<?php namespace App\Http\Controllers;

use Auth;
use Gzero\Repository\UserRepository;
use Gzero\Validator\BaseUserValidator;
use Gzero\Validator\ValidationException;
use Illuminate\Support\Facades\Input;
use Illuminate\Routing\Controller;


/**
 * This file is part of the GZERO CMS package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Class UserController
 *
 * @author     Adrian Skierniewski <adrian.skierniewski@gmail.com>
 * @copyright  Copyright (c) 2014, Adrian Skierniewski
 */
class UserController extends BaseController {

    /**
     * @var UserRepository
     */
    protected $userRepo;

    /**
     * @var BaseUserValidator
     */
    protected $validator;

    public function __construct(UserRepository $userRepo, BaseUserValidator $validator)
    {
        $this->userRepo  = $userRepo;
        $this->validator = $validator->setData(\Input::all());
        parent::__construct(); // TODO: Change the autogenerated stub
    }

    public function login()
    {
        if (Auth::check()) {
            return redirect()->route('account');
        }
        return view('auth.login');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('home');
    }

    public function postLogin()
    {
        try {
            $input    = $this->validator->validate('login');
            $remember = Input::get('remember', false);
            if (Auth::validate($input)) {
                if (Auth::check() || Auth::viaRemember() || Auth::attempt($input, $remember)) {
                    return redirect()->route('home');
                }
                return redirect()->route('login');
            } else {
                Session::flash(
                    'messages',
                    [
                        [
                            'code' => 'error',
                            'text' => Lang::get('common.incorrectLoginMessage')
                        ]
                    ]
                );
                return redirect()->route('login')->withInput();
            }
        } catch (ValidationException $e) {
            return redirect()->route('login')->withInput()->withErrors($e->getErrors());
        }
    }

    public function register()
    {
        return view('auth.register');
    }

    public function postRegister()
    {
        if (Input::get('accountIntent')) {
            return redirect()->to('home'); // Preventing spammer registration
        }

        try {
            $input        = $this->validator->validate('register');
            $existingUser = $this->userRepo->retrieveByEmail($input['email']);
            // duplicated user verification
            if ($existingUser === null) {
                $input['password'] = Hash::make($input['password']);
                $user              = $this->userRepo->create($input);
                if (!empty($user)) {
                    Auth::login($user);
                    try {
                        $subject = Lang::get('emails.welcome.subject', ['siteName' => Config::get('gzero.siteName')]);
                        Mail::send( // welcome email
                            'emails.auth.welcome',
                            ['user' => $user],
                            function ($message) use ($input, $subject) {
                                $message->subject($subject)
                                    ->to($input['email'], $input['firstName'] . ' ' . $input['lastName']);
                            }
                        );
                    } catch (Swift_TransportException $e) {
                        /**@TODO Better way to handle exceptions on production */
                        Log::error('Unable to send welcome email: ' . $e->getMessage());
                    }
                }
                return redirect()->intended('account');
            } else {
                Session::flash(
                    'messages',
                    [
                        [
                            'code' => 'error',
                            'text' => Lang::get('common.emailAlreadyInUseMessage')
                        ]
                    ]
                );
                return redirect()->route('register')->withInput();
            }
        } catch (ValidationException $e) {
            return redirect()->route('register')->withInput()->withErrors($e->getErrors());
        }
    }

    /**
     * Display the password reminder view.
     *
     * @return Response
     */
    public function remind()
    {
        if (Auth::check()) {
            return redirect()->to('/');
        }
        return view('auth.password');
    }

    /**
     * Handle a POST request to remind a user of their password.
     *
     * @return Response
     */
    public function postRemind()
    {
        try {
            $input    = $this->validator->validate('remind');
            $response = Password::remind(
                $input,
                function ($message) {
                    $message->subject(Lang::get('emails.passwordReminder.title'));
                }
            );
            switch ($response) {
                case Password::INVALID_USER:
                    Session::flash(
                        'messages',
                        [
                            [
                                'code' => 'error',
                                'text' => Lang::get($response)
                            ]
                        ]
                    );
                    return redirect()->back()->withInput();
                case Password::REMINDER_SENT:
                    Session::flash(
                        'messages',
                        [
                            [
                                'code' => 'success',
                                'text' => Lang::get($response)
                            ]
                        ]
                    );
                    return redirect()->back();
            }
        } catch (ValidationException $e) {
            return redirect()->back()->withInput()->withErrors($e->getErrors());
        }
    }

    /**
     * Display the password reset view for the given token.
     *
     * @param  string $token
     *
     * @return Response
     */
    public function reset($token = null)
    {
        if (is_null($token)) {
            App::abort(404);
        } elseif (Auth::check()) {
            return redirect()->to('/');
        }

        return view('auth.reset')->with('token', $token);
    }

    /**
     * Handle a POST request to reset a user's password.
     *
     * @return Response
     */
    public function postReset()
    {
        try {
            $input    = $this->validator->validate('reset');
            $response = Password::reset(
                $input,
                function ($user, $password) {
                    $user->password = Hash::make($password);
                    $user->save();
                }
            );
            switch ($response) {
                case Password::INVALID_PASSWORD:
                case Password::INVALID_TOKEN:
                case Password::INVALID_USER:
                    Session::flash(
                        'messages',
                        [
                            [
                                'code' => 'error',
                                'text' => Lang::get($response)
                            ]
                        ]
                    );
                    return redirect()->back()->withInput();
                case Password::PASSWORD_RESET:
                    Session::flash(
                        'messages',
                        [
                            [
                                'code' => 'success',
                                'text' => Lang::get($response)
                            ]
                        ]
                    );
                    return redirect()->route('login');
            }
        } catch (ValidationException $e) {
            return redirect()->back()->withInput()->withErrors($e->getErrors());
        }
    }
}
