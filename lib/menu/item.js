function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { addClassNames } from '../utils';
/**
 * Menu item
 * @param {string} content - The item content
 * @param {object} icon - Icon properties (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function MenuItem(_ref) {
  var content = _ref.content,
      icon = _ref.icon,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["content", "icon", "classNames"]);

  return React.createElement("li", _extends({
    className: "menu-item ".concat(addClassNames(classNames))
  }, props), icon && React.createElement(Icon, icon), content);
}
MenuItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};