const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});
app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));