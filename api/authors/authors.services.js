const pool = require("../../config/database");
module.exports = {
    create : (data,callBack) => {
        pool.query(
            'insert into Authors (nickname,UserType_ID,Name,Surname,Password_,e_mail,PhoneNumber) values( ?,?,?,?,?,?,?)' 
        [
            data.nickname,
            data.Name,
            data.Surname,
            data.Password_,
            data.e_mail,
            data.PhoneNumber
        ], 
        (error,results,fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null,results);
        }
        );
    },
    getUsers : callBack => {
        pool.query('select nickname , Password_ from Authors',
        [],
        (err, results,fields) =>{
            if(err) {
                callBack(err);
    
            }
            return callBack(null,results);
        }
        
        );
    },
    getUserByUserName :(nickname,callBack) =>{
        pool.query('select nickname,Password_ from Authors where nickname =  ?',
        [username],
        (error, results,fields) =>{
            if(error) {
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        );
    },
    updateUser :(data,callBack) => {
        pool.query(
           'update Authors set nickname= ? , set Password_= ? where nickname= ?' ,
           [
               data.nickname,
               data.Password_,
           ], 
           (error, results,fields) => {
               if (error) {
                   callBack(error);
               }
               return callBack(null, results[0]);
           }
        );
    },
    deleteUser : (data, callBack) => {
        pool.query(
            'delete from Authors where nickname = ? ',
            [data.username],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
