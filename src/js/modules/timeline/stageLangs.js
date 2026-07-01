/*!
 * @file        stageLangs.js
 * @project     KishanPujari-Portfolio
 * @version     1.0.0
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Manages the appearance, transitions, and interactive
 *              skill highlighting for the technology section.
 */

/* Cached DOM references */
const langsSection = document.getElementById('sec-langs');
const favoriteStackPills = document.querySelectorAll('.fav-stack');

/* Render the technology timeline stage */
export function renderLangs(globalProgress) {
    if (globalProgress >= 0.5 && globalProgress <= 0.85) {
        langsSection.style.opacity = 1;
        langsSection.style.pointerEvents = "auto";

        /* Entrance animation */
        if (globalProgress < 0.62) {
            let entryProgress = (globalProgress - 0.5) / (0.62 - 0.5);

            langsSection.style.transform =
                `translate3d(${(1 - entryProgress) * 100}vw, 0, 0)`;

            langsSection.style.filter = "none";
        }

        /* Skill highlight sequence */
        else if (globalProgress <= 0.78) {
            langsSection.style.transform = `translate3d(0, 0, 0)`;
            langsSection.style.opacity = 1;
            langsSection.style.filter = "none";

            let highlightProgress =
                (globalProgress - 0.62) / (0.78 - 0.62);

            let targetActiveIndex =
                Math.floor(highlightProgress * favoriteStackPills.length);

            favoriteStackPills.forEach((pill, idx) => {
                pill.classList.toggle(
                    'pill-highlighted',
                    idx === targetActiveIndex
                );
            });
        }

        /* Exit animation */
        else {
            let exitProgress = (globalProgress - 0.78) / (0.85 - 0.78);

            langsSection.style.transform = `translate3d(0, 0, 0)`;
            langsSection.style.opacity = 1 - exitProgress;
            langsSection.style.filter = `blur(${exitProgress * 20}px)`;

            favoriteStackPills.forEach(pill =>
                pill.classList.remove('pill-highlighted')
            );
        }
    } else {
        langsSection.style.opacity = 0;
        langsSection.style.pointerEvents = "none";
    }
}
