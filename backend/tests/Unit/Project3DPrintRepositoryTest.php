<?php

namespace Tests\Unit;

use App\Repositories\Project3DPrintRepository;
use App\Services\DataStorageService;
use Mockery;
use Tests\TestCase;

class Project3DPrintRepositoryTest extends TestCase
{
    protected $dataStorageService;
    protected $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->dataStorageService = Mockery::mock(DataStorageService::class);
        $this->repository = new Project3DPrintRepository($this->dataStorageService);
    }

    public function testItStoresProjectDataWithFiles()
    {
        $projectData = [
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'projectName' => 'My 3D Print Project',
            'description' => 'This is a 3D print project.',
            'dataPath' => '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/data.json',
        ];

        // Set up expectation for the storeData method
        $this->dataStorageService
            ->shouldReceive('storeData')
            ->once()
            ->with($projectData, $projectData['dataPath'], 'public');

        // Call the method under test
        $this->repository->saveProjectWithFiles($projectData);

        // Check if the mock was called as expected
        $this->dataStorageService->shouldHaveReceived('storeData')
            ->once()
            ->with($projectData, $projectData['dataPath'], 'public');


        $this->assertTrue(true);
        // Verify that Mockery expectations are met
        Mockery::close();
    }
}
