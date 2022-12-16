const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    pool.query(
        'insert into Content ( userid,title,imageurl,Content,CategoryID,Keywords) values(  ?, ?, ?, ?, ?,?)', 
    [
        
        data.userid,
        data.title,
        data.imageurl,
        data.Content,
        data.CategoryID,
        data.Keywords,
        
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
    getContentByAuthor: (userid, callBack) => {
        pool.query('select * from Content where userid =  ?',
            
            [userid],
            
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
getContents : callBack => {
    pool.query('select Content, userid,Content,CategoryID,title,Keywords from Content',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},

};
