pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000 -d'
        }
    } 
    stages {
        stage('BuildAngularApp') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/deliver.sh'
            }
        }
    }
}
