const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({

    senderName: {
        type: String, 
        trim: true,
        required: true
    },
    senderMail: {
        type: String,
        required: true
    },
    receiverAddress: {
        type: String
    },
    receiverName: {
        type: String, 
        trim: true,
        required: true
    },
    receiverMail: {
        type: String, 
        required: true
    },
    notes: {
        type: String, 
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String, 
        required: true
    },
    items: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            unitPrice: {
                type: Number
            }
        }
        
    ],
    status: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{
    timestamps: true
})


module.exports = mongoose.model('Invoice', invoiceSchema);

