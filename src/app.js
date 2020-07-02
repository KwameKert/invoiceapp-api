const  express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db/mongoose')


const app = express();

app.use(cors())
app.use(bodyParser.json())


module.exports = app 
