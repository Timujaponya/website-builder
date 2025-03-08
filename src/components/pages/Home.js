import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Kendi Web Sitenizi <span className="highlight">Kolayca</span> Oluşturun</h1>
            <p>Özelleştirilebilir şablonlar ile kodlama bilgisi gerektirmeden profesyonel web sitelerinizi tasarlayın ve satışa sunun.</p>
            <div className="cta-buttons">
              <Link to="/templates" className="btn btn-primary btn-large">Şimdi Başla <i className="fas fa-arrow-right"></i></Link>
              <Link to="/templates" className="btn btn-outline btn-large">Şablonları Keşfet</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/600x400" alt="Website Builder" />
          </div>
        </div>
      </header>
      
      <section className="features">
        <div className="container">
          <h2 className="section-title">Öne Çıkan Özellikler</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-palette"></i></div>
              <h3>Sürükle & Bırak</h3>
              <p>Sürükle ve bırak arayüzümüzle sitelerinizi kolayca tasarlayın.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm şablonlar tamamen responsive ve mobil uyumlu.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-code"></i></div>
              <h3>Temiz Kod</h3>
              <p>Otomatik olarak optimize edilmiş, SEO dostu kod üretimi.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="builder-editor">
        <div className="container">
          <div className="workspace-header">
            <h2>Website Builder Çalışma Alanı</h2>
            <div className="workspace-actions">
              <button className="btn btn-primary btn-sm"><i className="fas fa-save"></i> Kaydet</button>
              <button className="btn btn-outline btn-sm"><i className="fas fa-eye"></i> Önizleme</button>
              <button className="btn btn-outline btn-sm"><i className="fas fa-download"></i> İndir</button>
            </div>
          </div>
          <div className="workspace">
            <div id="builder" className="workspace-panel"></div>
            <div id="editor" className="workspace-panel"></div>
            <div id="preview" className="workspace-panel"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;