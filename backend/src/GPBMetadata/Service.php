<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.proto

namespace GPBMetadata;

class Service
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
service.protogrpcservice"
PingRequest
message (	"
PingResponse
message (	2J
PingService;
Ping.grpcservice.PingRequest.grpcservice.PingResponsebproto3'
        , true);

        static::$is_initialized = true;
    }
}

