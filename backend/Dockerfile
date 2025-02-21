# Use the latest Ubuntu image
FROM ubuntu:latest

# Set the timezone environment variable to avoid interactive prompts
ENV TZ=UTC

# Copy RoadRunner binary from the first stage
# COPY --from=roadrunner /usr/bin/rr /usr/local/bin/rr

# Update package list and install dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    curl \
    unzip \
    wget \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update \
    && apt-get install -y php8.2-cli php8.2-mbstring php8.2-xml php8.2-curl php8.2-zip php8.2-sockets \
    && apt-get clean

# Verify PHP installation
RUN php -v

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    libprotobuf-dev \
    protobuf-compiler \
    libgrpc-dev

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN wget -O /tmp/protoc-gen-php-grpc.tar.gz https://github.com/spiral-modules/php-grpc/releases/download/v1.6.0/protoc-gen-php-grpc-1.6.0-linux-amd64.tar.gz && \
    tar -xzf /tmp/protoc-gen-php-grpc.tar.gz -C /tmp && \
    mv /tmp/protoc-gen-php-grpc-1.6.0-linux-amd64/protoc-gen-php-grpc /usr/local/bin && \
    chmod +x /usr/local/bin/protoc-gen-php-grpc && \
    rm -r /tmp/protoc-gen-php-grpc.tar.gz && \
    rm -r /tmp/protoc-gen-php-grpc-1.6.0-linux-amd64

RUN wget -O /tmp/rr-grpc.tar.gz https://github.com/spiral-modules/php-grpc/releases/download/v1.6.0/rr-grpc-1.6.0-linux-amd64.tar.gz && \
    tar -xzf /tmp/rr-grpc.tar.gz -C /tmp && \
    mv /tmp/rr-grpc-1.6.0-linux-amd64/rr-grpc /usr/local/bin && \
    rm -r /tmp/rr-grpc-1.6.0-linux-amd64 && \
    rm -r /tmp/rr-grpc.tar.gz

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --optimize-autoloader

# Generate protobuf classes
# RUN mkdir -p generated \
#     && protoc --php_out=src --php-grpc_out=src proto/service.proto

# Expose gRPC port
EXPOSE 9001

# Start RoadRunner gRPC server
CMD ["rr-grpc", "serve", "-c", ".rr.yaml", "--verbose"]