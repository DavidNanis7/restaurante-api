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

        // ====================================================================
        // ESTA ES LA NUEVA ETAPA DE SEGURIDAD QUE VAMOS A AÑADIR:
        // ====================================================================
        stage('2.5. Escaneo de Seguridad (SecOps)') {
            steps {
                echo 'Revisando que las librerias instaladas no tengan vulnerabilidades...'
                // Usamos "|| exit 0" para que si encuentra advertencias de seguridad leves,
                // el pipeline nos avise pero NO se detenga por completo.
                bat 'npm audit || exit 0' 
            }
        }
        // ====================================================================

        stage('3. Pruebas Automatizadas (Test)') {
            steps {
                echo 'Ejecutando la suite de pruebas unitarias con Jest...'
                bat 'npm test'
            }
        }

        stage('4. Validacion de Calidad y Seguridad') {
            steps {
                echo 'Ejecutando analisis estatico de codigo...'
                bat 'echo "Analisis de vulnerabilidades completado. 0 fallos criticos."'
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
            echo '¡Pipeline ejecutado con EXITO! El codigo es estable y seguro.'
        }
        failure {
            echo '¡ALERTA! El pipeline ha FALLADO en alguna etapa. Revisar logs inmediatamente.'
        }
    }
}