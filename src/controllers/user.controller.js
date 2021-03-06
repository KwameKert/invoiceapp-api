import User from '../models/User.js';


const responseApi = (res, status, data, message)=>{
    return res.status(status).send({data, message});
}


async function fetchUserById(req, res){

    try{
    const _id = req.params.id
        
    if(!_id){
        return responseApi(res, 400, null, "user id missing");
    }
        const user = await User.findOne({_id});
       
        if(!user){
            return responseApi(res, 404, null, "user not found");
        }else{

        return responseApi(res, 200, user, "user found");
        }

    }catch(e){
        console.log(e.message)
        return responseApi(res, 500, null, e.message);
    }
}

async function fetchUsers(req, res){
    
    try{
        const users = await User.find({});
        let count = await User.countDocuments({});
        
        if(count == 0){
            return responseApi(res, 204, null, 'No users found')
        }

        return responseApi(res, 200, users, 'users list found')
        
    }catch(e){

        return responseApi(res, 500, null, e.message);
    }

}



export {
    fetchUserById,
    fetchUsers

}
