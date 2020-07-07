import User from '../models/User.js';

const responseApi = (res, status, data, message)=>{
    return res.status(status).send({data, message});
}

async function register (req, res ){
    
   const newUser = new User(req.body);
    
    try{
       
        let userFound = await User.findOne({email: newUser.email});
        if(userFound){
        return        responseApi(res, 400,null, "Email already exists " );
        }else{

            let saveUser =  await newUser.save();
            return responseApi(res, 201, saveUser, 'New registered');
        
        }

   }catch(e){
      return  responseApi(res, 500, null, e.message);
   } 

}



async function login(req, res){
   

    if(!req.body.username){
       return  responseApi(res, 400, null, "username cannot be null");
    }
    if(!req.body.password){
      return  responseApi(res, 400, null, "password cannot be null")
 }
    
 try{   
    const user = new User(req.body);

    let userFound = await  User.findOne({username: user.username});

    if(!userFound){
      return  responseApi(res, 404, null, "user doesnt exist" );
    }

    let validUser = await User.findOne({ username: user.username,  password: user.password } );

    if(!validUser){
       return  responseApi(res, 404, null, "invalid user credentials")
    }

    const token = await validUser.generateToken();
     
    
   return  responseApi(res, 202, {validUser, token}, "Login successful");
 
 }catch(e){
 
     return responseApi(res, 500, null, e.message);
 
 }


}



export {
    register,
    login
}
