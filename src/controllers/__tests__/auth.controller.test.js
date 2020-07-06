import {buildReq, buildRes, buildUser, loginForm } from '../../../jestconfig/utils/generate.js';
import * as   AuthController  from '../auth.controller';
//import { showCollections } from '../../../jestconfig/lib/MemoryDatabaseServer.js';
import User from '../../models/User';


const newUser = buildUser();

const userReq = buildReq({body: newUser});
const userRes = buildRes();


test("Register new user", async()=>{


    await AuthController.register(userReq, userRes);

    //let response = res.send.mock.calls[0][0];

    expect(userRes.send).toHaveBeenCalledTimes(1);
    expect(userRes.status).toHaveBeenCalledWith(201);

})


test("Email already exists ",async()=>{
   
    //registering first user
    let firstReq = buildReq({body :{... newUser,email: 'kwame@gmail.com'} } );
    let firstRes = buildRes();

    await AuthController.register(firstReq, firstRes);
    
    expect(firstRes.send).toHaveBeenCalledTimes(1);
    expect(firstRes.status).toHaveBeenCalledWith(201);
    
    //registering second user
    let secondReq = buildReq({body : {...newUser, email: 'kwame@gmail.com'} } );
    let secondRes = buildRes();

    await AuthController.register(secondReq, secondRes);

    expect(secondRes.send).toHaveBeenCalledTimes(1);
    expect(secondRes.status).toHaveBeenCalledWith(400);

} )



test("Login user ", async()=>{
    
    
    let req = buildReq({body: {...newUser,... loginForm({username: 'kwamekert', password: 'kwamepass'})}});
    let res = buildRes();

    //save user 
    await AuthController.register(req, res);
   

    //let response1 = res.send.mock.calls[0][0];

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    
    
    let loginReq = buildReq({body: loginForm({username: 'kwamekert', password: 'kwamepass'})});
    let loginRes = buildRes();

    await AuthController.login(loginReq, loginRes );


    //let response = loginRes.send.mock.calls[0][0];
    
    expect(loginRes.send).toHaveBeenCalledTimes(1);
    expect(loginRes.status).toHaveBeenCalledWith(202);

})




    
