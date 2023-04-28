// Custom Scripts
// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('[data-burger]')
  const menu = document.querySelector('[data-menu-mobile]')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('[data-menu-item]')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();

function languageSelection() {
  let languages = document.querySelectorAll('[data-languages]');
  let languagesItems = document.querySelectorAll('[data-languages-item]');

  languages.forEach(language => {
    language.addEventListener('click', (event) => {
      event.stopPropagation();
      language.classList.toggle('active');
    });
  });

  document.addEventListener('click', (event) => {
    languages.forEach(language => {
      if (!language.contains(event.target)) {
        language.classList.remove('active');
      }
    });
  });
}

languageSelection();

