<?php

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

$pages = array(
    '/'               => 'index.html.twig',
    '/svg/bar-charts' => 'svg/bar-charts.html.twig',
    '/svg/analytics'  => 'svg/analytics.html.twig',
    '/video'          => 'video.html.twig'
);

foreach ($pages as $route => $template) {
    $app->get($route, function () use ($app, $template) {
        return $app['twig']->render($template);
    });
}

$app->run();
