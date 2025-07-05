const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для работы с JSON
app.use(express.json());

// Тестовый роут
app.get('/', (req, res) => {
  res.json({ message: "Hello World! 🌍" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});