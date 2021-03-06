 const Projects = require("../data/projectModel");

 exports.getProjects = (req, res) => {
    const { location } = req.query;
    location ? Projects.findByLocation(location)
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ message: error }))
    :
    Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(() => res.status(500).json({ message: "Cannot retrieve projects"}));
 }

 exports.getProjectById = (req, res) => {
   Projects.findById(req.params.id)
   .then(project => res.status(200).json(project))
   .catch(() => res.status(500).json({ message: "Cannot retrieve project"}));
}

 exports.addProject = (req, res) => {
    Projects.add(req.project)
    .then(project => res.status(201).json({ message: "Successfully posted", project: project}))
    .catch(error => res.status(500).json({ message: error }))
 }

 exports.updateProject = (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(() => res.status(200).json( { message: "Successfully updated" }))
    .catch(error => res.status(500).json({ message: error }))
 }

 exports.deleteProject = (req, res) => {
    Projects.remove(req.params.id)
    .then(() => res.status(200).json({message: 'Successfully deleted'}))
    .catch(error => res.status(500).json({ error: error }))
 }