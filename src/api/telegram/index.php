<?php

require_once __DIR__ . '/../utils/consts.php';
require_once __DIR__ . '/../utils/validation.php';
require_once __DIR__ . '/../utils/utils.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$isXmlHttpRequest = (
    !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
    && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
);
if (!$isXmlHttpRequest) {
    return response(1, '[RPC ERROR] Not valid request');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inData = file_get_contents('php://input');
    $data = json_decode($inData, true);
    $name = convertNullIfEmpty($data['name']);
    $phone = convertNullIfEmpty($data['phone']);

    $res = new stdClass();
    if ($name === null) {
        return response(1, 'Name must not be empty. Null given.');
    }

    if ($phone === null) {
        return response(1, 'Phone must not be empty. Null given.');
    }

    $message = <<<MESSAGE
    Заявка с формы Пробный период
    Имя пользователя: $name
    Телефон: $phone
    MESSAGE;

    $params = [
        'query' => [
           'chat_id' => TELEGRAM_CHAT_ID,
           'text' => $message
        ]
     ];
     

    try {
        $response = doRequest(TELEGRAM_API_URL.TELEGRAM_BOT_TOKEN.'/sendMessage', $params);

        if ($response['ok']) {
            return response(0, 'Successful');
        }

        return response(1, 'Error');
    } catch (\Throwable $e) {
        $error = $e->getCode() ? $e->getCode() : -1;
        $response = json_decode($e->getMessage(), true);
        if (is_array($response) && array_key_exists('description', $response)) {
            return response($error, $response['description']);
        }
        return response($error, $e->getMessage());
    }
}