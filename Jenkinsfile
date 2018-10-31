pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    } 
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install pm2 --global'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}
