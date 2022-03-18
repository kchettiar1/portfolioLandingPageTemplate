// Menu Button and Animation
menuBtn = document.querySelector('.fas');
let menuOpen = false;

addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.remove('fa-bars')
    menuBtn.classList.add('fa-times')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('fa-times')
    menuBtn.classList.add('fa-bars')
    menuOpen = false;
  }
})

navItems = document.querySelector('.nav-items');
let navOpen = false;

addEventListener('click', () => {
  if (!navOpen) {
    navItems.classList.remove('collapse')
    navItems.classList.add('expand')
    navOpen = true;
  } else {
    navItems.classList.remove('expand')
    navItems.classList.add('collapse')
    navOpen = false;
  }
})