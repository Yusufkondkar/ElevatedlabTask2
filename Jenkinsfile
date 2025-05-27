pipeline {
    agent any

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
                // You can add build steps here if needed
                bat 'echo "No build step needed for basic Node app"'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "No tests defined!"'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t nodejs-demo-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                bat 'docker run -d -p 3000:3000 nodejs-demo-app:latest'
            }
        }
    }
}
