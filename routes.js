const task = require('./models/task');

module.exports = {
  configure: (app) => {
    app.get('/', function (req, res) {
      task.getAll(res);
    });

    app.get('/todos/:id', function (req, res) {
      const id = req.params.id || null;
      if (!id) {
        res.sendStatus(400)
      }
      task.get(id, res);
    });

    app.post('/todos', function(req, res) {
      task.create(req.body, res);
    });

    app.put('/todos', function(req, res) {
      task.update(req.body, res);
    });

    app.delete('/todos/:id', function(req, res) {
      task.delete(req.params.id, res);
    });
  }
};
