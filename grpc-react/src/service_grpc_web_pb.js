/**
 * @fileoverview gRPC-Web generated client stub for grpcservice
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: src/service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpcservice = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.grpcservice.PingServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.grpcservice.PingServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcservice.PingRequest,
 *   !proto.grpcservice.PingResponse>}
 */
const methodDescriptor_PingService_Ping = new grpc.web.MethodDescriptor(
  '/grpcservice.PingService/Ping',
  grpc.web.MethodType.UNARY,
  proto.grpcservice.PingRequest,
  proto.grpcservice.PingResponse,
  /**
   * @param {!proto.grpcservice.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcservice.PingResponse.deserializeBinary
);


/**
 * @param {!proto.grpcservice.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.grpcservice.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcservice.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcservice.PingServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcservice.PingService/Ping',
      request,
      metadata || {},
      methodDescriptor_PingService_Ping,
      callback);
};


/**
 * @param {!proto.grpcservice.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcservice.PingResponse>}
 *     Promise that resolves to the response
 */
proto.grpcservice.PingServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcservice.PingService/Ping',
      request,
      metadata || {},
      methodDescriptor_PingService_Ping);
};


module.exports = proto.grpcservice;

