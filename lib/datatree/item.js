function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { renderSubItems } from './utils';
/**
 * Data tree item
 * @param {string} title - The item title
 * @param {string|number|array} item - A sub-item
 * @returns {object} React element tree describing the component
 */

export default function DataTreeItem(_ref) {
  var title = _ref.title,
      item = _ref.item,
      props = _objectWithoutProperties(_ref, ["title", "item"]);

  return React.createElement("li", _extends({
    className: "datatree-item"
  }, props), React.createElement("span", {
    className: "datatree-title"
  }, title), item && React.createElement("ul", {
    className: "datatree-sublist"
  }, renderSubItems(item)));
}
DataTreeItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
};