// STORAGE KEYS
const THEME = 'theme';
const IS_SOLAR = 'isSolarTheme';

// DOM
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// save theme in local cache
const theme = localStorage.getItem(THEME);
const isSolar = localStorage.getItem(IS_SOLAR);

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar'); 
}

// event handlers
darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem(THEME, 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem(THEME, 'light');
};

solarButton.onclick = () => {
    if (body.classList.contains('solar') ) {
        // revert
        body.classList.remove('solar');
        solarButton.style.cssText = `--bg-solar: var(--yellow)`;
        localStorage.removeItem(IS_SOLAR);
    } else {
        // set
        body.classList.add('solar');
        solarButton.style.cssText = `--bg-solar: var(--white)`;
        localStorage.setItem(IS_SOLAR, true);
    }
};