const express = require('express');
const logger = require('morgan');
const taskRouter = require('./task/taskRouter');
const db = require('./db');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks', taskRouter);

app.use((req, res, next) => {
  res.status(404).json('404 - Content Not found');
});

app.use((err, req, res, next) => {
  if (err.isServer) {
    if (err.code === 11000) {
      // res.status(400).json({ message: 'EL ARCHIVO QUE TRATAS DE SUBIR YA EXISTE' });
    }
    console.log(err);
  }
  console.log('err: ', err);
  return res.status(err.output.statusCode).json(err.output.payload);
});

module.exports = app;
