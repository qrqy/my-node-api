const sequelize = require('../config/db');
const Review = require('../models/Review');
const Application = require('../models/Application');

async function syncDatabase() {
  try {
    // Синхронизация моделей с БД
    await sequelize.sync({ force: true }); // force: true удалит существующие таблицы
    console.log('Таблицы созданы успешно ✅');
    
    // Тестовые данные
    await Review.bulkCreate([
      { name: 'Анна', text: 'Отличный сервис!', rating: 5.0 },
      { name: 'Иван', text: 'Хорошо, но можно лучше', rating: 4.5 },
      { name: 'Мария', text: 'Удовлетворительно', rating: 3.0 }
    ]);
    
    console.log('Тестовые данные добавлены ✅');
  } catch (error) {
    console.error('Ошибка синхронизации БД ❌:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();