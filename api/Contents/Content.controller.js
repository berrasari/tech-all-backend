
const { create, getContents, getContentByAuthor} = require('./Content.service');

 
module.exports={
    createContent : (req, res) => {
        const body = req.body;
        
        create(body,(err, results) => {
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
 
    getContents: (req, res) => {
        getContents((err, results) => {
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


    getContentByAuthor: (req, res) => {
        const userid = req.params.userid;
        getContentByAuthor(userid, (err, results) => {
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