require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Импорт подключения к БД
require('./config/db');

// Middleware
app.use(express.json());

// Роуты
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));

// Тестовый роут
app.get('/', (req, res) => {
  res.json({ 
    message: "API is working! 🌍",
    endpoints: {
      reviews: "/api/reviews",
      applications: "/api/applications"
    }
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});