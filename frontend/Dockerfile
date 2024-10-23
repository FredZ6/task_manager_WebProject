# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]