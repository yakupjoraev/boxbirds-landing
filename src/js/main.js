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

const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion() {
  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
    }
  }

  this.classList.toggle('active'); // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}


accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));

var swiper = new Swiper(".reviews__slider-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  // centeredSlides: true,
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
  pagination: {
    el: '.reviews__slider-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 32,
    }
  }
});

const buttons = document.querySelectorAll('[data-more-btn]');

buttons.forEach(button => {
  const moreText = button.parentElement.querySelector('[data-more-text]');

  button.addEventListener('click', function () {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      button.innerText = 'Скрыть';
      button.classList.add('hide');
      setTimeout(() => button.style.display = 'none', 300);
    } else {
      moreText.style.display = 'none';
      button.innerText = 'Читать целиком';
      button.style.display = 'inline-block';
      button.classList.remove('hide');
    }
  });
});

// function departureSelection() {
//   let departures = document.querySelectorAll('[data-departure]');
//   let departuresList = document.querySelectorAll('[data-departure-list]');
//   let departuresItems = document.querySelectorAll('[data-departure-item]');

//   departures.forEach(departure => {
//     departure.addEventListener('click', (event) => {
//       event.stopPropagation();
//       departure.classList.toggle('active');
//     });
//   });

//   document.addEventListener('click', (event) => {
//     departures.forEach(departure => {
//       if (!departure.contains(event.target)) {
//         departure.classList.remove('active');
//       }
//     });
//   });
// }

// departureSelection();

function modal() {
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('[data-modal]');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalId;
      const modal = document.getElementById(modalId);
      modal.classList.add('show');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('show');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
    }
  });

}

modal();



function passwordSee() {
  const passwordGroups = document.querySelectorAll('.form-group input[type="password"]');

  passwordGroups.forEach(passwordGroup => {
    const passwordInput = passwordGroup;
    const eyeButton = passwordGroup.parentNode.querySelector('.form-eye');
    const eyeImage = eyeButton.querySelector('img');

    eyeButton.addEventListener('click', function () {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeImage.src = './img/eye-open.svg';
      } else {
        passwordInput.type = 'password';
        eyeImage.src = './img/eye-close.svg';
      }
    });
  });


}

passwordSee();

function checked() {
  const signUpForm = document.querySelector('.signup-form')
  const checkbox = signUpForm.querySelector('.modal__form-checkbox');
  const button = signUpForm.querySelector('.form-btn');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  });
}

checked();

//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};



/* Локализация datepicker */
$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Предыдущий',
  nextText: 'Следующий',
  currentText: 'Сегодня',
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function () {
  $("#datepicker").datepicker({
    showOn: "button",
    buttonImage: "./img/datapicker.svg",
    buttonImageOnly: true,
    buttonText: "Выбрать дату"
  });

  $("#datepicker-2").datepicker({
    showOn: "button",
    buttonImage: "./img/datapicker.svg",
    buttonImageOnly: true,
    buttonText: "Выбрать дату"
  });
});

$("#sending").selectmenu();
$("#sending-2").selectmenu();