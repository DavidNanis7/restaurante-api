const sonarScanner = require('sonarqube-scanner').sonarScanner;

sonarScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'restaurante-api',
    'sonar.projectName': 'restaurante-api',
    'sonar.projectVersion': '1.0.0',
    'sonar.sources': 'src',
    'sonar.language': 'js',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.sourceEncoding': 'UTF-8'
  }
}, () => {
  console.log('Análisis estático con SonarQube finalizado.');
});