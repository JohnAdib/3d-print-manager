<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project3DPrintRequest;
use App\Services\Project3DPrintService;
use App\Helpers\ResponseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\UploadedFile;

class Project3DPrintController extends Controller
{
    protected Project3DPrintService $projectService;

    public function __construct(
        Project3DPrintService $projectService
    ) {
        $this->projectService = $projectService;
    }

    /**
     * Save a 3D print project along with associated files.
     *
     * @group 3D Print Projects
     *
     * This endpoint allows you to submit a 3D print project with the necessary details and files.
     *
     * @bodyParam uid string required The unique identifier for the project. Example: 2ecd2430-24f9-4d60-927d-7ec9937a2360
     * @bodyParam name string nullable The name of the project owner. Example: John Doe
     * @bodyParam email string nullable The email address of the project owner. Example: john@example.com
     * @bodyParam projectName string nullable The name of the project. Example: My 3D Print Project
     * @bodyParam description string nullable A short description of the project. Example: This is a 3D print project.
     * @bodyParam files file[] required The STL files related to the project. These must be an array of files.
     *
     * @response 201 {
     *  "okay": true,
     *  "msg": "Project submitted successfully",
     *  "result": {
     *    "uid": "2ecd2430-24f9-4d60-927d-7ec9937a2360",
     *    "name": "John Doe",
     *    "email": "john@example.com",
     *    "projectName": "My 3D Print Project",
     *    "description": "This is a 3D print project.",
     *    "type": "3d_print",
     *    "folder": "3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360",
     *    "dataPath": "3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/data.json",
     *    "files": [
     *      "3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/file1.stl",
     *      "3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/file2.stl"
     *    ]
     *  }
     * }
     *
     * @response 400 {
     *  "okay": false,
     *  "msg": "Validation error",
     *  "result": {
     *    "errors": {
     *      "files": ["The files field is required."]
     *    }
     *  }
     * }
     *
     * @response 500 {
     *  "okay": false,
     *  "msg": "An error occurred while saving the project",
     *  "result": {
     *    "error": "Detailed error message"
     *  }
     * }
     */

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

            if ($files instanceof UploadedFile) {
                $files = [$files];
            } elseif ($files === null) {
                $files = [];
            }

            $result = $this->projectService->saveProjectWithFiles(
                $projectData,
                $files
            );

            return ResponseService::success(
                'Project Submitted Successfully',
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
