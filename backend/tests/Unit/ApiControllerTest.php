<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\ApiController;

class ApiControllerTest extends TestCase
{
    protected ApiController $controller;

    protected function setUp(): void
    {
        parent::setUp();
        $this->controller = new ApiController();
    }

    /**
     * Test the root method of ApiController.
     *
     * @return void
     */
    public function test_root()
    {
        $response = $this->controller->root();

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $expectedData = [
            'okay' => true,
            'msg' => 'Welcome to the API! this is the root endpoint. Please use /v1 for the latest version',
            'result' => [
                'version' => 1,
                'update' => now()->toDateTimeString(), // Note: This will not match exactly
                "latest_api_url" => "/api/v1",
                "latest_api_docs" => "/docs",
            ],
        ];

        $this->assertEquals($expectedData['okay'], $response->getData()->okay);
        $this->assertEquals($expectedData['msg'], $response->getData()->msg);
        $this->assertEquals($expectedData['result']['latest_api_url'], $response->getData()->result->latest_api_url);
        $this->assertEquals($expectedData['result']['latest_api_docs'], $response->getData()->result->latest_api_docs);
        $this->assertEquals(1, $response->getData()->result->version);
        // You may want to skip checking the exact timestamp, just check if it's a string
        $this->assertIsString($response->getData()->result->update);
    }

    /**
     * Test the v1 method of ApiController.
     *
     * @return void
     */
    public function test_v1()
    {
        $response = $this->controller->v1();

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $expectedData = [
            'okay' => true,
            'msg' => 'Wow! You are using the latest version of the API. We are happy to have you here!',
            'result' => [
                "apiList" => [
                    'add_project' => [
                        "method" => "POST",
                        "url" => "/api/v1/project-3d",
                    ]
                ],
                "apiDocs" => "/docs",
            ],
        ];

        $this->assertEquals($expectedData['okay'], $response->getData()->okay);
        $this->assertEquals($expectedData['msg'], $response->getData()->msg);
        $this->assertEquals($expectedData['result']['apiDocs'], $response->getData()->result->apiDocs);
        $this->assertEquals($expectedData['result']['apiList']['add_project']['method'], $response->getData()->result->apiList->add_project->method);
        $this->assertEquals($expectedData['result']['apiList']['add_project']['url'], $response->getData()->result->apiList->add_project->url);
    }
}
