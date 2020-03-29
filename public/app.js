// DOM
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// event handlers
darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
};

solarButton.onclick = () => {
    if (body.classList.contains('solar') ) {
        body.classList.remove('solar');
        // update value
        solarButton.style.cssText = `--bg-solar: var(--yellow)`;
    } else {
        body.classList.add('solar');
        solarButton.style.cssText = `--bg-solar: var(--white)`;

    }

};