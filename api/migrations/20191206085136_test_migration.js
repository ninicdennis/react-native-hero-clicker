
exports.up = function(knex) {
   return knex.schema.createTable('save_table', function(t) {
      t.increments('id').unsigned().primary();
      t.string('code').notNull();
      t.integer('click').notNull();
      t.integer('gold').notNull();
      t.string('shop').notNull();
      t.string('guild').notNull();
      t.string('iron_sword').notNull();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('save_table');
};
