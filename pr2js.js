// ======================
// PRELOADER (3 секунды)
// ======================
const preloader = document.getElementById('preloader');

if (preloader) {
  setTimeout(() => {
    preloader.classList.add('hidden');

    // Убираем прелоадер из DOM после завершения анимации
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 200);
  }, 1000); // 3000 = 3 секунды
}

// ======================
// SCROLL TO TOP BUTTON (плавное появление)
// ======================
const scrollToTopBtn = document.getElementById('scrollToTop');

function toggleScrollToTopButton() {
  if (window.scrollY > 500) {        // можно изменить значение (чем больше — позже появляется)
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

// Показываем/скрываем кнопку при скролле
window.addEventListener('scroll', toggleScrollToTopButton);

// Плавный скролл вверх при нажатии
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  toggleScrollToTopButton();
});