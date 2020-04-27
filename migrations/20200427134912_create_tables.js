exports.up = function(knex) {
    return knex.schema

    // Users table
    .createTable("users", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("email", 128).notNullable().unique();
        tbl.string("password", 128).notNullable();
        tbl.string("zipcode", 128).notNullable();
    })

    // Projects table
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string('title', 255).notNullable();
        tbl.string('description', 140).notNullable();
        tbl.string('location', 140).notNullable();
        tbl.timestamp('timestamp').defaultTo(knex.fn.now());
        tbl.integer("user_id").references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("users");
};