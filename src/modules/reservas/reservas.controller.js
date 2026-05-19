const express = require('express');
const router = express.Router();

let reservas = [
    { id: 1, mesa: 5, fecha: '2026-06-01', estado: 'confirmada' }
];

router.post('/', (req, res) => {
    const { mesa, fecha } = req.body;
    if (!mesa || !fecha) {
        return res.status(400).json({ error: 'Mesa y fecha requeridas' });
    }
    const nuevaReserva = { id: reservas.length + 1, mesa, fecha, estado: 'pendiente' };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
});

module.exports = router;