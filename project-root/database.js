// src/config/database.js

const mysql = require('mysql12/promise');
const config = require('./config');


const pool = mysql.createpool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
});

module.exports = pool;
