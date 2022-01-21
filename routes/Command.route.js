const express = require('express');
const router = express.Router();
const Cmd = require('../controllers/Managers/Command.controller');

router.post('/create_Command', Cmd.create);
router.get('/All_Commands', Cmd.findAll);
router.delete('/delete_Command/:_id', Cmd.delete);
router.put('/update_Command/:_id', Cmd.update);

module.exports = router;
