import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  const [formStatus, setFormStatus] = useState({
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.password) {
      setFormStatus({
        error: true,
        message: 'Lütfen tüm zorunlu alanları doldurun.'
      });
      return;
    }
    
    // Şifre eşleşme kontrolü
    if (formData.password !== formData.confirmPassword) {
      setFormStatus({
        error: true,
        message: 'Şifreler eşleşmiyor.'
      });
      return;
    }
    
    // Şartları kabul etme kontrolü
    if (!formData.agreeTerms) {
      setFormStatus({
        error: true,
        message: 'Devam etmek için şartları ve koşulları kabul etmelisiniz.'
      });
      return;
    }
    
    // Kayıt işlemi simülasyonu (gerçek bir API çağrısı yapılmalı)
    setTimeout(() => {
      // Başarılı kayıt simülasyonu
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Hesap Oluştur</h1>
              <p>Profesyonel web sitelerinizi oluşturmaya hemen başlayın</p>
            </div>
            
            {formStatus.error && (
              <div className="alert alert-error">
                {formStatus.message}
              </div>
            )}
            
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta adresinizi girin" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Şifre</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Şifrenizi oluşturun" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Şifre Tekrar</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Şifrenizi tekrar girin" 
                  required 
                />
              </div>
              
              <div className="form-group check-group">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="agreeTerms" 
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required 
                  />
                  <span className="checkmark"></span>
                  <span className="terms-text">
                    <Link to="/terms">Şartlar ve koşulları</Link> kabul ediyorum
                  </span>
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large full-width">
                Hesap Oluştur
              </button>
            </form>
            
            <div className="auth-separator">
              <span>veya</span>
            </div>
            
            <div className="social-auth">
              <button className="btn btn-social btn-google">
                <i className="fab fa-google"></i> Google ile Kaydol
              </button>
              <button className="btn btn-social btn-facebook">
                <i className="fab fa-facebook-f"></i> Facebook ile Kaydol
              </button>
            </div>
            
            <div className="auth-footer">
              <p>Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;