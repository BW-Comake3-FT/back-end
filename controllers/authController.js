// const db = require('');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//completes the registration process by saving the user to the db
exports.register = (req, res) => {
    // db.register(req.user).then(() => {
    //   res.status(201).send({message: 'Success!'});
    // })
    // .catch(err => {
    //   res.status(500).send(err);
    // });  
}

//completed the login process by creating and returning authentication token to user
exports.login = (req, res) => {
    token = jwt.sign(req.user, process.env.KEY, {expiresIn: '3h'});
    res.status(200).send({message: 'Welcome!', token: token});
}

