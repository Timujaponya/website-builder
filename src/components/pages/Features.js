// src/components/pages/Features.js
import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Güçlü Özelliklerle Web Sitelerinizi Oluşturun</h1>
          <p>Website Builder ile sitenizi dakikalar içinde oluşturun, özelleştirin ve yayınlayın</p>
        </div>
      </header>
      
      <section className="feature-highlight">
        <div className="container">
          <div className="feature-showcase">
            <div className="feature-content">
              <h2>Sürükle & Bırak Editör</h2>
              <p>Kodlama bilgisi gerektirmeyen, kullanımı kolay sürükle-bırak arayüzü ile web sitenizi saniyeler içinde oluşturun. İstediğiniz bileşeni seçin, sayfaya sürükleyin ve özelleştirin.</p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> 50+ Hazır bileşen</li>
                <li><i className="fas fa-check"></i> Tüm cihazlarda tam uyumluluk</li>
                <li><i className="fas fa-check"></i> Gerçek zamanlı önizleme</li>
                <li><i className="fas fa-check"></i> Kolay metin düzenleme</li>
              </ul>
            </div>
            <div className="feature-image">
              <img src="https://via.placeholder.com/600x400?text=Drag+and+Drop+Editor" alt="Sürükle Bırak Editör" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="feature-highlight alt">
        <div className="container">
          <div className="feature-showcase reverse">
            <div className="feature-content">
              <h2>Profesyonel Şablonlar</h2>
              <p>Yüzlerce profesyonel şablon arasından seçim yapın. Her biri farklı sektörler ve amaçlar için optimize edilmiş, tamamen özelleştirilebilir şablonlarımızla işinize en uygun web sitesini oluşturun.</p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> 200+ Profesyonel şablon</li>
                <li><i className="fas fa-check"></i> Sektöre özel tasarımlar</li>
                <li><i className="fas fa-check"></i> Düzenli güncellenen koleksiyon</li>
                <li><i className="fas fa-check"></i> Tamamen özelleştirilebilir</li>
              </ul>
              <Link to="/templates" className="btn btn-primary">Şablonları Keşfet</Link>
            </div>
            <div className="feature-image">
              <img src="https://via.placeholder.com/600x400?text=Professional+Templates" alt="Profesyonel Şablonlar" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="feature-grid">
        <div className="container">
          <h2 className="section-title center">Öne Çıkan Özellikler</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm cihazlarda mükemmel görünen duyarlı web siteleri oluşturun.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-search"></i></div>
              <h3>SEO Dostu</h3>
              <p>Arama motorlarında üst sıralarda yer almak için optimize edilmiş siteler.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-bolt"></i></div>
              <h3>Yüksek Performans</h3>
              <p>Hızlı yüklenen ve sorunsuz çalışan web siteleri oluşturun.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-lock"></i></div>
              <h3>Güvenlik</h3>
              <p>SSL sertifikaları ve güvenlik duvarlarıyla korunan siteler.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Analitik</h3>
              <p>Ziyaretçi davranışlarını ve site performansını izleyin.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-envelope"></i></div>
              <h3>E-posta Pazarlama</h3>
              <p>Entegre e-posta araçlarıyla müşterilerinizle iletişimde kalın.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-shopping-cart"></i></div>
              <h3>E-Ticaret</h3>
              <p>Çevrimiçi mağaza oluşturun ve ürünlerinizi satışa sunun.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-globe"></i></div>
              <h3>Özel Alan Adı</h3>
              <p>Kendi alan adınızı kullanarak profesyonel bir görünüm elde edin.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="feature-comparison">
        <div className="container">
          <h2 className="section-title center">Diğer Site Oluşturucularla Karşılaştırma</h2>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  <th>Website Builder</th>
                  <th>Rakip A</th>
                  <th>Rakip B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sürükle & Bırak Editör</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Profesyonel Şablonlar</td>
                  <td className="highlight">200+</td>
                  <td>80+</td>
                  <td>50+</td>
                </tr>
                <tr>
                  <td>Mobil Uyumluluk</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>SEO Özellikleri</td>
                  <td className="highlight">Gelişmiş</td>
                  <td>Temel</td>
                  <td>Orta</td>
                </tr>
                <tr>
                  <td>E-Ticaret</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                </tr>
                <tr>
                  <td>Ücretsiz SSL</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                </tr>
                <tr>
                  <td>Blog Desteği</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Özelleştirilebilir Kod</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                </tr>
                <tr>
                  <td>7/24 Destek</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Sınırsız Bant Genişliği</td>
                  <td className="yes"><i className="fas fa-check"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                  <td className="no"><i className="fas fa-times"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Sitenizi Hemen Oluşturmaya Başlayın</h2>
          <p>14 gün boyunca ücretsiz deneyin. Kredi kartı gerektirmez.</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary btn-large">Ücretsiz Başla</Link>
            <Link to="/pricing" className="btn btn-outline btn-large">Fiyatları İncele</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;