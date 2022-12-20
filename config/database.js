const {createPool} = require('mysql');

const pool = createPool({
    host: "sql.freedb.tech",
    user: "freedb_berra",
    password: "JKu$mj9GZag8Z!J",
    database: "freedb_techAll",

    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
});

module.exports = pool;
