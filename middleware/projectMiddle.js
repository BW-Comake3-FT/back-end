const Projects = require('../data/projectModel');
const axios = require('axios');

 exports.validateProject = (req, res, next) => {
    if (req.body.title === undefined ||
        req.body.description === undefined ||
        req.body.category === undefined ||
        req.body.solution === undefined) {
            res.status(400).send({message: 'Invalid Form. Missing Required Data'});
        } else {
            console.log(req.user.zipcode)
            axios.get(`https://us-zipcode.api.smartystreets.com/lookup?auth-id=27f99001-0e5d-08ee-e0c0-52829d565392&auth-token=aKbJQ37XATKhhNOMNuUN&zipcode=${req.user.zipcode}`)
            .then(res => {
                console.log(res.data[0].city_states)
                let cityState = `${res.data[0].city_states[0].city}, ${res.data[0].city_states[0].state}, ${req.user.zipcode}`
                req.project = {
                    title: req.body.title,
                    description: req.body.description,
                    location: cityState,
                    category: req.body.category,
                    solution: req.body.solution,
                }
                next();
            }).catch(err => res.status(500).send({message: err}));
        }
 }

 exports.validateId = (req, res, next) => {
    Projects.findById(req.params.id).then(project => {
        if (project === undefined) {
            res.status(404).send('Invalid Project ID');
        } else {
            next();
        }
    })
 }