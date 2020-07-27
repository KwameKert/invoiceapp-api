const Client = require('../models/Client')
const logger = require('loglevel')


const responseApi = (res, status, data, message)=>{
    return res.status(status).send({data, message});
}

async function createClient(req, res){

    try{
        let newClient = new Client({
            ...req.body, 
            owner: req.user._id})

        let savedClient = await newClient.save();
        responseApi(res, 201, savedClient, "client added successfully");
    }catch(e){
        logger.error(e.message);
        responseApi(res, 500, null, e.message);
    }
}



module.exports = {
    createClient
}
