# Simple Full Stack gRPC application with PHP Backend and React Frontend

This project is a full-stack application that demonstrates communication between a **PHP backend** using gRPC and a **React frontend**. The backend is implemented using **Spiral PHP**, **RoadRunner**, and **gRPC**, while the frontend uses **React** and **gRPC-Web**. **Envoy** acts as a proxy to facilitate communication between the frontend and backend.

## Features

- **Backend**: A PHP gRPC server that receives a custom string from the frontend and returns it.
- **Frontend**: A React app with a button that sends a custom string to the backend and displays the returned string.
- **Proxy**: Envoy is used to handle communication between the React app and the PHP gRPC backend.
- **Testing**: Includes unit tests for both the backend and frontend.

## Technologies Used

- **Backend**:
  - PHP
  - Spiral PHP
  - RoadRunner
  - gRPC
- **Frontend**:
  - React
  - gRPC-Web
- **Proxy**:
  - Envoy
- **Testing**:
  - PHPUnit (for backend)
  - Jest (for frontend)
- **Containerization**:
  - Docker
  - Docker Compose

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/netnaho/gRPC-PHP-React.git
```
then
```bash
cd gRPC-PHP-React
```

## 2. Run the Project

To start the application, run the following command:

```bash
docker-compose up --build
```

This will:

Build the Docker images for the backend, frontend, and Envoy proxy.

Start all the services.

Once the containers are running, you can access the application at:

Frontend: http://localhost:3000

Envoy Proxy: http://localhost:9095

Backend: http://localhost:9001 (gRPC server)

## Running Tests
### Backend Tests
To run the PHPUnit tests for the backend, execute the following command:

```bash
docker exec -it <backend_container_id> 
```
then
```bash
./vendor/bin/phpunit tests/Grpcservice/PingServiceTests.php
```
Replace <backend_container_id> with the actual container ID of the backend service. You can find the container ID using:

```bash
docker ps
```
### Frontend Tests
To run the Jest tests for the frontend, execute the following command:

```bash
docker exec -it <frontend_container_id>
```
then
```bash
npm test
```
Replace <frontend_container_id> with the actual container ID of the frontend service.

## How It Works
### Frontend
The React app sends a custom string to the backend via gRPC-Web when a button is clicked.

The returned string from the backend is displayed on the frontend.

### Backend
The PHP gRPC server receives the string from the frontend.

It processes the string and returns it to the frontend.

### Envoy Proxy
Envoy acts as a bridge between the React app (gRPC-Web) and the PHP gRPC backend.

It translates gRPC-Web requests into gRPC requests and vice versa.