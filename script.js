// Update active nav link while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const menuButton = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach((section) => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'));

      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  // Sticky navbar
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close mobile menu on scroll
  menuButton.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Mobile menu toggle
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});
