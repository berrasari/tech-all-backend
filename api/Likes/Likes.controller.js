
const { create, getLikes, getLikeById  } = require('./Likes.service');


module.exports = {
    createLike: (req, res) => {
        const body = req.body;

        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });

        });

    },

    getLikes: (req, res) => {
        getLikes((err, results) => {
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

    

    getLikeById: (req, res) => {
        const ContentID = req.params.ContentID;
        getLikeById(ContentID, (err, results) => {
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
