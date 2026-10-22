const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('hamburger-list-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
