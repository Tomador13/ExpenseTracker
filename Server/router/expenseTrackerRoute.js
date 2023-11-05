const express = require('express')
const EXPENSEAPI = require('../controller/expenseTrackerController')

const router = express.Router()



router.post('/login',EXPENSEAPI.login)
router.post('/signUp',EXPENSEAPI.signUp)
router.get('/getItems',  EXPENSEAPI.fetchAllExpense)



module.exports = router