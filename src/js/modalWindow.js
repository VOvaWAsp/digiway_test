const openBtn = document.querySelectorAll('.btn__promotionalPackages[data-package]');
const closeBtn = document.querySelectorAll('.closeModal');
const modals = document.querySelectorAll('.modal');

openBtn.forEach(button => {
    button.addEventListener('click', function() {
        const packageId = this.getAttribute('data-package')
        const modal = document.getElementById('modal' + packageId)
        modal.classList.add('open');
    })
})

closeBtn.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal')
        modal.classList.remove('open');
    })
})

modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('open')
        }
    })
})