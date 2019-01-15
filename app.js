const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./connection');
const routes = require('./routes');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

const server = app.listen(8000, () => {
  console.log('Server listening on port ' + server.address().port);
});
