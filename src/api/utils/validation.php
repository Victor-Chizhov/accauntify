<?php

function isEmpty($value) {
    if (!$value || strlen($value) === 0) {
        return true;
    }

    return false;
}

function convertNullIfEmpty($value) {
    if (isEmpty($value)) {
        return null;
    }

    return trim($value);
}