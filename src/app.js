const express = require('express');
const app = express();

app.use(express.json());

// Importar Módulos
const usuariosRouter = require('./modules/usuarios/usuarios.controller');
const reservasRouter = require('./modules/reservas/reservas.controller');
const pedidosRouter = require('./modules/pedidos/pedidos.controller');

// Rutas base
app.use('/api/usuarios', usuariosRouter);
app.use('/api/reservas', reservasRouter);
app.use('/api/pedidos', pedidosRouter);

// Endpoint de salud del sistema (Crucial para el Pipeline)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

module.exports = app;