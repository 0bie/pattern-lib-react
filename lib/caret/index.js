function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Caret
 * @param {string} direction - The caret direction (top|bottom|left|right)
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Caret(_ref) {
  var direction = _ref.direction,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["direction", "classNames"]);

  return React.createElement("span", _extends({
    className: "caret caret--".concat(direction, " ").concat(addClassNames(classNames))
  }, props));
}
Caret.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};