const express = require('express');
const router = express.Router();
const PR = require('../controllers/Drivers/Prime.controller');

router.get('/All_Primes', PR.All_Primes);
router.get('/get_Prime_Driver/:id', PR.Primes_Drivers);

module.exports = router;