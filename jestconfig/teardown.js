//const { closeDatabase} =  require('../lib/MemoryDatabaseServer');
const {closeDatabase}  = require('../tests/lib/MemoryDatabaseServer');
module.exports = async () => {
  await closeDatabase();
};
