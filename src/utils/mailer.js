const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendNewApplicationEmail = async (application) => {
  try {
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      subject: 'Новая заявка с сайта',
      html: `
        <h1>Новая заявка!</h1>
        <p><strong>Имя:</strong> ${application.name}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Телефон:</strong> ${application.phone}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${application.text}</p>
        <hr>
        <p>Дата отправки: ${new Date().toLocaleString()}</p>
      `
    });
    console.log('Уведомление менеджеру отправлено');
  } catch (error) {
    console.error('Ошибка отправки email:', error);
  }
};

module.exports = { sendNewApplicationEmail };