<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class DataStorageService
{
    /**
     * Save data (e.g., JSON) to the specified storage disk.
     *
     * @param array $data
     * @param string $filePath
     * @param string $disk
     * @return string
     */
    public function storeData(
        array $data,
        string $filePath,
        string $disk = 'local'
    ): string {
        // Ensure the directory exists
        $directory = dirname($filePath);
        if (!Storage::disk($disk)->exists($directory)) {
            Storage::disk($disk)->makeDirectory($directory);
        }

        // Save the data to the specified file path
        Storage::disk($disk)->put(
            $filePath,
            json_encode(
                $data,
                JSON_PRETTY_PRINT
            )
        );

        return $filePath;
    }
}
