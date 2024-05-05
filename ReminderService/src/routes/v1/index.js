const express = require('express');
const {create,getAll} = require('../../controllers/ticket-controller');
const router = express.Router();

router.get('/tickets',getAll);
router.post('/tickets',create);

module.exports = router;