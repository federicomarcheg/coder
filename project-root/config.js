// src/config/config.js


require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'develoment', 
    environment: process.env.NODE_ENV || 'development',
    externalService: {
        apikey: process.env.EXTERNAL_SERVICE_ENDPOINT,
        endpoint: process.env.EXTERNAL_SERVICE_ENDPOINT,
    }
};

module.exports = config;