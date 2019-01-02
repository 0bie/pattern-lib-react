function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from './index';
import { getShape, addClassNames } from '../utils';
/**
 * Button Group
 * @param {array} buttonArr - Collection of buttons
 * @param {string} display - Group display type (inline|block)
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} rounded - The button group shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function ButtonGroup(_ref) {
  var display = _ref.display,
      buttonArr = _ref.buttonArr,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["display", "buttonArr", "rounded", "classNames"]);

  return React.createElement("div", _extends({
    className: "btngroup--".concat(display, " ").concat(getShape(rounded, 'btngroup'), " ").concat(addClassNames(classNames))
  }, props), buttonArr.map(function (button) {
    return React.createElement(Button, _extends({}, button, {
      key: button.id
    }));
  }));
}
ButtonGroup.propTypes = {
  rounded: PropTypes.bool,
  display: PropTypes.oneOf(['inline', 'block']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  buttonArr: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    loading: PropTypes.bool,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }))
};