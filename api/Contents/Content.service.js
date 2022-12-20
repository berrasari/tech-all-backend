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
            'SELECT Content.*, user.*, COUNT(Likes.ContentID) as Likes,COUNT(Comments.ContentID) as Comments,Comments.Comment as Comment,Comments.userid as author FROM Content INNER JOIN user ON Content.userid = user.userid left JOIN Comments ON Content.ContentID = Comments.ContentID left JOIN Likes ON Content.ContentID = Likes.ContentID  GROUP BY Content.ContentID,Comments.Comment,Comments.userid',
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
        pool.query('SELECT Content.*, user.*, COUNT(Likes.ContentID) as Likes,COUNT(Comments.ContentID) as Comments,Comments.Comment as Comment,Comments.userid as author FROM Content inner JOIN user ON Content.userid = user.userid left JOIN Comments ON Content.ContentID = Comments.ContentID left JOIN Likes ON Content.ContentID = Likes.ContentID  GROUP BY Content.ContentID,Comments.Comment,Comments.userid HAVING ContentID =  ?',
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
