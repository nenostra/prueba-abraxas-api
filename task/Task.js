const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  started: Boolean,
  completed: Boolean,
  createdAt: Date,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
