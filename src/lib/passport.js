const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use( 'local.login', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, usuario, password, done) => {
    console.log(req.body);
}));