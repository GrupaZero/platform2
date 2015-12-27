<?php
return [
    'domain'                         => env('DOMAIN', 'localhost'),
    'siteName'                       => 'G-ZERO CMS',
    'defaultPageSize'                => 5,
    'seoTitleAlternativeField'       => 'title',
    'seoDescriptionAlternativeField' => 'body',
    'seoDescLength'                  => 160,
    'siteDesc'                       => 'Content management system.',
    'multilang'                      => [
        'enabled'   => true,
        'detected'  => false, // Do not change, changes in runtime!
        'subdomain' => false
    ],
    //'upload'       => [                       TODO: we cant use helpers here
    //    'path'   => public_path('uploads'),
    //    'public' => asset('uploads')
    //],
    'block_type'                     => [
        'basic'   => 'Gzero\Core\Handler\Block\Basic',
        'content' => 'Gzero\Core\Handler\Block\Content',
        'menu'    => 'Gzero\Core\Handler\Block\Menu',
        'slider'  => 'Gzero\Core\Handler\Block\Slider',
        'widget'  => 'Gzero\Core\Handler\Block\Widget'
    ],
    'content_type'                   => [
        'content'  => 'Gzero\Core\Handler\Content\Content',
        'category' => 'Gzero\Core\Handler\Content\Category'
    ],
    'available_blocks_regions'       => [
        'header',
        'homepage',
        'featured',
        'contentHeader',
        'sidebarLeft',
        'sidebarRight',
        'contentFooter',
        'footer'
    ]
];
