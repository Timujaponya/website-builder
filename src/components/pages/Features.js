import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  // AOS animasyon kütüphanesini başlat
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Tab işlevselliği için useEffect
  useEffect(() => {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Aktif tab class'ını kaldır
        document.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Yeni tab'ı aktif et
        button.classList.add('active');
        
        // Tüm panelleri gizle
        document.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.remove('active');
        });
        
        // Seçilen paneli göster
        const target = button.getAttribute('data-tab');
        document.getElementById(`${target}-panel`).classList.add('active');
      });
    });
    
    // Cleanup function
    return () => {
      tabButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <header className="page-header features-header">
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1>Sitenizi <span className="highlight">Güçlendirin</span></h1>
            <p>Website Builder'ın yenilikçi özellikleriyle web sitenizi kolayca oluşturun, özelleştirin ve yönetin</p>
            <div className="header-buttons">
              <Link to="/templates" className="btn btn-primary btn-large">Şimdi Başla</Link>
              <Link to="/pricing" className="btn btn-outline btn-large">Fiyatları İncele</Link>
            </div>
          </div>
          <div className="header-image" data-aos="fade-left" data-aos-delay="200">
            <img src="https://via.placeholder.com/600x400?text=Features" alt="Features" />
          </div>
        </div>
      </header>
      
      <section className="feature-tabs">
        <div className="container">
          <h2 className="section-title center" data-aos="fade-up">Öne Çıkan Özellikler</h2>
          
          <div className="tabs-container">
            <div className="tabs-navigation" data-aos="fade-up" data-aos-delay="100">
              <button className="tab-button active" data-tab="editor">Sürükle & Bırak</button>
              <button className="tab-button" data-tab="templates">Şablonlar</button>
              <button className="tab-button" data-tab="responsive">Mobil Uyumlu</button>
              <button className="tab-button" data-tab="seo">SEO Araçları</button>
              <button className="tab-button" data-tab="analytics">Analitik</button>
            </div>
            
            <div className="tabs-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-panel active" id="editor-panel">
                <div className="tab-content-wrapper">
                  <div className="tab-text">
                    <h3>Sürükle & Bırak Editör</h3>
                    <p>Kodlama bilgisi gerektirmeyen, kullanımı kolay sürükle-bırak arayüzü ile web sitenizi saniyeler içinde oluşturun. İstediğiniz bileşeni seçin, sayfaya sürükleyin ve özelleştirin.</p>
                    <ul className="feature-list">
                      <li><i className="fas fa-check-circle"></i> 50+ Hazır bileşen</li>
                      <li><i className="fas fa-check-circle"></i> Tüm cihazlarda tam uyumluluk</li>
                      <li><i className="fas fa-check-circle"></i> Gerçek zamanlı önizleme</li>
                      <li><i className="fas fa-check-circle"></i> Kolay metin düzenleme</li>
                    </ul>
                  </div>
                  <div className="tab-image">
                    <img src="https://via.placeholder.com/600x400?text=Drag+and+Drop+Editor" alt="Sürükle Bırak Editör" />
                  </div>
                </div>
              </div>
              
              <div className="tab-panel" id="templates-panel">
                <div className="tab-content-wrapper">
                  <div className="tab-text">
                    <h3>Profesyonel Şablonlar</h3>
                    <p>Yüzlerce profesyonel şablon arasından seçim yapın. Her biri farklı sektörler ve amaçlar için optimize edilmiş, tamamen özelleştirilebilir şablonlarımızla işinize en uygun web sitesini oluşturun.</p>
                    <ul className="feature-list">
                      <li><i className="fas fa-check-circle"></i> 200+ Profesyonel şablon</li>
                      <li><i className="fas fa-check-circle"></i> Sektöre özel tasarımlar</li>
                      <li><i className="fas fa-check-circle"></i> Düzenli güncellenen koleksiyon</li>
                      <li><i className="fas fa-check-circle"></i> Tamamen özelleştirilebilir</li>
                    </ul>
                  </div>
                  <div className="tab-image">
                    <img src="https://via.placeholder.com/600x400?text=Professional+Templates" alt="Profesyonel Şablonlar" />
                  </div>
                </div>
              </div>
              
              <div className="tab-panel" id="responsive-panel">
                <div className="tab-content-wrapper">
                  <div className="tab-text">
                    <h3>Mobil Uyumlu Tasarım</h3>
                    <p>Tüm web siteleriniz otomatik olarak mobil cihazlara uyumlu olarak oluşturulur. Akıllı telefon, tablet veya masaüstü - her cihazda mükemmel görünüm ve kullanıcı deneyimi sağlar.</p>
                    <ul className="feature-list">
                      <li><i className="fas fa-check-circle"></i> Otomatik duyarlı tasarım</li>
                      <li><i className="fas fa-check-circle"></i> Cihaza özel görünüm ayarları</li>
                      <li><i className="fas fa-check-circle"></i> Dokunmatik cihaz optimizasyonu</li>
                      <li><i className="fas fa-check-circle"></i> Farklı ekran boyutları önizlemesi</li>
                    </ul>
                  </div>
                  <div className="tab-image">
                    <img src="https://via.placeholder.com/600x400?text=Responsive+Design" alt="Mobil Uyumlu Tasarım" />
                  </div>
                </div>
              </div>
              
              <div className="tab-panel" id="seo-panel">
                <div className="tab-content-wrapper">
                  <div className="tab-text">
                    <h3>SEO Araçları</h3>
                    <p>Arama motorlarında daha üst sıralarda yer alın ve daha fazla organik trafik çekin. Entegre SEO araçlarımızla web sitenizi arama motorları için optimize edin.</p>
                    <ul className="feature-list">
                      <li><i className="fas fa-check-circle"></i> Meta başlık ve açıklama yönetimi</li>
                      <li><i className="fas fa-check-circle"></i> Anahtar kelime analizi</li>
                      <li><i className="fas fa-check-circle"></i> Site haritası oluşturma</li>
                      <li><i className="fas fa-check-circle"></i> SEO skor değerlendirmesi</li>
                    </ul>
                  </div>
                  <div className="tab-image">
                    <img src="https://via.placeholder.com/600x400?text=SEO+Tools" alt="SEO Araçları" />
                  </div>
                </div>
              </div>
              
              <div className="tab-panel" id="analytics-panel">
                <div className="tab-content-wrapper">
                  <div className="tab-text">
                    <h3>Gelişmiş Analitik</h3>
                    <p>Ziyaretçi verilerinizi izleyin, analiz edin ve web sitenizin performansını artırın. Kapsamlı analitik panelimizle önemli istatistiklere hemen erişin.</p>
                    <ul className="feature-list">
                      <li><i className="fas fa-check-circle"></i> Gerçek zamanlı ziyaretçi izleme</li>
                      <li><i className="fas fa-check-circle"></i> Trafik kaynakları analizi</li>
                      <li><i className="fas fa-check-circle"></i> Kullanıcı davranış raporları</li>
                      <li><i className="fas fa-check-circle"></i> Dönüşüm takibi</li>
                    </ul>
                  </div>
                  <div className="tab-image">
                    <img src="https://via.placeholder.com/600x400?text=Analytics" alt="Gelişmiş Analitik" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="feature-cards">
        <div className="container">
          <h2 className="section-title center" data-aos="fade-up">Tüm İhtiyaçlarınız İçin Araçlar</h2>
          
          <div className="cards-container">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm cihazlarda mükemmel görünen duyarlı web siteleri oluşturun.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>SEO Dostu</h3>
              <p>Arama motorlarında üst sıralarda yer almak için optimize edilmiş siteler.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Yüksek Performans</h3>
              <p>Hızlı yüklenen ve sorunsuz çalışan web siteleri oluşturun.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Güvenlik</h3>
              <p>SSL sertifikaları ve güvenlik duvarlarıyla korunan siteler.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>E-Ticaret</h3>
              <p>Güçlü e-ticaret özellikleriyle online satış yapın.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Güvenilir Hosting</h3>
              <p>%99.9 uptime garantisiyle güvenilir hosting hizmetleri.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="700">
              <div className="feature-icon">
                <i className="fas fa-edit"></i>
              </div>
              <h3>Blog Yazarlığı</h3>
              <p>Entegre blog yönetim sistemi ile içerik paylaşın.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="800">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>7/24 Destek</h3>
              <p>Uzman destek ekibimizle her zaman yanınızdayız.</p>
              <Link to="#" className="card-link">Daha Fazla <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="feature-comparison">
        <div className="container">
          <h2 className="section-title center" data-aos="fade-up">Rakiplerle Karşılaştırma</h2>
          <p className="section-description center" data-aos="fade-up">Website Builder'ın diğer site oluşturuculara göre avantajlarını keşfedin</p>
          
          <div className="comparison-table-wrapper" data-aos="fade-up" data-aos-delay="200">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  <th><span className="highlight">Website Builder</span></th>
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
      
      <section className="feature-testimonials">
        <div className="container">
          <h2 className="section-title center" data-aos="fade-up">Kullanıcılarımız Ne Diyor?</h2>
          <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">"Website Builder sayesinde hiç kodlama bilgim olmamasına rağmen profesyonel görünümlü bir e-ticaret sitesi oluşturabildim. Müşterilerim tasarımı çok beğendi!"</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Ayşe Yılmaz" className="avatar" />
                <div className="author-info">
                  <h4>Ayşe Yılmaz</h4>
                  <p>E-Ticaret İşletmecisi</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">"Harika özellikler ve kullanımı çok kolay bir arayüz. Portföy sitem için tam aradığım çözümdü. Diğer platformlardan çok daha iyi!"</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Mehmet Kaya" className="avatar" />
                <div className="author-info">
                  <h4>Mehmet Kaya</h4>
                  <p>Fotoğrafçı</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="testimonial-text">"Şirketimizin web sitesini bir günde oluşturduk. SEO özellikleri sayesinde arama motorlarında çok iyi sıralarda yer alıyoruz ve müşteri trafiğimiz arttı."</p>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Ali Demir" className="avatar" />
                <div className="author-info">
                  <h4>Ali Demir</h4>
                  <p>Küçük İşletme Sahibi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta gradient-bg">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Sitenizi Hemen Oluşturmaya Başlayın</h2>
            <p>14 gün boyunca ücretsiz deneyin. Kredi kartı gerektirmez.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-white btn-large">Ücretsiz Başla</Link>
              <Link to="/pricing" className="btn btn-outline-white btn-large">Fiyatları İncele</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;