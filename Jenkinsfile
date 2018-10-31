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
                sh 'npm -g install npm@next'
            }
        }
        stage('UpdateNode') {
            steps {
                sh 'npm install -g n'
                sh 'n stable'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
