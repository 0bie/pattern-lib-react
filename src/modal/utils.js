/**
 * Check the active state
 * @param {string} state - One of [fixed]
 * @returns {string} The active className
 */

export function getActiveClassName(state) {
  let stateClassName = '';
  if (state) stateClassName = `modal--${state}`;
  return stateClassName;
}

/**
 * Prevent scroll/wheel event from propagating to the document element
 * @example https://jsfiddle.net/dzigSawww/54rp47vg/
 * @param {obj} evt - The `Event` object
 * @returns null
 */

export function preventOuterScroll(evt) {
  const isMacWebkit = (navigator.userAgent.indexOf('Macintosh') !== -1) || (navigator.userAgent.indexOf('WebKit') !== -1);
  let deltaY = evt.deltaY * -30 || 0;

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
