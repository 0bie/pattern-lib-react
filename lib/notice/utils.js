/**
 * Check notice state
 * @param {string} state - One of (success|error|warn)
 * @returns {string} The state className
 */
export function getNoticeState(state) {
  var stateClassName = '';
  if (state) stateClassName = "notice--".concat(state);
  return stateClassName;
}