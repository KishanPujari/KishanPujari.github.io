/*!
 * @file        main.js
 * @project     KishanPujari-Portfolio
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Application entry point responsible for initializing
 *              client-side modules after the document is ready.
 */

import { initTimelineEngine } from './modules/timelineEngine.js';
import { initGlobalNavigation } from './utils/navigation.js';
import { initCustomCursor } from './modules/cursor.js';
import { initThemeSystem } from './modules/theme.js';

/* Bootstrap the application */
document.addEventListener('DOMContentLoaded', () => {
    initTimelineEngine();
    initGlobalNavigation();
    initCustomCursor();
    initThemeSystem();
});