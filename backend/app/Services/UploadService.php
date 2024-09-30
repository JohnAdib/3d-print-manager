<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UploadService
{
    /**
     * Handle file upload and return its path
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param string $disk
     * @return string
     */
    public function uploadFile(
        UploadedFile $file,
        string $directory = 'uploads',
        string $disk = 'public'
    ): string {
        if (!Storage::disk($disk)->exists($directory)) {
            Storage::disk($disk)->makeDirectory($directory);
        }

        if (!$file) {
            return null;
        }

        return $file->store(
            $directory,
            $disk
        );
    }

    /**
     * Handle multiple file uploads and return their paths
     *
     * @param array $files
     * @param string $directory
     * @param string $disk
     * @return array
     */
    public function uploadMultipleFiles(
        array $files,
        string $directory = 'uploads',
        string $disk = 'public'
    ): array {
        $filePaths = [];
        foreach ($files as $file) {
            if (!$file) {
                continue;
            }

            $filePaths[] = $this->uploadFile(
                $file,
                $directory,
                $disk
            );
        }
        return $filePaths;
    }
}
