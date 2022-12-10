const {create,getSharingsBySharingsName,getSharingss,deleteSharings,updateSharingss} = require('./Sharings.service');

 
module.exports={
    createSharings : (req, res) => {
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
    getSharingsBySharingsName: (req, res) => {
        const Sharingsname = req.params.Sharingsname;
        getSharingsBySharingsName(Sharingsname,(err,results) => {
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
    getSharingss: (req, res) => {
        getSharingss((err, results) => {
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
    updateSharingss: (req, res) => {
        const body = req.body;
        
        updateSharingss(body,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.json({
                success: 1,
               message : "guncelleme basarili"
            });
        });
    }, deleteSharings: (req, res) => {
        const data = req.body;
    
        deleteSharings(data, (err, results) => {
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