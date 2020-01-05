
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'Mac Desktop', description: ''},
    {name: 'Lambda School Website', description: 'Notes'},
    {name: 'Quiet space', description: 'Keep everyone away'}
  ])
};
