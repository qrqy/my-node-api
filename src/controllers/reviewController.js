const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      order: [['created_at', 'DESC']]
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { name, text, rating } = req.body;
    const newReview = await Review.create({ name, text, rating });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};