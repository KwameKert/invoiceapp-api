import mongoose from 'mongoose';
const User = require('../../../src/models/User')

let newUser = {
    username: 'kwamekert',
    password: 'Asante=123',
    salt: 'sdfsdf',
    email: 'kwame@gmail.com'
}


test("new test", ()=>{
    expect(4).toBe(2+2)
})

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


