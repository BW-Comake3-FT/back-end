const db = require("./dbConfig");

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("projects");
}

function findById(id) { 
    return db('projects').where("id", id).first();
}

function add(project) {
    return db("projects").insert(project).then(ids => {
        return findById(ids[0]);
    });
}

function update(id, changes) {
    return db("projects").where("id", id).update(changes);
}

function remove(id) {
    return db("projects").where("id", id).del();
}