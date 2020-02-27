var express = require('express');
var usersCtrl = require('./Controllers/usersCtrl');

exports.router = (function(){
    var apiRouter = express.Router();

    //Users routes
    apiRouter.route('/users/register').post(usersCtrl.register);
    apiRouter.route('/users/login/');

    return apiRouter;

})();