import faker from 'faker'

const getUsername = faker.internet.userName;
const getEmail = faker.internet.email;
const getPassword = faker.internet.password;



function buildUser(){
    return {
        username: getUsername(),
        email: getEmail(),
        password: getPassword()
    }
}


function buildReq({...overides}){
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

module.exports = {
    buildUser,
    buildReq,
    buildRes,
    loginForm

}
