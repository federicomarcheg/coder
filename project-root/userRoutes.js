 const express = require('express');
 const UserController = require('../controllers/userControllers');

 const router = express.Router();

 router.get('/users', UserController.getUses);

 module.exports = router;