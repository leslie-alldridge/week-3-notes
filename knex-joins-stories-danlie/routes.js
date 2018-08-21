const express = require('express')
const knex = require('knex');
let config = require('./knexfile').development
let db = knex(config)

const router = express.Router()

router.get('/', (req, res) => {
  db('wombles').select().then(data => {
    res.render('home',data) 
     })
})

router.get('/view', (req, res) => {
  db('wombles').join('characteristics', 'characteristic_id', '=', 'characteristics.id').select().then(wombles => {
    res.render('view',{wombles});
  })
 
})

router.get('/assignments', (req, res) => {
  
  db ('wombles')
  .join('rubbish', 'rubbish_id', '=', 'rubbish.id')
  .select("*", "wombles.name AS name", "characteristic_id AS id", "rubbish.name AS trash")

  .then(returnedData => {
    console.log(returnedData)
    res.render('assignments', {returnedData})
  })
})

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/new', (req, res) => {

  let name = req.body.name
  console.log(name);
  
  let description = req.body.description
  console.log(description);
  
  db('characteristics')
  .insert({'description': description})
  .then((data) => {
    console.log(data[0])
    db('wombles')
    .insert({'name': name, 'characteristic_id': data[0]})
    .then (() => {
      res.render('add', {name, submitted: true})
      })
    })
  })

  router.get('/delete', function (req, res){
    db('wombles')
      .select()
      .then((data) => {
        res.render('delete', {data} )
      })
  })

  router.post('/delete', function (req, res){
    //delete the womble
    let name = req.body.name
    console.log(name)
     db('wombles')
      .where('name', name)
      .del()
      .then(() => {
        res.redirect('delete')
      })
  })

  router.get('/update', function (req, res){
    db('characteristics')
      .select()
      .then((data) => {
        db('wombles')
          .select()
          .then((data2) => {
            res.render('update', {data, data2})
          })
      })
  })

  router.post('/update', function (req, res){
    let name = req.body.name
    let amendedDescription = req.body.description   
         console.log(amendedDescription)
  //find womble by name
  db('wombles')
    .where('name', name)
    .then((data) => {
      db('characteristics').where('id', data[0].characteristic_id).update({description:amendedDescription})       // data[0].characteristic_id
        .then() 
      })

res.redirect('update')
  })

  router.get('/rubbish', (req, res) => {
    db('rubbish')
      .select()
      .then((data) => {
        db('wombles')
          .select()
          .then((data2) => {
            res.render('rubbish', {data, data2})
          })
      })
  })
  
  router.post('/rubbish', (req, res) => {
    
    let rubbishPicked = req.body.selectpicker
    let name = req.body.name;
    db('rubbish')
      .where('name', rubbishPicked)
      .then ((data) => {
        console.log(data)
        db('wombles')
      .where('name', name).update({rubbish_id:data[0].id})
      .then()
        res.redirect('rubbish')
        
      })
    
  })
  
  router.get('/addtrash', (req, res) => {
    res.render('trash')
  })
  
  router.post('/addtrash', (req, res) => {
    let newTrash = req.body.trashDesc;
    db('rubbish')
      .insert({name: newTrash})
      .then()
    
    res.render('trash', {newTrash, submitted: true})
  })
  
  router.get('/addstyle', (req, res) => {
    res.render('styles')
  })
  
  router.post('/addstyle', (req, res) => {
    let newStyle = req.body.styleDesc;
    db('characteristics')
      .insert({description: newStyle})
      .then()
    
    res.render('styles', {newStyle, submitted: true})
  })

module.exports = router
