function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { getShape, addClassNames } from '../utils';
import { getNoticeState } from './utils';
/**
 * Render a notice message
 * @param {string} message - The notice message
 * @param {string} state - The notice state (success|error|warn)
 * @param {object} icon - Icon properties (Optional)
 * @param {string} iconPosition - The icon position (Optional)
 * @param {boolean} rounded - The notice shape
 * @param {array} classNames Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Notice(_ref) {
  var state = _ref.state,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      message = _ref.message,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["state", "icon", "iconPosition", "message", "rounded", "classNames"]);

  return React.createElement("div", _extends({
    className: "notice ".concat(getNoticeState(state), " ").concat(getShape(rounded, 'notice'), " ").concat(addClassNames(classNames))
  }, props), icon && iconPosition === 'left' ? React.createElement(Icon, icon) : null, React.createElement("p", null, message && message), icon && iconPosition === 'right' ? React.createElement(Icon, icon) : null);
}
Notice.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  message: PropTypes.any,
  className: PropTypes.arrayOf(PropTypes.string),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  state: PropTypes.oneOf(['success', 'error', 'warn'])
};