exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({userName: 'alex', password: '$2a$08$tpw/aTWfCL7Jzy/xWxtVK.lR2LFm8oBh/Y4s8OhkwIgrluujNVGDC'
        })
      ]);
    });
};
