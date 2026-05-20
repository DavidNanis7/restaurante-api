# 📋 API de Gestión de Restaurante - Pipeline CI/CD

Este repositorio contiene la API modular para la gestión de un restaurante (módulos de usuarios, pedidos y reservas) junto con la configuración de su pipeline automatizado de Integración Continua utilizando **Jenkins**.

## 🚀 Arquitectura y Tecnologías
* **Backend:** Node.js con Express
* **Testing:** Jest y Supertest
* **Automatización:** Jenkins LTS
* **Seguridad:** Analizador estático con npm audit

## ⚙️ Etapas del Pipeline
1. **Checkout SCM:** Descarga del código fuente desde GitHub.
2. **Instalación:** Reconstrucción estricta de dependencias (`npm install`).
3. **SecOps:** Escaneo de vulnerabilidades conocidas (`npm audit`).
4. **Testing:** Ejecución de la suite de pruebas unitarias y aserciones de endpoints (`npm test`).
5. **Calidad:** Verificación estática del código.
6. **Staging:** Simulación de despliegue en entorno controlado.