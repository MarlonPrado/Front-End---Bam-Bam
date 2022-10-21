//Rutas de la zona de F A C T U R A C I O N

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina vista de facturas en general
router.get('/inv', (req,res) => {
    res.send('bienvenido a zona de facturacion');
   
});

//Agregar un producto al inventario
router.get('/agregarproducto', (req,res) => {
    res.render('inventario/Agregarproducto.hbs', {style: '/css/style.css'});
   
});

//Visualiza el inventario
//router.get('/verinventario2', (req,res) => {
  //  res.render('inventario/inventario (2).hbs');
    
//});

//Visualiza el inventario
router.get('/subinv', (req,res) => {
    res.render('inventario/subirinventario.hbs');
    
});


//Visualiza el inventario
router.get('/tabla', (req,res) => {
    res.render('inventario/tabla.hbs');
    
});


//Visualiza el inventario
//router.get('/inventario', (req,res) => {
  //  res.render('inventario/inventario.hbs');
    
//});


module.exports= router;