const projectMiddle = require('../middleware/projectMiddle');
const projectController = require('../controllers/projectController');
const router = require('express').Router();
const Projects = require("../data/projectModel");

router.get("/", projectController.getProjects);

router.post("/", projectMiddle.validateProject, projectController.addProject);

router.delete("/:id", projectMiddle.validateId, projectController.deleteProject);

module.exports = router;

 