const burger = document.querySelector('.burger');
const dropdown = document.querySelector('.dropdown-menu');

burger.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Optional: Schließen wenn man außerhalb klickt
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

// Scroll Animation für Fade-In Effekte
const fadeElements = document.querySelectorAll('.fade-in');
const checkScroll = () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Wenn Element im sichtbaren Bereich ist
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
};
// Bei Scroll checken
window.addEventListener('scroll', checkScroll);
// Beim Laden der Seite einmal checken
checkScroll();

// Image Switch Functionality für Fullpage Section 1
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.fullpage-image1');
  const buttons = document.querySelectorAll('.fullpage-section-1-button');
  
  if (mainImage && buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image');
        
        // Direkter Bildwechsel ohne Fade
        mainImage.src = imageUrl;
        
        // Aktiven Button markieren
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // Scroll Progress für Section 2
  const imageContainer = document.querySelector('.fullpage-section-2 .image-container');
  const section2ProgressBar = document.querySelector('.fullpage-section-2 .scroll-progress-bar');
  
  console.log('Image Container:', imageContainer);
  console.log('Section 2 Progress Bar:', section2ProgressBar);
  
  if (imageContainer && section2ProgressBar) {
    imageContainer.addEventListener('scroll', function() {
      const imageBoxes = imageContainer.querySelectorAll('.image-box');
      const totalImages = imageBoxes.length;
      
      const scrollLeft = imageContainer.scrollLeft;
      const containerWidth = imageContainer.clientWidth;
      
      // Berechne welches Bild gerade sichtbar ist
      const currentIndex = Math.round(scrollLeft / containerWidth);
      
      // Berechne die Position der Fortschrittsleiste
      const progressWidth = 100 / totalImages;
      const leftPosition = (currentIndex / totalImages) * 100;
      
      console.log('Section 2 - Scroll Left:', scrollLeft);
      console.log('Section 2 - Current Index:', currentIndex);
      console.log('Section 2 - Left Position:', leftPosition + '%');
      
      section2ProgressBar.style.width = progressWidth + '%';
      section2ProgressBar.style.left = leftPosition + '%';
    });
  }
  
  // Scroll Progress für Products Section (nur Mobile)
  const productsContainer = document.querySelector('.products');
  const productsProgressBar = document.querySelector('.shop .scroll-progress-bar');
  
  console.log('Products Container:', productsContainer);
  console.log('Products Progress Bar:', productsProgressBar);
  
  if (productsContainer && productsProgressBar) {
    productsContainer.addEventListener('scroll', function() {
      const scrollLeft = productsContainer.scrollLeft;
      const scrollWidth = productsContainer.scrollWidth - productsContainer.clientWidth;
      const scrollPercentage = (scrollLeft / scrollWidth) * 100;
      
      // Verschiebe den Progress Bar basierend auf Scroll-Position
      // 3 Bilder = 0% bis 200% Bewegung
      const maxTranslate = 200;
      const translateX = (scrollPercentage / 100) * maxTranslate;
      
      console.log('Products - Scroll Left:', scrollLeft);
      console.log('Products - Scroll Percentage:', scrollPercentage);
      console.log('Products - TranslateX:', translateX);
      
      productsProgressBar.style.transform = `translateX(${translateX}%)`;
    });
  }
});