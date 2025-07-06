const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, // Отключить логирование SQL в консоль
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Проверка подключения
sequelize.authenticate()
  .then(() => console.log('PostgreSQL подключен успешно ✅'))
  .catch(err => console.error('Ошибка подключения к PostgreSQL ❌:', err));

module.exports = sequelize;