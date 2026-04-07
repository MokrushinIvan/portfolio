

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
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

