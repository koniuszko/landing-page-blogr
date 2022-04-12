const menu = document.querySelector('.hamburger');
const main_menu = document.querySelector('.main_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    main_menu.classList.toggle('show')
});