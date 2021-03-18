
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'grilled cheese', created_at: Date.now()},
        {recipe_id: 2, recipe_name: 'PB&J', created_at: Date.now()},
        {recipe_id: 3, recipe_name: 'pasta', created_at: Date.now()}
      ]);
    });
};
