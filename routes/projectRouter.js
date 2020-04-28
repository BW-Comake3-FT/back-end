const projectMiddle = require('../middleware/projectMiddle');
const projectController = require('../controllers/projectController');
const router = require('express').Router();

router.get("/", projectController.getProjects);

router.get("/:id", projectMiddle.validateId, projectController.getProjectById);

router.post("/", projectMiddle.validateProject, projectController.addProject);

router.put("/:id", projectMiddle.validateId, projectController.updateProject);

router.delete("/:id", projectMiddle.validateId, projectController.deleteProject);

module.exports = router;

 