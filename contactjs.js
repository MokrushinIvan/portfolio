document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert('Спасибо! Ваше сообщение отправлено. (Демонстрация)');
        form.reset();
      } else {
        alert('Пожалуйста, заполните все обязательные поля.');
      }
    });
  }

  // Можно добавить анимацию появления при скролле или другие интерактивные элементы
});

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