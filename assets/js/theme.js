const STORAGE_KEY = "theme";
const THEME_ATTR  = "data-theme";
const QUERY_KEY   = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

document.addEventListener("DOMContentLoaded", function() {
  initTheme();
});

function initTheme() {
  let theme = getTheme();
  if (!theme) {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
      theme = themes.DARK;
    } else {
      theme = themes.LIGHT;
    }
  }
  setTheme(theme);

  // Watch for system theme changes
  window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
    const newTheme = e.matches ? themes.DARK : themes.LIGHT;
    setTheme(newTheme);
  });
}

function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);

  const particleColor = value === themes.DARK ? "#ffffff" : "#000000";
  if (typeof particlesJS !== 'undefined') {
    initParticles(particleColor);
  }
}
