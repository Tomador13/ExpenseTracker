require('dotenv').config()
const express = require('express')
const router = require('./router/expenseTrackerRoute')
const { json } = require('body-parser')



const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/expensetracker' ,router)

app.listen(process.env.PORT ,async ()=>{
    console.log('listening to port', process.env.PORT)
})