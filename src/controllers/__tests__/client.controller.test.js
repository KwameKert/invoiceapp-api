import mongoose from 'mongoose'
import {buildReq, buildRes, buildUser, loginForm, buildClientForm } from '../../../jestconfig/utils/generate.js';
import * as ClientController  from '../client.controller';

const _id = new mongoose.Types.ObjectId();
const newUser = buildUser({_id});
const newClient= buildClientForm();

function returnExpectations(response, statusCode){

    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(statusCode)
}

test("save client for user ", async()=>{

    let req = buildReq({ body: {...newClient}, user: newUser});
    let res = buildRes();

    await ClientController.createClient(req, res);

    return returnExpectations(res, 201);



} )
