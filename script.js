const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const cvContainer = document.querySelector('.cv-container');

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  cvContainer.classList.toggle('dark-theme');
  themeToggle.classList.toggle('dark-theme');
});