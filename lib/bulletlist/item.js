function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Bulletlist item
 * @param {any} content - The item content
 * @param {array} classNames - Additional Classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function BulletItem(_ref) {
  var content = _ref.content,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["content", "classNames"]);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: "bulletlist-item ".concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "bulletlist-text"
  }, content));
}
BulletItem.propTypes = {
  content: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};