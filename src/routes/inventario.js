//Rutas de la zona de F A C T U R A C I O N

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina vista de facturas en general
router.get('/inv', (req,res) => {
    res.send('bienvenido a zona de facturacion');
    console.log("el Dios Brayan con su chad-form melo, simplemente un acarreador number uan")
});

//Agregar un producto al inventario
router.get('/agregarproducto', (req,res) => {
    res.render('inventario/Agregarproducto.hbs');
    console.log("el Dios Brayan con su chad-form melo, simplemente un acarreador number uan")
});

//Visualiza el inventario
router.get('/verinventario', (req,res) => {
    res.render('inventario/inventario.hbs');
    
});


module.exports= router;