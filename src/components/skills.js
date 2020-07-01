const items = document.querySelectorAll('.accordion-list-item');

export function toggleAccordion() {
  const listItem = this;

  items.forEach((item) => {
    if (listItem === item) {
      listItem.classList.toggle('open');
      return;
    }

    item.classList.remove('open');
  });
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
