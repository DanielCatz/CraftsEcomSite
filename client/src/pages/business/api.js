import axios from 'axios';
// api.js
let API_URL;

process.env.NODE_ENV == 'test' ? (API_URL = '') : (API_URL = 'http://localhost:3001/');

console.log(`${API_URL} is the url`);

const API = {
  InsertIncompleteUrlEntry: url =>
    axios.post(`${API_URL}api/shorten/`, {
      url
    }),

  UpdateShortenedUrl: (id, urlHash) =>
    axios.put(`${API_URL}api/shorten/`, {
      id,
      urlHash
    }),

  getUser: email => axios.post(`${API_URL}api/getUser`, { email }),

  createUser: user => axios.post(`${API_URL}api/createUser`, user),

  getCart: id => axios.get(`${API_URL}api/getCart/${id}`),

  upsertCart: (id, cart) => axios.post(`${API_URL}api/upsertCart`, { id, cart }), // todo
  // For Testing Only

  GetLinkRow: id => axios.get(`${API_URL}api/link/${id}`),

  // setup a teardown and setup

  CheckAPI: () => {
    console.log(process.env.NODE_ENV);
    return process.env.NODE_ENV;
  },

  DropTable: table =>
    axios.delete(`${API_URL}api/delete`, {
      table
    }),

  CreateTable: () => axios.delete(`${API_URL}api/create`)
};

export default API;
