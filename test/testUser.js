// const request = require('supertest');
// const expect = require('chai');
// const User = require('../backend/routes/user-controller');
// const connection = require('./connection');
// const api = require('../backend/server');

// describe('POST /createUser', done => {
//   it('should return the _id for the user just created', async () => {
//     const res = await request(api)
//       .post('/api/createUser')
//       .send({
//         name: 'Yugi',
//         email: 'muto@example.com'
//       });
//     expect(res.status).to.equal(201);
//     expect(res.body).to.have.property('_id');
//     expect(res.body).to.have.property('success', true);
//     expect(res.body).to.have.property('message', 'Created!');
//     done();
//   });
// });
