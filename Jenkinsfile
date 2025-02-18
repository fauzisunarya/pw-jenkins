pipeline {
    agent any
    stages {
        stage('Run Playwright Test') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                    bat '''
                        copy /y "%ENV_FILE%" .env
                        type .env
                        npm ci
                        npx playwright --version  // Memverifikasi versi Playwright
                        npx playwright test --list  // Menampilkan daftar tes
                        npx playwright test  // Menjalankan tes
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

