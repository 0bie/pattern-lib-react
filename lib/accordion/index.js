function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from '../utils';
/**
 * Accordion
 * @param {string} id - The accordion id
 * @param {boolean} rounded - The accordion shape
 * @param {array} classNames - Additional classNames (Optional)
 * @param {array} children - The accordion sections
 * @returns {object} React element tree describing the component
 */

export default function Accordion(_ref) {
  var id = _ref.id,
      rounded = _ref.rounded,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "rounded", "children", "classNames"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    id: id
  }, props, {
    className: "accordion ".concat(getShape(rounded), " ").concat(addClassNames(classNames))
  }), children);
}
Accordion.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.array,
  children: PropTypes.arrayOf(PropTypes.element)
};