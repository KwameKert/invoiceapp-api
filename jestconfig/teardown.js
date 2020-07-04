//const { closeDatabase} =  require('../lib/MemoryDatabaseServer');
const {closeDatabase}  = require('./lib/MemoryDatabaseServer');
module.exports = async () => {
  await closeDatabase();
};
