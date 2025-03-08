// src/utils/templateFunctions.js
/**
 * Template filtrelerini uygulayan fonksiyon
 */
export function filterTemplates(templateCards, { category, industry, searchQuery }) {
    return Array.from(templateCards).filter(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardIndustry = card.getAttribute('data-industry') || '';
      const cardName = card.querySelector('h3').textContent.toLowerCase();
      const cardDescription = card.querySelector('.template-category').textContent.toLowerCase();
      
      // Filtre koşullarını kontrol et
      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesIndustry = industry === 'all' || cardIndustry === industry;
      const matchesSearch = !searchQuery || 
        cardName.includes(searchQuery.toLowerCase()) || 
        cardDescription.includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesIndustry && matchesSearch;
    });
  }
  
  /**
   * Template sıralama fonksiyonu
   */
  export function sortTemplates(templateCards, sortCriteria) {
    return Array.from(templateCards).sort((a, b) => {
      switch(sortCriteria) {
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
  }
  
  /**
   * Card fiyat değerini çıkaran yardımcı fonksiyon
   */
  export function getPriceValue(card) {
    const priceText = card.querySelector('.template-price').textContent;
    if (priceText.toLowerCase().includes('ücretsiz')) {
      return 0;
    }
    return parseInt(priceText.replace(/[^\d]/g, '') || '0');
  }