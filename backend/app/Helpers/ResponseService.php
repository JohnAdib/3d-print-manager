<?php

namespace App\Helpers;

use Illuminate\Http\JsonResponse;

class ResponseService
{
    /**
     * Create a standard success response.
     *
     * @param string $message
     * @param array $result
     * @param int $statusCode
     * @return JsonResponse
     */
    public static function success(
        string $message,
        array $result = [],
        int $statusCode = 200
    ): JsonResponse {
        return response()->json([
            'okay' => true,
            'msg' => $message,
            'result' => $result
        ], $statusCode);
    }

    /**
     * Create a standard error response.
     *
     * @param string $message
     * @param array $result
     * @param int $statusCode
     * @return JsonResponse
     */
    public static function error(
        string $message,
        array $result = [],
        int $statusCode = 400
    ): JsonResponse {
        return response()->json([
            'okay' => false,
            'msg' => $message,
            'result' => $result
        ], $statusCode);
    }
}
