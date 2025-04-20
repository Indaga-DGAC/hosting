//carrusel.js 
//Variables globales
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselTrack = document.querySelector('.carousel-track');
const indicator = document.querySelector('.carousel-indicator');
const dotsContainer = document.querySelector('.carousel-dots');
let dots = [];

// Crear puntos (dots) del carrusel
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

// Función para mover el carrusel al siguiente o anterior slide
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= totalImages) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  updateCarousel();
}

// Función para actualizar el carrusel y los puntos
function updateCarousel() {
  const offset = -(currentIndex * 100);
  carouselTrack.style.transform = `translateX(${offset}%)`;

  // Actualiza el texto del indicador numérico
  if (indicator) {
    indicator.innerHTML = `${currentIndex + 1} / ${totalImages}`;
  }

  // Actualiza los puntos
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Función para avanzar automáticamente
function autoSlide() {
  moveSlide(1);
}

// Configurar el slide automático cada 5 segundos
setInterval(autoSlide, 150000);

// Inicializar
updateCarousel();
