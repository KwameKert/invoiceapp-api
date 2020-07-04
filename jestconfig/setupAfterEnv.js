
//const { clearDatabase} =  require('../lib/MemoryDatabaseServer');
const {clearDatabase, connectDatabase, closeDatabase}  = require('./lib/MemoryDatabaseServer');

beforeAll( async ()=> {
    await connectDatabase();
})

afterEach( async ()=> {
    await  clearDatabase();
})

afterAll( async () => {
    await closeDatabase();

})





