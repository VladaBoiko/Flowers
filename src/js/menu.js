// import '../js/auth/validate';
const navbarMenu = document.querySelector('#menu');
const burgerMenu = document.querySelector('#burger');
const headerMenu = document.querySelector('#header');

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });
}

// Close Navbar Menu on Click Links
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('is-active');
    navbarMenu.classList.remove('is-active');
  });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    if (navbarMenu.classList.contains('is-active')) {
      navbarMenu.classList.remove('is-active');
    }
  }
});

