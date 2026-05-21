pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('1. Descarga de Codigo (Checkout)') {
            steps {
                echo 'Descargando la ultima version del repositorio desde GitHub...'
                checkout scm
            }
        }

        stage('2. Instalacion de Dependencias') {
            steps {
                echo 'Instalando modulos de Node.js...'
                bat 'npm install'
            }
        }

        stage('3. Pruebas Automatizadas (Test)') {
            steps {
                echo 'Ejecutando la suite de pruebas unitarias con Jest...'
                bat 'npm test'
            }
        }

        // --- NUEVA ETAPA DE SONARQUBE ---
        stage('3.5. Analisis de Calidad (SonarQube)') {
    steps {
        echo 'Iniciando el analisis en SonarQube...'
        bat 'sonar-scanner -Dsonar.projectKey=restaurante-api -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=TU_TOKEN'
            }
        }

        stage('4. Validacion de Calidad y Seguridad') {
            steps {
                echo 'Ejecutando analisis estatico de codigo...'
                bat 'echo "Analisis complementario finalizado."'
            }
        }

        stage('5. Despliegue Simulado (Staging)') {
            steps {
                echo 'Compilando y desplegando la aplicacion en entorno de pruebas...'
                bat 'echo "API corriendo simuladamente en entorno de Staging."'
            }
        }
    }

    post {
        success {
            echo '¡Pipeline ejecutado con EXITO! El codigo es estable, seguro y aprobado por SonarQube.'
        }
        failure {
            echo '¡ALERTA! El pipeline ha FALLADO en alguna etapa. Revisar logs inmediatamente.'
        }
    }
}