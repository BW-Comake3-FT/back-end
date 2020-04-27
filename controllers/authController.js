const Users = require("../users/users-model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//completes the registration process by saving the user to the db
exports.register = (req, res) => {
    Users.add(req.user).then(() => {
      res.status(201).send({message: 'Success!'});
    })
    .catch(err => { 
      res.status(500).send(err);
    });  
}

//completes the login process by creating and returning authentication token to user
exports.login = async (req, res) => {
    token = jwt.sign(req.user, process.env.KEY, {expiresIn: '24h'});
    res.status(200).send({message: 'Welcome!', token: token});
}

