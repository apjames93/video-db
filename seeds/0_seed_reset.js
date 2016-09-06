exports.seed = function(knex, Promise) {
      return knex.raw("TRUNCATE users , video , users_videos RESTART IDENTITY CASCADE")
    .then(function() {
      return knex('users_videos').del()
    .then(function() {
      return knex('users').del();
    })
    .then(function(){
    	return knex('video').del();
    });
  });
};
