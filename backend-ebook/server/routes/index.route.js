const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.json('Status on');
})

//app.use(require('./categoria.route'));
//app.use(require('./image.route'));
//app.use(require('./producto.route'));
app.use(require('./usuario.route'));
app.use(require('./receta.route'));
//app.use(require('./upload.route'));
app.use(require('./login.route'));


module.exports = app;
