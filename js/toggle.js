const toggle = document.querySelector('.toggle');
const menuItems = document.querySelector('.menu-items');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});