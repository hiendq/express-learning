var User = require('../models/user.model');
var bcrypt = require('bcrypt');
var saltRounds = 10;


module.exports.login = function(req, res){
    res.render('auth/login');
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    User.find({email: email }).exec(function(err,user) {
        if (err) return handleError(err);
        if(user.length === 0) res.render('auth/login', {
            errors: [
                'Wrong password or email.'],
            values: req.body });
        else {
            bcrypt.compare(password, user[0].password, function(err, result) {
                if(result){
                    res.cookie('userId', user.id, {signed: true }, {expire: 480000 + Date.now()});
                    res.send('đăng nhập thành công');
                     
                }else res.render('auth/login', {
                    errors: [
                         'Wrong password or email.'],
                     values: req.body 
                });
            });
        }
    })
    
}