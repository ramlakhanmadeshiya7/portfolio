const themeBtn = document.querySelector('.theme_btn');
const body = document.body;
const favicon = document.getElementById('favicon');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    // Change favicon based on theme
    if (body.classList.contains('light')) {
        favicon.href = 'images/light/favicon_light.ico';
    } else {
        favicon.href = 'images/dark/favicon_dark.ico';
    }
});
