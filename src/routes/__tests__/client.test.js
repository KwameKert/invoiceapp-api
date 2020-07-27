import { buildUser, buildClientForm } from '../../../jestconfig/utils/generate';
import mongoose from 'mongoose'
import User from '../../models/User'

const  app = require('../../app');
const request = require('supertest')

const userId = new mongoose.Types.ObjectId();
const url = "/api/client"
let token = ""

beforeAll( async()=>{

    const user = buildUser();
    const response = await request(app).post(`/api/auth/register`).send(user)

    token = response.body.data.token;
})



test("post client and save ", async()=>{

    const client = buildClientForm();
    let clientResponse = await request(app).post(`${url}/`).send(client);

    expect(clientResponse.statusCode).toEqual(201);
})


test("search client by Id ", async()=>{
    
    const client = buildClientForm();
    let saveClientResponse =  await request(app).post(`${url}/`).send(client);
    let id = saveClientResponse.body.data._id;
    let findClientResponse = await request(app).get(`${url}/${id}`);

    expect(findClientResponse.statusCode).toEqual(200);
})


