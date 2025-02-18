pipeline {
    agent any
    stages {
        stage('Run Playwright Test') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                    bat '''
                        copy /y "%ENV_FILE%" .env
                        npm ci
                        npx playwright test
                    '''
                }
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

