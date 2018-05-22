const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tasks')
  .then(() => console.log('mongo database connected on port 27017'));
