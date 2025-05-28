# Task 1: Node.js CI/CD Pipeline with Docker and GitHub Actions
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
## 🚀 Task 2: Jenkins CI/CD Pipeline (Automated Build & Deployment)
In this task, I set up a basic CI/CD pipeline using Jenkins for my Node.js application.

## ✅ What I Did:
Installed Jenkins locally to manage pipeline jobs.

Created a Jenkinsfile in the project repository with defined stages:

Build: Installs project dependencies using npm install.

Test: (Optional) Placeholder stage for running tests.

Deploy: Builds and runs the app in a Docker container.

Configured Jenkins to trigger the pipeline automatically whenever code is pushed to GitHub using Webhooks.

Used Docker to containerize the app, ensuring consistent deployment across environments.

## 🧠 Key Learning:
This task helped me understand how Jenkins automates the software lifecycle — from building and testing the app to deploying it in a reliable and repeatable way. I learned how to connect Jenkins with GitHub and Docker to build a basic but powerful DevOps workflow.


Created by Yusuf Kondkar  
[GitHub](https://github.com/Yusufkondkar)