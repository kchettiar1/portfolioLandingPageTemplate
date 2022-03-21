// Menu-toggle
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;


menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;

  }
  console.log('menuBtn',menuBtn);
  console.log('menuOpen',menuOpen);
})

// Nav Menu Animation
navItems = document.querySelector('.nav-items');
console.log(navItems);
let navOpen = false;

menuBtn.addEventListener('click', () => {
  if (!navOpen) {
    navItems.classList.remove('collapse');
    navItems.classList.add('expand');
    navOpen = true;
  } else {
    navItems.classList.remove('expand');
    navItems.classList.add('collapse');
    navOpen = false;
  }
})