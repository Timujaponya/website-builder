import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Yardımcı fonksiyonları doğrudan bileşenin içine tanımlayın
const toggleBillingCycle = (isYearly) => {
  const monthlyPrices = document.querySelectorAll('.price.monthly');
  const yearlyPrices = document.querySelectorAll('.price.yearly');
  
  if (isYearly) {
    monthlyPrices.forEach(el => el.classList.add('hidden'));
    yearlyPrices.forEach(el => el.classList.remove('hidden'));
  } else {
    monthlyPrices.forEach(el => el.classList.remove('hidden'));
    yearlyPrices.forEach(el => el.classList.add('hidden'));
  }
};

const toggleAccordionItem = (item, exclusiveOpen = true) => {
  if (exclusiveOpen) {
    const currentlyActive = document.querySelector('.accordion-item.active');
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
    }
  }
  
  item.classList.toggle('active');
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  // Fiyat geçişini yönet
  useEffect(() => {
    toggleBillingCycle(isYearly);
  }, [isYearly]);
  
  // Bileşen mount edildiğinde
  useEffect(() => {
    // Accordion işlevselliği
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    const handleAccordionClick = (item) => {
      toggleAccordionItem(item);
    };
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (header) {
        header.addEventListener('click', () => handleAccordionClick(item));
      }
    });
    
    // Cleanup function
    return () => {
      accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
          header.removeEventListener('click', () => handleAccordionClick(item));
        }
      });
    };
  }, []);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Basit ve Şeffaf Fiyatlandırma</h1>
          <p>İhtiyaçlarınıza uygun planı seçin ve hemen başlayın</p>
          
          <div className="pricing-toggle">
            <span>Aylık</span>
            <label className="switch">
              <input 
                type="checkbox" 
                id="billing-toggle"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)} 
              />
              <span className="slider"></span>
            </label>
            <span>Yıllık <span className="discount">%20 İndirim</span></span>
          </div>
        </div>
      </header>
      
      <section className="pricing-plans">
        <div className="container">
          <div className="plans">
            {/* Basic Plan */}
            <div className="plan-card">
              <div className="plan-header">
                <h3>Başlangıç</h3>
                <div className="plan-price">
                  <span className="price monthly">49₺</span>
                  <span className="price yearly hidden">39₺</span>
                  <span className="period">/ay</span>
                </div>
                <p className="plan-description">Küçük işletmeler ve freelancerlar için mükemmel başlangıç planı</p>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> 5 Web Sitesi</li>
                  <li><i className="fas fa-check"></i> Temel Şablonlar</li>
                  <li><i className="fas fa-check"></i> 1 GB Depolama</li>
                  <li><i className="fas fa-check"></i> Subdomain (websitename.builder.com)</li>
                  <li><i className="fas fa-check"></i> 7/24 E-posta Desteği</li>
                  <li className="not-included"><i className="fas fa-times"></i> Özel Domain Desteği</li>
                  <li className="not-included"><i className="fas fa-times"></i> SSL Sertifikası</li>
                  <li className="not-included"><i className="fas fa-times"></i> Premium Şablonlar</li>
                </ul>
              </div>
              <div className="plan-footer">
                <button className="btn btn-outline btn-large full-width">Planı Seç</button>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="plan-card popular">
              <div className="popular-badge">En Popüler</div>
              <div className="plan-header">
                <h3>Profesyonel</h3>
                <div className="plan-price">
                  <span className="price monthly">99₺</span>
                  <span className="price yearly hidden">79₺</span>
                  <span className="period">/ay</span>
                </div>
                <p className="plan-description">Büyüyen işletmeler için ekstra özellikler ve kaynaklar</p>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> 20 Web Sitesi</li>
                  <li><i className="fas fa-check"></i> Tüm Şablonlara Erişim</li>
                  <li><i className="fas fa-check"></i> 10 GB Depolama</li>
                  <li><i className="fas fa-check"></i> Özel Domain Desteği</li>
                  <li><i className="fas fa-check"></i> SSL Sertifikası</li>
                  <li><i className="fas fa-check"></i> 7/24 Öncelikli E-posta Desteği</li>
                  <li><i className="fas fa-check"></i> Telefon Desteği</li>
                  <li className="not-included"><i className="fas fa-times"></i> Gelişmiş SEO Araçları</li>
                </ul>
              </div>
              <div className="plan-footer">
                <button className="btn btn-primary btn-large full-width">Planı Seç</button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="plan-card">
              <div className="plan-header">
                <h3>Kurumsal</h3>
                <div className="plan-price">
                  <span className="price monthly">199₺</span>
                  <span className="price yearly hidden">159₺</span>
                  <span className="period">/ay</span>
                </div>
                <p className="plan-description">Büyük şirketler ve kurumlar için tam donanımlı çözüm</p>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Sınırsız Web Sitesi</li>
                  <li><i className="fas fa-check"></i> Tüm Şablonlara Erişim</li>
                  <li><i className="fas fa-check"></i> 100 GB Depolama</li>
                  <li><i className="fas fa-check"></i> Özel Domain Desteği</li>
                  <li><i className="fas fa-check"></i> SSL Sertifikası</li>
                  <li><i className="fas fa-check"></i> Özel Branding</li>
                  <li><i className="fas fa-check"></i> Gelişmiş SEO Araçları</li>
                  <li><i className="fas fa-check"></i> 7/24 VIP Destek</li>
                </ul>
              </div>
              <div className="plan-footer">
                <button className="btn btn-outline btn-large full-width">Planı Seç</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Web sitemi ücretsiz deneyebilir miyim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Evet, 14 gün boyunca herhangi bir ödeme yapmadan tüm özelliklere erişebilirsiniz. Deneme süreniz dolduğunda, devam etmek için bir plan seçmeniz gerekecektir.</p>
              </div>
            </div>
            
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>İstediğim zaman planımı yükseltebilir miyim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Kesinlikle! İhtiyaçlarınız değiştikçe planınızı kolayca yükseltebilirsiniz. Hesap panelinizden planınızı değiştirdiğinizde, ücret farkı orantılı olarak hesaplanır.</p>
              </div>
            </div>
            
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Kendi alan adımı kullanabilir miyim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Profesyonel ve Kurumsal planlarımızda kendi alan adınızı (domain) kullanabilirsiniz. Alan adınızı bizden satın alabilir veya mevcut alan adınızı sistemimize bağlayabilirsiniz.</p>
              </div>
            </div>
            
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Ödeme yöntemleri nelerdir?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Kredi kartı, banka kartı ve PayPal ile ödeme yapabilirsiniz. Yıllık planlarda banka havalesi seçeneği de mevcuttur.</p>
              </div>
            </div>
            
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Aboneliğimi iptal edebilir miyim?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Evet, istediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal işlemi, mevcut ödeme döneminin sonunda geçerli olur ve bu süre içinde tüm özelliklerden yararlanmaya devam edersiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Hemen Başlayın</h2>
          <p>14 gün ücretsiz deneyin, kredi kartı gerekmez.</p>
          <button className="btn btn-primary btn-large">Ücretsiz Deneyin</button>
        </div>
      </section>
    </>
  );
};

export default Pricing;