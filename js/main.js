const btnShowMore = document.querySelector('.offices__show');
const hiddenOffices = document.querySelectorAll('.offices__office-hidden');

btnShowMore.addEventListener('click', function() {
    hiddenOffices.forEach(function(office) {
        office.classList.remove('offices__office-hidden');
    })
})