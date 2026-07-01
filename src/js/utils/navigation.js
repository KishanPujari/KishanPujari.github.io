/*!
 * @file        navigation.js
 * @project     KishanPujari-Portfolio
 * @version     1.0.0
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Provides programmatic navigation helpers for smooth
 *              timeline scrolling and global navigation bindings.
 */

/* Smoothly navigate to a timeline section */
export const seekToSection = (targetSectionIndex) => {
    const maxScrollableDistance =
        document.documentElement.scrollHeight - window.innerHeight;

    /* Timeline section anchor points */
    const sectionAnchors = [0.0, 0.38, 0.68, 0.95];

    if (maxScrollableDistance <= 0) return;

    window.scrollTo({
        top: sectionAnchors[targetSectionIndex] * maxScrollableDistance,
        behavior: 'smooth'
    });
};

/* Expose navigation helpers to the global scope */
export const initGlobalNavigation = () => {
    window.seekToSection = seekToSection;
};
