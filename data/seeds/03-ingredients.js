
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'cheese'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'peanut butter and jelly'},
        {ingredient_name: 'pasta'}
      ]);
};
