/**
 * Check active state
 * @param {boolean} isActive - True if sidebar is visible
 * @returns {string} The active className
 */
export function getActiveClassName(isActive) {
  var activeClassName = '';
  if (isActive) activeClassName = 'sidebar--active';
  return activeClassName;
}