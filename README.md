# Node.js CI/CD Pipeline with Docker and GitHub Actions

This project demonstrates a simple CI/CD pipeline that builds and pushes a Docker image of a Node.js app to Docker Hub on every push to the `main` branch.

## Setup & Workflow

- Dockerfile builds the Node.js app container
- GitHub Actions workflow triggers on `main` branch push:
  1. Checkout code
  2. Setup Docker Buildx
  3. Login to Docker Hub using secrets
  4. Build and push Docker image

## How to Use

1. Create a Docker Hub repo named `nodejs-demo-app`
2. Generate a Docker Hub access token
3. Add GitHub Secrets `DOCKER_USERNAME` and `DOCKER_PASSWORD` (use token)
4. Push code to `main` branch to trigger the pipeline

## Dockerfile Details

- Base image: node:20
- Installs dependencies and runs `index.js`
- Exposes port 3000

---

Created by Yusuf Kondkar  
[GitHub](https://github.com/Yusufkondkar)