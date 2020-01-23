import { HeaderComponent } from '../components/Header';
import { MainContainerComponent } from '../components/MainContainer';
// import { Chart } from '../components/Chart.js';
import { ProjectFactory } from '../components/Projects';
import { TextScramble } from '../components/TextPhrases';
import { Jokes } from '../components/ChuckJokes';
import { UI } from '../components/ChuckUi';
import Swal from 'sweetalert2';

// import '../css/style.css';
import '../scss/style.scss';


// Preview
const header = new HeaderComponent('header');

// Main Container
const main = new MainContainerComponent('main');

// Chart

// Projects Factory
const projFactory = new ProjectFactory();
const projects = [
	projFactory.create('Chuck Norris', 'Простое приложение которое использует стороннее API для отображения шуток Чака Норриса, взаимодействует с API по средством асинхронных функций и fetch API', 'http://google.com', 'http://youtube.com', 'js', 'html'),
	projFactory.create('Chuck Norris', 'API CHUCK ipsum dolor sit amet consectetur adipisicing elit. Quipsum dolor sit amet consectetur adipisicing elit. ae, et.', 'http://google.com', 'http://youtube.com', 'js', 'html'),
	projFactory.create('Chuck Norris', 'API CHUCK ipsum dolor sit amet consectetur adipisicing elit. Quipsum dolor sit amet consectetur adipisicing elit. ae, et.', 'http://google.com', 'http://youtube.com', 'js', 'html'),
	projFactory.create('GitHub Finder', 'GitHub ipsum dolor sit amet consectetur adipisicing elit. Quae, et.', 'http://vk.com', 'http://facebook.com', 'js', 'html', 'css')
];

projects.forEach(p => {
	return p;
});


// ——————————————————————————————————————————————————
// Text phrases
// ——————————————————————————————————————————————————

const phrases = [
  'trainee/intern front-end developer',
  'sooner or later',
  'you\'re going to realize',
  'just as I did',
  'that there\'s a difference',
  'between knowing the path',
  'and walking the path'
];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  })
  counter = (counter + 1) % phrases.length;
}
next();

// Form Section
const signUpButton = document.getElementById('signUp'),
      signInButton = document.getElementById('signIn'),
      container = document.getElementById('contact-box');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Chuck Norris Jokes
const jokes = new Jokes();
const ui = new UI();

document.addEventListener("DOMContentLoaded", getJokes);
const getRandomJoke = document
  .querySelector(".get-jokes")
  .addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
	jokes.getJoke()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}

// Date

const year = new Date();
const date = document.querySelector(".date");
date.textContent = year.getFullYear();


// dark theme

const themeSwitch = document.getElementById("switch");
if (themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener("change", function(e) {
    resetTheme(); // update color theme
  });

  function initTheme() {
    const darkThemeSelected =
      localStorage.getItem("themeSwitch") !== null &&
      localStorage.getItem("themeSwitch") === "dark";
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.classList.add("dark");
      localStorage.setItem("themeSwitch", "dark"); // save theme selection
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("themeSwitch"); // reset theme selection
    }
  }
}

// nav shadow
window.addEventListener("scroll", e => {
  const nav = document.querySelector(".nav");
  window.scrollY >= 1
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");
});

// smooth scroll

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

// Toggle nav
const menuBtn = document.querySelector(".menu-btn"),
      navBox = document.querySelector(".nav-box"),
      navItems = document.querySelector(".nav-items"),
      navItem = document.querySelectorAll(".nav-item"),
      nav = document.querySelector(".nav");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("active-menu-btn");
    navBox.classList.add("show-menu");
    // navItems.classList.add('show-menu')
    // navItem.forEach(item => {
    //   item.classList.add('show-menu')
    // });
    showMenu = true;
  } else {
    menuBtn.classList.remove("active-menu-btn");
    navBox.classList.remove("show-menu");
    // navItems.classList.remove('show-menu')
    // navItem.forEach(item => {
    //   item.classList.remove('show-menu')
    // });
    showMenu = false;
  }
}


// hide & toggle nav buttons (cv & switcher)
let cv = document.querySelector(".cv"),
    switchBox = document.querySelector(".switch"),
    mq = window.matchMedia("(max-width: 500px)");

function test(e) {
  if (e.matches) {
    navItems.append(cv, switchBox);
  } else {
    nav.append(cv, switchBox);
  }
}

mq.addListener(test);


// accordion
const skillItem = document.querySelectorAll(".skill");

function toggleAccordion(e){
  this.classList.toggle('active-skill');
  this.querySelector('.skill-text').classList.toggle('active-skill');
}

skillItem.forEach(item => item.addEventListener('click', toggleAccordion));


// Submit forms via AJAX

const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'contact');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    let name = data.getAll('name').join('')
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `Thank You, ${name}`,
      showConfirmButton: false,
      timer: 1500
    })
  })
  .catch(error => {
    console.log(error)
    Swal.fire({
      position: "top",
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      showConfirmButton: false,
      timer: 1500
    });
  })
}

// form validation
const contactForm = document.querySelector('.contact-form')
const [, name, email] = contactForm.elements;

contactForm.addEventListener('submit', e => {
  e.preventDefault();
    if (validateName(name.value) && validateEmail(email.value)) {
      processForm(contactForm);
    } else {
      return false

    }
})


function validateName(value) {
  const name = document.querySelector('.contact-name')
  const re = /^[a-zA-Zа-яА-Я]{3,15}$/;
  !re.test(value) ? name.classList.add('input-err') : name.classList.remove('input-err')

  return re.test(value)
}
function validateEmail(value) {
  const email = document.querySelector('.contact-email')
  const re = /^[0-9a-zA-Z-\_\.]+\@[0-9a-z-A-Z-\.]{2,}\.([a-zA-Z]{2,5})$/;
  !re.test(value) ? email.classList.add('input-err') : email.classList.remove('input-err')

  return re.test(value)
}
