const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan Perez', rol: 'cliente' },
        { id: 2, nombre: 'Ana Gomez', rol: 'admin' }
    ]);
});

module.exports = router;