var connection = require('../connection');

function Task() {
  this.getAll = function(res) {
    connection.acquire(function (err, con) {
      con.query('SELECT * FROM tasks', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.get = function(id, res) {
    connection.acquire(function (err, con) {
      con.query('SELECT * FROM tasks WHERE id = ?', [id], function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(task, res) {
    connection.acquire(function(err, con) {
      con.query('INSERT INTO tasks SET ?', task, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Task creation failed'});
        } else {
          res.send({status: 0, message: 'Task created successfully'});
        }
      });
    });
  };

  this.update = function(task, res) {
    connection.acquire(function(err, con) {
      con.query('UPDATE tasks SET ? WHERE ID = ?', [task, task.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Task update failed'});
        } else {
          res.send({status: 0, message: 'Task updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('DELTE FROM tasks WHERE id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
};
module.exports = new Task();
