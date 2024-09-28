<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the request to ensure a file is provided
        $request->validate([
            'file' => 'required|file|max:20480', // Limit file size to 20MB
        ]);

        // Store the file in the 'uploads' directory inside 'storage/app/public'
        $path = $request->file('file')->store('uploads', 'public');

        // Return the file path and success message
        return response()->json([
            'message' => 'File uploaded successfully',
            'file_path' => $path,
        ], 201);
    }
}
