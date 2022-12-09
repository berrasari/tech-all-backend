const {create,getUserByUserName,getUsers,deleteUser,updateUsers} = require('./others.services');

 
module.exports={
    createUser : (req, res) => {
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
    getUserByUserName: (req, res) => {
        const username = req.params.username;
        getUserByUserName(username,(err,results) => {
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
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUsers: (req, res) => {
        const body = req.body;
        
        updateUsers(body,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.json({
                success: 1,
               message : "guncelleme basarili"
            });
        });
    }, deleteUser: (req, res) => {
        const data = req.body;
    
        deleteUser(data, (err, results) => {
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