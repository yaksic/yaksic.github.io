//  Window scroll sticky class add
function windowScroll() {
  const navbar = document.getElementById('navbar');
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add('nav-sticky');
  } else {
    navbar.classList.remove('nav-sticky');
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
});

// Collapse Menu
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarCollapse');
let bsCollapse = '';
window.addEventListener('load', function () {
  window.dispatchEvent(new Event('resize'));
});
window.addEventListener('resize', function () {
  var windowSize = document.documentElement.clientWidth;
  bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  if (windowSize < 980) {
    navLinks.forEach((l) => {
      l.addEventListener('click', () => {
        toggleMenu();
      });
    });
  } else {
    toggleMenu();
  }
});

function toggleMenu() {
  var windowSize = document.documentElement.clientWidth;
  if (windowSize < 980) {
    bsCollapse.toggle();
  } else {
    bsCollapse = '';
  }
}
