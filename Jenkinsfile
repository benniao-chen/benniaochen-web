pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    } 
    stages {
        stage('CheckImage') {
            steps {
                sh 'npm -v'
                sh 'node -v'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
