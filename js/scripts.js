const btnNav = document.querySelector('.mobile-bar');
const btnItem = document.querySelectorAll('.item-button');
const mobileNav = document.getElementById('nav');
const logo = document.getElementById('logo');
const barImg = document.getElementById('bar-img');

btnNav.addEventListener('click', () => {
  if (mobileNav.classList.contains('hidden')) {
    barImg.classList.add('bar-img');
    mobileNav.classList.remove('hidden');
    logo.classList.add('hidden');
  } else {
    barImg.classList.remove('bar-img');
    mobileNav.classList.add('hidden');
    logo.classList.remove('hidden');
  }
});

btnItem.forEach(item => {
  item.addEventListener('click', () => {
    barImg.classList.remove('bar-img');
    mobileNav.classList.add('hidden');
    logo.classList.remove('hidden');
  });
});