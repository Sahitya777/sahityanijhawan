# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the desired port (change it if your Next.js app runs on a different port)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
