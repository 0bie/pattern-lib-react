function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Input from './index';
import { getShape, addClassNames } from '../utils';
/**
 * Group of inputs
 * @param {array} inputArr - Collection of inputs
 * @param {string} display - Group display type (inline|block)
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} rounded - The input group shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function InputGroup(_ref) {
  var display = _ref.display,
      inputArr = _ref.inputArr,
      classNames = _ref.classNames,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, ["display", "inputArr", "classNames", "rounded"]);

  return React.createElement("div", _extends({
    className: "input-group--".concat(display, " ").concat(getShape(rounded, 'input-group'), " ").concat(addClassNames(classNames))
  }, props), inputArr.map(function (input) {
    return React.createElement(Input, _extends({
      key: input.id
    }, input));
  }));
}
InputGroup.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.oneOf(['inline', 'block']),
  inputArr: PropTypes.arrayOf(PropTypes.shape({
    rounded: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.oneOf(['success', 'error', 'diabled']),
    type: PropTypes.oneOf(['text', 'number', 'textField']),
    classNames: PropTypes.arrayOf(PropTypes.string),
    inputClassNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  }))
};