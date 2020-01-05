
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).unique().notNullable();
      tbl.string('description', 128);
      tbl.boolean('completed', false);
  })

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 1000);
        tbl.boolean('completed', false);
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128).unique().notNullable();
        tbl.string('description', 128)
    })

    .createTable('project_resources', tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources');
        tbl.primary(['project_id', 'resource_id']);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
