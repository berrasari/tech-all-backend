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
    getContentByAuthor: (username, callBack) => {
        pool.query('select * from  Content INNER JOIN user ON Content.userid = user.userid where username =  ?',
            
            [username],
            
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getContents: (callBack) => {
        pool.query(
            'SELECT Content.*, user.*, COUNT(Likes.ContentID) as Likes FROM Content INNER JOIN user ON Content.userid = user.userid LEFT JOIN Likes ON Content.ContentID = Likes.ContentID GROUP BY Content.ContentID',
            [],
            (err, results, fields) => {
                if (err) {
                    callBack(err);
                }
                return callBack(null, results);
            }
        );
    },

    getContentById: (ContentID, callBack) => {
        pool.query('SELECT Content.*, user.*, COUNT(Likes.ContentID) as Likes FROM Content INNER JOIN user ON Content.userid = user.userid LEFT JOIN Likes ON Content.ContentID = Likes.ContentID GROUP BY Content.ContentID HAVING ContentID =  ?',
        [ContentID],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
},
    

};
