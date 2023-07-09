<?php

require_once __DIR__ . '/../vendor/autoload.php';

use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\ClientException;

function response($err, $message) 
{
    $res = new stdClass();
    $res->err = $err;
    $res->message = $message;
    $res->success = false;
    if ($err === 0) {
        $res->success = true;
    }
    header('Content-Type: application/json; charset=utf-8');
    echo(json_encode($res, JSON_UNESCAPED_SLASHES));
    return;
}

function doRequest($url, $options, $method = 'GET')
{
    $client = new GuzzleHttp\Client;
    try {
        $response = $client->request($method, $url, $options);
        $body = (string) $response->getBody();

        return json_decode($body, true);
    } catch (ClientException $e) {
        if ($e->hasResponse()) {
            throw new Exception(
                (string) $e->getResponse()->getBody(), 
                $e->getCode()
            );
        } 
        throw new Exception($e->getMessage(), 503);
    }
}