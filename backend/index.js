
const express = require('express')
const cors = require('cors')
//const bcrypt = require('bcryptjs')
const knex = require('knex')(require('./knexfile.js')["development"])
const app = express()
const port = 8080;

app.use(express())
//app.use(cors())

//////////////////////// MAIN ROUTE ///////////////////////////////
app.get('/', (req, res) => {
  res.send('Hello World!')
})

////////////////////// TEST ROUTE ////////////////////////////////
app.get('/test', (req, res) => {
  res.send('You made it!')
})

//////////////////////// LISTEN FOR THE ABOVE ROUTES ///////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})