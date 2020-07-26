
import mongoose from 'mongoose'

import {buildReq, buildRes, buildUser, loginForm, buildInvoiceForm } from '../../../jestconfig/utils/generate.js';

import * as   InvoiceController  from '../invoice.controller';
import * as AuthController from '../auth.controller';

import User from '../../models/User';


const newUser = buildUser();
const _id = new mongoose.Types.ObjectId();
const newInvoice = buildInvoiceForm();

function returnExpectations(response, statusCode){

    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(statusCode)
}

test("Post invoice as user should return 201",  async()=>{

   
    let req = buildReq({body: {...newInvoice },user: newUser });
    let res = buildRes()

    await InvoiceController.createInvoice(req, res);

    returnExpectations(res, 201)

});


test("Post invoice as nonuser should return 201",  async()=>{
   
    let req = buildReq({body: {...newInvoice }});
    let res = buildRes()

    await InvoiceController.createInvoice(req, res);

    console.log(res)
    returnExpectations(res, 201)

});


