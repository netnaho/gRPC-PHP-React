import React, { useState } from "react";
import "../App.css";
import { PingRequest } from "../service_pb";
import { PingServiceClient } from "../service_grpc_web_pb";

function GrpcClient() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const grpcClient = new PingServiceClient(
    "http://172.21.242.153:9095",
    null,
    null
  );
  const handleSendMessage = () => {
    console.log("in handle message");
    const request = new PingRequest();
    request.setMessage(inputText);
    console.log(request.getMessage());
    grpcClient.ping(request, {}, (err, response) => {
      console.log("Ping method being called");
      if (err) {
        console.log("Error:", err.message);
        // console.log(response);
        return;
      }
      setResponseText(response.getMessage());
    });
  };

  return (
    <div className="App">
      <div>
        <div className="container">
          <h1>gRPC Request</h1>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="Enter text"
          />
          <button className="ping-btn" onClick={handleSendMessage}>
            Ping
          </button>
          <h1>{responseText}</h1>
        </div>
      </div>
    </div>
  );
}

export default GrpcClient;
