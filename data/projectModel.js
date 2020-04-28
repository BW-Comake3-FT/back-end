const db = require("./dbConfig");

module.exports = {
    find,
    add,
    remove,
    findById
}

function find() {
    return db("projects");
}

function findById(id) { 
    return db('projects').where({id}).first();
}

function add(project) {
    return db("projects").insert(project).then(ids => {
        return findById(ids[0]);
    });
}

function remove(id) {
    return db("projects").where("id", id).del();
}