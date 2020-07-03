const exitBtn = document.getElementById('back-btn');

exitBtn.addEventListener('click', () => {
  localStorage.removeItem('visited');
  // document.location.reload(true);
});
