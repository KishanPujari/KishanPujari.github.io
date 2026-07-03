/*!
 * @file        cursor.js
 * @project     KishanPujari-Portfolio
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Initializes the custom cursor by synchronizing cursor
 *              movement, applying smooth trailing animation, and
 *              handling interactive hover states.
 */

export function initCustomCursor() {
    /* Cache required cursor elements */
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    /* Track pointer and animated cursor positions */
    let mX = 0, mY = 0, tX = 0, tY = 0;

    /* Abort initialization if cursor elements are unavailable */
    if (!cursor || !cursorDot) return;

    /* Update pointer position on mouse movement */
    document.addEventListener('mousemove', (e) => {
        mX = e.clientX;
        mY = e.clientY;
        cursorDot.style.transform = `translate3d(${mX}px, ${mY}px, 0)`;
    });

    /* Smoothly interpolate the trailing cursor position */
    const updateCursorFrame = () => {
        tX += (mX - tX) * 0.15;
        tY += (mY - tY) * 0.15;

        cursor.style.transform = `translate3d(${tX - cursor.offsetWidth / 2}px, ${tY - cursor.offsetHeight / 2}px, 0)`;

        requestAnimationFrame(updateCursorFrame);
    };

    requestAnimationFrame(updateCursorFrame);

    /* Toggle cursor hover state for interactive elements */
    document.querySelectorAll('a, button, .bento-item, .skill-pill').forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
}