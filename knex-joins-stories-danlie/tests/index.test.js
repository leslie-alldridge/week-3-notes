/* global test beforeEach afterEach expect */
const request = require('supertest')

const server = require('../server')
const testEnv = require('./test-environment')

let testDb = testEnv.getTestDb()

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

test('list wombles', () => {
  const expected = 'WOMBLES!'
  return request(server)
    .get('/')
    .then(res => {
      expect(res.text).toBe(expected)
    })
})

