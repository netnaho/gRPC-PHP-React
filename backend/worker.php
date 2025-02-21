<?php

use Spiral\GRPC\Server;
use Grpcservice\PingServiceInterface;
use Spiral\RoadRunner\Worker;
use Spiral\Goridge\StreamRelay;
use Grpcservice\PingService;

require __DIR__ . '/vendor/autoload.php';

$server = new Server(null, [
    'debug' => true, // optional (default: false)
    'grpc.max_receive_message_length' => 10 * 1024 * 1024, // 10MB
    'grpc.max_send_message_length' => 10 * 1024 * 1024, // 10MB
]);

// $server = new Server();
$server->registerService(PingServiceInterface::class, new PingService());

$worker = \method_exists(Worker::class, 'create')
    // RoadRunner >= 2.x
    ? Worker::create()
    // RoadRunner 1.x
    : new Worker(new StreamRelay(STDIN, STDOUT))
;

$server->serve($worker);