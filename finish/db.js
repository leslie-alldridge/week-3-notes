const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserAndProfile: getUserAndProfile,
  addProfile:addProfile,
  getUserAndProfile2:getUserAndProfile2
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getUserAndProfile(id, testConn){ 

  const conn = testConn || connection  
  
  
  return conn('users').select()
  .join('profile', 'profile_id', '=', 'profile.id')
  .where('users.id', id).first()
}

function getUserAndProfile2(id, testConn){ 

  const conn = testConn || connection  
  
  
  return conn('profile').select()
  .join('users', 'profile.id', '=', 'profile_id')
  .where('users.profile_id', id).first()
}


function addProfile (testConn){
  const conn = testConn || connection  
  return conn('profile').select()
}