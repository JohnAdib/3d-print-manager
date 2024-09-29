# Use the official Node.js image for Vite development
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the Vite dev server port (default: 4011)
EXPOSE 4011

# Start the Vite development server
CMD ["npm", "run", "dev"]
