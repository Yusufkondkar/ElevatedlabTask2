# 1. Use an official Node.js base image
FROM node:20

# 2. Set working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# 4. Install dependencies inside Docker
RUN npm install

# 5. Copy the rest of the app code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Define the command to run your app
CMD ["node", "index.js"]
