pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    } 
    stages {
        stage('UpdateNode') {
            steps {
                sh 'curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash - yum install nodejs -y'
            }
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
