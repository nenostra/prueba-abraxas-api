const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  started: Boolean,
  completed: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
