const e = require("express");

exports.up = function(knex) {
    return knex.schema
        .createTable("Project", table => {
            table.increments("Id");
            table.text('Name', 128)
                .notNullable();
            table.text('Description')
            table.boolean("IsCompleted")
                .defaultTo(false);
        })
        .createTable("Resource", table => {
            table.increments("Id");
            table.text('Name', 128)
                .notNullable();
            table.text('Description');
        })
        .createTable("Task", table => {
            table.increments("Id");
            table.text('Description')
                .notNullable();
            table.text('Notes');
            table.boolean("IsCompleted")
                .defaultTo(false);
            table.integer("ProjectId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Project");
        })
        .createTable("ProjectResource", table => {
            table.increments("Id");
            table.integer("ProjectId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Project")
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer("ResourceId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Resource")
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ProjectResource')
        .dropTableIfExists('Task')
        .dropTableIfExists('Resource')
        .dropTableIfExists('Project');
};
