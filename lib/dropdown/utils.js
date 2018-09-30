function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Check the dropdown state
 * @param {boolean} isActive - True if toggle initiatied
 * @returns {string} The active className
 */
export function getActiveClassName(isActive) {
  var activeClassName = '';
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
  var dropdownWrap = container;
  var rootElement = document.documentElement;
  /**
   * `documentElement` & `dropdownWrap` dimensions
   */

  var dropdownCoords = dropdownWrap.getBoundingClientRect();
  var rootElementCoords = rootElement.getBoundingClientRect();
  var dropdownWidth = dropdownCoords.width || dropdownCoords.right - dropdownCoords.left;
  var dropdownHeight = dropdownCoords.height || dropdownCoords.bottom - dropdownCoords.top;
  var rootElementWidth = rootElementCoords.width || rootElementCoords.right - rootElementCoords.left;

  if (!positionClassName) {
    throw new Error('dropdownPositionHandler method requires `positionClassName` as an object');
  }

  var top = positionClassName.top,
      right = positionClassName.right,
      left = positionClassName.left,
      bottom = positionClassName.bottom;
  var positionTop = top;
  var positionRight = right;
  var positionLeft = left;
  var positionBottom = bottom;
  var spacer = 55;

  var classNames = _toConsumableArray(dropdownWrap.classList);
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


  if (rootElementWidth - dropdownCoords.right > dropdownWidth) {
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


  if (rootElementCoords.bottom - dropdownCoords.bottom > dropdownHeight + spacer) {
    if (classNames.includes(positionBottom)) {
      dropdownWrap.classList.remove(positionBottom);
    }

    dropdownWrap.classList.add(positionTop);
  }
}