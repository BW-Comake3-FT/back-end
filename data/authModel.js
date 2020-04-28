const db = require('./dbconfig');

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
  
  function add(user) {
    return db('users').insert(user).then(ids => {
        return findById(ids[0]);
    });
  }
  
  function findById(id) {
    return db("users")
      .where("id", id)
      .first();
  } 