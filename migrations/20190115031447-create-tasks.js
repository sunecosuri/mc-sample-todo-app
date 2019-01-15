'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('tasks', {
    id: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      notNull: true,
      length: 255
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  });
};

exports.down = function(db) {
  return db.dropTable('tasks');
};

exports._meta = {
  "version": 1
};
