import axios from 'axios';
// api.js
let API_URL;

process.env.NODE_ENV == 'test' ? (API_URL = '') : (API_URL = '');

console.log(`${API_URL} is the url`);

const API = { 

  getUser: email => axios.post(`${API_URL}api/getUser`, { email }),

  createUser: user => axios.post(`${API_URL}api/createUser`, user),

  getCart: id => axios.get(`${API_URL}api/getCart/${id}`)
  .then(res => {   
    return (res.data.cart.items);
  })
  .catch(error => console.log('print them errors', error.response)),

  upsertCart: (id, cart) => axios.post(`${API_URL}api/upsertCart`, { id, cart }), // TODO:
  

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
