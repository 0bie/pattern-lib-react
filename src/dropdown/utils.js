/**
 * Check the dropdown state
 * @param {boolean} isActive - True if toggle initiatied
 * @returns {string} The active className
 */

export function getActiveClassName(isActive) {
  let activeClassName = '';
  if (isActive) activeClassName = 'dropdown--active';
  return activeClassName;
}

/**
 * Position dropdown list
 * based on the available space in the viewport
 * Reference: https://goo.gl/hX93fa
 * @example: https://jsfiddle.net/dzigSawww/spckajwz/
 *
 * @param {string} wrap - The dropdown container
 * @param {Object} positionClassName- The dropdown list position `class` names (top|right|bottom|left)
 * @returns null
 */

export function dropdownPositionHandler(container, positionClassName) {

  const dropdownWrap = container;
  const rootElement = document.documentElement;

  /**
   * `documentElement` & `dropdownWrap` dimensions
   */

  const dropdownCoords = dropdownWrap.getBoundingClientRect();
  const rootElementCoords = rootElement.getBoundingClientRect();
  const dropdownWidth = (dropdownCoords.width || dropdownCoords.right - dropdownCoords.left);
  const dropdownHeight = (dropdownCoords.height || dropdownCoords.bottom - dropdownCoords.top);
  const rootElementWidth = (rootElementCoords.width || rootElementCoords.right - rootElementCoords.left);


  if (!positionClassName) {
    throw new Error('dropdownPositionHandler method requires `positionClassName` as an object');
  }
  const {top, right, left, bottom} = positionClassName;
  const positionTop = top;
  const positionRight = right;
  const positionLeft = left;
  const positionBottom = bottom;
  const spacer = 55;
  const classNames = [...dropdownWrap.classList];

  /**
   * Check if `dropdownWrap` right offset is beyond the edge of the viewport
   */

  if (dropdownCoords.right > rootElementCoords.right) {
    if (classNames.includes(positionLeft)) {
      dropdownWrap.classList.remove(positionLeft);
    }
    dropdownWrap.classList.add(positionRight);
  }

  /**
   * Calculate the distance between `dropdownWrap` and the edge of the viewport
   * then check the amount of space available on the right of `dropdownWrap`
   */

  if ((rootElementWidth - dropdownCoords.right) > dropdownWidth) {
    if (classNames.includes(positionRight)) {
      dropdownWrap.classList.remove(positionRight);
    }
    dropdownWrap.classList.add(positionLeft);
  } else {
    dropdownWrap.classList.remove(positionLeft);
  }

  /**
   * Check if `dropdownWrap` bottom offset is beyond the edge of the viewport
   */

  if (dropdownCoords.bottom > rootElementCoords.bottom) {
    if (classNames.includes(positionTop)) {
      dropdownWrap.classList.remove(positionTop);
    }
    dropdownWrap.classList.add(positionBottom);
  }

  /**
   * Calculate the distance between `dropdownWrap` and the bottom edge of the viewport
   * then check the amount of space available below `dropdownWrap`
   */

  if ((rootElementCoords.bottom - dropdownCoords.bottom) > (dropdownHeight + spacer)) {
    if (classNames.includes(positionBottom)) {
      dropdownWrap.classList.remove(positionBottom);
    }
    dropdownWrap.classList.add(positionTop);
  }

}
