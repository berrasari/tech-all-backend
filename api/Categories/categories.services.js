const pool = require("../../config/database");
module.exports = {
    createCategory : (data,callBack) => {
        pool.query(
            'insert into Categories (CategoryID,CategoryNaame) values( ?,?)' 
        [
            data.CategoryID,
            data.CategoryName
        ], 
        (error,results,fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null,results);
        }
        );
    },
    getCategories : callBack => {
        pool.query('select CategoryName from Categories',
        [],
        (err, results,fields) =>{
            if(err) {
                callBack(err);
    
            }
            return callBack(null,results);
        }
        
        );
    },
    getCategoriesByCategoryName :(CategoryName,callBack) =>{
        pool.query('select CategoryName from Categories where CategoryID =  ?',
        [CategoryName],
        (error, results,fields) =>{
            if(error) {
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        );
    },
    updateCategory :(data,callBack) => {
        pool.query(
           'update Categories set CategoryName= ?  where CategoryName= ?' ,
           [
            data.CategoryName,
           ], 
           (error, results,fields) => {
               if (error) {
                   callBack(error);
               }
               return callBack(null, results[0]);
           }
        );
    },
    deleteCategory : (data, callBack) => {
        pool.query(
            'delete from Categories where CategoryName = ? ',
            [data.CategoryName],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
