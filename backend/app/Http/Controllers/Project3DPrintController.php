<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project3DPrintRequest;
use App\Services\Project3DPrintService;
use App\Helpers\ResponseService;
use Illuminate\Http\JsonResponse;

class Project3DPrintController extends Controller
{
    protected $projectService;

    public function __construct(
        Project3DPrintService $projectService,
    ) {
        $this->projectService = $projectService;
    }

    public function save(Project3DPrintRequest $request): JsonResponse
    {
        try {
            $projectData = [
                'uid' => $request->input('uid'),
                'name' => $request->input('name', null),
                'email' => $request->input('email', null),
                'projectName' => $request->input('projectName', null),
                'description' => $request->input('description', null),
            ];

            $files = $request->file('files');

            $result = $this->projectService->saveProjectWithFiles(
                $projectData,
                $files
            );

            return ResponseService::success(
                'Project and files uploaded successfully',
                $result,
                201
            );

        } catch (\Exception $e) {
            return ResponseService::error(
                'An error occurred while saving the project!',
                ['error' => $e->getMessage()],
                500
            );
        }
    }
}
