/**
 * Prevent scroll/wheel event from propagating to the document element
 * @example https://jsfiddle.net/dzigSawww/54rp47vg/
 * @param {object} evt - The `Event` object
 * @returns null
 */
export default function preventOuterScroll(evt) {
  var isMacWebkit = navigator.userAgent.indexOf('Macintosh') !== -1 || navigator.userAgent.indexOf('WebKit') !== -1;
  var deltaY = evt.deltaY * -30 || 0;
  /**
   * On Mac & WebKit browsers mousewheels seem to be velocity-sensitive and
   * the delta values are often larger multiples of 120 (the default)
   */

  if (isMacWebkit) {
    deltaY /= 30;
  }

  evt.currentTarget.scrollTop -= deltaY;
  /**
   * prevent from scrolling parent elements
   */

  evt.preventDefault();
  evt.stopPropagation();
  return false;
}