const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/squares', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});
