/**
 * Projede kullanılan genel yardımcı fonksiyonlar
 */

// Güvenli bir slug oluşturma
const createSlug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')       // Boşlukları tire ile değiştir
      .replace(/[^\w\-]+/g, '')   // Alfanümerik olmayan karakterleri kaldır
      .replace(/\-\-+/g, '-')     // Birden fazla tireyi tek tire yap
      .replace(/^-+/, '')         // Baştaki tireleri kaldır
      .replace(/-+$/, '');        // Sondaki tireleri kaldır
  };
  
  // Rastgele string oluşturma
  const generateRandomString = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  
  // Unique subdomain oluşturma
  const generateSubdomain = async (name, model) => {
    const baseSlug = createSlug(name);
    
    // Önce sadece isimle kontrol et
    let subdomain = baseSlug;
    let exists = await model.findOne({ where: { subdomain } });
    
    // Eğer varsa, rastgele karakterler ekle
    if (exists) {
      subdomain = `${baseSlug}-${generateRandomString(5)}`;
    }
    
    return subdomain;
  };
  
  // Tarih formatlama
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  module.exports = {
    createSlug,
    generateRandomString,
    generateSubdomain,
    formatDate
  };