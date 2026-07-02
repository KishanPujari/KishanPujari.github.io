/*!
 * @file        math.js
 * @project     KishanPujari-Portfolio
 * @author      Kishan Pujari <kishanpujari.dev@gmail.com>
 * @license     MIT
 * @description Collection of lightweight mathematical utilities shared
 *              across animation and rendering modules.
 */

/* Linear interpolation */
export const lerp = (start, end, multiplier) =>
    start + (end - start) * multiplier;