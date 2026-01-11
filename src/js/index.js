// 메인 슬라이드
const swiper = new Swiper('.main-slide', {
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

// 시스템 슬라이드
const systemSwiper = new Swiper('.system-slide', {
  // autoplay: {
  //   delay: 5000,
  // },

  navigation: {
    nextEl: '.system-next',
    prevEl: '.system-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
    },

    1439: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 1,
    },
  },
});

// 장비 슬라이드
const equipmentSwiper = new Swiper('.slide-equipment', {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 1000,
  },
});

// tap
const buttonWrap = document.querySelector('.button-wrap');
const panels = document.querySelectorAll('.img-wrap .tab-panel');

buttonWrap.addEventListener('click', (e) => {
  const btn = e.target.closest('.tap-btn');
  if (!btn) return;

  // 버튼 active
  buttonWrap.querySelector('.tap-btn.active')?.classList.remove('active');
  btn.classList.add('active');

  // 패널 active
  const tab = btn.dataset.tab;
  panels.forEach((p) => {
    p.classList.toggle('active', p.dataset.panel === tab);
  });
});
