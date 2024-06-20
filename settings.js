document.addEventListener("DOMContentLoaded", () => {
  // Theme Switch - Radio buttons
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.documentElement.setAttribute('data-theme', radio.value);
    });
  });

  // Theme Switch - Checkbox/Toggle
  const checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-theme', 'theme-dark');
      document.querySelector('input[value="theme-dark"]').checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'theme-light');
      document.querySelector('input[value="theme-light"]').checked = true;
    }
  });

  // Theme Switch - Button
  const themeSwitchButton = document.getElementById('theme-switch');
  themeSwitchButton.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'theme-dark') {
      document.documentElement.setAttribute('data-theme', 'theme-light');
      document.querySelector('input[value="theme-light"]').checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'theme-dark');
      document.querySelector('input[value="theme-dark"]').checked = true;
    }
  });
});
