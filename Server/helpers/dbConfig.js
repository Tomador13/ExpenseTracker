require('dotenv').config(); 

const sql = require('mssql/msnodesqlv8')

const dbConnect = process.env.connectionString

var config = {driver : 'msnodesqlv8' , connectionString:dbConnect}


// var config = {
//     user: 'DESKTOP-H2L1BKH\\Paulo',
//     server: 'DESKTOP-H2L1BKH\\SQLEXPRESS',
//     database: 'ExpenseDB',
//     trustedConnections: true,
//     driver: 'C:\\Windows\\System32\\msodbcsql17.dll'
//   };

const pool = new sql.ConnectionPool(config)
const poolConnect = pool.connect()


const connectDb  = async () => {
    try {   
        await poolConnect;
        console.log('connected')
        return poolConnect
       
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports  = {connectDb}