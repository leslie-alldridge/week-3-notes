exports.seed = function (knex, Promise) {
  return knex('rubbish').del()
    .then(function () {
      return knex('rubbish').insert([
        {id: 77701, name: 'polystyrene'},
        {id: 77702, name: 'tin can'},
        {id: 77703, name: 'nappy'},
        {id: 77704, name: 'coffee cup'},
        {id: 77705, name: 'plastic'},
        {id: 77706, name: 'dust'}
      ])
    })
}
