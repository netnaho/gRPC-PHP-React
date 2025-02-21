<?php

namespace Grpcservice;

use Grpcservice\PingServiceInterface;
use Spiral\GRPC\ContextInterface;
use Grpcservice\PingRequest;
use Grpcservice\PingResponse;

class PingService implements PingServiceInterface
{
    public function Ping(ContextInterface $ctx, PingRequest $request): PingResponse
    {
        error_log("Recieved Ping request: " . $request->getMessage());
        $response = new PingResponse();
        $response->setMessage("Received: " . $request->getMessage());
        return $response;
    }
}