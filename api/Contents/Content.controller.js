const {create,getContentsByTopic,getContents,deleteContents,updateContents} = require('./Content.services');

 
module.exports={
    create : (req, res) => {
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
    getContentsByTopic: (req, res) => {
        const Topic = req.params.Topic;
        getContentsByTopic(Topic,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "kayit bulunamadi"
                });
            }
            return res.json({
                success:1,
                data: results,
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
    updateContents: (req, res) => {
        const body = req.body;
        
        updateContents(body,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.json({
                success: 1,
               message : "guncelleme basarili"
            });
        });
    }, 
    deleteContents: (req, res) => {
        const data = req.body;
    
        deleteContents(data, (err, results) => {
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
                message: "guncelleme basarili"
            });
        });
    }

};