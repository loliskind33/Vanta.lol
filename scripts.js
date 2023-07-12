function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
menu.addEventListener('mouseleave', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
