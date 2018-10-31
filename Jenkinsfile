pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    } 
    stages {
        stage('UpdateNpm') {
            steps {
                sh 'npm install -g npm'
            }
        }
        stage('UpdateNode') {
            steps {
                sh 'npm cache clean -f'
                sh 'npm install -g n'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
