// server.js
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
// import path from 'path';
import cors from 'cors';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import dotenv from 'dotenv';
import db from './routes/apiroutes';
import { getUsers, createUser, getUser } from './routes/user-controller';
import { getCart, upsertCart, carts } from './routes/cart-controller';

const router = express.Router();

router.get('/users', getUsers);
router.post('/createUser', createUser);
router.post('/getUser', getUser);

router.get('/getCart/:id', getCart);
router.get('/carts', carts);
router.post('/upsertCart', upsertCart);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

dotenv.config({ path: `${__dirname}/../client/.env` });
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

const checkjwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

app.get('/public', (req, res) => {
  res.json({
    message: 'Response from a public API!'
  });
});

app.get('/private', checkjwt, (req, res) => {
  res.json({
    message: 'Ok Response from Secured API!'
  });
});

app.use('/api', router);
app.listen(3001);
console.log(`Api Server listenening on ${process.env.REACT_APP_API_URL}`);

/*
const app = express();
const router = express.Router();
// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

// base
app.use('/api', apiRoutes);

// Production or Dev?
let API_PORT = 3001;

if (process.env.NODE_ENV === 'production') {
  API_PORT = 3000;
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
*/
