const express = require('express');
const router = express.Router();
const { getRepositoryInfo } = require('../controllers/monitorController');

// Define a rota GET /monitor
router.get('/', getRepositoryInfo);

module.exports = router;