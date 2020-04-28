exports.seed = function(knex) {
  return knex("projects").insert([
    {
      "id": 1,
      "title": "Gold project",
      "description": "This is a random description!",
      "location": "Chicago",
      "timestamp": "2020-04-27 22:21:03"
    },
    {
      "id": 2,
      "title": "Silver project",
      "description": "Awesome! It's working.",
      "location": "Atlanta",
      "timestamp": "2020-04-27 22:23:09"
    },
    {
      "id": 3,
      "title": "Titanium project",
      "description": "Hmm...",
      "location": "Omaha",
      "timestamp": "2020-04-27 22:25:02"
    }
  ]);
};