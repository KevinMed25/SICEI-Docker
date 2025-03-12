const express = require('express');
const app = express();
const port = 3000;

// Datos en memoria
const alumnos = [
    { nombre: 'Álvaro Xool', matricula: 'A01234567' },
    { nombre: 'Dioné Martín', matricula: 'A07654321' },
    { nombre: 'Medina Kevin', matricula: 'A09876543' },
    { nombre: 'Oswaldo Chan', matricula: 'A05554444' }
];

const profesores = [
    { nombre: 'Dr. Victor Menéndez', numeroEmpleado: 'P-1001' },
    { nombre: 'Eduardo Redríguez', numeroEmpleado: 'P-1002' },
    { nombre: 'Luis Basto', numeroEmpleado: 'P-1003' },
    { nombre: 'Edwin León', numeroEmpleado: 'P-1004' }
];

// Endpoint para alumnos
app.get('/alumnos', (req, res) => {
    res.json(alumnos);
});

// Endpoint para profesores
app.get('/profesores', (req, res) => {
    res.json(profesores);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});