<?php

namespace App\Repositories;

use App\Services\DataStorageService;

class Project3DPrintRepository
{
    protected $dataStorageService;

    public function __construct(DataStorageService $dataStorageService)
    {
        $this->dataStorageService = $dataStorageService;
    }

    public function saveProjectWithFiles(array $projectData): void
    {
        $this->dataStorageService->storeData(
            $projectData,
            $projectData['dataPath'],
            'public',
        );

        // TODO: Save project to database
        // This is a placeholder for the actual database save
        // for the MVP, we are only storing the data.json file
        // as there was no requirement to store the project in the database!

    }
}
