<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function root()
    {
        return response()->json([
            'okay' => true,
            'message' => 'Welcome to the API',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(),
            ]
        ]);
    }

    public function v1()
    {
        return response()->json([
            'okay' => true,
            'message' => 'All good',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(),
            ]
        ]);
    }

}
