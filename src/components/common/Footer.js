import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Website Builder</h3>
            <p>Profesyonel web siteleri oluşturmak ve satmak için en kolay yol.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Hızlı Erişim</h3>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/templates">Şablonlar</Link></li>
              <li><Link to="/features">Özellikler</Link></li>
              <li><Link to="/pricing">Fiyatlandırma</Link></li>
              <li><Link to="/contact">SSS</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>İletişim</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> İstanbul, Türkiye</li>
              <li><i className="fas fa-envelope"></i> info@websitebuilder.com</li>
              <li><i className="fas fa-phone"></i> +90 555 123 4567</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Website Builder. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;