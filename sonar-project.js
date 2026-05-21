const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner (
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'api-restaurante',
      'sonar.projectName': 'API Gestion Restaurante',
      'sonar.login': 'squ_ae5b1b2605dfc8b2887f0b8f8a6a8ce70e2926dd', // Pega aquí tu token generado
      'sonar.sources': 'src',          // Carpeta donde está tu lógica de negocio
      'sonar.tests': 'src/tests',      // Carpeta donde creaste tus pruebas con Jest
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info', // Si generas reportes de cobertura
    },
  },
  () => process.exit()
);