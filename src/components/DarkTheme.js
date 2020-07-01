// // dark theme
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
