pipeline {
    agent any
    stages {
        stage('Run Playwright Test') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                        bat 'cp $ENV_FILE .env'
                        bat 'echo $ENV_FILE'
                        bat 'npm ci'
                        bat 'npx playwright test'
                    
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

