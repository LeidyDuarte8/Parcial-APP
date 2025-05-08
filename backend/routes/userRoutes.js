const express = require('express');
const router = express.Router();
const { actualizarUser } = require('../controllers/userController');

router.get('/ventas', actualizarUser);

module.exports = router;
