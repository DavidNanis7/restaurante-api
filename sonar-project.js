const { scanner } = require('sonarqube-scanner');

scanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'restaurante-api',
    'sonar.projectName': 'API Sistema Restaurante',
    'sonar.projectVersion': '1.0.0', // Añadimos la versión del proyecto
    'sonar.sources': 'src',
    'sonar.tests': 'src/tests',
    'sonar.javascript.environments': '["node", "jest"]',
    // ¡AQUÍ PEGA TU TOKEN DE SONARQUBE!
    'sonar.login': 'squ_ae5b1b2605dfc8b2887f0b8f8a6a8ce70e2926dd' 
  }
}, () => {});