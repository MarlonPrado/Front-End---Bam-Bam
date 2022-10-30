//Llamando a Express JS
const express = require('express');
const passport = require('passport');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina inicial(Login del usuario)
router.get('/', (req,res) => {
    res.render('auth/login')
   
});

router.post('/', passport.authenticate('local.login', {
    
        successRedirect: '/dashboard',
        failureRedirect: '/',
        
    }));





module.exports= router;