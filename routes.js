const task = require('./models/task');

module.exports = {
  configure: (app) => {
    app.get('/tasks', function (req, res) {
      task.getAll(res);
    });

    app.get('/tasks/:id', function (req, res) {
      const id = req.params.id || null;
      if (!id) {
        res.sendStatus(400)
      }
      task.get(id, res);
    });

    app.post('/tasks', function(req, res) {
      task.create(req.body, res);
    });

    app.put('/tasks', function(req, res) {
      task.update(req.body, res);
    });

    app.delete('/tasks/:id', function(req, res) {
      task.delete(req.params.id, res);
    });
  }
};
