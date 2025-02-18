pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.50.1-noble' } }
    stages {
        stage('Run Playwright Test') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                    sh '''
                        chmod 644 $ENV_FILE
                        cp $ENV_FILE .env
                        echo $ENV_FILE
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

