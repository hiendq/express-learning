var express = require('express');

var controller = require('../controllers/auth.controller');
var middleware = require('../middlewares/auth.middlewares');

var router = express.Router();

router.get('/', middleware.requireLogin, controller.login)

router.post('/', controller.postLogin);

module.exports = router;