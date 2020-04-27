const Users = require("../users/users-model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//completes the registration process by saving the user to the db
exports.register = (req, res) => {
<<<<<<< HEAD
    db.register(req.user).then(() => {
=======
    Users.add(req.user).then(() => {
>>>>>>> master
      res.status(201).send({message: 'Success!'});
    })
    .catch(err => {
      res.status(500).send(err);
    });  
}

//completed the login process by creating and returning authentication token to user
exports.login = (req, res) => {
<<<<<<< HEAD
    token = jwt.sign(req.user, process.env.KEY, {expiresIn: '24h'});
=======
    console.log(req.user);
    token = jwt.sign(req.user, process.env.KEY, {expiresIn: '3h'});
>>>>>>> master
    res.status(200).send({message: 'Welcome!', token: token});
}

