// src/components/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    if (!formData.email || !formData.password) {
      setFormStatus({
        error: true,
        message: 'E-posta ve şifre alanları zorunludur.'
      });
      return;
    }
    
    // Giriş işlemi simülasyonu (gerçek bir API çağrısı yapılmalı)
    // Örnek olarak, e-posta ve şifre kontrolü
    if (formData.email === 'demo@example.com' && formData.password === 'password') {
      // Başarılı giriş
      window.location.href = "/dashboard";
    } else {
      setFormStatus({
        error: true,
        message: 'Geçersiz e-posta veya şifre. Lütfen tekrar deneyin.'
      });
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Giriş Yap</h1>
              <p>Hesabınıza erişmek için giriş yapın</p>
            </div>
            
            {formStatus.error && (
              <div className="alert alert-error">
                {formStatus.message}
              </div>
            )}
            
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
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
                  placeholder="Şifrenizi girin" 
                  required 
                />
              </div>
              
              <div className="form-group check-group">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="rememberMe" 
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  <span>Beni hatırla</span>
                </label>
              </div>
              
              <div className="forgot-password">
                <Link to="/forgot-password">Şifremi unuttum</Link>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large full-width">
                Giriş Yap
              </button>
            </form>
            
            <div className="auth-separator">
              <span>veya</span>
            </div>
            
            <div className="social-auth">
              <button className="btn btn-social btn-google">
                <i className="fab fa-google"></i> Google ile giriş
              </button>
              <button className="btn btn-social btn-facebook">
                <i className="fab fa-facebook-f"></i> Facebook ile giriş
              </button>
            </div>
            
            <div className="auth-footer">
              <p>Hesabınız yok mu? <Link to="/register">Ücretsiz Kayıt Olun</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;