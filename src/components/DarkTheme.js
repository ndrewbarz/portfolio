// dark theme

const checkbox = document.querySelector('input[name=mode]');
if (checkbox) {
  initTheme();

  checkbox.addEventListener('change', function (e) {
    resetTheme(); // update color theme
  });

  function initTheme() {
    const darkThemeSelected =
      localStorage.getItem('themeSwitch') !== null &&
      localStorage.getItem('themeSwitch') === 'dark';
    // update checkbox
    checkbox.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.setAttribute('data-theme', 'light');
  }

  function resetTheme() {
    if (checkbox.checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.removeItem('themeSwitch');
    }
  }
}
