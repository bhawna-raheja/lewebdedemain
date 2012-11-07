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

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array(
    ));
});

$app->get('/svg/bar-charts', function () use ($app) {
    return $app['twig']->render('svg/bar-charts.html.twig', array(
    ));
});

$app->get('/svg/analytics', function () use ($app) {
    return $app['twig']->render('svg/analytics.html.twig', array(
    ));
});

$app->get('/video', function () use ($app) {
    return $app['twig']->render('video.html.twig', array(
    ));
});

$app->run();
