const Application = require('../models/Application');
const { sendNewApplicationEmail } = require('../utils/mailer');

exports.createApplication = async (req, res) => {
  try {
    const { name, email, phone, text } = req.body;
    const newApplication = await Application.create({ name, email, phone, text });
    
   //  Отправка email менеджеру
   //  await sendNewApplicationEmail(newApplication);
   console.log(`Типа почта отправлена, но тут траблы с тем чтобы отправить, нужен почтовый сервер и тд..`); 

    res.status(201).json({ 
      message: 'Заявка успешно отправлена!', 
      application: newApplication 
    });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};