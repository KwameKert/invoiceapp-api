import {buildReq, buildRes, buildUser } from '../../../jestconfig/utils/generate.js';
import * as   AuthController  from '../auth.controller';
//import { showCollections } from '../../../jestconfig/lib/MemoryDatabaseServer.js';
import User from '../../models/User';


const newUser = buildUser();




test("Register new user", async()=>{

    let req = buildReq({body :{... newUser,email: 'nie@gmail.com'} } );
    let res = buildRes();

    await AuthController.register(req, res);

    let response = res.send.mock.calls[0][0];
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);

})


test("Email already exists ",async()=>{
   
    //registering first user
    let firstReq = buildReq({body :{... newUser,email: 'kwame@gmail.com'} } );
    let firstRes = buildRes();

    await AuthController.register(firstReq, firstRes);
    
    expect(firstRes.send).toHaveBeenCalledTimes(1);
    expect(firstRes.status).toHaveBeenCalledWith(200);
    
    //registering second user
    let secondReq = buildReq({body : {...newUser, email: 'kwame@gmail.com'} } );
    let secondRes = buildRes();

    await AuthController.register(secondReq, secondRes);

    expect(secondRes.send).toHaveBeenCalledTimes(1);
    expect(secondRes.status).toHaveBeenCalledWith(400);

} )








    
