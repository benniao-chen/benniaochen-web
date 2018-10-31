pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    } 
    stages {
        stage('Update') {
            steps {
                sh 'npm -v'
                sh 'node -v'
                sh 'sudo npm cache clean -f'
                sh 'sudo npm install -g n'
                sh 'sudo n stable'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
