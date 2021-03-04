function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Toggle
 * @param {string} id - The toggle `id`
 * @param {string} size - The toggle size (sm|md|lg)
 * @param {boolean} checked - True if toggle is checked
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Toggle(_ref) {
  var id = _ref.id,
      size = _ref.size,
      checked = _ref.checked,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "size", "checked", "classNames"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "toggle-container ".concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("input", {
    id: id,
    className: "toggle toggle--".concat(size),
    name: id,
    type: "checkbox",
    defaultChecked: checked
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }));
}
Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};