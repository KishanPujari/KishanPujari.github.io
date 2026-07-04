/*!
 * @file        theme.js
 * @project     KishanPujari-Portfolio
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Theme management module responsible for handling
 *              application theme switching and persisting the user's
 *              preferred color scheme.
 */

export function initThemeSystem() {
    const themeToggle = document.getElementById('theme-toggle');
    
    /* Apply theme and store it */
    const selectTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    };

    /* Register theme toggle interaction. */
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            selectTheme(current === 'dark' ? 'light' : 'dark');
        });
    }
}