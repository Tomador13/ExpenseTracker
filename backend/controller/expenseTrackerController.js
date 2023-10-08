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
        try { 
        let {username, password} = req.body
        let paramsdata = {
            table_name: 'expense_users',
            column_name: 'expense_username,expense_password',
            value: [`${username}`,`${password}`]
        }
        let insertquery = await SQLFUNCTIONS.INSERTQUERY(paramsdata)
        
        res.status(201).send({
            responsecode: 1,
            messege: insertquery.messege
        })   
        } catch (error) {
            res.status(400).json({
                responsecode:0,
                messege: error
            })
                
        }
        

    }

}
