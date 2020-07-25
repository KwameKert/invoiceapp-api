const mongoose = require('mongoose');
const {
    userToJSON,
    getUserToken
}  = require('../utils/auth');



const userSchema = new mongoose.Schema({
    
    username: {
        type: String, 
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String, 
        trim: true,
        unique: true, 
        required: true
    },
    password: {
        type: String, 
        required: true,
        trim: true
    },
    status: {
        type: Boolean, 
        default: true
    }

})

userSchema.methods.toJSON = function() {

    const user = this


    let objectUser =  userToJSON(user).toObject();

    return objectUser
}


userSchema.methods.generateToken = async function(){

    const user = this
    const token = getUserToken({id: user.id, username: user.username});

    return token;

}


module.exports = mongoose.model('User', userSchema )

//export default User
//module.exports = User






