var bcrypt = require('bcryptjs');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');

module.exports = {
    register: function(req, res){
        
        var email = req.params.email;
        // var username = req.params.username;
        var username = req.params.first_name;
        var password = req.params.password;

        if(email == null || username == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters'});
        }

        models.User.findOne({
            attributes: ['email'],
            where: {email: email}
        })
        .then(function(userFound) {
            if(!userFound) {
                bcrypt(password, 5, function(err, bcryptedPassword) {
                    var newUser = models.User.create({
                        email: email,
                        username: username,
                        password: password,
                        isAdmin: 0
                    })
                    .then(function(newUser) {
                        return res.status(201).json({
                            'userId':newUser.id
                        })
                    })
                    .catch(function(err) {
                        return res.status(500).json({ 'error': 'cannot add user'});
                    })
                })
            }
            else {
                return res.status(400).json({ 'error': 'user already exist'});
            }
        })
        .catch(function(err) {
            return res.status(400).json({ 'error': 'unable to verify user'});
        })
    },
    longin: function(req, res) {
        var email = req.body.email;
        var password = req.body.password;

        if(email == null || password == null) {
            return res.status(400).json({ 'error': 'missing paramaters'});
        }

        models.User.findOne({
            where: {email: email}
        })
        .then(function(userFound) {
            if(userFound) {
                bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                    if(resBycrypt) {
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        }); 
                    }
                    else{
                        return res.status(403).json({ 'error': 'invalid password'});
                    }
                })
            }
        })
        .catch(function(err) {
            return res.status(400).json({ 'error': 'unable to verify user'});
        })
    }
}