/**
 * Check active state
 * @param {boolean} isActive - True if component is visible
 * @returns {string} The active className
 */
export function getActiveClass(isActive) {
  var className = '';
  if (isActive) className = 'tab-item--active';
  return className;
}