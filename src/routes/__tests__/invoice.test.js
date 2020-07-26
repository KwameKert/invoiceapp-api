
const request = require('supertest');
const app = require('../../app');
import {buildUser, buildInvoiceForm} from '../../../jestconfig/utils/generate';


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
const url = '/api/invoice'

test("Post new Invoice as a user", async()=>{

    const invoiceForm = buildInvoiceForm();
    const invoiceResponse = await request(app).post(`${url}/user`).set('Authorization', `Bearer ${token}` ).send(invoiceForm)

    expect(invoiceResponse.statusCode).toBe(201)

})


test("Post new Invoice", async()=>{
    const invoiceForm = buildInvoiceForm();
    const invoiceResponse = await request(app).post(`${url}/` ).send(invoiceForm)

    expect(invoiceResponse.statusCode).toBe(201)

})
