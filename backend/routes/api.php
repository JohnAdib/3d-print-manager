<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\Project3DController;

Route::get('/', [ApiController::class, 'root']);
Route::get('/v1', [ApiController::class, 'v1']);

Route::post('/v1/upload', [FileUploadController::class, 'upload']);
Route::post('/v1/project-3d', [Project3DController::class, 'save']);

Route::get('/example', function () {
    return response()->json(['message' => 'Hello, Laravel API!']);
});
