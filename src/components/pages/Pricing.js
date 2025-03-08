// src/components/pages/Pricing.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <>
      <header className="page-header" data-aos="fade-down">
        <div className="container">
          <h1>Fiyatlandırma</h1>
          <p>Her ihtiyaca uygun fiyatlandırma planlarımız</p>
        </div>
      </header>
      
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-toggle" data-aos="fade-up">
            <span className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}>Aylık</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={billingCycle === 'yearly'} 
                onChange={() => handleBillingChange(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              />
              <span className="slider round"></span>
            </label>
            <span className={`toggle-option ${billingCycle === 'yearly' ? 'active' : ''}`}>
              Yıllık <span className="discount">%20 İndirim</span>
            </span>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-header">
                <h3>Başlangıç</h3>
                <div className="price">
                  {billingCycle === 'monthly' ? (
                    <>
                      <span className="amount">₺49</span>
                      <span className="period">/ay</span>
                    </>
                  ) : (
                    <>
                      <span className="amount">₺469</span>
                      <span className="period">/yıl</span>
                    </>
                  )}
                </div>
                <p className="pricing-description">Kişisel web siteleri ve küçük projeler için ideal</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>5 Sayfa</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>1 GB Depolama</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Alt Alan Adı</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Mobil Uyumlu</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Temel SEO Araçları</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>Özel Alan Adı</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>E-Ticaret Özellikleri</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>Premium Şablonlar</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>Öncelikli Destek</span>
                </li>
              </ul>
              <div className="pricing-footer">
                <Link to="/register" className="btn btn-outline btn-large full-width">
                  Ücretsiz Başla
                </Link>
              </div>
            </div>
            
            <div className="pricing-card popular" data-aos="fade-up" data-aos-delay="200">
              <div className="popular-tag">Popüler</div>
              <div className="pricing-header">
                <h3>Profesyonel</h3>
                <div className="price">
                  {billingCycle === 'monthly' ? (
                    <>
                      <span className="amount">₺99</span>
                      <span className="period">/ay</span>
                    </>
                  ) : (
                    <>
                      <span className="amount">₺950</span>
                      <span className="period">/yıl</span>
                    </>
                  )}
                </div>
                <p className="pricing-description">Profesyoneller ve küçük işletmeler için</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Sınırsız Sayfa</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>10 GB Depolama</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Özel Alan Adı</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Mobil Uyumlu</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Gelişmiş SEO Araçları</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Premium Şablonlar</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Blog Özellikleri</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>E-Ticaret Özellikleri</span>
                </li>
                <li className="disabled">
                  <i className="fas fa-times"></i>
                  <span>Öncelikli Destek</span>
                </li>
              </ul>
              <div className="pricing-footer">
                <Link to="/register" className="btn btn-primary btn-large full-width">
                  Ücretsiz Başla
                </Link>
              </div>
            </div>
            
            <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pricing-header">
                <h3>İşletme</h3>
                <div className="price">
                  {billingCycle === 'monthly' ? (
                    <>
                      <span className="amount">₺199</span>
                      <span className="period">/ay</span>
                    </>
                  ) : (
                    <>
                      <span className="amount">₺1,910</span>
                      <span className="period">/yıl</span>
                    </>
                  )}
                </div>
                <p className="pricing-description">E-ticaret ve büyük işletmeler için</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Sınırsız Sayfa</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>50 GB Depolama</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Özel Alan Adı</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Mobil Uyumlu</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Premium SEO Araçları</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Premium Şablonlar</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Blog Özellikleri</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>E-Ticaret Özellikleri</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Öncelikli Destek</span>
                </li>
              </ul>
              <div className="pricing-footer">
                <Link to="/register" className="btn btn-outline btn-large full-width">
                  Ücretsiz Başla
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-comparison" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Özellik Karşılaştırması</h2>
          
          <div className="table-container" data-aos="fade-up" data-aos-delay="200">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  <th>Başlangıç</th>
                  <th>Profesyonel</th>
                  <th>İşletme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sayfa Sayısı</td>
                  <td>5</td>
                  <td>Sınırsız</td>
                  <td>Sınırsız</td>
                </tr>
                <tr>
                  <td>Depolama</td>
                  <td>1 GB</td>
                  <td>10 GB</td>
                  <td>50 GB</td>
                </tr>
                <tr>
                  <td>Bant Genişliği</td>
                  <td>10 GB / Ay</td>
                  <td>Sınırsız</td>
                  <td>Sınırsız</td>
                </tr>
                <tr>
                  <td>Özel Alan Adı</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>SSL Sertifikası</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>SEO Araçları</td>
                  <td>Temel</td>
                  <td>Gelişmiş</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Şablonlar</td>
                  <td>50+</td>
                  <td>100+</td>
                  <td>200+</td>
                </tr>
                <tr>
                  <td>E-Ticaret</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Blog Özellikleri</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Analitik</td>
                  <td>Temel</td>
                  <td>Gelişmiş</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Destek</td>
                  <td>E-posta</td>
                  <td>E-posta, Canlı Sohbet</td>
                  <td>Öncelikli E-posta, Canlı Sohbet, Telefon</td>
                </tr>
                <tr>
                  <td>Sürükle & Bırak Editör</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Mobil Uyumluluk</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="faq-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Sık Sorulan Sorular</h2>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <h3>Ücretsiz deneme süresi var mı?</h3>
              <p>Evet, tüm planlarımızda 14 günlük ücretsiz deneme süresi sunuyoruz. Bu süre içerisinde tüm özellikleri test edebilir ve planınızı belirleyebilirsiniz.</p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="150">
              <h3>Planlar arasında geçiş yapabilir miyim?</h3>
              <p>Evet, dilediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Yükseltme durumunda fiyat farkı anlık olarak hesaplanır, düşürme durumunda ise bir sonraki fatura döneminden itibaren geçerli olur.</p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <h3>Özel alan adı nasıl alırım?</h3>
              <p>Profesyonel ve İşletme planlarında ücretsiz bir alan adı sunuyoruz. Ayrıca dilediğiniz zaman kendi alan adınızı satın alıp sitemizle ilişkilendirebilirsiniz.</p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="250">
              <h3>E-Ticaret özellikleri nelerdir?</h3>
              <p>E-Ticaret özelliklerimiz arasında ürün yönetimi, stok takibi, ödeme alma, kargo entegrasyonu, vergiler, indirim kodları ve müşteri hesapları yer almaktadır.</p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <h3>İade politikanız nedir?</h3>
              <p>Satın alma işleminden sonraki 30 gün içerisinde herhangi bir sebepten memnun kalmazsanız, iade talep edebilirsiniz. İşlem ücretleri düşüldükten sonra kalan tutar iade edilir.</p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="350">
              <h3>Teknik destek ne zaman sunuluyor?</h3>
              <p>Başlangıç planında e-posta desteği, Profesyonel planda e-posta ve canlı sohbet desteği, İşletme planında ise bunlara ek olarak öncelikli destek ve telefon desteği sunuyoruz.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta gradient-bg" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Web Sitenizi Hemen Oluşturmaya Başlayın</h2>
            <p>14 günlük ücretsiz deneme ile tüm özellikleri keşfedin. Kredi kartı gerektirmez.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-white btn-large">Ücretsiz Başla</Link>
              <Link to="/contact" className="btn btn-outline-white btn-large">Bize Ulaşın</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;