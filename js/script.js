const mobButton = document.getElementById('menuButton');
const clostMobMenu = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu'); 
const mobOverlay = document.getElementById('mob-overlay');

mobButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobOverlay.classList.toggle('show');
});

clostMobMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobOverlay.classList.toggle('show');
});