const mainContainer = document.getElementById('main');

export const showMainContainer = () => {
  loader.classList.add('hide');
  mainContainer.classList.remove('hide');
};

export const hideMainContainer = () => {
  mainContainer.classList.add('hide');
};
