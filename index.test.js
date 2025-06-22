const request = require('supertest')
const app = require('./index') // still works

describe('Notes API', () => {

  test('GET /api/notes returns JSON and status 200', async () => {
    await request(app)
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

})