// server.js

const express = require('express');
const config = require('./src/config/config');
const userRoutes = require('./src/routes/userRoutes');

const app = express();




// Middleware
app.use(express.json());


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },

    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.server,
    swaggerUi.setup(specs));

    app.use('./api', userRoutes);
    app.use('/api', productRoutes);


// Routes
app.use('/api', userRoutes);


// Start the server

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


