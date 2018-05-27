const express = require('express');
const asyncMiddleware = require('../utils/asyncMiddleware');
const Task = require('./Task');

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res, next) => {
  const taskList = await Task.find({});
  res.json(taskList);
}));

router.post('/', asyncMiddleware(async (req, res, next) => {
  const createdTask = await Task.create({
    ...req.body,
    started: false,
    completed: false,
    createdAt: new Date(),
  });
  res.json(createdTask);
}));

router.put('/:id', asyncMiddleware(async (req, res, next) => {
  await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
  );
  res.json(req.body);
}));

router.delete('/:id', asyncMiddleware(async (req, res, next) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  res.json(deletedTask);
}));

module.exports = router;
