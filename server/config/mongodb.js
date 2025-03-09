const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/website-builder';

const connect = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    throw error;
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB bağlantısı kapatıldı');
  } catch (error) {
    console.error('MongoDB bağlantısı kapatılırken hata:', error);
  }
};

module.exports = {
  connect,
  disconnect,
  connection: mongoose.connection
};