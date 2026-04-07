
// ======================
// PRELOADER (3 секунды)
// ======================
const preloader = document.getElementById('preloader');

if (preloader) {
  setTimeout(() => {
    preloader.classList.add('hidden');

    // Убираем прелоадер из DOM после завершения анимации fade-out
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 3000);
}

// ======================
// BURGER MENU
// ======================
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu'); // если оставишь ul, то оставь

// Если используешь новый вариант без <ul>, то можно убрать navMenu или адаптировать
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    // Пока просто alert, потом сделаешь мобильное меню
    alert('Бургер нажат — здесь будет открываться мобильное меню');
    // navMenu.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  
  // Делаем карточки кликабельными
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.style.cursor = 'pointer'; // меняем курсор на руку
    
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });

  // Опционально: подсветка при наведении (улучшает UX)
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
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