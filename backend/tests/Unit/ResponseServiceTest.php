<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Helpers\ResponseService;
use Illuminate\Http\JsonResponse;

class ResponseServiceTest extends TestCase
{
    /**
     * Test success response format.
     *
     * @return void
     */
    public function test_success_response()
    {
        $message = 'Operation successful';
        $result = ['key' => 'value'];
        $statusCode = 200;

        $response = ResponseService::success($message, $result, $statusCode);

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals($statusCode, $response->getStatusCode());

        $expectedData = [
            'okay' => true,
            'msg' => $message,
            'result' => $result
        ];

        $this->assertEquals($expectedData, $response->getData(true));
    }

    /**
     * Test error response format.
     *
     * @return void
     */
    public function test_error_response()
    {
        $message = 'Operation failed';
        $result = ['error' => 'Something went wrong'];
        $statusCode = 400;

        $response = ResponseService::error($message, $result, $statusCode);

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals($statusCode, $response->getStatusCode());

        $expectedData = [
            'okay' => false,
            'msg' => $message,
            'result' => $result
        ];

        $this->assertEquals($expectedData, $response->getData(true));
    }

    /**
     * Test default values for success response.
     *
     * @return void
     */
    public function test_success_response_with_default_values()
    {
        $message = 'Operation successful';

        $response = ResponseService::success($message);

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $expectedData = [
            'okay' => true,
            'msg' => $message,
            'result' => []
        ];

        $this->assertEquals($expectedData, $response->getData(true));
    }

    /**
     * Test default values for error response.
     *
     * @return void
     */
    public function test_error_response_with_default_values()
    {
        $message = 'Operation failed';

        $response = ResponseService::error($message);

        $this->assertInstanceOf(JsonResponse::class, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $expectedData = [
            'okay' => false,
            'msg' => $message,
            'result' => []
        ];

        $this->assertEquals($expectedData, $response->getData(true));
    }
}
