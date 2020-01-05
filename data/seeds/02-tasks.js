
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'Download project from Git', notes: '', completed: true, project_id: 1},
    {description: 'Branch repo', notes: 'Branched as Jennifer Hott-Leitsch', completed: true, project_id: 1},
    {description: 'Download project from Git', notes: 'Downloaded 1/2/2020', completed: true, project_id: 2}
  ])
};
