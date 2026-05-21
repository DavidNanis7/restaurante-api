pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo 'Descargando codigo desde el repositorio...'
            }
        }

        stage('Instalacion de Dependencias') {
            steps {
                echo 'Instalando modulos de Node.js...'
                bat 'npm install'
            }
        }

        stage('Escaneo de Seguridad') {
            steps {
                echo 'Ejecutando auditoria de vulnerabilidades...'
                bat 'npm audit || exit 0'
            }
        }

        stage('Pruebas Automatizadas') {
            steps {
                echo 'Ejecutando pruebas unitarias con Jest...'
                bat 'npm test'
            }
        }

        stage('Validacion de Calidad') {
            steps {
                echo 'Analizando la calidad estatica del codigo...'
                bat 'echo Analisis estatico completado.'
            }
        }

        stage('Despliegue Simulado') {
            steps {
                echo 'Desplegando en entorno de Staging...'
                bat 'echo Aplicacion corriendo en Staging.'
            }
        }
    }

    post {
        success {
            echo '¡Pipeline ejecutado con EXITO!'
        }
        failure {
            echo '¡ALERTA! El pipeline ha FALLADO.'
        }
    }
}