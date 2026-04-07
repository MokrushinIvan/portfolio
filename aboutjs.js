document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const hardList = document.getElementById('hard-skills');
  const softList = document.getElementById('soft-skills');
  const switchContainer = document.querySelector('.skills-switch');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Убираем active у всех кнопок
      tabs.forEach(t => t.classList.remove('active'));

      // Добавляем active нажатой кнопке
      tab.classList.add('active');

      // Плавное переключение списков
      if (tab.dataset.tab === 'hard') {
        hardList.classList.remove('hidden');
        softList.classList.add('hidden');
      } else {
        hardList.classList.add('hidden');
        softList.classList.remove('hidden');
      }
    });
  });
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