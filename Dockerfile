# Use a lightweight Node.js image
FROM node:20-alpine

# Set environment variables (optional but good practice)
ENV DB_URI=mongodb://admin:password@mongodb:27017/admin \
    PORT=8000 \
    NODE_ENV=development

# Set the working directory inside the container
WORKDIR /home/app-server

# Copy only package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies (only production dependencies for production builds)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 8000

# Start the application
CMD ["npm", "run", "dev"]
