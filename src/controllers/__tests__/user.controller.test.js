import mongoose from 'mongoose'

import {buildReq, buildRes, buildUser, loginForm } from '../../../jestconfig/utils/generate.js';

import * as   UserController  from '../user.controller';
import * as AuthController from '../auth.controller';

import User from '../../models/User';


const newUser = buildUser();
const _id = new mongoose.Types.ObjectId();

function returnExpectations(response, statusCode){

    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(statusCode)
}



test("Fetch user by id", async () =>{
    
    let req = buildReq({body: {...newUser, _id, ... loginForm({username: 'kwamekert', password: 'kwamepass'})}});
    let res = buildRes();

    //save user 
    await AuthController.register(req, res);

    returnExpectations(res, 201)

    let fetchReq = buildReq({params: {id: _id}});
    let fetchRes = buildRes();

    await UserController.fetchUserById(fetchReq, fetchRes);

    returnExpectations(fetchRes, 200);
})

test("fetch user without id", async ()=> {
    let req = buildReq({body: {...newUser, ... loginForm({username: 'kwamekert', password: 'kwamepass'})}});
    let res = buildRes();

    //save user 
    await AuthController.register(req, res);

    returnExpectations(res, 201)

    let fetchReq = buildReq();
    let fetchRes = buildRes();

    await UserController.fetchUserById(fetchReq, fetchRes);

    returnExpectations(fetchRes, 400);
})


test("fetch user list", async ()=>{
    
    let firstReq = buildReq({body : {...newUser, email: 'kwamekert'}})
    let firstRes = buildRes();

    await AuthController.register(firstReq, firstRes);

    returnExpectations(firstRes, 201);

    let secondReq = buildReq({body : {...newUser, email: 'kwameasante', username: 'kwamephil'}})
    let secondRes = buildRes();

    await AuthController.register(secondReq, secondRes);

    returnExpectations(secondRes, 201);

    let thirdReq = buildReq({body : {...newUser, email: 'kwamkert', username: 'kwamekwame'}})
    let thirdRes = buildRes();

    await AuthController.register(thirdReq, thirdRes);

    returnExpectations(thirdRes, 201);

    let userListReq = buildReq();
    let userListRes = buildRes();

    await UserController.fetchUsers(userListReq, userListRes);

    returnExpectations(userListRes, 200);

})


test("no users found ", async()=>{
    
    let req = buildReq();
    let res = buildRes();

    await UserController.fetchUsers(req, res);
    returnExpectations(res, 204);

} )
