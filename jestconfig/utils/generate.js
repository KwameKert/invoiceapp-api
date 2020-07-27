import faker from 'faker'
import mongoose from 'mongoose'

const getUsername = faker.internet.userName;
const getEmail = faker.internet.email;
const getPassword = faker.internet.password;
const getId  = new mongoose.Types.ObjectId();



function buildUser(overide){
    return {
        username: getUsername(),
        email: getEmail(),
        password: getPassword(),
        ...overide
    }
}


function buildReq({...overides} = {}){
    const req = { body: {}, params: {}, ...overides };
    return req;
}


function buildRes(overrides = {}) {
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockName('status'),
    ...overrides,
  }
  return res
}

function loginForm(overides){
    return {
        username: getUsername(),
        password: getPassword(),
        ...overides
    }

}

function buildClientForm(overides){
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetName(),
        status: 'active',
        owner: getId
    }
}

function buildInvoiceForm(overides){
    return {
        senderMail: faker.internet.email(),
        senderName: faker.name.findName(),
        receiverMail: faker.internet.email(),
        receiverName: faker.name.findName(),
        currency: faker.finance.currencySymbol(),
        notes: faker.lorem.sentence(),
        amount: faker.finance.amount(),
        items: [
            {name: faker.lorem.word(), 
             quantity: faker.random.number(),
                unitPrice: faker.finance.amount()
            }
        ],
        ...overides
    }
}

module.exports = {
    buildUser,
    buildReq,
    buildRes,
    loginForm,
    buildInvoiceForm,
    buildClientForm

}
