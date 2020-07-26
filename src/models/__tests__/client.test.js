const Client = require('../Client');
const faker = require('faker');


const client = { 
    name: faker.name.findName(),
    email: faker.internet.email(), 
    address: faker.address.streetAddress(),
    status: 'active'
}




test("save client ", async()=>{
    
    let newClient = new Client(client);
    let savedClient = await newClient.save();

    expect(savedClient._id).toBeDefined();
    expect(savedClient.address).toBe(newClient.address);


})
