const btnNav = document.querySelector('.mobile-bar');
const projects = document.querySelector('.projects');
const works = document.querySelector('.works');
const contact = document.querySelector('.main-form');
const btnItem = document.querySelectorAll('.item-button');
const mobileNav = document.getElementById('nav');
const logo = document.getElementById('logo');
const barImg = document.getElementById('bar-img');
const body = document.querySelector('body');

/* Creating data store */
const prjData = [
  {
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_4.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_4.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    image: 'images/prj_3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#',
  },
];

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

btnItem.forEach((item) => {
  item.addEventListener('click', () => {
    barImg.classList.remove('bar-img');
    mobileNav.classList.add('hidden');
    logo.classList.remove('hidden');
  });
});

/* Projects */
for (let i = 0; i < prjData.length; i += 1) { /* Creating project cards using the data store */
  const elements = document.createElement('div');
  elements.classList.add('prj');
  elements.innerHTML = `
    <img src="${prjData[i].image}" alt="Image">
    <div class="prj-desc">
      <div class="prj-title">
        <h2>${prjData[i].name}</h2>
      </div>
      <div class="prj-description">
        <p>${prjData[i].description}</p>
      </div>
      <div class="prj-list">
        <ul class="prj-ul flex">
          <li>${prjData[i].technologies[0]}</li>
          <li>${prjData[i].technologies[1]}</li>
          <li>${prjData[i].technologies[2]}</li>
        </ul>
      </div><!--prj-list-->
    </div><!--prj-desc-->
    <div><button class="bt-prj bt-pu h-bt">See project</button></div>
  `;
  projects.appendChild(elements);

  const btnPopup = elements.querySelector('.bt-pu');
  btnPopup.addEventListener('click', () => { /* Creating pop-up click event per button while the cards are created to get the data store */
    const newElements = document.createElement('div');
    newElements.setAttribute('id', 'pop-up');
    newElements.classList.add('pop-up', 'container');
    newElements.innerHTML = `
    <div class="container">
      <div class="pu-title flex">
        <div>
          <h2>${prjData[i].name}</h2>
        </div>
        <div>
          <button class="bt-popup bt-puclose" ><img src="icons/xicon.png" alt="Image"></button>
        </div>
      </div><!--pu-title-->
      <div class="desc-list pu-list">
        <ul class="pu-ul flex">
          <li>${prjData[i].technologies[0]}</li>
          <li>${prjData[i].technologies[1]}</li>
          <li>${prjData[i].technologies[2]}</li>         
        </ul>
      </div><!--desc-list-->
      <div class="pu-main">
        <div class="desc-img">
          <img class="img-w" src="images/popup-img.png" alt="Image">
        </div>
        <div class="pu-desc">
          <div class="description pu-description">
            <p>${prjData[i].description}</p>
          </div>
          <div class="pu-buttons flex">
            <div class="desc-bt">
              <a href="${prjData[i].live}" class="bt-prj bt-pu flex">See live<img class="pu-img1" src="icons/pu-live.png" alt="Image"></a>
            </div><!--desc-bt-->
            <div class="desc-bt">
              <a href="${prjData[i].source}" class="bt-prj bt-pu flex">See source<img class="pu-img2" src="icons/pu-gh.png" alt="Image"></a>
            </div><!--desc-bt-->
          </div>
        </div>
      </div>
    </div>
    `;
    works.appendChild(newElements);

    const blur = document.createElement('div');
    blur.classList.add('blur');
    body.appendChild(blur);

    const btnClose = document.querySelector('.bt-puclose');
    const popUp = document.getElementById('pop-up');
    btnClose.addEventListener('click', () => { /* Creating remove event to the pop-up */
      popUp.remove();
      blur.remove();
    });
  });
}

const storedData = JSON.parse(localStorage.getItem('formData')) || {
  fullname: '',
  email: '',
  textarea: '',
};

const formData = {
  ...storedData,
};

function getText(val) {
  formData[val.target.id] = val.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');

fullname.value = formData.fullname;
email.value = formData.email;
textarea.value = formData.textarea;

fullname.addEventListener('input', getText);
email.addEventListener('input', getText);
textarea.addEventListener('input', getText);

function lcValidation(val) {
  const re = /^[a-z0-9@._-]+$/g;
  return re.test(val);
}

contact.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email } = formData;
  if (lcValidation(email)) {
    contact.submit();
    return;
  }
  const alert = document.createElement('p');
  alert.classList.add('alert');
  alert.textContent = 'Only use lowercase for the email';
  contact.appendChild(alert);
  setTimeout(() => alert.remove(), 2000);
});