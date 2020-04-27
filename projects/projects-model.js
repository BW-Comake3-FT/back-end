const db = require("../database/dbConfig");

module.exports = {
    find,
    add,
    remove
}

function find() {
    return db("projects");
}

function add(project) {
    return db("projects").insert(project);
}

function remove(id) {
    return db("projects").where("id", id).del();
}