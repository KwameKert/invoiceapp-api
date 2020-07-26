const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String, 
        required: false
    },
    email: {
        type: String, 
        required: true,
    },
    status: {
        type: String, 
        default: 'active'
    }


}, {timestamps: true} );




const Client = mongoose.model('Client', clientSchema );

module.exports = Client
