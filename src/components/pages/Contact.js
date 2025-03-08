// src/components/pages/Contact.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // AOS kütüphanesini App.js'de merkezi olarak başlattıysanız bu useEffect'e gerek yok
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   offset: 100
    // });

    // Accordion işlevselliği için
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
        
        // İkon değiştir
        const icon = header.querySelector('.accordion-icon i');
        if (accordionItem.classList.contains('active')) {
          icon.className = 'fas fa-minus';
        } else {
          icon.className = 'fas fa-plus';
        }
      });
    });
    
    return () => {
      accordionHeaders.forEach(header => {
        header.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Lütfen tüm zorunlu alanları doldurun.'
      });
      return;
    }
    
    // Form gönderimi simülasyonu (gerçek bir API çağrısı yapılmalı)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <>
      <header className="page-header" data-aos="fade-down">
        <div className="container">
          <h1>İletişime Geçin</h1>
          <p>Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz</p>
        </div>
      </header>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
              <div className="info-card" data-aos="fade-up" data-aos-delay="150">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Adres</h3>
                  <p>İstanbul, Türkiye<br />Levent, 34330</p>
                </div>
              </div>
              
              <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>E-posta</h3>
                  <p>info@websitebuilder.com<br />support@websitebuilder.com</p>
                </div>
              </div>
              
              <div className="info-card" data-aos="fade-up" data-aos-delay="250">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Telefon</h3>
                  <p>+90 555 123 4567<br />+90 212 345 6789</p>
                </div>
              </div>
              
              <div className="social-links" data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="contact-form-container" data-aos="fade-left" data-aos-delay="200">
              <h2>Bize Yazın</h2>
              
              {formStatus.submitted && !formStatus.error ? (
                <div className="form-success" data-aos="zoom-in">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Teşekkürler!</h3>
                  <p>{formStatus.message}</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {formStatus.error && (
                    <div className="alert alert-error">
                      {formStatus.message}
                    </div>
                  )}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Adınız *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-posta Adresiniz *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Konu</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Mesajınız *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section" data-aos="fade-up">
        <div className="container">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96309.39241571187!2d28.9120642781031!3d41.022896321633266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa37040d94a21%3A0xba3a3bab3a9b3aae!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1646320332080!5m2!1str!2str" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="our-location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="faq-contact" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-up">Sıkça Sorulan Sorular</h2>
          
          <div className="accordion">
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
              <div className="accordion-header">
                <h3>Web sitemi nasıl oluşturabilirim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Website Builder ile kolayca web sitenizi oluşturabilirsiniz. Şablonlar sayfasından beğendiğiniz bir şablonu seçin ve sürükle-bırak editörüyle özelleştirmeye başlayın.</p>
              </div>
            </div>
            
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
              <div className="accordion-header">
                <h3>Teknik desteğe nasıl ulaşabilirim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>7/24 teknik destek ekibimize support@websitebuilder.com adresinden e-posta gönderebilir veya +90 555 123 4567 numaralı telefondan ulaşabilirsiniz.</p>
              </div>
            </div>
            
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
              <div className="accordion-header">
                <h3>Ne tür ödeme yöntemleri kabul ediyorsunuz?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Kredi kartı, banka kartı ve PayPal ile ödeme yapabilirsiniz. Yıllık planlarda banka havalesi seçeneği de mevcuttur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;