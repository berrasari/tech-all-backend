const {createCategory,getCategoriesByCategoryName,getCategories,deleteCategory,updateCategory} = require('./categories.services');

 
module.exports={
    createCategory : (req, res) => {
        const body = req.body;
        
        createCategory(body,(err, results) => {
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
    getCategoriesByCategoryName: (req, res) => {
        const CategoryName = req.params.CategoryName;
        getCategoriesByCategoryName(CategoryName,(err,results) => {
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
    getCategories: (req, res) => {
        getCategories((err, results) => {
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
    updateCategory: (req, res) => {
        const body = req.body;
        
        updateCategory(body,(err, results) => {
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
    deleteCategory: (req, res) => {
        const data = req.body;
    
        deleteCategory(data, (err, results) => {
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