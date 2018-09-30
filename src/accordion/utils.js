/**
 * Check active state
 * @param {boolean} isActive - True if toggle initiated
 * @returns {string} The active className
 */

export function getActiveClass(isActive) {
  let className = '';
  if (isActive) className = 'accordion-section--active';
  return className;
}
