const express = require('express');
const router = express.Router();
const DV_auth = require('../controllers/Drivers/Auth.controller');
// const DV = require('../controllers/Drivers/');

router.post('/', DV_auth.Driver_Auth);
// router.get('/fetch', MG.findAll);
// router.post('/create_Driver', MG.create);
// router.delete('/delete_Driver/:_id', MG.delete);
// router.put('/update_Driver/:_id', MG.update);

module.exports = router;