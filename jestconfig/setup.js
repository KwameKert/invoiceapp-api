const {connectDatabase}  = require('../tests/lib/MemoryDatabaseServer');
console.log("setup up")
module.exports = async () => {
  await connectDatabase();
  //beforeAll(async () => await connectDatabase());
};
