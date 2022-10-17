//Rutas de la zona de F A C T U R A C I O N

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina vista de facturas en general
router.get('/reportes', (req,res) => {
    res.render('reportes/reporte');
    console.log("Ya que nadie cojio reportes, lo tomo yo!");
});

module.exports= router;