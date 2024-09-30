<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Project3DPrintController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ApiController::class, 'root']);
Route::get('/v1', [ApiController::class, 'v1']);

Route::post('/v1/project-3d', [Project3DPrintController::class, 'save']);
