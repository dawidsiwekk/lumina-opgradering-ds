 document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
    });
  });