document.addEventListener('DOMContentLoaded', () => {
  const btnMobile = document.querySelector('.btn-mobile');
  const btnClose = document.querySelector('.btn_menu_close');
  const nav = document.querySelector('.main-navigation');

  const closeMenu = () => {
    nav.classList.remove('is-open');
    btnMobile.classList.remove('is-open');
  };

  btnMobile.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    btnMobile.classList.toggle('is-open');
  });

  btnClose.addEventListener('click', closeMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 777) {
      closeMenu();
    }
  });
});



function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBookTableModal');
  const modal = document.getElementById('modal-book-table');
  const closeBtn = modal.querySelector('.close-button');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // или 'block' — зависит от твоей CSS-разметки
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs__link');
  const sections = document.querySelectorAll('.tabs-content__section');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      // Убираем active у всех табов
      tabs.forEach(t => t.parentElement.classList.remove('active'));
      // Убираем active у всех секций
      sections.forEach(s => s.classList.remove('active'));

      // Добавляем active к выбранному табу
      this.parentElement.classList.add('active');

      // Получаем id секции из href ссылки (например "#sweets" => "sweets")
      const targetId = this.getAttribute('href').substring(1);
      // Активируем нужную секцию
      document.getElementById(targetId).classList.add('active');
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".article-slider__slide");
  const prevBtn = document.querySelector(".article-slider__btn_prev");
  const nextBtn = document.querySelector(".article-slider__btn_next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  showSlide(currentSlide); // Показываем первый слайд

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});




document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы
  const bookBtn = document.getElementById('open-book-modal');
  const videoBtn = document.getElementById('open-video-modal');
  const closeBtn = document.getElementById('close-modal');
  const closeThankyouBtn = document.getElementById('close-thankyou');
  const overlay = document.getElementById('modal-overlay');
  const bookModal = document.getElementById('book-modal');
  const videoModal = document.getElementById('video-modal');
  const thankyouModal = document.getElementById('thankyou-modal');
  const form = document.getElementById('booking-form');

  const iframe =
  videoModal.querySelector('iframe');
  const originalVideoSrc=
  "https://www.youtube.com/embed/epMDcqKoQys?si=rv9EWi8fvhKyiQGZ";


  // Функция открытия модального окна
  function openModal(modal) {
  //Если это модалка с видео — вернуть видео обратно
  if (modal === videoModal) {
    iframe.setAttribute('src', originalVideoSrc);
  }

  overlay.classList.add('active');
  modal.classList.add('active');
}

  // Универсальная функция закрытия всех модалок
  function closeAllModals() {
    overlay.classList.remove('active');
    bookModal.classList.remove('active');
    videoModal.classList.remove('active');
    thankyouModal.classList.remove('active');
  
    if (iframe){
      iframe.setAttribute('src', '');
    }
  }  

  // Открытие модалок по кнопкам
  bookBtn.addEventListener('click', () => openModal(bookModal));
  videoBtn.addEventListener('click', () => openModal(videoModal));

  // Закрытие модалок по кнопкам закрытия
  closeBtn.addEventListener('click', closeAllModals);
  closeThankyouBtn.addEventListener('click', closeAllModals);

  // Отправка формы бронирования
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    closeAllModals();
    setTimeout(() => {
      openModal(thankyouModal);
    }, 300);
  });

  // Закрытие при клике вне модального окна (на оверлей)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeAllModals();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});