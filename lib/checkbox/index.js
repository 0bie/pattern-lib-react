function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from '../utils';
/**
 * Checkbox
 * @param {string} id - The checkbox `id`
 * @param {size} size - The checkbox size (sm|md|lg)
 * @param {string} label - The checkbox label (Optional)
 * @param {array} classNames - Additional classnames (Optional)
 * @param {boolean} rounded - The checkbox shape (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Checkbox(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "size", "label", "rounded", "classNames"]);

  return /*#__PURE__*/React.createElement("label", _extends({
    id: id,
    className: "checkbox-container ".concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("input", {
    id: id,
    className: "checkbox checkbox--".concat(size, " ").concat(getShape(rounded, 'checkbox'), " hidden"),
    type: "checkbox",
    name: id
  }), /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("span", {
    className: "checkbox-label"
  }, label)));
}
Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};