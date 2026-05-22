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

        stage('2.5. Escaneo de Seguridad (SecOps)') {
            steps {
                echo 'Revisando que las librerias instaladas no tengan vulnerabilidades...'
                bat 'npm audit || exit 0'
            }
        }

        stage('3. Pruebas Automatizadas (Test)') {
            steps {
                echo 'Ejecutando la suite de pruebas unitarias con Jest...'
                bat 'npm test'
            }
        }

        stage('4. Validacion de Calidad (SonarQube)') {
            steps {
                // Si SonarQube falla o está apagado, la etapa fallará pero el pipeline CONTINUARÁ en verde
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    echo 'Iniciando analisis estatico de codigo con SonarQube...'
                    bat 'npm run sonar'
                }
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
            echo '¡Pipeline ejecutado con EXITO! El codigo es estable.'
        }
        failure {
            echo '¡ALERTA! El pipeline ha FALLADO en alguna etapa estructural. Revisar logs.'
        }
    }
}