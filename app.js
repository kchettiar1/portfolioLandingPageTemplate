menuBtn = document.querySelector('.fas');
navItems = document.querySelector('.nav-items');

function menuToggle() {
  menuBtn.classList.toggle('fa-bars')
  menuBtn.classList.toggle('fa-times')
  navItems.classList.toggle('hidden')
}

menuBtn.addEventListener('click', menuToggle);
