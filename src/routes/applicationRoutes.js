const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Создание новой заявки
router.post('/', applicationController.createApplication);

module.exports = router;