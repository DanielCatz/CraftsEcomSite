import app from './backend/server';

const request = require('supertest');
const connection = require('./test/connection');

describe('POST /createUser', () => {
  it('should return the _id for the user just created', async () => {
    const res = await request(app)
      .post('/api/createUser')
      .send({
        name: 'Yugi',
        email: 'muto@example.com'
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'Created!');
  });

  it('should fail due to lack of header', async () => {
    const res = await request(app).post('/api/createUser');
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('message', 'User not created due to invalid input!');
    expect(res.body).toHaveProperty('error');
  });
});
