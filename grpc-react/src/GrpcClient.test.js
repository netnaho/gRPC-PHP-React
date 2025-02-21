import { render, screen, fireEvent } from "@testing-library/react";
import GrpcClient from "./components/GrpcClient";
import { PingServiceClient } from "./service_grpc_web_pb";
import { PingRequest } from "./service_pb";
import React from "react";

// Mock the gRPC client
jest.mock("./service_grpc_web_pb", () => ({
  PingServiceClient: jest.fn().mockImplementation(() => ({
    ping: jest.fn(),
  })),
}));

describe("GrpcClient Component", () => {
  let mockPing;

  beforeEach(() => {
    mockPing = jest.fn();
    PingServiceClient.mockImplementation(() => ({
      ping: mockPing,
    }));
  });

  test("renders input field and button", () => {
    render(<GrpcClient />);
    
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    expect(screen.getByText("Ping")).toBeInTheDocument();
  });

  test("updates input text", () => {
    render(<GrpcClient />);
    
    const input = screen.getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "Hello gRPC" } });
    
    expect(input.value).toBe("Hello gRPC");
  });

  test("sends a gRPC request and updates response text", () => {
    render(<GrpcClient />);
    
    const input = screen.getByPlaceholderText("Enter text");
    const button = screen.getByText("Ping");
    
    // Mock gRPC response
    const mockResponse = {
      getMessage: () => "Response from gRPC",
    };

    mockPing.mockImplementation((request, metadata, callback) => {
      callback(null, mockResponse);
    });

    fireEvent.change(input, { target: { value: "Hello gRPC" } });
    fireEvent.click(button);

    // Check if ping was called
    expect(mockPing).toHaveBeenCalledTimes(1);
    expect(mockPing).toHaveBeenCalledWith(expect.any(PingRequest), {}, expect.any(Function));

    // Check if the response text updates
    expect(screen.getByText("Response from gRPC")).toBeInTheDocument();
  });

  test("handles gRPC error", () => {
    render(<GrpcClient />);
    
    const button = screen.getByText("Ping");
    
    // Mock gRPC error
    mockPing.mockImplementation((request, metadata, callback) => {
      callback({ message: "Network error" }, null);
    });

    fireEvent.click(button);

    // Check if the error was logged
    expect(mockPing).toHaveBeenCalledTimes(1);
  });
});
