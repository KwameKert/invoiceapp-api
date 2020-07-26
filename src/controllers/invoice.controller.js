import Invoice from '../models/Invoice.js';
const logger = require('loglevel')

const responseApi = (res, status, data, message)=>{
    return res.status(status).send({data, message});
}



async function createInvoice(req, res ){

    try{
        let newInvoice = new Invoice(req.body);
       
        if(req.user){
             newInvoice = new Invoice({...req.body,owner:req.user._id })
        }

        const savedInvoice = await newInvoice.save();
        responseApi(res, 201, savedInvoice, "invoice added successfully");
    }catch(e){
        logger.error(e.message);
        responseApi(res, 500, null, e.message)
    }
}




module.exports = {
    createInvoice

}
