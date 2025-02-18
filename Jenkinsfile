pipeline {
    agent any
    stages {
        stage('Read ENV') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                    bat '''
                        copy /y "%ENV_FILE%" .env
                        type .env

                    '''
                }
            }  
        }
        stage('Run Playwright Tes') {
            steps{
                bat 'npm ci'
            }
            
        }
        stage('Run Playwright Test') {
            steps{
                bat 'npx playwright test'
            }
            post {
                always {
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright Test Report',
                        includes: '**/*'
                    ])
                }
            }  
        }
    }
}

