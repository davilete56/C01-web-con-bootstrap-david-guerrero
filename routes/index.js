//_ Rutas para ferretec
const express = require('express');
const path = require('path');
const app = express();


//! Contador de visitas
const contadorVisitas = {
    inicio: 0,
    productos: 0,
    tiendas: 0,
    servicios: 0,
    ofertas: 0,
    nosotros: 0,
    contacto: 0
};

const contarVisitas = (page) => (req, res, next) => {
    contadorVisitas[page]++;
    console.log(`Visitas a la página de ${page}: ${contadorVisitas[page]}`);
    next();
};

//! Middleware para usar archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

//! Rutas
//# Añadimos el middleware contarVisitas a cada ruta para contar las visitas que se hacen a cada página
app.get('/', contarVisitas('inicio'), (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/productos', contarVisitas('productos'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/productos.html'));
});

app.get('/tiendas', contarVisitas('tiendas'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/tiendas.html'));
});

app.get('/servicios', contarVisitas('servicios'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/servicios.html'));
});

app.get('/ofertas', contarVisitas('ofertas'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/ofertas.html'));
});

app.get('/sobre-nosotros', contarVisitas('nosotros'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/sobre-nosotros.html'));
});

app.get('/contacto', contarVisitas('contacto'), (req, res) => {
    res.sendFile(path.join(__dirname, '../components/contacto.html'));
});

app.listen(8554, () => {
    console.log('Servidor corriendo en el puerto 8554');
});