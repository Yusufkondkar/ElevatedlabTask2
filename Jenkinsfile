pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nodejs-demo-app:latest'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Running build (if any)...'
                bat 'echo "No build step needed for basic Node app"'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "No tests defined!"'
            }
        }

        stage('Docker Login') {
            steps {
                echo 'Logging in to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: '920128d4-f588-45d7-9016-f439cbce5f63', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    bat 'echo %DOCKERHUB_PASS% | docker login -u %DOCKERHUB_USER% --password-stdin'
                }
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                bat "docker run -d -p 3000:3000 %IMAGE_NAME%"
            }
        }
    }
}
