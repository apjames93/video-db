exports.seed = function(knex, Promise) {
  return knex('video').del()
    .then(function () {
      return Promise.all([
        knex('video').insert({
          youtube: 'https://www.youtube.com/embed/gO_KyTtJg10',
          reaction: 'test'
        }),
        knex('video').insert({
          youtube: 'https://www.youtube.com/embed/gO_KyTtJg10',
          reaction: 'test'
        })
      ]);
    });
};
