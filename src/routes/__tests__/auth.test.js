import { buildUser } from '../../../jestconfig/utils/generate';
import mongoose from 'mongoose'
import User from '../../models/User'

const  app = require('../../app');
const request = require('supertest')

const userId = new mongoose.Types.ObjectId();
const url = "/api/auth"

test("Register user" , async()=>{
   
    const user = buildUser();

    const response =    await request(app).post(`${url}/register`).send(user)

   expect(response.statusCode).toEqual(201);
})


test("Login user", async() => {


    const user = buildUser();
    await request(app).post(`${url}/register`).send(user);

    const response = await request(app)
                            .post(`${url}/login`)
                            .send({username: user.username,
                                    password: user.password})

    expect(response.statusCode).toEqual(202);

})


test("Fetch user profile ", async ()=> {


    const user = buildUser();
    let registerResponse =     await request(app).post(`${url}/register`).send(user);

    let token = registerResponse.body.data.token

    const profileResponse = await request(app)
                                    .get(`${url}/me`)
                                    .set('Authorization', `Bearer ${token}`)
                                    .send();

    expect(profileResponse.statusCode).toEqual(200);

})
