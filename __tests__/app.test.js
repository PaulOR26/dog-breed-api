const client = require('../db/connection');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
const request = require('supertest');
const app = require('../app');

beforeEach(() => seed(testData));
afterAll(() => client.close());

describe('GET /api/breeds/:breed', () => {
  test('Status 200: Returns requested dog breed object', async () => {
    const { body: cocker } = await request(app)
      .get('/api/breeds/cockerspaniel')
      .expect(200);

    const { body: pug } = await request(app).get('/api/breeds/pug').expect(200);

    expect(cocker.breedInformation).toEqual(
      expect.objectContaining({
        breed_param: 'cockerspaniel',
        breed: 'Cocker Spaniel',
        temperament: expect.any(String),
        characteristics: expect.any(String),
        exercise: expect.any(String),
        dog_url: expect.any(String),
        size: 'Medium',
      })
    );

    expect(pug.breedInformation).toEqual(
      expect.objectContaining({
        breed_param: 'pug',
        breed: 'Pug',
        temperament: expect.any(String),
        characteristics: expect.any(String),
        exercise: expect.any(String),
        dog_url: expect.any(String),
        size: 'Medium',
      })
    );
  });
  test('Status 404: Returns an error when requested dog breed does not exist', async () => {
    const { body } = await request(app).get('/api/breeds/notadog').expect(404);

    expect(body.msg).toBe('notadog does not exist in database');
  });
  // test('Status 404: Returns an error when requested dog breed does not exist', async () => {})
});

// GET /api/breeds
//returns an array of all breeds

// const breedArray = []
// db.breeds.find().forEach((dog)=>{ breedArray.push(dog.breed) })

// describe('ALL /* Not Found', () => {
//     test('Status 404: Returns error Path not recognised', async () => {
