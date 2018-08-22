const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
db

router.get('/userprofile/:id', (req,res) => {
  let userId = req.params.id
  db.getUserAndProfile(userId)
    .then(data => {
      console.log(data)
      res.render('profile', {data})
      })
  })

  router.get('/add', (req, res) => {


    res.render ('form')
  })



  router.post('/add', (req, res) => {
    let addName = req.body.name
    let addEmail = req.body.email
    let addUrl = req.body.url
    let userId = req.params.id
    db.addProfile()
   .insert({url:addUrl})
   .then((data) => {
     console.log(data);
     db.getUserAndProfile(userId)
    .insert({name:addName, email:addEmail}) 
    .then((cb) => {
     console.log(cb)
     }) 
          res.redirect('/')
 })
  })



//   router.post('/add', (req, res) => {
//     let addName = req.body.name
//     let addEmail = req.body.email
//   let addUrl = req.body.url
//     db.getUsers()
//    .insert({name: addName, email:addEmail})
//    .then((data) => {
//      console.log(data);
//      db.addProfile().insert({id: profile.id})
//      .then((cb) => {
//       res.redirect('/')
//      }) 
//  })
//   })


//   router.post ('/addprofile', (req,res) => {

//   let userId = req.params.id
//   db.addProfile()
//   .insert({url:addProfile})
//   .then(data=> {
//     console.log(data[0])
//    db.getUserAndProfile(userId)
//   .insert({profile_id:data[0]})
//   .where('users.profile_id', userId)
//   .then()
//   })
//   res.redirect('/')
// })

module.exports = router
