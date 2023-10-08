const {connectDb} = require('../helpers/dbConfig')

module.exports = class SQLFUNCTIONS {

    static async SELECTQUERY(paramsdata){
        let DB = await connectDb()
        try {
            let query = await DB.request().query(`select ${paramsdata.column_name} from ${paramsdata.table_name}  where ${paramsdata.condition}`)
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
            let value = paramsdata.value.map(v=>`'${v}'`).join(',');
            let query = await DB.request().query(`insert into ${paramsdata.table_name} (${paramsdata.column_name})  values (${value})`)
            return {responsecode:0, messege:'Inserted!!'}
        } catch (error) {
            console.log(error)
            return {responsecode: -1, messege: error.messege}
        }
        finally{
            DB.release()
        }
    }


}