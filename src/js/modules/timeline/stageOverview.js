/*!
 * @file        stageOverview.js
 * @project     KishanPujari-Portfolio
 * @version     1.0.0
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Controls the intro/overview section animation and
 *              navigation logo reveal during initial scroll phase.
 */

import { lerp } from '../../utils/math.js';

/* Cached DOM references */
const navLogo = document.getElementById('nav-logo');
const secOverview = document.getElementById('sec-overview');

/* Render overview stage */
export function renderOverview(globalProgress) {
    if (globalProgress <= 0.2) {
        let progress = globalProgress / 0.2;
        let blurProgress = progress * 25;
        let opacityProgress = 1 - progress;

        secOverview.style.opacity = opacityProgress;
        secOverview.style.filter = `blur(${blurProgress}px)`;
        secOverview.style.transform = `translate3d(0, 0, 0)`;
        secOverview.style.pointerEvents =
            opacityProgress < 0.1 ? "none" : "auto";

        navLogo.style.opacity = progress;
        navLogo.style.transform =
            `scale(${lerp(0.85, 1, progress)})`;
    } else {
        secOverview.style.opacity = 0;
        secOverview.style.filter = `blur(25px)`;
        secOverview.style.pointerEvents = "none";

        navLogo.style.opacity = 1;
        navLogo.style.transform = `scale(1)`;
    }
}
