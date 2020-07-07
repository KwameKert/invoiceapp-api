import { buildUser } from '../../../jestconfig/utils/generate';
import mongoose from 'mongoose'
import User from '../../models/User'

const  app = require('../../app');
const request = require('supertest')

const userId = new mongoose.Types.ObjectId();


test("Create new user" , async()=>{
   
    const user = buildUser();

    const response =    await request(app).get('/api/auth/test').send(user)

     
   expect(response.statusCode).toEqual(201);
})





