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
        $projectFolder = "3d_print/{$projectData['uid']}";

        $filePaths = $this->uploadService->uploadFiles(
            $files,
            $projectFolder
        );

        $projectData['files'] = $filePaths;

        $this->projectRepository->saveProjectWithFiles($projectData);

        return $projectData;
    }
}
