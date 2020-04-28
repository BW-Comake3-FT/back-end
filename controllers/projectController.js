 const Projects = require("../data/projectModel");

 exports.getProjects = (req, res) => {
    Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(() => res.status(500).json({ message: "Cannot retrieve messages"}));
 }

 exports.addProject = (req, res) => {
    Projects.add(req.project)
    .then(project => res.status(201).json({ message: "Successfully posted", project: project}))
    .catch(error => res.status(500).json({ message: error }))
 }

 exports.deleteProject = (req, res) => {
    Projects.remove(req.params.id)
    .then(() => res.status(200).json({message: 'Successfully deleted'}))
    .catch(error => res.status(500).json({ error: error }))
 }