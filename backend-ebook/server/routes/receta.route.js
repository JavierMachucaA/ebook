const express = require('express');

let app = express();

let Receta = require('../models/receta');

/**
 * Crear nueva Receta
 */
app.post('/receta', (req, res) => {
    //regresa una nueva categoría
    //req.usuario._id
    let body = req.body;

    let receta = new Receta({
        nombre: body.nombre,
        listaIngredientes: body.listaIngredientes,
        descripcion: body.descripcion,
        categoria: body.categoria,
        usuario: body.usuario,
        img: null
    });

    console.log("Receta parseada:",receta);
    
    receta.save((err, recetaDB) => {
        if (err) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        if (!recetaDB) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        console.log("Se crea receta :", body.nombre);

        res.json({
            status: true,
            categoria: recetaDB
        });
    });
});

/**
 * Mostrar todas las categorias
 */
/*app.get('/recetas', (req, res) => {

    Receta.find({})
    .sort({descripcion:'asc'})
    //.populate('usuario','nombre email')
    .exec((err,recetas)=>{
        if (err) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        res.json(
            {
                status: true,
                categorias: recetas
            }
        )
    })

})*/

/**
 * Mostrar una categoria
 */
/*app.get('/categoria/:id',verificarToken, (req, res) => {
    let id = req.params.id

    Categoria.findById(id,(err,categoriaDB)=>{
        if (err) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        if(!categoriaDB){
            return res.status(500).json({
                status: false,
                mensaje: 'Id no es correcto'
            })
        }
        res.json(
            {
                status: true,
                categoria: categoriaDB
            }
        )
    })
    
})*/



/**
 * Actualizar nombre de una categoría
 */
/*app.put('/categoria/:id',verificarToken, (req, res) => {
    let id = req.params.id
    let descripcion = req.body.descripcion

    let descripcionCategoria = {
        descripcion: descripcion,
    }
    let options = {} //{ new: true, runValidators: true };
    Categoria.findByIdAndUpdate(id, descripcionCategoria, options, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        if (!categoriaDB) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        console.log("Se modifica categoria :", req.body.descripcion);

        res.json({
            status: true,
            categoria: categoriaDB
        })

    })

})*/

/**
 * Borrar categorias
 */
/*app.delete('/categoria/:id',[verificarToken,verificaAdminRol], (req, res) => {
    //solo el admin puede eliminar 
    let id = req.params.id

    Categoria.findByIdAndRemove(id,(err,categoriaDB)=>{
        if (err) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        if (!categoriaDB) {
            return res.status(500).json({
                status: false,
                mensaje: err
            })
        }
        res.json({
            status: true,
            mensaje: 'Categoria borrada' 
        })  
    })


});*/

module.exports = app