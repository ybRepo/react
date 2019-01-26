const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

app.use(cors())

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.use('/tasks', require('./routes/tasks'))

app.listen(port, () => {
    console.log(`listening on ${port}`)
})