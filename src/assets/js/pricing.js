document.addEventListener('DOMContentLoaded', function() {
    // Toggle between monthly and yearly pricing
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');
    
    billingToggle.addEventListener('change', function() {
        if (this.checked) {
            // Yearly pricing
            monthlyPrices.forEach(el => el.classList.add('hidden'));
            yearlyPrices.forEach(el => el.classList.remove('hidden'));
        } else {
            // Monthly pricing
            monthlyPrices.forEach(el => el.classList.remove('hidden'));
            yearlyPrices.forEach(el => el.classList.add('hidden'));
        }
    });
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
});