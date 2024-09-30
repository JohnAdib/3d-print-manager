<?php

namespace Tests\Unit;

use App\Services\DataStorageService;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class DataStorageServiceTest extends TestCase
{
    protected $dataStorageService;

    protected function setUp(): void
    {
        parent::setUp();
        // Mock the Storage facade
        Storage::shouldReceive('disk')
            ->with('public')
            ->andReturnSelf();
        Storage::shouldReceive('exists')->andReturn(false);
        Storage::shouldReceive('makeDirectory')->andReturn(true);
        Storage::shouldReceive('put')->andReturn(true);
    }

    public function testItStoresDataSuccessfully()
    {
        $data = [
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ];
        $filePath = '3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360/data.json';

        $result = (new DataStorageService())->storeData($data, $filePath);

        // Assert the returned file path
        $this->assertEquals($filePath, $result);

        // Verify interactions with the mocked Storage facade
        Storage::shouldHaveReceived('exists')->with('3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360')->once();
        Storage::shouldHaveReceived('makeDirectory')->with('3d_print/2ecd2430-24f9-4d60-927d-7ec9937a2360')->once();
        Storage::shouldHaveReceived('put')->with($filePath, json_encode($data, JSON_PRETTY_PRINT))->once();
    }

}
