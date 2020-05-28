const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/flowerstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(e => {
    console.error('Connection error', e.message);
  });

mongoose.connection.once('open', () => {
  console.log('Connected to Database!');
});

const db = mongoose.connection;
module.exports = db;

// import express from 'express';
// const router = express.Router();
// import db from '../sqlitedb';
// If Dev, set up test, separate file
// if (process.env.NODE_ENV !== 'production') {

// // empty db for possible testing
// console.log('test db is live');
// router.delete('/delete', (req, res) => {
//   db.run('DROP TABLE base', err => {
//     if (err) {
//       throw err;
//     }
//   });
// });

// router.get('/peek/:id', (req, res) => {
//   db.get('SELECT * FROM base WHERE id = ?', [req.params.id], (err, row, fields) => {
//     console.log(row, fields);
//     if (!err) return res.json({ success: true, row, fields });
//     return res.json({ success: false, error: err });
//   });
// });

// router.put('/create', (req, res) => {
//   db.run(
//     'CREATE TABLE IF NOT EXISTS base(id integer Primary key AUTOINCREMENT,' +
//       'name text DEFAULT Name,' +
//       'description text DEFAULT Description,' +
//       'price float DEFAULT 0.0,' +
//       'collection text DEFAULT None,' +
//       'urlname text' +
//       'imgcount integer DEFAULT 1)',
//     err => {
//       if (err) throw err;
//     }
//   );
// });
// /*
// router.put('/populate', (req, res) => {
//   db.run(
//     'INSERT INTO base (name, description, price, collection, urlname, imgcount)'+
// 'VALUES ('Cat', 'Simple Cat', 99.99, 'normal', 'cat', 3),'+
//   '('Other Cat', 'Not the first Cat', 93.99, 'extra', 'cat', 3),'+
//   '('Small Cat', 'Smaller Cat', 9.99, 'normal', 'cat', 3),'+
//   '('Mischief Cat', 'Cat probably', 0.99, 'extra', 'cat', 3)'+
//     ,
//     err => {
//       if (err) throw err;
//     }
//   );
// });

// */

// router.get('/', (req, res) => {
//   res.json({ message: 'API Is Perfectly Adequate' });
// });

// router.get('/product/:id', (req, res) => {
//   db.get('SELECT * FROM base WHERE id = ?', [req.params.id], (err, row, fields) => {
//     if (!err) return res.json({ success: true, row, fields });
//     return res.json({ success: false, error: err });
//   });
// });

// router.get('/products', (req, res) => {
//   db.all('SELECT * FROM base', (err, products) => {
//     if (!err) return res.json({ success: true, products });
//     return res.json({ success: false, error: err });
//   });
// });
// } // end test endpoints

// export default router;
