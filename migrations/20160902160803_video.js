exports.up = function(knex, Promise) {
return knex.schema.createTable('video', function(table){
      table.increments();
      table.string('youtube');
      table.string('reaction');
     });
};
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('video');
};
