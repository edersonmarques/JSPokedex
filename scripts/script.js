const body = document.body;
const theme_button = document.querySelector('#theme-button');
const theme_image = document.querySelector('.button-image');
let theme = 'light';

theme_button.addEventListener('click', () => {
    if (theme === 'light') {
        theme = 'dark';
        theme_image.src = './images/sun.png';
    } else if (theme === 'dark') {
        theme = 'light';
        theme_image.src = './images/moon.png';
    } else {
        console.error('Algo está errado');
    }
    body.className = theme;
});