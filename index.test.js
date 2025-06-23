const request = require('supertest')
const app = require('./index') // still works

describe('Notes API', () => {

  test('GET /api/notes returns JSON and status 200', async () => {
    await request(app)
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('POST /api/notes creates a new note', async () => {
    const newNote = {
      content: "Test note",
      important: true
    }

    const response = await request(app)
      .post('/api/notes')
      .send(newNote)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.content).toBe("Test note")
    expect(response.body.important).toBe(true)
  })

  test('POST /api/notes without content returns 400', async () => {
    const badNote = {
      important: true
    }

    await request(app)
      .post('/api/notes')
      .send(badNote)
      .expect(400)
  })
})