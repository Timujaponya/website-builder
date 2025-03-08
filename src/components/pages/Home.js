// src/components/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    // AOS animasyon kütüphanesini başlat
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-right">
            <h1>Hayalinizdeki <span className="highlight">Web Sitesini</span> Kolayca Oluşturun</h1>
            <p>Kodlama bilgisi gerektirmeyen sürükle-bırak editörü ile profesyonel web sitelerinizi dakikalar içinde hazırlayın</p>
            <div className="hero-buttons">
              <Link to="/templates" className="btn btn-primary btn-large">Ücretsiz Başla</Link>
              <button className="btn btn-outline btn-large video-btn">
                <i className="fas fa-play-circle"></i> Nasıl Çalışır?
              </button>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
            <img src="https://via.placeholder.com/600x400?text=Website+Builder" alt="Website Builder" />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-text" data-aos="fade-up">Binlerce Marka Tarafından Tercih Edildi</p>
          <div className="brands-container" data-aos="fade-up" data-aos-delay="100">
            <img src="https://via.placeholder.com/120x60?text=Brand+1" alt="Brand 1" className="brand-logo" />
            <img src="https://via.placeholder.com/120x60?text=Brand+2" alt="Brand 2" className="brand-logo" />
            <img src="https://via.placeholder.com/120x60?text=Brand+3" alt="Brand 3" className="brand-logo" />
            <img src="https://via.placeholder.com/120x60?text=Brand+4" alt="Brand 4" className="brand-logo" />
            <img src="https://via.placeholder.com/120x60?text=Brand+5" alt="Brand 5" className="brand-logo" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>İhtiyacınız Olan Her Şey</h2>
            <p>Web sitenizi oluşturmak ve yönetmek için ihtiyacınız olan tüm araçlar</p>
          </div>

          <div className="features-grid">
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3>200+ Profesyonel Şablon</h3>
              <p>Farklı sektörler için özel olarak tasarlanmış yüzlerce şablon arasından seçim yapın</p>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Sürükle & Bırak Editörü</h3>
              <p>Kodlama bilgisi gerektirmeden kolayca özelleştirin ve kendi tasarımınızı oluşturun</p>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm siteleriniz her cihazda sorunsuz çalışacak şekilde otomatik olarak optimize edilir</p>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>SEO Araçları</h3>
              <p>Arama motorlarında üst sıralarda yer almanızı sağlayan gelişmiş SEO özellikleri</p>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>E-Ticaret Özellikleri</h3>
              <p>Online satış yapmak için ihtiyacınız olan tüm e-ticaret araçları tek platformda</p>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>7/24 Destek</h3>
              <p>Uzman destek ekibimiz sorularınız için her zaman hazır</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header center" data-aos="fade-up">
            <h2>Nasıl Çalışır?</h2>
            <p>Sadece üç kolay adımda web siteniz hazır</p>
          </div>

          <div className="steps-container">
            <div className="step-item" data-aos="fade-right" data-aos-delay="100">
              <div className="step-number">1</div>
              <h3>Şablon Seçin</h3>
              <p>200+ profesyonel şablon arasından seçim yapın veya sıfırdan başlayın</p>
            </div>

            <div className="step-item" data-aos="fade-up" data-aos-delay="200">
              <div className="step-number">2</div>
              <h3>Özelleştirin</h3>
              <p>Kolay sürükle-bırak editörü ile içeriğinizi ve tasarımı düzenleyin</p>
            </div>

            <div className="step-item" data-aos="fade-left" data-aos-delay="300">
              <div className="step-number">3</div>
              <h3>Yayınlayın</h3>
              <p>Sitenizi bir tıkla yayınlayın ve hemen ziyaretçileri karşılamaya başlayın</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <div className="container">
          <div className="section-header center" data-aos="fade-up">
            <h2>Müşterilerimizin Yorumları</h2>
            <p>Başarı hikayeleri ve müşteri deneyimleri</p>
          </div>

          <div className="testimonial-container" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Website Builder ile e-ticaret sitemizi oluşturmak çok kolay oldu. Satışlarımız %40 arttı ve müşterilerden çok olumlu geri dönüşler alıyoruz.</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Ahmet Yılmaz" className="author-image" />
                <div className="author-info">
                  <h4>Ahmet Yılmaz</h4>
                  <p>ABC Mobilya, CEO</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Hiç teknik bilgim olmamasına rağmen portfolyo sitemi bir günde oluşturdum. Şimdi daha fazla müşteri ilgisi görüyorum ve işlerim büyüdü.</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Zeynep Kaya" className="author-image" />
                <div className="author-info">
                  <h4>Zeynep Kaya</h4>
                  <p>Freelance Tasarımcı</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Diğer birçok site oluşturucu denedim ama hiçbiri Website Builder kadar kullanımı kolay ve özellik bakımından zengin değildi. Kesinlikle tavsiye ediyorum.</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Murat Demir" className="author-image" />
                <div className="author-info">
                  <h4>Murat Demir</h4>
                  <p>XYZ Danışmanlık, Kurucu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="pricing-preview" data-aos="fade-up">
        <div className="container">
          <div className="section-header center">
            <h2>Her İhtiyaca Uygun Fiyatlar</h2>
            <p>Projenize uygun planı seçin, istediğiniz zaman yükseltin</p>
          </div>

          <div className="pricing-cards" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-header">
                <h3>Başlangıç</h3>
                <div className="price">
                  <span className="amount">₺49</span>
                  <span className="period">/ay</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> 5 Sayfa</li>
                <li><i className="fas fa-check"></i> Mobil Uyumlu</li>
                <li><i className="fas fa-check"></i> Temel SEO Araçları</li>
                <li><i className="fas fa-check"></i> 1 GB Depolama</li>
                <li><i className="fas fa-times"></i> Özel Alan Adı</li>
                <li><i className="fas fa-times"></i> E-ticaret</li>
              </ul>
              <div className="pricing-footer">
                <Link to="/pricing" className="btn btn-outline">Satın Al</Link>
              </div>
            </div>

            <div className="pricing-card featured" data-aos="fade-up" data-aos-delay="200">
              <div className="popular-tag">En Popüler</div>
              <div className="pricing-header">
                <h3>Profesyonel</h3>
                <div className="price">
                  <span className="amount">₺99</span>
                  <span className="period">/ay</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                <li><i className="fas fa-check"></i> Mobil Uyumlu</li>
                <li><i className="fas fa-check"></i> Gelişmiş SEO Araçları</li>
                <li><i className="fas fa-check"></i> 10 GB Depolama</li>
                <li><i className="fas fa-check"></i> Özel Alan Adı</li>
                <li><i className="fas fa-times"></i> E-ticaret</li>
              </ul>
              <div className="pricing-footer">
                <Link to="/pricing" className="btn btn-primary">Satın Al</Link>
              </div>
            </div>

            <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pricing-header">
                <h3>İşletme</h3>
                <div className="price">
                  <span className="amount">₺199</span>
                  <span className="period">/ay</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                <li><i className="fas fa-check"></i> Mobil Uyumlu</li>
                <li><i className="fas fa-check"></i> Premium SEO Araçları</li>
                <li><i className="fas fa-check"></i> 50 GB Depolama</li>
                <li><i className="fas fa-check"></i> Özel Alan Adı</li>
                <li><i className="fas fa-check"></i> E-ticaret</li>
              </ul>
              <div className="pricing-footer">
                <Link to="/pricing" className="btn btn-outline">Satın Al</Link>
              </div>
            </div>
          </div>

          <div className="pricing-info center" data-aos="fade-up" data-aos-delay="400">
            <p>Tüm planlar 14 günlük ücretsiz deneme içerir. Kredi kartı gerektirmez.</p>
            <Link to="/pricing" className="link-arrow">Tüm Özellikleri İncele <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta gradient-bg" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Profesyonel Web Sitenizi Oluşturmaya Başlayın</h2>
            <p>Milyonlarca kullanıcı tarafından tercih edilen platform ile web sitenizi hemen oluşturun</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-white btn-large">Ücretsiz Başla</Link>
              <Link to="/templates" className="btn btn-outline-white btn-large">Şablonlara Göz At</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;