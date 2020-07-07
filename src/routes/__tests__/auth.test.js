import { buildUser } from '../../../jestconfig/utils/generate';
import mongoose from 'mongoose'
import User from '../../models/User'

const  app = require('../../app');
const request = require('supertest')

const userId = new mongoose.Types.ObjectId();


test("Create new user" , async()=>{
    
    await request(app).post('register').send({
        username: 'kwamekert',
        email: 'kwame@gmail.com',
        password: 'kwamepass'
    }).expect(201)
    

})





