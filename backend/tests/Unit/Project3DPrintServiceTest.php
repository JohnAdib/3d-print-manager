<?php

namespace Tests\Unit;

use App\Repositories\Project3DPrintRepository;
use App\Services\Project3DPrintService;
use App\Services\UploadService;
use Illuminate\Http\UploadedFile;
use Mockery;
use Tests\TestCase;

class Project3DPrintServiceTest extends TestCase
{
    protected $uploadService;
    protected $projectRepository;
    protected $project3DPrintService;

    protected function setUp(): void
    {
        parent::setUp();

        // Create mocks for dependencies
        $this->uploadService = Mockery::mock(UploadService::class);
        $this->projectRepository = Mockery::mock(Project3DPrintRepository::class);

        // Initialize the service with mocks
        $this->project3DPrintService = new Project3DPrintService(
            $this->uploadService,
            $this->projectRepository
        );
    }

    public function testItSavesProjectWithFilesSuccessfully()
    {
        $projectData = [
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ];

        // Create mock UploadedFile instances
        $file1 = UploadedFile::fake()->create('file1.txt', 100);
        $file2 = UploadedFile::fake()->create('file2.txt', 200);
        $files = [$file1, $file2];

        // Mock the upload service method
        $this->uploadService
            ->shouldReceive('uploadMultipleFiles')
            ->with($files, '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360', 'public')
            ->andReturn(['path/to/file1.txt', 'path/to/file2.txt']);

        // Mock the repository save method
        $this->projectRepository
            ->shouldReceive('saveProjectWithFiles')
            ->with(Mockery::on(function ($data) use ($projectData) {
                return $data['type'] === '3d_print' &&
                    $data['folder'] === '3d_print/' . $projectData['uid'] &&
                    $data['dataPath'] === '3d_print/' . $projectData['uid'] . '/data.json' &&
                    isset($data['files']) &&
                    count($data['files']) === 2;
            }))
            ->once();

        $result = $this->project3DPrintService->saveProjectWithFiles($projectData, $files);

        // Assert the returned project data includes the correct structure
        $this->assertEquals($projectData['uid'], $result['uid']);
        $this->assertEquals('3d_print', $result['type']);
        $this->assertEquals('3d_print/' . $projectData['uid'], $result['folder']);
        $this->assertEquals('3d_print/' . $projectData['uid'] . '/data.json', $result['dataPath']);
        $this->assertCount(2, $result['files']);
    }
}
