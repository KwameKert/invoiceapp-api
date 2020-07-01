const mongoose = require('mongoose')

//const connectionUrl = 'mongodb://127.0.0.1/task-manager-test-api';

const connect = async () => {
    if(mongoose.connection.redyState === 0){
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }
};


const truncate = async () => {
    if(mongoose.connection.readyState !== 0){
        const {collections} = mongoose.connection;

        const promises = Object.keys(collections).map(collection => 
            mongoose.connection.collection(collection).deleteMany({})
        );

        await Promise.all(promises)
    }

};


const disconnect = async () => {
    if (mongoose.connection.readyState !== 0){
        await mongoose.disconnect();
    }
};


module.exports = {
    connect, 
    truncate,
    disconnect
}



//mongoose.connect(process.env.MONGODB_URL,{
//    useNewUrlParser: true,
//    useCreateIndex: true,
//    useUnifiedTopology: true,
//    useFindAndModify: false
//}, (error, client) =>{{
//
//    if(error){
//      
//        return console.log('unable to connect to database')
//
//    }

//}})

