
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'My first to do item ', status: 'active'},
        {description: 'My second to do item ', status: 'active'},
        {description: 'My third to do item', status: 'active'},
         {description: 'My fourth to do item', status: 'active'}
      ]);
    });
};
