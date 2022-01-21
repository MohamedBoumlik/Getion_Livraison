const express = require('express');
const router = express.Router();
const ad = require('../controllers/AdminGeneral/AdminG.contoller');
const ad_auth = require('../controllers/AdminGeneral/Auth.controller');

router.post('/', ad_auth.AdminG_Auth);
router.get('/fetch', ad.findAll);
router.post('/create_Manager', ad.create);
router.delete('/delete_Manager/:_id', ad.delete);
router.put('/update_Manager/:_id', ad.update);

module.exports = router;