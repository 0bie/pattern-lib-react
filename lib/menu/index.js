function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './item';
import { getShape, addClassNames } from '../utils';
/**
 * Menu
 * @param {array} items - The menu items
 * @param {string} title - The menu title (Optional)
 * @param {array} classNames - Additional classNames
 * @param {boolean} rounded - The menu shape (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Menu(_ref) {
  var title = _ref.title,
      items = _ref.items,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["title", "items", "rounded", "classNames"]);

  return React.createElement("nav", _extends({
    className: addClassNames(classNames)
  }, props), React.createElement("ul", {
    className: "menu ".concat(getShape(rounded))
  }, title && React.createElement("li", {
    className: "menu-header"
  }, React.createElement("span", {
    className: "menu-title pl--xs pr--xs"
  }, title)), items.map(function (_ref2) {
    var id = _ref2.id,
        content = _ref2.content,
        icon = _ref2.icon,
        classNames = _ref2.classNames;
    return React.createElement(MenuItem, {
      key: id,
      icon: icon,
      content: content,
      classNames: classNames
    });
  })));
}
Menu.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    icon: PropTypes.shape({
      id: PropTypes.string,
      classNames: PropTypes.arrayOf(PropTypes.string),
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  }))
};