const {connectDb} = require('../helpers/dbConfig')

module.exports = class SQLFUNCTIONS {

    static async SELECTQUERY(paramsdata){
        let DB = await connectDb()
        try {
            let query = DB.request().query(`select ${paramsdata.column_name} from ${paramsdata.table_name}  where ${paramsdata.condition}`)
            return {responsecode:0 , data: query.recordset[0]}
        } catch (error) {
            return {responsecode:-1, messege: error.messege}
        }
        finally{
            DB.release();
        }
    }

    static async INSERTQUERY(paramsdata){
        let DB = await connectDb()
        try {
            console.log(paramsdata)
            let query = DB.request().query(`insert into ${paramsdata.table_name} (${paramsdata.column_name})  values (${paramsdata.value})`)
            return {responsecode:0, messege:'Inserted!'}
        } catch (error) {
            console.log(error)
            return {responsecode: -1, messege: error.messege}
        }
        finally{
            DB.release()
        }
    }


}