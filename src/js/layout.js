// 햄버거 메뉴 열기
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');

openBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-[-360px]');
  sideMenu.classList.add('translate-x-0');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-0');
  sideMenu.classList.add('translate-x-[-360px]');
});

// 투뎁스 하나만 열리게
const menu = document.querySelectorAll('.menu');

menu.forEach((target) => {
  target.addEventListener('toggle', () => {
    if (target.open) {
      menu.forEach((detail) => {
        if (detail !== target) detail.removeAttribute('open');
      });
    }
  });
});
