const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

const mobile_links = document.querySelectorAll('.list__mobile__header__link a');

mobile_links.forEach(link => {
    link.addEventListener('click', () => {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
});

mobile_menu.addEventListener('click', function (event) {
    if (event.target === mobile_menu) {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }
});
