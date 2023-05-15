const btnNav = document.querySelector('.bar-button');
const a = document.getElementById('nav');

btnNav.addEventListener('click', function(e){
    a.classList.remove("hidden");
})