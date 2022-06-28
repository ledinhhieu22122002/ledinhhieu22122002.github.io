

window.onscroll = () => { showHeader() };
const showHeader = () => {
  const header = document.querySelector('header');
  const slide = document.querySelector('.slide');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    slide.style.transform = 'translateY(0)';
    header.classList.add('sticky');
  } else {
    slide.style.transform = 'translateY(100px)';
    header.classList.remove('sticky');
  }
};

// MENU BUTTON
const menu = document.querySelector("ul");
const menuButton = document.querySelector(".bart-btn");
const overlay = document.querySelector("#overlay");

menuButton.onclick = () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
};

overlay.onclick = () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
};