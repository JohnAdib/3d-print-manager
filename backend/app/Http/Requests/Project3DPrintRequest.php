<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Project3DPrintRequest extends FormRequest
{
    public function rules(): array
    {
        $maxFileSize = env('MAX_FILE_SIZE_MB', 20) * 1024;

        return [
            'uid' => 'required|string|uuid',
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'projectName' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:2000',
            'files' => 'required|array',
            'files.*' => "required|file|max:{$maxFileSize}",
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
