import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
  // State tanımlamaları
  const [category, setCategory] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [sortCriteria, setSortCriteria] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [templates, setTemplates] = useState([]);
  
  // Yardımcı fonksiyonlar
  const filterTemplates = (templates, { category, industry, searchQuery }) => {
    return templates.filter(template => {
      const matchesCategory = category === 'all' || template.category === category;
      const matchesIndustry = industry === 'all' || template.industry === industry;
      const matchesSearch = !searchQuery || 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesIndustry && matchesSearch;
    });
  };
  
  const sortTemplatesList = (templates, criteria) => {
    return [...templates].sort((a, b) => {
      switch(criteria) {
        case 'priceAsc':
          return (a.price === 'Ücretsiz' ? 0 : a.price) - (b.price === 'Ücretsiz' ? 0 : b.price);
        case 'priceDesc':
          return (b.price === 'Ücretsiz' ? 0 : b.price) - (a.price === 'Ücretsiz' ? 0 : a.price);
        case 'new':
          return b.date - a.date;
        case 'popular':
        default:
          return b.downloads - a.downloads;
      }
    });
  };
  
  // Filtrelenmiş ve sıralanmış şablonlar
  const filteredAndSortedTemplates = filterTemplates(templates, {
    category,
    industry,
    searchQuery
  });
  
  const sortedTemplates = sortTemplatesList(filteredAndSortedTemplates, sortCriteria);
  
  // Şablon verisini yükle
  useEffect(() => {
    // Normalde API'den gelecek olan veri
    const templateData = [
      { 
        id: 1, 
        name: 'Business Pro', 
        category: 'business', 
        industry: 'tech',
        description: 'İş, Kurumsal', 
        price: 'Ücretsiz', 
        isPremium: false, 
        image: 'https://via.placeholder.com/600x400?text=Business+Template',
        downloads: 1200,
        date: new Date('2024-01-15').getTime()
      },
      { 
        id: 2, 
        name: 'E-Shop Plus', 
        category: 'ecommerce', 
        industry: 'fashion',
        description: 'E-Ticaret, Moda', 
        price: 299, 
        isPremium: true, 
        image: 'https://via.placeholder.com/600x400?text=E-Commerce+Template',
        downloads: 850,
        date: new Date('2024-02-05').getTime()
      },
      { 
        id: 3, 
        name: 'Creative Portfolio', 
        category: 'portfolio', 
        industry: 'tech',
        description: 'Portfolyo, Yaratıcı', 
        price: 'Ücretsiz', 
        isPremium: false, 
        image: 'https://via.placeholder.com/600x400?text=Portfolio+Template',
        downloads: 960,
        date: new Date('2023-12-20').getTime()
      },
      { 
        id: 4, 
        name: 'Resto Deluxe', 
        category: 'business', 
        industry: 'food',
        description: 'Restoran, Yemek', 
        price: 199, 
        isPremium: true, 
        image: 'https://via.placeholder.com/600x400?text=Restaurant+Template',
        downloads: 720,
        date: new Date('2024-01-25').getTime()
      },
      { 
        id: 5, 
        name: 'Blog Master', 
        category: 'blog', 
        industry: 'education',
        description: 'Blog, İçerik', 
        price: 'Ücretsiz', 
        isPremium: false, 
        image: 'https://via.placeholder.com/600x400?text=Blog+Template',
        downloads: 1500,
        date: new Date('2023-11-10').getTime()
      },
      { 
        id: 6, 
        name: 'Convert Pro', 
        category: 'landing', 
        industry: 'tech',
        description: 'Landing Page, Pazarlama', 
        price: 149, 
        isPremium: true, 
        image: 'https://via.placeholder.com/600x400?text=Landing+Page+Template',
        downloads: 1100,
        date: new Date('2024-02-20').getTime()
      },
    ];
    
    setTemplates(templateData);
  }, []);

  // Filtreleri temizleme
  const clearFilters = () => {
    setCategory('all');
    setIndustry('all');
    setSortCriteria('popular');
    setSearchQuery('');
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Profesyonel Web Site Şablonları</h1>
          <p>İşinize en uygun şablonu seçin ve özelleştirmeye başlayın</p>
        </div>
      </header>
      
      <section className="template-filters">
        <div className="container">
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="category">Kategori</label>
              <select 
                id="category" 
                className="filter-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">Tümü</option>
                <option value="business">İş</option>
                <option value="portfolio">Portfolyo</option>
                <option value="ecommerce">E-Ticaret</option>
                <option value="blog">Blog</option>
                <option value="landing">Landing Page</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="industry">Sektör</label>
              <select 
                id="industry" 
                className="filter-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="all">Tümü</option>
                <option value="tech">Teknoloji</option>
                <option value="health">Sağlık</option>
                <option value="education">Eğitim</option>
                <option value="food">Yemek & Restoran</option>
                <option value="fashion">Moda</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="sort">Sıralama</label>
              <select 
                id="sort" 
                className="filter-select"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
              >
                <option value="popular">Popülerlik</option>
                <option value="new">En Yeni</option>
                <option value="priceAsc">Fiyat (Artan)</option>
                <option value="priceDesc">Fiyat (Azalan)</option>
              </select>
            </div>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Şablonlarda ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="templates">
        <div className="container">
          {sortedTemplates.length > 0 ? (
            <div className="templates-grid">
              {sortedTemplates.map(template => (
                <div 
                  key={template.id} 
                  className="template-card"
                  data-category={template.category}
                  data-industry={template.industry}
                >
                  <div className="template-image">
                    {template.isPremium && <div className="premium-badge">Premium</div>}
                    <img src={template.image} alt={template.name} />
                    <div className="template-overlay">
                      <button className="btn btn-primary">Önizleme</button>
                      <Link to={`/editor?template=${template.id}`} className="btn btn-outline">Özelleştir</Link>
                    </div>
                  </div>
                  <div className="template-info">
                    <h3>{template.name}</h3>
                    <p className="template-category">{template.description}</p>
                    <div className="template-meta">
                      <span className="template-price">
                        {template.price === 'Ücretsiz' ? 'Ücretsiz' : `${template.price}₺`}
                      </span>
                      <span className="template-downloads">
                        <i className="fas fa-download"></i> {template.downloads > 1000 ? `${(template.downloads / 1000).toFixed(1)}k` : template.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="empty-state">
                <i className="fas fa-search"></i>
                <h3>Sonuç bulunamadı</h3>
                <p>Arama kriterlerinize uygun şablon bulunamadı. Lütfen filtreleri değiştirip tekrar deneyin.</p>
                <button className="btn btn-outline" onClick={clearFilters}>Filtreleri Temizle</button>
              </div>
            </div>
          )}
          
          <div className="pagination">
            <a href="#" className="page active">1</a>
            <a href="#" className="page">2</a>
            <a href="#" className="page">3</a>
            <span className="page-separator">...</span>
            <a href="#" className="page">10</a>
            <a href="#" className="page next"><i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Kendi Özel Web Sitenizi Tasarlayın</h2>
          <p>Şablonlarımızı keşfedin ve hemen özelleştirmeye başlayın.</p>
          <Link to="/editor" className="btn btn-primary btn-large">Hemen Başla</Link>
        </div>
      </section>
    </>
  );
};

export default Templates;