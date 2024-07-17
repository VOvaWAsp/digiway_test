Медмчний сайт.
Опис сайту:
Сайт створений, щоб допомогти жінкам підвищити здоров'я, записатися на прийом до лікаря та купити ліки. Він має підтримку для мобільних, планшетних та десктопних пристроїв (375px, 768px, 1440px). Для мобільних пристроїв є зручне бургер-меню, а для планшетів та комп'ютерів - навігаційне меню.

<!-- 
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
дістаємо файли з хтмл

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

добавляємо подію клік щоб елемент був функціонірованим і додаєм для нього клас is-active по якому і відкривається бургер меню

const mobile_links = document.querySelectorAll('.list__mobile__header__link a');

дістаєм пару мобільних посилань з хтмл

mobile_links.forEach(link => {
    і перебираєм кожен елемент
    link.addEventListener('click', () => {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        коли була подія клік по лінці то клас удаляється і бургер меню закривається
    });
});

mobile_menu.addEventListener('click', function (event) {
    добавляєм подію клік для меню
    if (event.target === mobile_menu) {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        коли користувач натиснув по фонітменю то меню закривається
    }
}); 
-->

також пристуні випадаючий список 

<!-- 
document.addEventListener('DOMContentLoaded', function () {
    елемнт загружається тожі коди хтмл побудований
    const dropdowns = document.querySelectorAll('.dropdown');
    дістаєм всі елементи дропдаун

    dropdowns.forEach(dropdown => {
        та перебираєм кожен елемент
        const header = dropdown.querySelector('.link__header.selected');
        дістаєм з перербаного дропдауна елемент link__header.selected


    header.addEventListener('click', function() {
        event.preventDefault();
        dropdown.classList.toggle('active')
        добавдяєм елемент клік для відкриття дропдауна використовуючи клас тугл
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            перевірка чи було натиснуто за фон дропдауна якщо так то клас удаляється і дропдаун закривається
            dropdown.classList.remove('active')
        }
        })
    })
}) 
-->

також пристня модальне вікно 

<!-- 
const openBtn = document.querySelectorAll('.btn__promotionalPackages[data-package]');
дістаємо кнопку відкриття модалки з обовязковим атрибутом data-packege з унікальним індифікатиром
const closeBtn = document.querySelectorAll('.closeModal');
дістаємо всі кнопки закриття модалки
const modals = document.querySelectorAll('.modal');
і самі модалки 

openBtn.forEach(button => {
    перебираємо елементи
    button.addEventListener('click', function() {
        const packageId = this.getAttribute('data-package')
        додаєм поді. клік і дістаєм атрибут datapackage
        const modal = document.getElementById('modal' + packageId)
        дістається модалка тілька та яка число спаівпадаєм з datapackage
        modal.classList.add('open');
        відкриваємо модалку
    })
})

closeBtn.forEach(button => {
    перебираємо елементи
    button.addEventListener('click', function() {
        const modal = this.closest('.modal')
        modal.classList.remove('open');
        добавляємо подію клік і дістаєм елмент найвищий з класом modal 
        і удаляємо тим самим закриваєм модалку
    })
})

modals.forEach(modal => {
    перебераємо елементи
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            перевіряємо куда був здійснений клік
            modal.classList.remove('open')
            якщо клік був за межами модалки закриваємо її
        }
    })
}) 
-->

також присутній свайпер 

<!-- 
document.addEventListener('DOMContentLoaded', function() {
    загружається тоді коли хтмл побудований
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const sliders = document.querySelectorAll('.swiper-slide');
    const nextBtn = document.querySelector('.swiper-btn-next');
    const prevBtn = document.querySelector('.swiper-btn-prev');
    дістаємо елементи з хтмл
    let slideIndex = 0;
    і додаєм зміну slideIndex для подальних маніпуляцій

    function showSlide(index) {
        swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
    };
    створюєм функцію showModal яка відображає поточні картинки і робим перехід

    function nextSlide() {
        slideIndex = (slideIndex + 1) % sliders.length;
        showSlide(slideIndex);
    };

    створуєм функцію nextSlide і записуєм в глобальну зміну slideIndex матиматичний вираз для перемикання вперед і записуємо результат в showModal

    function prevSlide() {
        slideIndex = (slideIndex - 1 + sliders.length) % sliders.length;
        showSlide(slideIndex);
    };

    створуєм функцію prevSlide і записуєм в глобальну зміну slideIndex матиматичний вираз для перемикання назад і записуємо результат в showModal

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    добвілємо ці фунцію в кноки і подію клік

    showSlide(slideIndex);
    відображення поточної картинки
}) 
-->

Інші особливості сайту:
Сторінка блогу з цікавими статтями.
Форма та таблиця з цінами.
Використані технології:
HTML, CSS, JavaScript

Висновок:
Сайт побудований для допомоги жінкам у покращенні здоров'я.

посилання на живу сторінку
https://digiway-test.vercel.app/