<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class DataStorageService
{
    /**
     * Save data (e.g., JSON) to the specified storage disk.
     *
     * @param array<string, mixed> $data
     * @param string $filePath
     * @param string $disk
     * @return string
     */
    public function storeData(
        array $data,
        string $filePath,
        string $disk = 'public'
    ): string {
        // Ensure the directory exists
        $directory = dirname($filePath);
        if (!Storage::disk($disk)->exists($directory)) {
            Storage::disk($disk)->makeDirectory($directory);
        }

        $jsonData = json_encode($data, JSON_PRETTY_PRINT);

        if ($jsonData === false) {
            throw new \RuntimeException('Failed to encode data as JSON.');
        }

        // Save the data to the specified file path
        Storage::disk($disk)->put(
            $filePath,
            $jsonData
        );

        return $filePath;
    }
}
