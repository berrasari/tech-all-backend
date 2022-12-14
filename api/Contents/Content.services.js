const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    pool.query(
        'insert into Content (ContentID,Content,CategoryID,Topic,Keywords,Likes,Comments ) values( ?,?,?,?,?,?,?)', 
    [
        data.ContentID,
        data.Content,
        data.CategoryID,
        data.Topic,
        data.Keywords,
        data.Likes,
        data.Comments,
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getContents : callBack => {
    pool.query('select ContentID , Topic from Content',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getContentsByTopic :(ContentID,callBack) =>{
    pool.query('select Topic,Content from Content where ContentID =  ?',
    [ContentID],
    (error, results,fields) =>{
        if(error) {
            callBack(error);
        }
        return callBack(null,results[0]);
    }
    );
},
updateContents :(data,callBack) => {
    pool.query(
       'update Content set Content= ? , set Topic= ? where Topic= ?' ,
       [
           data.Topic,
           data.Content
       ], 
       (error, results,fields) => {
           if (error) {
               callBack(error);
           }
           return callBack(null, results[0]);
       }
    );
},
deleteContents : (data, callBack) => {
    pool.query(
        'delete from Content where ContentID = ?',
        [data.ContentID],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};