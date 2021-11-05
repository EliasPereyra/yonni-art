const toggle = document.querySelector(".toggle");
const sideMenu = document.querySelector(".side-menu");

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    sideMenu.classList.toggle('active')
})
