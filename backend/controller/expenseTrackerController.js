const jwt = require('jsonwebtoken')
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

        
        res.send('createed!')
    }

}
