exports.up = function(knex, Promise) {
return knex.schema.createTable('users_videos', function(table){
      table.increments();
      table.integer('users_id').references('users.id');        table.integer('video_id').references('video.id');      
     });
};
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('users_videos');
};
