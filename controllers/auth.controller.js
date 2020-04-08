var bcrypt = require('bcrypt');
var saltRounds = 10;
var User = require('../models/user.model');

module.exports.login = function(req, res){
    res.render('auth/login');
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        password = hash;
    });
    User.find({email: email}).then(function(user) {
        bcrypt.compare(user.password, password, function(err, result) {
            res.send('Đăng nhập thành công');
        });
    })
}