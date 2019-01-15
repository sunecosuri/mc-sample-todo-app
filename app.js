const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./connection');
const routes = require('./routes');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

connection.init();
routes.configure(app);

const server = app.listen(8000, () => {
  console.log('Server listening on port ' + server.address().port);
});
