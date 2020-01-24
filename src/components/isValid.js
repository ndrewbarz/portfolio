// const emailForm = document.querySelector('.contact-form')

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

export {validateEmail, validateName}