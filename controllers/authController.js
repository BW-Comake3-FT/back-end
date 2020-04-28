const Users = require("../data/authModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//completes the registration process by saving the user to the db
exports.register = (req, res) => {
    Users.add(req.user).then(() => {
      res.status(201).send({message: 'Success!'});
    })
    .catch(err => { 
      if (err.errno === 19) { //SQL CONSTRAINT - User already exists
        res.status(400).send({message: 'This e-mail address is already in use.'});
      } else {
        res.status(500).send(err);
      }
    });  
}

//completes the login process by creating and returning authentication token to user
exports.login = async (req, res) => {
    token = jwt.sign(req.user, process.env.KEY, {expiresIn: '24h'});
    res.status(200).send({message: 'Welcome!', token: token});
}

