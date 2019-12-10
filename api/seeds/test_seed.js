
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('save_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('save_table').insert([
        
      ]);
    });
};
