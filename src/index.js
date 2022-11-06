// ! Importando librerias & Frameworks
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
const swal = require('sweetalert');

//Configuracion del Servidor

//Puerto del servidor
app.set('port',  process.env.PORT ||4000); 
app.set('views', path.join(__dirname, 'views'));
//Motor de vistas Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //<-- Indica la ubicacion de la carpeta Vistas
    partialsDir: path.join(app.get('views'), 'partials'), //<-- Indica la ubicacion de partials 
    extname: '.hbs', //<-- Indica la extension de la vista (Handlebars.hbs)
    helpers: require('./lib/handlebars')  //<-- Indica la extension de la vista (Handlebars.hbs)
}));

app.set('view engine', 'hbs'); //Asignacion del motor de vista de Handlebars


//Middlewares (Envio, Recepcion de peticiones de servidor)
app.use(morgan('dev')); //<-- Comando por consola
app.use(express.urlencoded({extended: true})); //<-- algo de validacion de formularios :v
app.use(express.json()); //<-- Modulo de gestion de JSON de Express
app.use(flash()); //<-- Mensajes emergentes en la zona superior de la pantalla

//Variables Globales
app.use((req,res,next) =>{
    next();
});
app.use(session({
    secret: 'faztmysqlnodemysql',
    resave: false,
    saveUninitialized: false,
    
  }));


// Global variables
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
  });

//Rutas del servidor

app.use(require('./routes/inicio')); //<-- Login de usuario
app.use(require('./routes/facturacion')); //<-- rutas de facturacion
app.use(require('./routes/inventario'));   //<-- rutas de inventario
app.use(require('./routes/reportes'));  //<-- rutas de reportes
app.use(require('./routes/dashboard'));  //<-- rutas del dashboard
 
//Carpeta Public (Carpeta donde se almacena hoja de estilos, javascript y contenido multimedia del proyecto)
app.use(express.static(path.join(__dirname, 'public')));


//Encender el servidor -- Inicia el servidor y muestra un mensaje en consola
app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto', app.get('port')); 
})


