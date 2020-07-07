const  express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/mongoose')

//import getRouter from './routes'
const app = express();



app.use(cors())
app.use(bodyParser.json())



const router = require('./routes')
app.use('/api', router )



module.exports = app 
