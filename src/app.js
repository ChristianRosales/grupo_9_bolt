const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
//const mainController = require('./controllers/mainController');
const mainRoutes = require('./routes/mainRoutes');
app.use(express.static(publicPath) );
app.set("view engine", "ejs");
app.use('/', mainRoutes);

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));