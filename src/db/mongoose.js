const mongoose = require('mongoose')

//const connectionUrl = 'mongodb://127.0.0.1/task-manager-test-api';


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error, client) =>{{

    if(error){
       
        return console.log('unable to connect to database')

    }

}})

