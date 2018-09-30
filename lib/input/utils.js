/**
 * Check for input state
 * @param {string} state - One of [success|error]
 * @returns {string} The state className
 */
export function getInputState(state) {
  var stateClassName = '';
  if (state) stateClassName = "input-field--".concat(state);
  return stateClassName;
}