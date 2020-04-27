const db = require("../database/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    findById,
  };
  
  function find(email) {
    return db("users").where('email', email).first();
  }
  
  function findBy(filter) {
    return db("users").where("email", filter);
  }
  
  async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
  }
  
  function findById(id) {
    return db("users")
      .where("id", id)
      .first();
  } 