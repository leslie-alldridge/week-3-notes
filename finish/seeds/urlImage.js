exports.seed = function (knex, Promise) {
    return knex('profile').del()
      .then(function () {
        return knex('profile').insert([
          {id: '801', url: '12123'},
          {id: '802', url: '12123'},
          {id: '803', url: '12123'},
          {id: '804', url: '12123'},
          {id: '805', url: '12123'},
          {id: '806', url: '12123'},
          {id: '807', url: '12123'},
          {id: '808', url: '12123'},
          {id: '809', url: '12123'},
          {id: '810', url: '12123'},
          {id: '811', url: '12123'},
          {id: '812', url: '12123'},
          {id: '813', url: '12123'},
          {id: '814', url: '12123'},
          {id: '815', url: '12123'},
          {id: '816', url: '12123'},
          {id: '817', url: '12123'},
          {id: '818', url: '12123'},
          {id: '819', url: '12123'},
          {id: '820', url: '12123'},
          {id: '821', url: '12123'},
          {id: '822', url: '12123'},
          {id: '823', url: '12123'},
          {id: '824', url: '12123'},
          {id: '825', url: '12123'},
          {id: '826', url: '12123'}
        ])
      })
  }
  