<?php

namespace App\Repositories;

use App\Services\DataStorageService;

class Project3DPrintRepository
{
    /**
     * @var DataStorageService
     */
    protected $dataStorageService;

    public function __construct(DataStorageService $dataStorageService)
    {
        $this->dataStorageService = $dataStorageService;
    }

    /**
     * @param array<string, mixed> $projectData
     */
    public function saveProjectWithFiles(array $projectData): void
    {
        /** @var string $dataPath */
        $dataPath = $projectData['dataPath'];

        $this->dataStorageService->storeData(
            $projectData,
            $dataPath,
            'public',
        );

        // TODO: Save project to database
        // This is a placeholder for the actual database save
        // for the MVP, we are only storing the data.json file
        // as there was no requirement to store the project in the database!
    }
}