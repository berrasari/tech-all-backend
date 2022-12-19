const pool = require("../../config/database");


module.exports = {
createComment : (data,callBack) => {
    pool.query(
        'insert into Comments ( ContentID,userid,Comment )values(  ?, ?, ?)',
    [
        
        data.ContentID,
        data.userid,
        data.Comment
        
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
    getCommentByuser: (username, callBack) => {
        pool.query('select * from  Comments INNER JOIN user ON Content.userid = user.userid where username =  ?',
            
            [username],
            
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
getComments : callBack => {
    pool.query('select * from Comments INNER JOIN user ON Comments.userid = user.userid INNER JOIN ON Content Comments.ContentID=Content.ContentID',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},

    getCommentById:(CommentID, callBack) => {
        pool.query('select * from Comments INNER JOIN user ON Comments.userid = user.userid where CommentID =  ?',
        [CommentID],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}
    

};
