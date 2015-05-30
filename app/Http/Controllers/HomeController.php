<?php namespace App\Http\Controllers;

use Gzero\Repository\ContentRepository;
use Illuminate\Http\Request;

class HomeController extends BaseController {

    /*
    |--------------------------------------------------------------------------
    | Home Controller
    |--------------------------------------------------------------------------
    |
    | This controller renders your application's "dashboard" for users that
    | are authenticated. Of course, you are free to change or remove the
    | controller as you wish. It is just here to get your app started!
    |
    */

    /**
     * @var ContentRepository
     */
    protected $contentRepo;

    /**
     * @var ContentValidator
     */
    protected $validator;

    /**
     * @var UrlParamsProcessor
     */
    protected $processor;

    public function __construct(ContentRepository $contentRepo)
    {
        parent::__construct();
        $this->contentRepo = $contentRepo;

    }

    public function index(Request $request)
    {
        $contents = $this->contentRepo->getContents(
            [
                'isOnHome' => [
                    'relation' => null,
                    'value'    => true
                ]
            ],
            [
                'isPromoted' => [
                    'relation'  => null,
                    'direction' => 'DESC',
                ],
                'isSticky'   => [
                    'relation'  => null,
                    'direction' => 'DESC'
                ]
            ],
            $request->get('page', 1),
            config('gzero.defaultPageSize', 20)
        );

        $contents->setPath($request->url());

        return view(
            'home',
            [
                'contents' => $contents
            ]
        );
    }

}
