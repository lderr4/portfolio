FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
# Use Node.js LTS as the base image
FROM node:lts AS runtime

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Astro project
RUN npm run build

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the correct port
EXPOSE 4321

# Start the Astro server
CMD ["npm", "run", "preview"]
