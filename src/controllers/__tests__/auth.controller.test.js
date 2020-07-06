import {buildReq, buildRes, buildUser, loginForm } from '../../../jestconfig/utils/generate.js';
import * as   AuthController  from '../auth.controller';
import User from '../../models/User';

const newUser = buildUser();

function returnExpectations(response, statusCode){

    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(statusCode)
}


test("Register new user", async()=>{

    const userReq = buildReq({body: newUser});
    const userRes = buildRes();
    
    await AuthController.register(userReq, userRes);

    returnExpectations(userRes, 201)
})


test("Email already exists ",async()=>{
   
    //registering first user
    let firstReq = buildReq({body :{... newUser,email: 'kwame@gmail.com'} } );
    let firstRes = buildRes();

    await AuthController.register(firstReq, firstRes);
    
    returnExpectations(firstRes, 201)
    
    //registering second user
    let secondReq = buildReq({body : {...newUser, email: 'kwame@gmail.com'} } );
    let secondRes = buildRes();

    await AuthController.register(secondReq, secondRes);

    
    returnExpectations(secondRes, 400)

} )



test("Login user ", async()=>{
    
    
    let req = buildReq({body: {...newUser,... loginForm({username: 'kwamekert', password: 'kwamepass'})}});
    let res = buildRes();

    //save user 
    await AuthController.register(req, res);
   
    returnExpectations(res, 201);
    
    
    let loginReq = buildReq({body: loginForm({username: 'kwamekert', password: 'kwamepass'})});
    let loginRes = buildRes();

    await AuthController.login(loginReq, loginRes );

    //let response = loginRes.send.mock.calls[0][0];
    returnExpectations(loginRes, 202);


})


