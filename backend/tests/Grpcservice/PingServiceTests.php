<?php

namespace Grpcservice\Tests;

use PHPUnit\Framework\TestCase;
use Grpcservice\PingRequest;
use Grpcservice\PingResponse;
use Grpcservice\PingService;
use Spiral\GRPC\ContextInterface;

class PingServiceTests extends TestCase {
    public function testPing() {
        $contextMock = $this->createMock(ContextInterface::class);

        $requestMock = $this->createMock(PingRequest::class);
        $requestMock->method('getMessage')->willReturn("Hello");

        $pingService = new PingService();
        
        $response = $pingService->Ping($contextMock, $requestMock);
        $this->assertInstanceOf(PingResponse::class, $response);

        $this->assertEquals("Received: Hello", $response->getMessage());
    }

    public function testPingWithEmptyString() {
        $contextMock = $this->createMock(ContextInterface::class);

        $requestMock = $this->createMock(PingRequest::class);
        $requestMock->method('getMessage')->willReturn('');

        $pingService = new PingService();

        $response = $pingService->Ping($contextMock, $requestMock);

        $this->assertInstanceOf(PingResponse::class, $response);
        $this->assertEquals("Received: ", $response->getMessage());
    }
}



