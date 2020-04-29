const Users = require("../data/authModel");
const jwt = require('jsonwebtoken');

// Completes the registration process by saving the user to the db
exports.register = (req, res) => {
    Users.add(req.user).then(() => {
      res.status(201).send({message: 'Success!'});
    })
    .catch(err => { 
      if (err.errno === 19) { // SQL CONSTRAINT - User already exists
        res.status(400).send({message: 'This e-mail address is already in use.'});
      } else {
        res.status(500).send(err);
      }
    });  
}

// Completes the login process by creating and returning authentication token to user
exports.login = async (req, res) => {
    tokenData = {id: req.user.id, name: req.user.name, email: req.user.email, zipcode: req.user.zipcode}
    token = jwt.sign(tokenData, process.env.KEY, {expiresIn: '24h'});
    res.status(200).send({message: 'Welcome!', token: token});
}

