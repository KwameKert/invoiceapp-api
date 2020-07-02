
import { isPasswordAllowed, userToJSON } from '../../../src/utils/auth';





test("isPasswordValid returns true for valid password", ()=>{
    expect(isPasswordAllowed("3!Aspass")).toBeTruthy();
})


test("isPasswordAllowed returns false for invalid password",()=>{

    expect(isPasswordAllowed("password")).toBeFalsy();
    expect(isPasswordAllowed("1234passd")).toBeFalsy();
    expect(isPasswordAllowed("!!!sdf")).toBeFalsy();

})


test("user object doesnt have password ", ()=>{
    
    let user = {
        username: 'kwame',
        password: 'password'
    }

    let keys = Object.keys(userToJSON(user))
    
    expect(keys).not.toContain("password")

})
