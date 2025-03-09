const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const auth = async (req, res, next) => {
  try {
    // Token al
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Kimlik doğrulama hatası: Token bulunamadı'
      });
    }
    
    // Token doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Kullanıcıyı bul
    const user = await userRepository.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Kimlik doğrulama hatası: Kullanıcı bulunamadı'
      });
    }
    
    // Request nesnesine user ekle
    req.user = user;
    req.token = token;
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Kimlik doğrulama hatası'
    });
  }
};

module.exports = auth;