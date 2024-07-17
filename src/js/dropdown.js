document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.link__header.selected');


    header.addEventListener('click', function() {
        event.preventDefault();
        dropdown.classList.toggle('active')
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active')
        }
        })
    })
})
