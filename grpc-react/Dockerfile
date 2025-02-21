# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the project files
COPY . .

# Expose port for the React dev server
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]
