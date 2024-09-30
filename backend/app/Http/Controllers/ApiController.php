<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function root(): JsonResponse
    {
        return response()->json([
            'okay' => true,
            'msg' => 'Welcome to the API! this is the root endpoint. Please use /v1 for the latest version',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(),
                "latest_api_url" => "/api/v1",
                "latest_api_docs" => "/docs",
            ],
        ]);
    }

    public function v1(): JsonResponse
    {
        return response()->json([
            'okay' => true,
            'msg' => 'Wow! You are using the latest version of the API. We are happy to have you here!',
            'result' => [
                "apiList" => [
                    'add_project' => [
                        "method" => "POST",
                        "url" => "/api/v1/project-3d",
                    ]
                ],
                "apiDocs" => "/docs",
            ],
        ]);
    }
}
