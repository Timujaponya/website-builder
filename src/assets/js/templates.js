document.addEventListener('DOMContentLoaded', function() {
    // Filtreleme İşlevleri
    const categoryFilter = document.getElementById('category');
    const industryFilter = document.getElementById('industry');
    const sortFilter = document.getElementById('sort');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-btn');
    
    // Tüm şablonlar
    const templateCards = document.querySelectorAll('.template-card');
    
    // Filtreleme fonksiyonu
    function filterTemplates() {
        const categoryValue = categoryFilter.value;
        const industryValue = industryFilter.value;
        const searchQuery = searchInput.value.toLowerCase();
        
        templateCards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            const industry = card.getAttribute('data-industry') || '';
            const name = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.template-category').textContent.toLowerCase();
            
            // Kategori ve sektör filtresi
            const matchesCategory = categoryValue === 'all' || category === categoryValue;
            const matchesIndustry = industryValue === 'all' || industry === industryValue;
            
            // Arama sorgusu eşleşmesi
            const matchesSearch = name.includes(searchQuery) || description.includes(searchQuery);
            
            // Tüm kriterleri karşılıyor mu?
            if (matchesCategory && matchesIndustry && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Sonuç yoksa mesaj göster
        const visibleCards = document.querySelectorAll('.template-card[style="display: block"]');
        const noResultsMessage = document.querySelector('.no-results') || createNoResultsMessage();
        
        if (visibleCards.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }
    
    // "Sonuç bulunamadı" mesajını oluştur
    function createNoResultsMessage() {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Sonuç bulunamadı</h3>
                <p>Arama kriterlerinize uygun şablon bulunamadı. Lütfen filtreleri değiştirip tekrar deneyin.</p>
                <button class="btn btn-outline" id="clear-filters">Filtreleri Temizle</button>
            </div>
        `;
        
        const templatesGrid = document.querySelector('.templates-grid');
        templatesGrid.parentNode.insertBefore(noResults, templatesGrid.nextSibling);
        
        // Filtreleri temizleme düğmesine olay ekleyin
        document.getElementById('clear-filters').addEventListener('click', () => {
            categoryFilter.value = 'all';
            industryFilter.value = 'all';
            sortFilter.value = 'popular';
            searchInput.value = '';
            filterTemplates();
        });
        
        return noResults;
    }
    
    // Şablon kartlarına veri öznitelikleri ekle
    templateCards.forEach((card, index) => {
        // Örnek veri öznitelikleri (gerçek uygulamada bu veriler backend'den gelebilir)
        const categories = ['business', 'portfolio', 'ecommerce', 'blog', 'landing', 'business'];
        const industries = ['tech', 'health', 'education', 'food', 'fashion', 'tech'];
        
        card.setAttribute('data-category', categories[index % categories.length]);
        card.setAttribute('data-industry', industries[index % industries.length]);
        
        // Şablon önizleme butonları
        const previewBtn = card.querySelector('.template-overlay .btn-primary');
        const customizeBtn = card.querySelector('.template-overlay .btn-outline');
        
        // Önizleme butonu işlevselliği
        if (previewBtn) {
            previewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const templateName = card.querySelector('h3').textContent;
                alert(`${templateName} şablonu önizleniyor...`);
                // Gerçek uygulamada, modal içinde şablon önizlemesi gösterilebilir
            });
        }
        
        // Özelleştirme butonu işlevselliği
        if (customizeBtn) {
            customizeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '/editor.html?template=' + encodeURIComponent(card.getAttribute('data-id') || index);
            });
        }
    });
    
    // Sıralama fonksiyonu
    function sortTemplates() {
        const sortValue = sortFilter.value;
        const templatesGrid = document.querySelector('.templates-grid');
        const cards = Array.from(templateCards);
        
        cards.sort((a, b) => {
            switch(sortValue) {
                case 'priceAsc':
                    return getPriceValue(a) - getPriceValue(b);
                case 'priceDesc':
                    return getPriceValue(b) - getPriceValue(a);
                case 'new':
                    return (parseInt(b.getAttribute('data-date') || '0') - 
                            parseInt(a.getAttribute('data-date') || '0'));
                case 'popular':
                default:
                    return (parseInt(b.querySelector('.template-downloads').textContent.replace(/[^\d]/g, '') || '0') - 
                            parseInt(a.querySelector('.template-downloads').textContent.replace(/[^\d]/g, '') || '0'));
            }
        });
        
        // DOM'u yeniden sırala
        cards.forEach(card => {
            templatesGrid.appendChild(card);
        });
    }
    
    // Fiyat değerini al (ücretsiz veya sayısal değer)
    function getPriceValue(card) {
        const priceText = card.querySelector('.template-price').textContent;
        if (priceText.toLowerCase().includes('ücretsiz')) {
            return 0;
        }
        return parseInt(priceText.replace(/[^\d]/g, '') || '0');
    }
    
    // Filtre değişikliklerini dinle
    categoryFilter.addEventListener('change', filterTemplates);
    industryFilter.addEventListener('change', filterTemplates);
    searchButton.addEventListener('click', filterTemplates);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterTemplates();
        }
    });
    
    // Sıralama değişikliklerini dinle
    sortFilter.addEventListener('change', () => {
        sortTemplates();
        filterTemplates();
    });
    
    // Sayfalama işlevi
    const paginationLinks = document.querySelectorAll('.pagination .page');
    paginationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Aktif sayfa sınıfını güncelle
            document.querySelector('.pagination .page.active').classList.remove('active');
            link.classList.add('active');
            
            // Gerçek bir uygulamada burada sayfa içeriğini AJAX ile güncelleyebiliriz
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Sayfa yüklendiğinde varsayılan sıralamayı uygula
    sortTemplates();
});