const mongoose = require('mongoose');
const {
    userToJSON,
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
    salt: {
        type: String, 
        require: true
    }

})

userSchema.methods.toJSON = function() {

    const user = this


    return userToJSON(user);
}


module.exports = mongoose.model('User', userSchema )

//export default User
//module.exports = User






