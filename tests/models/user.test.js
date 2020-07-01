const app = require('../../src/app');
//const User = require('../../src/models/User.js')
import User from '../../src/models/User';
import mongoose from 'mongoose';


let newUser = {
    username: 'kwamekert',
    password: 'Asante=123',
    salt: 'sdfsdf',
    email: 'kwame@gmail.com'
}



beforeEach(()=>{
    cleanDatabase();

})

async function cleanDatabase(){
     await User.deleteMany();
}



test("create and save user", async()=>{
    const validUser = new User(newUser);
    const saveUser = await validUser.save();
    expect(saveUser._id).toBeDefined();
    expect(saveUser.username).toBe(newUser.username);
})


test("required keys missing ", async()=> {
    const secondUser = new User({
        username: 'kwamkert',
        password: 'password',
    });

    let err;
    try{

    const validSecondUser = new User(secondUser);
    const saveSecondUser = await  validSecondUser.save();
    
    }catch(error){
        err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)

})


