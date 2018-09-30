/**
 * Check active state
 * @param {boolean} isActive - True if item is visible
 * @returns {string} The active className
 */
export function getActiveClass(isActive) {
  var className = '';
  if (isActive) className = 'carousel-item--active';
  return className;
}