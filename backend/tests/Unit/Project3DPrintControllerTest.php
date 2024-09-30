<?php

namespace Tests\Unit;

use App\Http\Controllers\Project3DPrintController;
use App\Http\Requests\Project3DPrintRequest;
use App\Services\Project3DPrintService;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class Project3DPrintControllerTest extends TestCase
{
    protected Project3DPrintController $controller;
    protected $mockService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->mockService = $this->createMock(Project3DPrintService::class);
        $this->controller = new Project3DPrintController($this->mockService);
    }

    public function testSaveSuccess()
    {
        // Arrange: Set up the mock service to return expected data
        $this->mockService->expects($this->once())
            ->method('saveProjectWithFiles')
            ->willReturn([
                'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'projectName' => 'My 3D Print Project',
                'description' => 'This is a 3D print project.',
                'type' => '3d_print',
                'folder' => '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360',
                'dataPath' => '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/data.json',
                'files' => [
                    '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/file1.stl',
                    '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/file2.stl'
                ],
            ]);

        // Act: Create a fake request and call the save method
        $request = new Project3DPrintRequest([
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'projectName' => 'My 3D Print Project',
            'description' => 'This is a 3D print project.',
            'files' => [
                UploadedFile::fake()->create('file1.stl', 100),  // Create a fake file
                UploadedFile::fake()->create('file2.stl', 100),  // Create a fake file
            ],
        ]);

        $response = $this->controller->save($request);

        // Assert: Check the response
        $this->assertEquals(201, $response->getStatusCode());
    }
}
