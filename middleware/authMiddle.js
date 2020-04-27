const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require("../users/users-model");


//Ensures proper format of data and creates user object.
exports.validateRegistration = (req, res, next) => {
    if (req.body.email === undefined ||
        req.body.name === undefined ||
        req.body.password === undefined ||
        req.body.zipcode === undefined) {
            res.status(400).send({message: 'Invalid Form. Please refer to https://github.com/BW-Comake3-FT/back-end for api usage.'});
        } else {
            req.user = {
                name: req.body.name, 
                email: req.body.email, 
                password: bcrypt.hashSync(req.body.password, 10), 
                zipcode: req.body.zipcode
            }
            next();
        }
}
 
//Ensures proper format of data and checks validity of the password to login.
exports.validateLogin = (req, res, next) => {
    if (req.body.email === undefined ||
        req.body.password === undefined) {
            res.status(400).send({message: 'Invalid Form. Please refer to https://github.com/BW-Comake3-FT/back-end for api usage.'});
        } else {

            Users.find(req.body.email).then(user => {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.user = user;
                    next();
                } else {
                    res.status(401).send({message: 'Invalid Username or Password'});
                }
            }).catch(err => {
                res.status(500).send(err);
            })

        }
}

//Checks that the user has a valid token to authenticate requests.
exports.validateToken = (req, res, next) => {
    if (req.headers.authenticate !== undefined) {
        jwt.verify(req.headers.authenticate, process.env.KEY, (err, decoded) => {
            if (err) {
                res.status(401).send(err);
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(400).send({message: 'No Token Found. Did you clear your browser storage? Please sign in again.'});
    }
} 