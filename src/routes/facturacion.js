//Rutas de la zona de F A C T U R A C I O N

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina vista de facturas en general
router.get('/factura', (req,res) => {
    res.send('bienvenido a zona de facturacion');
    
});

//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfactura', (req,res) => {
    res.render('facturacion/agregarprodfactura');
   
});

//Ruta de interfaz de visualizar todas las facturas
router.get('/verfacturas', (req,res) => {
    res.render('facturacion/verfactura');
  
});

//Ruta de interfaz de visualizar todas las facturas
router.get('/crearfactura', (req,res) => {
    res.render('facturacion/crearfactura');
  
});

module.exports= router;