import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Aktif sayfayı kontrol et
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Mobil menüyü aç/kapat
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Website Builder</Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/" className={isActive('/')}>Ana Sayfa</Link>
          <Link to="/templates" className={isActive('/templates')}>Şablonlar</Link>
          <Link to="/features" className={isActive('/features')}>Özellikler</Link>
          <Link to="/pricing" className={isActive('/pricing')}>Fiyatlar</Link>
          <Link to="/contact" className={isActive('/contact')}>İletişim</Link>
        </div>
        
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">Giriş</Link>
          <Link to="/register" className="btn btn-primary">Kayıt Ol</Link>
        </div>
        
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;