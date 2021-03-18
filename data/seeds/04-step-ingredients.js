
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {step_ingredients_id: 1, step_id: 1, ingredient_id: 2, quantity: 2},
        {step_ingredients_id: 2, step_id: 2, ingredient_id: 1, quantity: 2},
        {step_ingredients_id: 3, step_id: 3, ingredient_id: 3, quantity: 5},
        {step_ingredients_id: 4, step_id: 4, ingredient_id: 4, quantity: 10}
      ]);
    });
};
