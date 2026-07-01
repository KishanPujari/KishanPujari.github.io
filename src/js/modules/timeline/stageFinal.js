/*!
 * @file        stageFinal.js
 * @project     KishanPujari-Portfolio
 * @version     1.0.0
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Controls the visibility and entrance animation of the
 *              final contact section within the scroll timeline.
 */

import { lerp } from '../../utils/math.js';

/* Cached DOM reference */
const finalSection = document.getElementById('sec-final');

/* Render the final timeline stage */
export function renderFinal(globalProgress) {
    if (globalProgress >= 0.8) {
        finalSection.style.pointerEvents = "auto";

        let entryProgress = (globalProgress - 0.8) / (1.0 - 0.8);

        finalSection.style.opacity = entryProgress;
        finalSection.style.transform =
            `translate3d(0, ${lerp(40, 0, entryProgress)}px, 0)`;
    } else {
        finalSection.style.opacity = 0;
        finalSection.style.pointerEvents = "none";
    }
}