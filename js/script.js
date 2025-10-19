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

// Hero section animation
const heroCardsContainer = document.getElementById('hero-container');
const firstObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.add('show');
    })
})

firstObserver.observe(heroCardsContainer);

// About Image animation section
const aboutImage = document.getElementById('about-image');
const secondObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
}, {threshold: 0.1})

secondObserver.observe(aboutImage);

// Services image animation section
const servicesImage= document.getElementById('services-image');
const thirdObserver= new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})

thirdObserver.observe(servicesImage);