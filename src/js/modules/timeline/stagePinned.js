/*!
 * @file        stagePinned.js
 * @project     KishanPujari-Portfolio
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Manages the pinned projects section, including horizontal
 *              entrance/exit transitions and internal scroll synchronization.
 */

import { lerp } from '../../utils/math.js';

/* Cached DOM references */
const secPinned = document.getElementById('sec-pinned');
const pinnedScrollBox = document.getElementById('pinned-scroll-box');

/* Render pinned projects stage */
export function renderPinned(globalProgress) {
    if (globalProgress >= 0.12 && globalProgress <= 0.6) {
        secPinned.style.opacity = 1;
        secPinned.style.pointerEvents = "auto";

        /* Entrance animation */
        if (globalProgress < 0.3) {
            let entryProgress =
                (globalProgress - 0.12) / (0.3 - 0.12);

            let translateX = lerp(100, 0, entryProgress);

            secPinned.style.transform =
                `translate3d(${translateX}vw, 0, 0)`;

            pinnedScrollBox.scrollTop = 0;
        }

        /* Internal scroll phase */
        else if (globalProgress <= 0.5) {
            secPinned.style.transform = `translate3d(0, 0, 0)`;

            let scrollProgress =
                (globalProgress - 0.3) / (0.5 - 0.3);

            let maxScroll =
                pinnedScrollBox.scrollHeight - pinnedScrollBox.clientHeight;

            pinnedScrollBox.scrollTop = scrollProgress * maxScroll;
        }

        /* Exit animation */
        else {
            let exitProgress =
                (globalProgress - 0.5) / (0.6 - 0.5);

            let translateX = lerp(0, -100, exitProgress);

            secPinned.style.transform =
                `translate3d(${translateX}vw, 0, 0)`;

            let maxScroll =
                pinnedScrollBox.scrollHeight - pinnedScrollBox.clientHeight;

            pinnedScrollBox.scrollTop = maxScroll;
        }
    } else {
        secPinned.style.opacity = 0;
        secPinned.style.pointerEvents = "none";
    }
}
