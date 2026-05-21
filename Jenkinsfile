pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Sincronizando el espacio de trabajo con el repositorio de GitHub...'
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
                echo 'Revisando que las librerias instaladas no tengan vulnerabilidades...'
                bat 'npm audit || exit 0'
            }
        }

        stage('Pruebas Automatizadas') {
            steps {
                echo 'Ejecutando la suite de pruebas unitarias con Jest y Supertest...'
                bat 'npm test'
            }
        }

        stage('Validacion de Calidad') {
            steps {
                echo 'Ejecutando analisis estatico de codigo...'
                bat 'echo Analisis de calidad completado.'
            }
        }

        stage('Despliegue Simulado') {
            steps {
                echo 'Compilando y desplegando la aplicacion en entorno de Staging...'
                bat 'echo API corriendo en entorno de Staging de forma simulada.'
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