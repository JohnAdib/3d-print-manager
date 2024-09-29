<?php

namespace App\Services;

use App\Repositories\Project3DPrintRepository;
use App\Services\UploadService;

class Project3DPrintService
{
    protected $uploadService;
    protected $projectRepository;

    public function __construct(
        UploadService $uploadService,
        Project3DPrintRepository $projectRepository
    ) {
        $this->uploadService = $uploadService;
        $this->projectRepository = $projectRepository;
    }

    public function saveProjectWithFiles(
        array $projectData,
        array $files
    ): array {
        $projectData['type'] = '3d_print';
        $projectData['folder'] = $projectData['type'] . '/' . $projectData['uid'];
        $projectData['dataPath'] = $projectData['folder'] . '/data.json';

        $filePaths = $this->uploadService->uploadMultipleFiles(
            $files,
            $projectData['folder']
        );

        $projectData['files'] = $filePaths;
        $this->projectRepository->saveProjectWithFiles($projectData);

        return $projectData;
    }
}
