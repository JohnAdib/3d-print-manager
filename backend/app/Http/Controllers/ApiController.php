<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function root(): JsonResponse
    {
        return response()->json([
            'okay' => true,
            'message' => 'Welcome to the API! this is the root endpoint',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(),
            ],
        ]);
    }

    public function v1(): JsonResponse
    {
        return response()->json([
            'okay' => true,
            'message' => 'All good! this is the v1 endpoint',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(),
            ],
        ]);
    }
}
