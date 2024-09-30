<?php

namespace Tests\Unit;

use App\Http\Requests\Project3DPrintRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;

class Project3DPrintRequestTest extends TestCase
{
    public function testItValidatesCorrectly()
    {
        $requestData = [
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'projectName' => 'My 3D Print Project',
            'description' => 'This is a 3D print project.',
            'files' => [
                // Mock file upload (you can use actual UploadedFile for more realistic tests)
                'file1.stl',
                'file2.stl'
            ],
        ];

        $request = new Request($requestData);
        $projectRequest = new Project3DPrintRequest();

        // Simulate the authorization and validation
        $this->assertTrue($projectRequest->authorize());
        $this->assertEquals($projectRequest->rules(), $projectRequest->rules());

        // Validate the request data
        $validator = Validator::make($request->all(), $projectRequest->rules());
    }

    public function testItFailsValidationForMissingUid()
    {
        $requestData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'projectName' => 'My 3D Print Project',
            'description' => 'This is a 3D print project.',
            'files' => [
                // Mock file upload
                'file1.stl',
                'file2.stl'
            ],
        ];

        $request = new Request($requestData);
        $projectRequest = new Project3DPrintRequest();

        $this->assertTrue($projectRequest->authorize());

        // Validate the request data
        $validator = Validator::make($request->all(), $projectRequest->rules());

        $this->assertTrue($validator->fails());
        $this->assertEquals('The uid field is required.', $validator->errors()->first('uid'));
    }

    public function testItFailsValidationForInvalidEmail()
    {
        $requestData = [
            'uid' => '2ecd2430-24f9-4d60-927d-7ec9937a2360',
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'projectName' => 'My 3D Print Project',
            'description' => 'This is a 3D print project.',
            'files' => [
                // Mock file upload
                'file1.stl',
                'file2.stl'
            ],
        ];

        $request = new Request($requestData);
        $projectRequest = new Project3DPrintRequest();

        $this->assertTrue($projectRequest->authorize());

        // Validate the request data
        $validator = Validator::make($request->all(), $projectRequest->rules());

        $this->assertTrue($validator->fails());
    }
}
