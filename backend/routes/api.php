<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\FileUploadController;

Route::get('/', [ApiController::class, 'root']);
Route::get('/v1', [ApiController::class, 'v1']);

Route::post('/v1/upload', [FileUploadController::class, 'upload']);

Route::get('/example', function () {
    return response()->json(['message' => 'Hello, Laravel API!']);
});
