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
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.system-next',
    prevEl: '.system-prev',
  },
});
