# Stage 1: Build the Vue.js app
FROM node:lts-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the app with an external Nginx (no need for Nginx here)
FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist

# No need to expose ports here; Nginx will serve it

CMD ["sh", "-c", "echo 'Build Complete. Serve via Nginx.'"]
