
const { createComment, getComments,  getCommentByuser, getCommentById} = require('./Comment.service');

 
module.exports={
    createComment : (req, res) => {
        const body = req.body;
        
        createComment(body,(err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
               success: 0,
               message: "connection error"
           })  ;
            }
            return res.status(200).json({
                success:1, 
                data: results
            });
        
        });

    },
 
    getComments: (req, res) => {
        getComments((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            
            return res.json({
                success: 1,
                data: results,
            });
        });
    },
   


    getCommentByuser: (req, res) => {
        const username = req.params.username;
        getCommentByuser(username, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "kayit bulunamadi"
                });
            }
            

            return res.json({
                success: 1,
                data: results,
            });
        });
    },

    getCommentById: (req, res) => {
        const ContentID = req.params.ContentID;
        getCommentById(ContentID, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "kayit bulunamadi"
                });
            }


            return res.json({
                success: 1,
                data: results,
            });
        });
    },


};
