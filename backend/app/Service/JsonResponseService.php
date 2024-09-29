<?php

namespace App\Helpers;

class JsonResponseService
{
    public function createResponse(
        bool $okay,
        string $msg,
        $result = null
    ): array {
        return [
            'okay' => $okay,
            'msg' => $msg,
            'result' => $result,
        ];
    }
}
