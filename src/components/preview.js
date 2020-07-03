import { showLoader } from './loader';
import { showMainContainer, hideMainContainer } from './mainContainer';

const headerContainer = document.getElementById('header');
const btnProfile = document.querySelector('.btn-profile');
const exitBtn = document.getElementById('back-btn');

export const hidePreview = () => {
  btnProfile.addEventListener('click', () => {
    localStorage.setItem('visited', JSON.stringify(true));
    headerContainer.classList.add('hide');
    showLoader();
    setTimeout(showMainContainer, 1500);
  });

  if (localStorage.getItem('visited')) {
    headerContainer.classList.add('hide');
    showMainContainer();
  }
};

export const showPreview = () => {
  exitBtn.addEventListener('click', () => {
    localStorage.removeItem('visited');
    hideMainContainer();
    headerContainer.classList.remove('hide');
  });
};
