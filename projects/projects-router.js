const router = require('express').Router();

const Projects = require("../projects/projects-model");

router.get("/", (req, res) => {
    Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(() => res.status(500).json({ message: "Cannot retrieve messages"}))
});

router.post("/", (req, res) => {
    console.log(req.body);
    Projects.add(req.body)
    .then(() => res.status(201).json({ message: "Successfully posted"}))
    .catch(error => res.status(500).json({ message: error }))
});

router.delete("/:id", (req, res) => {
    Projects.remove(req.params.id)
    .then(num => res.status(200).json(num))
    .catch(error => res.status(500).json({ error: error.message }))
});

module.exports = router;

