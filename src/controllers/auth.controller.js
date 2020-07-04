import User from '../models/User.js';

const responseApi = (res, status, data, message)=>{
    return res.status(status).send({data, message});
}

async function register (req, res ){

   const newUser = new User(req.body);
   
    try{
       
        let userFound = await User.findOne({email: newUser.email});
        if(userFound){
            responseApi(res, 400,null, "Email already exists " );
        }else{

            let saveUser =  await newUser.save();
            responseApi(res, 200, saveUser, 'New registered');
        
        }

   }catch(e){
        responseApi(res, 400, null, 'Oops an error');
   } 

}







export {
    register
}
