const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensaje: "Módulo de pedidos activo" });
});

module.exports = router;