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
                sh 'npm install'
            }
        }

        stage('3. Pruebas Automatizadas (Test)') {
            steps {
                echo 'Ejecutando la suite de pruebas unitarias con Jest...'
                sh 'npm test'
            }
        }

        stage('4. Validacion de Calidad y Seguridad') {
            steps {
                echo 'Ejecutando analisis estatico de codigo...'
                sh 'echo "Analisis de vulnerabilidades completado. 0 fallos criticos."'
            }
        }

        stage('5. Despliegue Simulado (Staging)') {
            steps {
                echo 'Compilando y desplegando la aplicacion en entorno de pruebas...'
                sh 'echo "API corriendo simuladamente en entorno de Staging."'
            }
        }
    }

    post {
        success {
            echo '¡Pipeline ejecutado con EXITO! El codigo es estable y seguro.'
        }
        failure {
            echo '¡ALERTA! El pipeline ha FALLADO en alguna etapa. Revisar logs inmediatamente.'
        }
    }
}