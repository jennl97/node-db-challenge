
exports.seed = function(knex, Promise) {
   return knex('projects').insert([
     {name: 'Node DB Challenge', description: 'A challenge of my node and database skills', completed: false},
     {name: 'Node Authentication Challenge', description: 'A challenge of node authentication skills', completed: false}   
   ]);
};
