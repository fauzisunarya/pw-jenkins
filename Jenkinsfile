pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.50.1-noble' } }

    stages {
        stage('Retrieve .env') {
            steps {
                withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Load Environment Variables') {
            steps {
                sh 'export $(grep -v "^#" .env | xargs)'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
