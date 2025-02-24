<?php
# Generated by the protocol buffer compiler (spiral/php-grpc). DO NOT EDIT!
# source: service.proto

namespace Grpcservice;

use Spiral\GRPC;

interface PingServiceInterface extends GRPC\ServiceInterface
{
    // GRPC specific service name.
    public const NAME = "grpcservice.PingService";

    /**
    * @param GRPC\ContextInterface $ctx
    * @param PingRequest $in
    * @return PingResponse
    *
    * @throws GRPC\Exception\InvokeException
    */
    public function Ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse;
}
