const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'restaurante-api',
    'sonar.projectName': 'API Sistema Restaurante',
    // ¡Asegúrate de que esta línea use comillas dobles internas de esta manera!:
    'sonar.javascript.environments': '["node", "jest"]'
  }
}, () => {});