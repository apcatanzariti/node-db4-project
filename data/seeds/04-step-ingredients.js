
exports.seed = function(knex) {
      return knex('step_ingredients').insert([
        {step_id: 1, ingredient_id: 2, quantity: 2},
        {step_id: 2, ingredient_id: 1, quantity: 2},
        {step_id: 3, ingredient_id: 3, quantity: 5},
        {step_id: 4, ingredient_id: 4, quantity: 10}
      ]);
};
