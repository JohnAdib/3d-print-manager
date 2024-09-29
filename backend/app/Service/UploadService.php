<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class UploadService
{
    public function uploadFiles(array $files, string $folder): array
    {
        $filePaths = [];

        foreach ($files as $file) {
            if ($file !== null) {
                $path = $file->store($folder, 'local');
                $filePaths[] = $path;
            }
        }

        return $filePaths;
    }
}
