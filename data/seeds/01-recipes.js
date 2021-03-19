exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'grilled cheese', created_at: Date.now()},
        {recipe_name: 'PB&J', created_at: Date.now()},
        {recipe_name: 'pasta', created_at: Date.now()}
      ]);
};
