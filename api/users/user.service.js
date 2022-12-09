const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    pool.query(
        'insert into user (username, password) values( ?, ?)', 
    [
        data.username,
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
getUsers : callBack => {
    pool.query('select username , password from user',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getUserByUserName :(username,callBack) =>{
    pool.query('select username,password from user where username =  ?',
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
       'update user set username= ? , set password= ? where id= ?' ,
       [
           data.username,
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
deleteUser : (data, callBack) => {
    pool.query(
        'delete from user where username = ?',
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