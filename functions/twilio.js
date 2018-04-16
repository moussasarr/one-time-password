const twilio = require('twilio');
const accountSid='ACdd8d05d96937481e1d96d608fe5e38fb';
const authToken='cdca9d920b3eee0a4e4f61dbd83f1643';

module.exports = new twilio.Twilio(accountSid, authToken);
