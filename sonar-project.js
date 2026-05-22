// Modifica la importación agregando las llaves { }
const { scanner } = require('sonarqube-scanner');

// Llama directamente a "scanner" en lugar de "sonarqubeScanner"
scanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'restaurante-api',
    'sonar.projectName': 'API Sistema Restaurante',
    'sonar.sources': 'src',
    'sonar.tests': 'src/tests',
    'sonar.javascript.environments': '["node", "jest"]'
  }
}, () => {});