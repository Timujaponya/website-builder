import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Mock şablon verisi
const templateData = [
  {
    id: 1,
    name: "Business Pro",
    description: "Profesyonel işletmeler için modern tasarım",
    category: "Business",
    industry: "Genel",
    pages: 5,
    image: "https://via.placeholder.com/600x400?text=Business+Template",
    popular: true,
    new: false,
    premium: true,
    price: "₺149"
  },
  {
    id: 2,
    name: "E-Commerce Plus",
    description: "Gelişmiş e-ticaret özellikleri ile satış odaklı",
    category: "E-Commerce",
    industry: "Perakende",
    pages: 8,
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Template",
    popular: true,
    new: false,
    premium: true,
    price: "₺199"
  },
  {
    id: 3,
    name: "Portfolio Minimal",
    description: "Yaratıcı profesyoneller için minimalist portföy",
    category: "Portfolio",
    industry: "Sanat & Tasarım",
    pages: 4,
    image: "https://via.placeholder.com/600x400?text=Portfolio+Template",
    popular: false,
    new: true,
    premium: false,
    price: "Ücretsiz"
  },
  {
    id: 4,
    name: "Blog Master",
    description: "İçerik üreticileri için optimize edilmiş blog şablonu",
    category: "Blog",
    industry: "Medya",
    pages: 6,
    image: "https://via.placeholder.com/600x400?text=Blog+Template",
    popular: false,
    new: true,
    premium: false,
    price: "Ücretsiz"
  },
  {
    id: 5,
    name: "Restaurant Deluxe",
    description: "Restoranlar için sipariş ve menü entegrasyonu",
    category: "Business",
    industry: "Yemek",
    pages: 5,
    image: "https://via.placeholder.com/600x400?text=Restaurant+Template",
    popular: false,
    new: false,
    premium: true,
    price: "₺149"
  },
  {
    id: 6,
    name: "Fitness Pro",
    description: "Spor salonları ve eğitmenler için uygun tasarım",
    category: "Business",
    industry: "Sağlık",
    pages: 4,
    image: "https://via.placeholder.com/600x400?text=Fitness+Template",
    popular: false,
    new: false,
    premium: false,
    price: "Ücretsiz"
  },
  {
    id: 7,
    name: "Educational Institute",
    description: "Okullar, kurslar ve eğitim kurumları için",
    category: "Business",
    industry: "Eğitim",
    pages: 7,
    image: "https://via.placeholder.com/600x400?text=Education+Template",
    popular: true,
    new: false,
    premium: true,
    price: "₺179"
  },
  {
    id: 8,
    name: "Tech Startup",
    description: "Teknoloji şirketleri ve startup'lar için",
    category: "Business",
    industry: "Teknoloji",
    pages: 5,
    image: "https://via.placeholder.com/600x400?text=Tech+Template",
    popular: false,
    new: true,
    premium: true,
    price: "₺149"
  },
  {
    id: 9,
    name: "Personal CV",
    description: "Özgeçmiş ve kişisel tanıtım için",
    category: "Personal",
    industry: "Genel",
    pages: 3,
    image: "https://via.placeholder.com/600x400?text=CV+Template",
    popular: false,
    new: false,
    premium: false,
    price: "Ücretsiz"
  },
  {
    id: 10,
    name: "Wedding Special",
    description: "Düğün davetiyesi ve organizasyon detayları",
    category: "Personal",
    industry: "Etkinlik",
    pages: 4,
    image: "https://via.placeholder.com/600x400?text=Wedding+Template",
    popular: false,
    new: false,
    premium: false,
    price: "Ücretsiz"
  },
  {
    id: 11,
    name: "Real Estate Pro",
    description: "Emlak ofisleri ve gayrimenkul ilanları için",
    category: "Business",
    industry: "Emlak",
    pages: 6,
    image: "https://via.placeholder.com/600x400?text=Real+Estate+Template",
    popular: true,
    new: false,
    premium: true,
    price: "₺169"
  },
  {
    id: 12,
    name: "Medical Clinic",
    description: "Doktorlar, klinikler ve sağlık hizmetleri",
    category: "Business",
    industry: "Sağlık",
    pages: 5,
    image: "https://via.placeholder.com/600x400?text=Medical+Template",
    popular: false,
    new: false,
    premium: true,
    price: "₺149"
  }
];

const Templates = () => {
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceFilter, setPriceFilter] = useState('all');
  const [currentTemplates, setCurrentTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const templatesPerPage = 6;

  // Kategori menüsü için benzersiz kategoriler
  const categories = ['all', ...new Set(templateData.map(t => t.category.toLowerCase()))];
  const industries = ['all', ...new Set(templateData.map(t => t.industry))];

  // AOS başlatma
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  // Sayfalama için başlangıç indeksi ve bitiş indeksi
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

  // Filtreyi uygula ve şablonları güncelle
  useEffect(() => {
    let filtered = [...templateData];

    // Kategori filtresi
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(template => template.category.toLowerCase() === categoryFilter);
    }

    // Sektör filtresi
    if (industryFilter !== 'all') {
      filtered = filtered.filter(template => template.industry === industryFilter);
    }

    // Fiyat filtresi
    if (priceFilter === 'free') {
      filtered = filtered.filter(template => template.price === 'Ücretsiz');
    } else if (priceFilter === 'premium') {
      filtered = filtered.filter(template => template.price !== 'Ücretsiz');
    }

    // Arama filtresi
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        template =>
          template.name.toLowerCase().includes(lowerSearchTerm) ||
          template.description.toLowerCase().includes(lowerSearchTerm) ||
          template.category.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // Sıralama
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return a.new === b.new ? 0 : a.new ? -1 : 1;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
        default:
          return a.popular === b.popular ? 0 : a.popular ? -1 : 1;
      }
    });

    setFilteredTemplates(filtered);
    setCurrentPage(1);
  }, [categoryFilter, industryFilter, searchTerm, sortBy, priceFilter]);

  // Geçerli sayfa için şablonları ayarla
  useEffect(() => {
    const currentItems = filteredTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);
    setCurrentTemplates(currentItems);
  }, [filteredTemplates, indexOfFirstTemplate, indexOfLastTemplate]);

  // Event handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCategoryFilter(category);
  };

  const handleIndustryChange = (e) => {
    setIndustryFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openPreview = (template) => {
    setPreviewTemplate(template);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewTemplate(null);
    document.body.style.overflow = 'auto';
  };

  // Sayfalama için toplam sayfa sayısı
  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);

  // Sayfalama butonlarını oluştur
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <header className="page-header templates-header">
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1>Profesyonel <span className="highlight">Web Site</span> Şablonları</h1>
            <p>Binlerce modern şablon arasından seçim yapın ve hemen düzenlemeye başlayın</p>
          </div>
        </div>
      </header>
      
      <section className="templates-categories">
        <div className="container">
          <div className="categories-nav" data-aos="fade-up">
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <button 
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === 'all' ? 'Tümü' : category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="templates-section">
        <div className="container">
          <div className="templates-filter-bar" data-aos="fade-up">
            <div className="filter-left">
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Şablon arayın..." 
                  value={searchTerm} 
                  onChange={handleSearchChange}
                />
                <button><i className="fas fa-search"></i></button>
              </div>
            </div>
            
            <div className="filter-right">
              <div className="filter-group">
                <label>Sektör:</label>
                <select value={industryFilter} onChange={handleIndustryChange}>
                  <option value="all">Tümü</option>
                  {industries.filter(i => i !== 'all').map((industry, index) => (
                    <option key={index} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label>Fiyat:</label>
                <select value={priceFilter} onChange={handlePriceChange}>
                  <option value="all">Tümü</option>
                  <option value="free">Ücretsiz</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Sıralama:</label>
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="popular">Popülerlik</option>
                  <option value="newest">En Yeniler</option>
                  <option value="name">İsim (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
          
          {filteredTemplates.length === 0 ? (
            <div className="no-results" data-aos="fade-up">
              <i className="fas fa-search"></i>
              <h2>Sonuç Bulunamadı</h2>
              <p>Arama kriterlerinize uygun şablon bulunamadı. Lütfen farklı bir arama terimi deneyin veya filtreleri temizleyin.</p>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setIndustryFilter('all');
                  setPriceFilter('all');
                  setSortBy('popular');
                  setActiveCategory('all');
                }}
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <>
              <div className="templates-count" data-aos="fade-up">
                <p><span>{filteredTemplates.length}</span> şablon bulundu</p>
              </div>
              
              <div className="templates-grid">
                {currentTemplates.map((template, index) => (
                  <div 
                    key={template.id} 
                    className="template-card"
                    data-aos="fade-up"
                    data-aos-delay={100 + (index % 6) * 50}
                  >
                    <div className="template-image">
                      <img src={template.image} alt={template.name} />
                      <div className="template-overlay">
                        <button 
                          className="btn btn-secondary"
                          onClick={() => openPreview(template)}
                        >
                          <i className="fas fa-eye"></i> Önizleme
                        </button>
                        <Link to={`/editor/${template.id}`} className="btn btn-primary">
                          <i className="fas fa-edit"></i> Özelleştir
                        </Link>
                      </div>
                      {template.premium && <span className="template-badge premium">Premium</span>}
                      {template.popular && <span className="template-badge popular">Popüler</span>}
                      {template.new && <span className="template-badge new">Yeni</span>}
                    </div>
                    <div className="template-info">
                      <h3>{template.name}</h3>
                      <p className="template-description">{template.description}</p>
                      <div className="template-meta">
                        <div className="template-details">
                          <span className="template-category">{template.category}</span>
                          <span className="template-pages"><i className="fas fa-file"></i> {template.pages} Sayfa</span>
                        </div>
                        <div className="template-price">
                          {template.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="templates-pagination" data-aos="fade-up">
                  <button 
                    className="pagination-arrow" 
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button 
                    className="pagination-arrow" 
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <section className="templates-categories-slider">
        <div className="container">
          <h2 className="section-title center" data-aos="fade-up">Popüler Kategoriler</h2>
          
          <div className="category-cards" data-aos="fade-up" data-aos-delay="100">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>E-Ticaret</h3>
              <p>Online mağazanızı oluşturun</p>
              <button 
                className="btn btn-text"
                onClick={() => handleCategoryChange('e-commerce')}
              >
                Şablonları Gör <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>İşletme</h3>
              <p>Kurumsal web siteleri</p>
              <button 
                className="btn btn-text"
                onClick={() => handleCategoryChange('business')}
              >
                Şablonları Gör <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-image"></i>
              </div>
              <h3>Portföy</h3>
              <p>Çalışmalarınızı sergilemek için</p>
              <button 
                className="btn btn-text"
                onClick={() => handleCategoryChange('portfolio')}
              >
                Şablonları Gör <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <h3>Blog</h3>
              <p>İçerik paylaşmak için</p>
              <button 
                className="btn btn-text"
                onClick={() => handleCategoryChange('blog')}
              >
                Şablonları Gör <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="templates-cta gradient-bg">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Özel Bir Şablona mı İhtiyacınız Var?</h2>
            <p>İhtiyaçlarınıza uygun özel bir şablon tasarlamamızı isterseniz bizimle iletişime geçin.</p>
            <Link to="/contact" className="btn btn-white btn-large">İletişime Geçin</Link>
          </div>
        </div>
      </section>
      
      {/* Şablon Önizleme Modal */}
      {previewTemplate && (
        <div className="template-preview-modal">
          <div className="modal-overlay" onClick={closePreview}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closePreview}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="preview-header">
              <h2>{previewTemplate.name}</h2>
              <div className="preview-meta">
                <span className="preview-category">{previewTemplate.category}</span>
                <span className="preview-industry">{previewTemplate.industry}</span>
              </div>
            </div>
            
            <div className="preview-image">
              <img src={previewTemplate.image} alt={previewTemplate.name} />
            </div>
            
            <div className="preview-details">
              <div className="preview-description">
                <h3>Açıklama</h3>
                <p>{previewTemplate.description}</p>
                <ul className="preview-features">
                  <li><i className="fas fa-check-circle"></i> Mobil uyumlu tasarım</li>
                  <li><i className="fas fa-check-circle"></i> {previewTemplate.pages} sayfa içeriği</li>
                  <li><i className="fas fa-check-circle"></i> SEO uyumlu yapı</li>
                  <li><i className="fas fa-check-circle"></i> Özelleştirilebilir bileşenler</li>
                </ul>
              </div>
              
              <div className="preview-actions">
                <div className="preview-price">
                  <span>Fiyat:</span> {previewTemplate.price}
                </div>
                <Link to={`/editor/${previewTemplate.id}`} className="btn btn-primary btn-large">
                  Bu Şablonu Kullan
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Templates;