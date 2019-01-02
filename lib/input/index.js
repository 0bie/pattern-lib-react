function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { getShape, addClassNames } from '../utils';
import { getInputState } from './utils';
/**
 * Render an input element
 * @param {string} id - The input id
 * @param {string} inputId - The `<input>` element `id
 * @param {string} type - The input type
 * @param {size} size - The input size (xs|sm|md|lg|xl|xxl)
 * @param {string} placeholder - The input placeholder
 * @param {object} icon - Icon properties (Optional)
 * @param {string} state - The input state (Optional)
 * @param {boolean} rounded - The input shape (Optional)
 * @param {array} inputClassNames - Additional input classNames (Optional)
 * @param {array} classNames - Additional input field classNames (Optional)
 * @param {string} pattern - A RegEx pattern (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      icon = _ref.icon,
      state = _ref.state,
      rounded = _ref.rounded,
      pattern = _ref.pattern,
      inputId = _ref.inputId,
      placeholder = _ref.placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      classNames = _ref.classNames,
      inputClassNames = _ref.inputClassNames,
      props = _objectWithoutProperties(_ref, ["id", "size", "icon", "state", "rounded", "pattern", "inputId", "placeholder", "type", "classNames", "inputClassNames"]);

  return React.createElement("span", {
    id: id,
    className: "input-field ".concat(getInputState(state), " ").concat(addClassNames(classNames))
  }, type !== 'textField' && React.createElement("input", _extends({
    type: type,
    id: inputId,
    placeholder: placeholder,
    pattern: pattern,
    "data-hint": pattern && "".concat(id, "-hint"),
    className: "input input--".concat(size, " ").concat(getShape(rounded, 'input'), " ").concat(addClassNames(inputClassNames))
  }, props)), type === 'textField' && React.createElement("textarea", _extends({
    id: inputId,
    placeholder: placeholder,
    pattern: pattern,
    "data-hint": pattern && "".concat(id, "-hint"),
    className: "input input--".concat(size, " ").concat(getShape(rounded), " ").concat(addClassNames(inputClassNames))
  }, props)), icon && React.createElement(Icon, icon), state === 'error' && React.createElement(Icon, {
    size: "sm",
    id: "warning",
    classNames: ['icon--error']
  }), state === 'success' && React.createElement(Icon, {
    size: "sm",
    id: "check",
    classNames: ['icon--success']
  }));
}
Input.propTypes = {
  id: PropTypes.string,
  inputId: PropTypes.string,
  pattern: PropTypes.string,
  rounded: PropTypes.bool,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['success', 'error', 'diabled']),
  type: PropTypes.oneOf(['text', 'number', 'textField']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  inputClassNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};