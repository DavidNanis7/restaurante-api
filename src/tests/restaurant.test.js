const request = require('supertest');
const app = require('../app'); // Aquí llamamos al corazón de tu API

describe('Pruebas del Sistema de Restaurante', () => {
    
    // Prueba 1: Validar el módulo de usuarios
    it('Debería obtener la lista de usuarios correctamente', async () => {
        const res = await request(app).get('/api/usuarios');
        expect(res.statusCode).toEqual(200); // Esperamos que responda con un estado OK (200)
        expect(Array.isArray(res.body)).toBe(true); // Esperamos que devuelva una lista
    });

    // Prueba 2: Validar el módulo de reservas (Flujo correcto)
    it('Debería crear una reserva exitosamente', async () => {
        const res = await request(app)
            .post('/api/reservas')
            .send({ mesa: 3, fecha: '2026-07-20' });
        expect(res.statusCode).toEqual(201); // 201 significa "Creado con éxito"
        expect(res.body.estado).toBe('pendiente');
    });

    // Prueba 3: Validar comportamiento ante errores (Fallo controlado)
    it('Debería rechazar una reserva si faltan datos', async () => {
        const res = await request(app)
            .post('/api/reservas')
            .send({ mesa: 2 }); // Error a propósito: No enviamos la fecha
        expect(res.statusCode).toEqual(400); // 400 significa "Petición incorrecta"
    });
});