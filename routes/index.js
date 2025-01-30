//_ Rutas para ferretec
const express = require('express');
const path = require('path');
const app = express();



//# Middleware para usar archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

//# Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/productos.html'));
});

app.get('/tiendas', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/tiendas.html'));
});

app.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/servicios.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/ofertas.html'));
});

app.get('/sobre-nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/sobre-nosotros.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '../components/contacto.html'));
});

app.listen(8554, () => {
    console.log('Servidor corriendo en el puerto 8554');
});