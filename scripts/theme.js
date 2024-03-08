const themeBtn = document.querySelector('.theme_btn');
        const body = document.body;
        const favicon = document.getElementById('favicon');
        const themeIcon = document.getElementById('theme_icon');

        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light');

            if (body.classList.contains('light')) {
                favicon.href = 'images/light/favicon_light.ico';
                themeIcon.src = 'images/light/theme_light.svg';
            } else {
                favicon.href = 'images/dark/favicon_dark.ico';
                themeIcon.src = 'images/dark/theme_dark.svg';
            }
            // function light_theme()
        });