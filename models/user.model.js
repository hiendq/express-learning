var mongoose = require('mongoose')

var userChema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
})
var User = mongoose.model('User', userChema, 'users');
module.exports = User;