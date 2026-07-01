/*!
 * @file        timelineEngine.js
 * @project     KishanPujari-Portfolio
 * @version     1.0.0
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Coordinates scroll-driven timeline rendering by
 *              distributing normalized scroll progress to each stage.
 */

import { renderOverview } from './timeline/stageOverview.js';
import { renderPinned } from './timeline/stagePinned.js';
import { renderLangs } from './timeline/stageLangs.js';
import { renderFinal } from './timeline/stageFinal.js';

export function initTimelineEngine() {

    /* Render all timeline stages */
    const renderTimeline = (globalProgress) => {
        if (window.innerWidth <= 900) return;

        renderOverview(globalProgress);
        renderPinned(globalProgress);
        renderLangs(globalProgress);
        renderFinal(globalProgress);
    };

    /* Normalize scroll progress */
    const handleScrollEvent = () => {
        const currentScroll = window.scrollY;
        const maxScrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScrollableDistance <= 0) return;

        renderTimeline(currentScroll / maxScrollableDistance);
    };

    /* Register scroll listener */
    window.addEventListener('scroll', handleScrollEvent, { passive: true });

    /* Synchronize initial render state */
    handleScrollEvent();
}