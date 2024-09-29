<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;

class Project3DController extends Controller
{
    public function save(Request $request): JsonResponse
    {
        // Validate the incoming request
        $request->validate([
            'uid' => 'required|string|uuid',
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'projectName' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:2000',
            // Validate each file, max size 20MB
            'files.*' => 'required|file|max:20480',
        ]);

        // Collect additional project data
        $projectData = [
            'uid' => $request->input('uid'),
            'name' => $request->input('name', null),
            'email' => $request->input('email', null),
            'projectName' => $request->input('projectName', null),
            'description' => $request->input('description', null),
        ];

        $filePaths = [];

        if ($request->hasFile('files')) {
            // Get files from the request
            $files = $request->file('files');

            // Ensure $files is always an array
            if (!is_array($files)) {
                $files = [$files];
            }

            foreach ($files as $file) {
                if ($file !== null) {
                    // Store each file in the 'uploads' directory inside 'storage/app/public'
                    $path = $file->store('uploads', 'public');
                    $filePaths[] = $path;
                }
            }
        }

        // Return a success response with project data and file paths
        return response()->json([
            'message' => 'Project and files uploaded successfully',
            'projectData' => $projectData,
            'filePaths' => $filePaths,
        ], 201);
    }
}
