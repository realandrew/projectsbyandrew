const themeBtn = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme = storedTheme || 'system';

window.addEventListener('load', (event) => {
  themeBtn.innerText = theme.charAt(0).toUpperCase() + theme.slice(1);

  themeBtn.addEventListener("click", function() {
    switchTheme();
    applyTheme();
    
    themeBtn.innerText = theme.charAt(0).toUpperCase() + theme.slice(1);
    localStorage.setItem("theme", theme);
  });
});

function switchTheme()
{
  switch (theme) {
    case 'light':
      theme = 'dark';
      break;
    default:
    case 'dark':
      theme = 'system';
      break;
    case 'system':
      theme = 'light';
      break;
  }
}

function applyTheme()
{
  switch (theme) {
    case 'light':
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
      break;
    case 'dark':
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
      break;
    default:
    case 'system':
      if (userPrefersDark) {
        document.documentElement.classList.remove("light-theme");
        document.documentElement.classList.add("dark-theme");
      } else {
        document.documentElement.classList.remove("dark-theme");
        document.documentElement.classList.add("light-theme");
      }
      break;
  }
}