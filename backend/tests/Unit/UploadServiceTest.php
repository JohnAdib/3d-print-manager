<?php

namespace Tests\Unit;

use App\Services\UploadService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UploadServiceTest extends TestCase
{
    protected UploadService $uploadService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->uploadService = new UploadService();
        // Prepare the Storage facade
        Storage::fake('public'); // Use fake storage for testing
    }

    public function testItUploadsFileSuccessfully()
    {
        $file = UploadedFile::fake()->create('document.pdf', 100);
        $directory = 'uploads/documents';

        $filePath = $this->uploadService->uploadFile($file, $directory);

        // Assert that the file was stored correctly
        $this->assertTrue(Storage::disk('public')->exists($filePath));
        $this->assertStringStartsWith($directory, $filePath);
    }
}
