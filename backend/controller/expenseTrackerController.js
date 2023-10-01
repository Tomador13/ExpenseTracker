const jwt = require('jsonwebtoken')
const SQLFUNCTIONS = require('../helpers/sqlfunctions')
const secretkey = 'authkey12345'
module.exports = class EXPENSEAPI {

    static async fetchAllExpense(req,res){
        res.send('Fetch All')
    }
    static async login(req,res){
        res.send('Log in')
    }
    static async signUp (req,res){
        let {username, password} = req.body
        let paramsdata = {
            table_name: 'expense_user',
            column_name: 'expense_username, expense_password',
            value: `'${username}', '${password}'`
        }
        console.log(paramsdata)
        let insertquery = await SQLFUNCTIONS.INSERTQUERY(paramsdata)

        
        res.send('createed!')
    }

}
