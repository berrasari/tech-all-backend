const {createPool} = require('mysql');

const pool = createPool({
    host: "sql.freedb.tech",
    user: "freedb_berra",
    password: "FF8CMd@nC8jE3cr",
    database: "freedb_techAll",

    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
});

module.exports = pool;
