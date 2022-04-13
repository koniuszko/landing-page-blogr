const menu = document.querySelector('.hamburger');
const main_menu = document.querySelector('.main_menu')
const product_arrow = document.querySelector('.product_arrow')
const open_product = document.querySelector('.open_product')
const product_menu = document.querySelector('.product_menu')

const company_arrow = document.querySelector('.company_arrow')
const open_company = document.querySelector('.open_company')
const company_menu = document.querySelector('.company_menu')

const connect_arrow = document.querySelector('.connect_arrow')
const open_connect = document.querySelector('.open_connect')
const connect_menu = document.querySelector('.connect_menu')


menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    main_menu.classList.toggle('show')
});

open_product.addEventListener('click', () => {
    product_menu.classList.toggle('menu_open');
    product_arrow.classList.toggle('rotate')
})

open_company.addEventListener('click', () => {
    company_menu.classList.toggle('menu_open');
    company_arrow.classList.toggle('rotate')
})

open_connect.addEventListener('click', () => {
    connect_menu.classList.toggle('menu_open');
    connect_arrow.classList.toggle('rotate')
})