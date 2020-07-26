const request = require('supertest');
const app = require('../../app');
import {buildUser} from '../../../jestconfig/utils/generate';


const user = buildUser();
let newUser = {};
let  token ='' ;

beforeEach(async()=> {
    
    const registerResponse = await request(app)
                            .post('/api/auth/register')
                            .send({ ...user });

    newUser = registerResponse.body.data.user
    token = registerResponse.body.data.token

})
const url = '/api/user'

test("Find user by Id ", async () => {
    const findResponse = await request(app)
                                .get(`${url}/${newUser._id}`)
                                .set('Authorization', `Bearer ${token}`)
                                .send()

    expect(findResponse.statusCode).toBe(200);

})


test("Find user by Id without token ", async () => {
    const response = await request(app)
                                .get(`${url}/${newUser._id}`)

    expect(response.statusCode).toBe(401);

})
