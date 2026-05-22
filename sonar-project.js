const sonarqubeScanner = require('sonarqube-scanner').default;

sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'restaurante-api',
      'sonar.projectName': 'API Sistema Restaurante',
      'sonar.projectVersion': '1.0.0',
      'sonar.sources': 'src',
      'sonar.tests': 'src/tests', // Si tu carpeta de tests está en otra ruta, cámbiala aquí
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'node_modules/**, src/tests/**',
      'sonar.token': 'squ_ae5b1b2605dfc8b2887f0b8f8a6a8ce70e2926dd' 
    }
  },
  () => process.exit()
);