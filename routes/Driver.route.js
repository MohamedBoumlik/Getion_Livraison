const express = require('express');
const router = express.Router();
const DV_auth = require('../controllers/Drivers/Auth.controller');
const DV = require('../controllers/Drivers/Driver.controler');

router.post('/', DV_auth.Driver_Auth);
router.put('/update_Driver/:_id', DV.update);

module.exports = router;