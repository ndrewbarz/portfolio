import { HeaderComponent } from '../components/Header';
import { MainContainerComponent } from '../components/MainContainer';
import { Chart } from '../components/Chart.js';
import { data } from '../components/data';
import { projectsList } from '../components/projects';
import { TextScramble } from '../components/TextPhrases';
import { Jokes } from '../components/ChuckJokes';
import { UI } from '../components/ChuckUi';
import Swal from 'sweetalert2';

import { validateName, validateEmail } from '../components/isValid';

// import '../css/style.css';
import '../scss/style.scss';

// Preview
const header = new HeaderComponent('header');

// Main Container
const main = new MainContainerComponent('main');

// Chart

// Projects
projectsList(data);

// ——————————————————————————————————————————————————
// Text phrases
// ——————————————————————————————————————————————————

const phrases = [
  'The only way to do great work',
  'is to love what you do',
  'If you haven’t found it yet',
  'keep looking...',
];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};
next();

// Form Section
const toJokeButton = document.getElementById('toJoke'),
  toFormButton = document.getElementById('toForm'),
  container = document.getElementById('contact-box');

toJokeButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

toFormButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Chuck Norris Jokes
const jokes = new Jokes();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getJokes);
const getRandomJoke = document
  .querySelector('.get-jokes')
  .addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();
  jokes
    .getJoke()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

// Date
const year = new Date();
const date = document.querySelector('.date');
date.textContent = year.getFullYear();

// dark theme
const themeSwitch = document.getElementById('switch');
if (themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function (e) {
    resetTheme(); // update color theme
  });

  function initTheme() {
    const darkThemeSelected =
      localStorage.getItem('themeSwitch') !== null &&
      localStorage.getItem('themeSwitch') === 'dark';
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.classList.add('dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('themeSwitch'); // reset theme selection
    }
  }
}

// nav shadow
window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('.nav');
  window.scrollY >= 1
    ? nav.classList.add('scroll')
    : nav.classList.remove('scroll');
});

// smooth scroll

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

// Toggle nav
const menuBtn = document.querySelector('.menu-btn'),
  navBox = document.querySelector('.nav-box'),
  navItems = document.querySelector('.nav-items'),
  navItem = document.querySelectorAll('.nav-item'),
  nav = document.querySelector('.nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('active-menu-btn');
    navBox.classList.add('show-menu');
    showMenu = true;
  } else {
    menuBtn.classList.remove('active-menu-btn');
    navBox.classList.remove('show-menu');
    showMenu = false;
  }
}

// hide & toggle nav buttons (cv & switcher)
let cv = document.querySelector('.cv'),
  switchBox = document.querySelector('.switch'),
  mq = window.matchMedia('(max-width: 500px)');

function test(e) {
  if (e.matches) {
    navItems.append(cv, switchBox);
  } else {
    nav.append(cv, switchBox);
  }
}

mq.addListener(test);

// accordion
const skillItem = document.querySelectorAll('.skill');

function toggleAccordion(e) {
  this.classList.toggle('active-skill');
  this.querySelector('.skill-text').classList.toggle('active-skill');
}

skillItem.forEach((item) => item.addEventListener('click', toggleAccordion));

// Submit forms via AJAX
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('.contact-name');
const emailInput = document.querySelector('.contact-email');
const [, ...elms] = form.elements;
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName(nameInput.value) && validateEmail(emailInput.value)) {
      processForm(form);
    }
  });
}

const processForm = (form) => {
  const data = new FormData(form);
  data.append('form-name', 'contact');
  fetch('/', {
    method: 'POST',
    body: data,
  })
    .then(() => {
      let name = data.getAll('name').join('');
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Thank You, ${name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      elms.forEach((el) => {
        el.value = '';
      });
    })
    .catch((error) => {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500,
      });
    });
};
