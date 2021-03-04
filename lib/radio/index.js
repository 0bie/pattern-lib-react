function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Radio input
 * @param {string} id - The input `id`
 * @param {string} size - The input size (sm|md|lg)
 * @param {string} label - The input label
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Radio(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "size", "label", "classNames"]);

  return /*#__PURE__*/React.createElement("label", _extends({
    id: id,
    className: "radio-container ".concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("input", {
    className: "radio radio--".concat(size, " hidden"),
    type: "radio",
    name: id
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "radio-label"
  }, label)));
}
Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};