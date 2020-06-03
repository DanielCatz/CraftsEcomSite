const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/test', {
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
