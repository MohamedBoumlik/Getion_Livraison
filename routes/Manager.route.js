const express = require('express');
const router = express.Router();
const MG_auth = require('../controllers/Managers/Auth.contoller');
const MG = require('../controllers/Managers/Manager.controller');

router.post('/', MG_auth.Manager_Auth);
router.get('/fetch', MG.findAll);
router.post('/create_Driver', MG.create);
router.delete('/delete_Driver/:_id', MG.delete);
router.put('/update_Driver/:_id', MG.update);

module.exports = router;