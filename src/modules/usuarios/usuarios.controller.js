const express = require('express');
const router = express.Router();

// Cambiamos la ruta base a propósito para que el test no la encuentre en '/'
router.get('/', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan Perez', rol: 'cliente' },
        { id: 2, nombre: 'Ana Gomez', rol: 'admin' }
    ]);
});

module.exports = router;