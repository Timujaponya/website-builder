// src/utils/pricingFunctions.js
/**
 * Aylık/yıllık fiyat geçişini yöneten fonksiyon
 */
export function toggleBillingCycle(isYearly) {
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');
    
    if (isYearly) {
      monthlyPrices.forEach(el => el.classList.add('hidden'));
      yearlyPrices.forEach(el => el.classList.remove('hidden'));
    } else {
      monthlyPrices.forEach(el => el.classList.remove('hidden'));
      yearlyPrices.forEach(el => el.classList.add('hidden'));
    }
  }
  
  /**
   * Accordion davranışını yöneten fonksiyon
   */
  export function toggleAccordionItem(item, exclusiveOpen = true) {
    if (exclusiveOpen) {
      const currentlyActive = document.querySelector('.accordion-item.active');
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove('active');
      }
    }
    
    item.classList.toggle('active');
  }