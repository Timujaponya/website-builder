import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Kullanıcı web siteleri için state
  const [websites, setWebsites] = useState([]);
  // Aktif sekme için state
  const [activeTab, setActiveTab] = useState('websites');

  // Mock veri yükleme
  useEffect(() => {
    // API'den web sitesi verilerini çekmek yerine örnek veri kullanıyoruz
    const mockWebsites = [
      {
        id: 1,
        name: "Kişisel Blog",
        template: "Blog Master",
        created: "2024-03-01",
        lastEdited: "2024-03-05",
        status: "active",
        visits: 1240,
        thumbnail: "https://via.placeholder.com/300x200?text=Blog+Template"
      },
      {
        id: 2,
        name: "E-Ticaret Mağazam",
        template: "E-Shop Plus",
        created: "2024-02-15",
        lastEdited: "2024-03-07",
        status: "active",
        visits: 3560,
        thumbnail: "https://via.placeholder.com/300x200?text=E-commerce+Template"
      },
      {
        id: 3,
        name: "Portfolyo Sitesi",
        template: "Creative Portfolio",
        created: "2024-01-20",
        lastEdited: "2024-02-28",
        status: "inactive",
        visits: 980,
        thumbnail: "https://via.placeholder.com/300x200?text=Portfolio+Template"
      }
    ];
    
    setWebsites(mockWebsites);
  }, []);

  // Web sitesi silme fonksiyonu
  const handleDeleteWebsite = (websiteId) => {
    if (window.confirm("Bu web sitesini silmek istediğinizden emin misiniz?")) {
      setWebsites(websites.filter(site => site.id !== websiteId));
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1>Dashboard</h1>
          <div className="dashboard-actions">
            <Link to="/templates" className="btn btn-primary">
              <i className="fas fa-plus"></i> Yeni Website Oluştur
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${activeTab === 'websites' ? 'active' : ''}`}
            onClick={() => setActiveTab('websites')}
          >
            <i className="fas fa-globe"></i> Websitelerim
          </button>
          <button 
            className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <i className="fas fa-chart-line"></i> Analitik
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i> Ayarlar
          </button>
        </div>
        
        <div className="dashboard-content">
          {activeTab === 'websites' && (
            <>
              <div className="section-header">
                <h2>Websitelerim ({websites.length})</h2>
                <div className="search">
                  <input type="text" placeholder="Web sitelerini ara..." />
                  <button><i className="fas fa-search"></i></button>
                </div>
              </div>
              
              {websites.length > 0 ? (
                <div className="websites-grid">
                  {websites.map(website => (
                    <div key={website.id} className="website-card">
                      <div className="website-thumbnail">
                        <img src={website.thumbnail} alt={website.name} />
                        <div className="website-status">
                          <span className={`status-badge ${website.status}`}>
                            {website.status === 'active' ? 'Aktif' : 'İnaktif'}
                          </span>
                        </div>
                      </div>
                      <div className="website-info">
                        <h3>{website.name}</h3>
                        <p className="website-template">{website.template}</p>
                        <div className="website-stats">
                          <div className="stat">
                            <i className="fas fa-calendar"></i>
                            <span>Son düzenleme: {new Date(website.lastEdited).toLocaleDateString()}</span>
                          </div>
                          <div className="stat">
                            <i className="fas fa-eye"></i>
                            <span>{website.visits} ziyaret</span>
                          </div>
                        </div>
                      </div>
                      <div className="website-actions">
                        <Link to={`/editor/${website.id}`} className="btn btn-sm btn-primary">
                          <i className="fas fa-edit"></i> Düzenle
                        </Link>
                        <button className="btn btn-sm btn-outline" onClick={() => window.open(`/preview/${website.id}`, '_blank')}>
                          <i className="fas fa-eye"></i> Önizleme
                        </button>
                        <button 
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteWebsite(website.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <h3>Henüz bir web siteniz yok!</h3>
                  <p>İlk web sitenizi oluşturmak için şablonlar sayfasına göz atın.</p>
                  <Link to="/templates" className="btn btn-primary">Şablonlara Göz At</Link>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'analytics' && (
            <div className="analytics-section">
              <h2>Analitik Özeti</h2>
              <div className="analytics-cards">
                <div className="analytics-card">
                  <div className="analytics-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="analytics-data">
                    <h3>5,780</h3>
                    <p>Toplam Ziyaretçi</p>
                  </div>
                  <div className="analytics-trend up">
                    <i className="fas fa-arrow-up"></i> 12%
                  </div>
                </div>
                
                <div className="analytics-card">
                  <div className="analytics-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="analytics-data">
                    <h3>14,290</h3>
                    <p>Sayfa Görüntüleme</p>
                  </div>
                  <div className="analytics-trend up">
                    <i className="fas fa-arrow-up"></i> 8%
                  </div>
                </div>
                
                <div className="analytics-card">
                  <div className="analytics-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="analytics-data">
                    <h3>2:35</h3>
                    <p>Ort. Ziyaret Süresi</p>
                  </div>
                  <div className="analytics-trend down">
                    <i className="fas fa-arrow-down"></i> 3%
                  </div>
                </div>
              </div>
              
              <div className="chart-container">
                <h3>Ziyaretçi Trafiği (Son 30 gün)</h3>
                <div className="chart-placeholder">
                  <div className="chart-message">
                    <i className="fas fa-chart-line"></i>
                    <p>Analitik veriler burada görüntülenecek</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Hesap Ayarları</h2>
              
              <div className="settings-card">
                <h3>Profil Bilgileri</h3>
                <form className="settings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad</label>
                      <input type="text" id="name" defaultValue="Demo User" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-posta</label>
                      <input type="email" id="email" defaultValue="user@example.com" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Şirket</label>
                      <input type="text" id="company" defaultValue="Demo Company" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input type="tel" id="phone" defaultValue="+90 500 123 4567" />
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Değişiklikleri Kaydet</button>
                </form>
              </div>
              
              <div className="settings-card">
                <h3>Şifre Değiştir</h3>
                <form className="settings-form">
                  <div className="form-group">
                    <label htmlFor="current-password">Mevcut Şifre</label>
                    <input type="password" id="current-password" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="new-password">Yeni Şifre</label>
                      <input type="password" id="new-password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password">Şifre Tekrar</label>
                      <input type="password" id="confirm-password" />
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Şifreyi Güncelle</button>
                </form>
              </div>
              
              <div className="settings-card">
                <h3>Bildirim Ayarları</h3>
                <div className="settings-form">
                  <div className="notification-option">
                    <div>
                      <h4>E-posta Bildirimleri</h4>
                      <p>Web sitenizle ilgili güncellemeler ve önemli bilgiler</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  
                  <div className="notification-option">
                    <div>
                      <h4>Site Ziyaret Bildirimleri</h4>
                      <p>Web siteniz ziyaret edildiğinde bildirim alın</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  
                  <div className="notification-option">
                    <div>
                      <h4>Pazarlama E-postaları</h4>
                      <p>Yeni özellikler ve kampanyalarla ilgili bildirimler</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;