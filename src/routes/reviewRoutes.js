const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Получение всех отзывов
router.get('/', reviewController.getAllReviews);

// Создание нового отзыва
router.post('/', reviewController.createReview);

module.exports = router;