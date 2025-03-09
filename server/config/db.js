const mongodb = require('./mongodb');
const postgresql = require('./postgresql');

/**
 * Tüm veritabanı bağlantılarını başlatan fonksiyon
 */
const initializeDatabases = async () => {
  try {
    // MongoDB bağlantısını başlat
    await mongodb.connect();
    console.log('MongoDB bağlantısı başarılı');

    // PostgreSQL bağlantısını başlat
    await postgresql.authenticate();
    console.log('PostgreSQL bağlantısı başarılı');
    
    // PostgreSQL tablolarını senkronize et
    await postgresql.sync({ alter: true });
    console.log('PostgreSQL tabloları senkronize edildi');

    return { mongodb, postgresql };
  } catch (error) {
    console.error('Veritabanı başlatma hatası:', error);
    throw error;
  }
};

module.exports = {
  initializeDatabases
};