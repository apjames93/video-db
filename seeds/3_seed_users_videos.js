exports.seed = function(knex, Promise) {
  return knex('users_videos').del()
    .then(function () {
      return Promise.all([
        knex('users_videos').insert({
          users_id: 1,
          video_id: 1
        }),
        knex('users_videos').insert({
          users_id: 1,
          video_id: 2
        })
      ]);
    });
};
