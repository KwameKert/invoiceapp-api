const  express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db/mongoose')

//import getRouter from './routes'
const errorMiddleware = require('./middlewares/error')
const app = express();



app.use(cors())
app.use(bodyParser.json())



const router = require('./routes')

app.use('/api', router )
app.use(errorMiddleware)


module.exports = app 
