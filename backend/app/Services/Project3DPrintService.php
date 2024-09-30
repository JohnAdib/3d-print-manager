<?php

namespace App\Services;

use App\Repositories\Project3DPrintRepository;
use Illuminate\Http\UploadedFile;

class Project3DPrintService
{
    /**
     * @var UploadService
     */
    protected $uploadService;

    /**
     * @var Project3DPrintRepository
     */
    protected $projectRepository;

    public function __construct(
        UploadService $uploadService,
        Project3DPrintRepository $projectRepository
    ) {
        $this->uploadService = $uploadService;
        $this->projectRepository = $projectRepository;
    }

    /**
     * @param array<string, mixed> $projectData
     * @param array<int, UploadedFile> $files
     * @return array<string, mixed>
     */
    public function saveProjectWithFiles(
        array $projectData,
        array $files
    ): array {
        $projectData['type'] = '3d_print';
        $projectData['folder'] = $projectData['type'] . '/' . $projectData['uid'];
        $projectData['dataPath'] = $projectData['folder'] . '/data.json';

        $filePaths = $this->uploadService->uploadMultipleFiles(
            $files,
            $projectData['folder'],
            "public"
        );

        $projectData['files'] = $filePaths;
        $this->projectRepository->saveProjectWithFiles($projectData);

        return $projectData;
    }
}
