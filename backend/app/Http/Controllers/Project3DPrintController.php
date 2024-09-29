<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project3DPrintRequest;
use App\Services\Project3DPrintService;
use App\Helpers\JsonResponseService;
use Illuminate\Http\JsonResponse;

class Project3DPrintController extends Controller
{
    protected $projectService;
    protected $jsonResponseService;

    public function __construct(
        Project3DPrintService $projectService,
        JsonResponseService $jsonResponseService
    ) {
        $this->projectService = $projectService;
        $this->jsonResponseService = $jsonResponseService;
    }

    public function save(Project3DPrintRequest $request): JsonResponse
    {
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


        return response()->json(
            $this->jsonResponseService->createResponse(
                true,
                'Project and files uploaded successfully',
                $result
            ),
            201
        );
    }
}
