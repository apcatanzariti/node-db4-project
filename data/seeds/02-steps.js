
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_number: '1', step_text: 'get bread', recipe_id: '1'},
        {step_id: 2, step_number: '2', step_text: 'get cheese', recipe_id: '1'},
        {step_id: 3, step_number: '1', step_text: 'smash together pb and j', recipe_id: '2'},
        {step_id: 4, step_number: '1', step_text: 'boil water', recipe_id: '3'}
      ]);
    });
};
