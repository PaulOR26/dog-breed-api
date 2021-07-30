const client = require('../db/connection');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
const request = require('supertest');
const app = require('../app');

beforeEach(() => seed(testData));
afterAll(() => client.close());

describe('GET /api/breeds/:breed', () => {
  test('Status 200: Returns requested dog breed object', async () => {
    const { body } = await request(app)
      .get('/api/breeds/cockerspaniel')
      .expect(200);

    expect(body.breedInformation).toEqual(
      expect.objectContaining({
        breed_param: 'cockerspaniel',
        breed: 'Cocker Spaniel',
        temperament: expect.any(String),
        characteristics: expect.any(String),
        exercise_requirements: expect.any(String),
        dog_url: expect.any(String),
        size: 'Medium',
      })
    );
  });
});
