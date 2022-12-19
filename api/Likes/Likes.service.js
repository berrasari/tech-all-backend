const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into Likes ( userid,ContentID) values( ?,?)',
            [

                data.userid,
                data.ContentID,
            

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getLikes: callBack => {
        pool.query('select * from Likes  ',
            [],
            (err, results, fields) => {
                if (err) {
                    callBack(err);

                }
                return callBack(null, results);
            }

        );
    },
    getLikeById: (ContentID, callBack) => {
        pool.query('select ContentID, COUNT(*) as count from Likes  where ContentID =  ?',
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
