const request = require('supertest')
const app = require('./index')

describe('Notes API Integration Tests', () => {
  
  test('POST then GET: should return the new note in list', async () => {
    const newNote = {
      content: "Integration test note",
      important: true
    }

    // Create new note
    await request(app)
      .post('/api/notes')
      .send(newNote)
      .expect(200)

    // Get all notes, and check the new one is included
    const response = await request(app).get('/api/notes')
    const contents = response.body.map(note => note.content)
    expect(contents).toContain("Integration test note")
  })

  test('DELETE then GET: should remove the note from list', async () => {
    // First, get current notes
    const response = await request(app).get('/api/notes')
    const idToDelete = response.body[0].id

    // Delete the first note
    await request(app)
      .delete(`/api/notes/${idToDelete}`)
      .expect(204)

    // Confirm it's no longer in the list
    const getResponse = await request(app).get('/api/notes')
    const ids = getResponse.body.map(note => note.id)
    expect(ids).not.toContain(idToDelete)
  })

})