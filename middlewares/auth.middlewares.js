var User = require('../models/user.model');
module.exports.requireAuth = function(req, res, next) {
    if(!req.signedCookies.userId) {
        res.redirect('/login');
        return;
    }
    var user = User.find({id: req.signedCookies.userId });
    if(!user) {
        res.redirect('/login');
        return;
    }
    res.locals.user= user;
    next();
}
module.exports.requireLogin = function(req, res, next) {
    
    var user = User.find({id: req.signedCookies.userId });
    if(!req.signedCookies.userId || !user) {
        next();
        return;
    }
    res.redirect('/');
    return;
}