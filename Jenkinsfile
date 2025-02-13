pipeline {
    agent any  // Menjalankan di agent mana saja yang tersedia

    stages {
        stage('Run in Docker') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:v1.50.1-noble').inside {
                        
                        // Retrieve .env file from Jenkins credentials
                        withCredentials([file(credentialsId: 'pw', variable: 'ENV_FILE')]) {
                            sh 'cp $ENV_FILE .env'
                        }

                        // Install dependencies
                        sh 'npm ci'

                        // Load environment variables
                        sh 'export $(grep -v "^#" .env | xargs)'

                        // Run Playwright tests
                        sh 'npx playwright test'
                    }
                }
            }
        }
    }
}
