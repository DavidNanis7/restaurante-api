const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'restaurante-api',
    'sonar.projectName': 'API Sistema Restaurante',
    'sonar.sources': 'src',
    'sonar.tests': 'src/tests',
    // ¡AQUÍ ES DONDE VA LA LÍNEA QUE DIO EL ERROR ANTERIOR!
    'sonar.javascript.environments': '["node", "jest"]'
  }
}, () => {});