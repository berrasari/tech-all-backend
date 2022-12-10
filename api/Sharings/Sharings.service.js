const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    pool.query(
        'insert into Sharings (Sharingsname, password) values( ?, ?)', 
    [
        data.Sharingsname,
        data.password
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getSharingss : callBack => {
    pool.query('select Sharingsname , password from Sharings',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getSharingsBySharingsName :(Sharingsname,callBack) =>{
    pool.query('select Sharingsname,password from Sharings where Sharingsname =  ?',
    [Sharingsname],
    (error, results,fields) =>{
        if(error) {
            callBack(error);
        }
        return callBack(null,results[0]);
    }
    );
},
updateSharings :(data,callBack) => {
    pool.query(
       'update Sharings set Sharingsname= ? , set password= ? where id= ?' ,
       [
           data.Sharingsname,
           data.password
       ], 
       (error, results,fields) => {
           if (error) {
               callBack(error);
           }
           return callBack(null, results[0]);
       }
    );
},
deleteSharings : (data, callBack) => {
    pool.query(
        'delete from Sharings where Sharingsname = ?',
        [data.Sharingsname],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};