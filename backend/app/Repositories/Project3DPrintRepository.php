<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Storage;

class Project3DPrintRepository
{
    public function saveProjectWithFiles(array $projectData): void
    {
        $projectFolder = "3d_print/{$projectData['uid']}";

        Storage::disk('local')->makeDirectory($projectFolder);

        $jsonFilePath = "{$projectFolder}/project_{$projectData['uid']}.json";
        Storage::disk('local')->put(
            $jsonFilePath,
            json_encode(
                $projectData,
                JSON_PRETTY_PRINT
            )
        );
    }
}
